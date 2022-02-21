<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;

class SocialiteLoginController extends Controller
{
    public function redirect($provider)
    {
        $redirect = parse_url(request()->input('redirect_uri'), PHP_URL_PATH);
        Cookie::queue('redirect_uri', $redirect, 3);

        // redirect from social site
        if (request()->input('state')) {
            return $this->callback($provider);
        }

        // request login from social site
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            // get user info from social site
            $social_info = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return redirect()->to(Cookie::get('redirect_uri'));
        }

        // check for existing user
        $existing_user = User::where('email', $social_info->getEmail())->first();

        if ($existing_user) {
            auth()->login($existing_user, true);

            return redirect()->to(Cookie::get('redirect_uri'));
        }

        $new_user = $this->createUser($social_info);

        auth()->login($new_user, true);

        return redirect()->to(Cookie::get('redirect_uri'));
    }

    function createUser(SocialiteUser $social_info)
    {
        $user = User::where('email', $social_info->email)->first();

        $name = explode(' ', $social_info->name);

        if (!$user) {
            $user = User::create([
                'first_name' => $name[0] ?? '',
                'last_name'  => $name[1] ?? '',
                'email'      => $social_info->email,
                'password'   => Hash::make($social_info->id),
            ]);

            $user_info         = new UserInfo;
            $user_info->avatar = $social_info->getAvatar();
            $user_info->user()->associate($user);
            $user_info->save();

            if ($user->markEmailAsVerified()) {
                event(new Verified($user));
            }
        }

        return $user;
    }
}
