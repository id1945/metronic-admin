<?php

namespace App\View\Components;

use Illuminate\View\Component;

class AuthLayout extends Component
{
    /**
     * Get the view / contents that represents the component.
     *
     * @return \Illuminate\View\View
     */
    public function render()
    {
        return view('auth.layout', ['comment' => 'Sign-in', 'wrapperClass' => 'w-lg-500px']);
    }
}
