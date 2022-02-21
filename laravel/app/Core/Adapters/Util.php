<?php

namespace App\Core\Adapters;


/**
 * Adapter class to make the Metronic core lib compatible with the Laravel functions
 *
 * Class Util
 *
 * @package App\Core\Adapters
 */
class Util extends \App\Core\Util
{
    /**
     * Print the value if the condition met
     *
     * @param $cond
     * @param $value
     * @param  string  $alt
     *
     * @return false|string
     */
    public static function putIf($cond, $value, $alt = '')
    {
        ob_start();

        // Call the function from core Util
        echo self::getIf($cond, $value, $alt);

        return ob_get_clean();
    }

    /**
     * Print the notice
     *
     * @param $text
     * @param  string  $state
     * @param  string  $icon
     */
    public static function notice($text, $state = 'danger', $icon = 'icons/duotone/Tools/Compass.svg')
    {
        $html = '';

        $html .= '<!--begin::Notice-->';
        $html .= '<div class="d-flex align-items-center rounded py-4 px-4 bg-light-'.$state.' ">';
        if ($icon) {
            $html .= '  <!--begin::Icon-->';
            $html .= '  <div class="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative ms-5 me-8">';
            $html .= '      '.Theme::getSvgIcon("icons/duotone/Layout/Layout-polygon.svg", "svg-icon-' . $state . ' position-absolute opacity-10", "w-80px h-80px");
            $html .= '	    '.Theme::getSvgIcon($icon, 'svg-icon-3x svg-icon-'.$state.' position-absolute');
            $html .= '  </div>';
            $html .= '  <!--end::Icon-->';
        }

        $html .= '  <!--begin::Description-->';
        $html .= '      <div class="text-gray-600 fw-bold fs-6 lh-lg">';
        $html .= $text;
        $html .= '      </div>';
        $html .= '  <!--end::Description-->';
        $html .= '</div>';
        $html .= '<!--end::Notice-->';

        echo $html;
    }

    public static function putHtmlAttributes($attributes)
    {
        return self::getHtmlAttributes($attributes);
    }
}
