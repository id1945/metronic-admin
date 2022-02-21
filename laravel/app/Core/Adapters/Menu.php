<?php

namespace App\Core\Adapters;

/**
 * Adapter class to make the Metronic core lib compatible with the Laravel functions
 *
 * Class Menu
 *
 * @package App\Core\Adapters
 */
class Menu extends \App\Core\Menu
{
    public function build()
    {
        ob_start();

        parent::build();

        return ob_get_clean();
    }

    /**
     * Filter menu item based on the user permission using Spatie plugin
     *
     * @param $array
     */
    public static function filterMenuPermissions(&$array)
    {
        if (!is_array($array)) {
            return;
        }

        $user = auth()->user();

        // check if the spatie plugin functions exist
        if (!method_exists($user, 'hasAnyPermission') || !method_exists($user, 'hasAnyRole')) {
            return;
        }

        foreach ($array as $key => &$value) {
            if (isset($value['permission']) && !$user->hasAnyPermission((array) $value['permission'])) {
                unset($array[$key]);
            }

            if (isset($value['role']) && !$user->hasAnyRole((array) $value['role'])) {
                unset($array[$key]);
            }

            if (is_array($value)) {
                self::filterMenuPermissions($value);
            }
        }
    }
}
