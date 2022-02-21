<?php

namespace App\Http\Requests\Account;

use Illuminate\Foundation\Http\FormRequest;

class SettingsInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'company'       => 'nullable|string|max:255',
            'phone'         => 'nullable|string|max:255',
            'website'       => 'nullable|string|max:255',
            'country'       => 'nullable|string|max:255',
            'language'      => 'nullable|string|max:255',
            'timezone'      => 'nullable|string|max:255',
            'currency'      => 'nullable|string|max:255',
            'communication' => 'nullable|array',
            'marketing'     => 'nullable|integer',
        ];
    }
}
