<?php

namespace App\Core\Adapters;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

/**
 * Adapter class to make the Metronic core lib compatible with the Laravel functions
 *
 * Class Theme
 *
 * @package App\Core\Adapters
 */
class Theme extends \App\Core\Theme
{
    public function __construct()
    {
    }

    /**
     * Set demo to initialize
     *
     * @param  string  $demo
     */
    public static function setDemo($demo = 'demo1')
    {
        Theme::$demo = $demo;
    }

    /**
     * Print HTML classes in the HTML class attribute
     *
     * @param $scope
     * @param  bool  $full
     *
     * @return false|string
     */
    public static function printHtmlClasses($scope, $full = true)
    {
        ob_start();

        // Call the function from core Theme
        \App\Core\Theme::printHtmlClasses($scope, $full);

        return ob_get_clean();
    }

    /**
     * Print the SVG icon content as HTML
     * Use {!! getSvgIcon !!} in blade template file
     *
     * @param $path
     * @param  string  $class
     * @param  string  $svgClass
     *
     * @return mixed
     */
    public static function getSvgIcon($path, $class = '', $svgClass = '')
    {
        // Call the function from core Theme
        return get_svg_icon($path, $class, $svgClass);
    }

    /**
     * Get the route or URL
     *
     * @param $path
     * @param  string  $demo
     *
     * @return string
     */
    public static function getPageUrl($path, $demo = '', $mode = null)
    {
        $params = [];
        if (isset($_REQUEST['rtl']) && $_REQUEST['rtl']) {
            $params['rtl'] = 1;
        }
        if (isset($_REQUEST['demo']) && $_REQUEST['demo']) {
            $params['demo'] = $_REQUEST['demo'];
        }

        if ($mode !== null) {
            if ($mode) {
                $params['mode'] = $mode;
            }
        } elseif (isset($_REQUEST['mode']) && $_REQUEST['mode']) {
            $params['mode'] = $_REQUEST['mode'];
        }

        if (!empty($demo)) {
            $params['demo'] = $demo;
        }

        $a = '';
        if (count($params) && $path !== '#') {
            $a = '?'.http_build_query($params);
        }

        // check if the route exist in the laravel
        $name = str_replace('/', '.', $path);
        if (Route::has($name)) {
            return route($name).$a;
        }

        // otherwise return as url
        return url($path).$a;
    }

    /**
     * Print HTML attributes
     *
     * @param $scope
     *
     * @return false|string
     */
    public static function printHtmlAttributes($scope)
    {
        ob_start();

        // Call the function from core Theme
        \App\Core\Theme::printHtmlAttributes($scope);

        return ob_get_clean();
    }

    /**
     * Print CSS variables
     *
     * @param $scope
     *
     * @return false|string
     */
    public static function printCssVariables($scope)
    {
        ob_start();

        // Call the function from core Theme
        \App\Core\Theme::printCssVariables($scope);

        return ob_get_clean();
    }

    /**
     * This function is wrapper function of Laravel view()
     * All view files under "layout" has a demo, this helps to append the demo name into the path
     *
     * @param $path
     * @param  array  $params
     *
     * @return View
     */
    public static function getView($path, $params = array())
    {
        // Check if the layout file exist
        if (view()->exists($path)) {
            return view($path, $params);
        }

        // Append demo folder for layout view
        if (Str::startsWith($path, 'layout')) {
            $path = str_replace('layout', 'layout/'.self::$demo, $path);
        }

        $view = view($path, $params);

        // Special fix to print _mega-menu content for Core/Theme.php
        if (strpos($path, '_mega-menu') !== false) {
            echo $view;
        }

        return $view;
    }

    /**
     * Print fonts in the HTML head
     *
     * @param  string  $value
     */
    public static function includeFonts($value = '')
    {
        if (self::hasOption('assets', 'fonts/google')) {
            $fonts = self::getOption('assets', 'fonts/google');

            echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family='.implode('|', $fonts).'"/>';
        }
    }

    /**
     * Check if the option has a value
     *
     * @param $scope
     * @param  false  $path
     *
     * @return bool
     */
    public static function hasOption($scope, $path = false)
    {
        return (bool) self::getOption($scope, $path);
    }

    /**
     * Get the option's value from config
     *
     * @param $scope
     * @param  false  $path
     * @param  null  $default
     *
     * @return mixed|string
     */
    public static function getOption($scope, $path = false, $default = null)
    {
        $demo = self::getDemo() ?? 'demo1';

        // Map the config path
        if (array_key_exists($scope, config($demo.'.general', []))) {
            $scope = 'general.'.$scope;
        }

        if (in_array($scope, ['page', 'pages'])) {
            $scope    = 'pages';
            $segments = request()->segments();
            if (!empty($segments)) {
                $scope .= '.'.implode('.', $segments);
            }
        }

        // Get current page path
        $deepPath = '';
        if (!empty($path)) {
            $deepPath = '.'.str_replace('/', '.', $path);
        }

        // Demo config
        $demoConfig = config($demo.'.'.$scope.$deepPath, $default);

        // check if it is a callback
        if (is_callable($demoConfig) && !is_string($demoConfig)) {
            $demoConfig = $demoConfig();
        }

        return $demoConfig;
    }

    /**
     * Get current demo
     *
     * @return string
     */
    public static function getDemo()
    {
        if (class_exists('request')) {
            return request()->input('demo', self::$demo);
        }

        return self::$demo;
    }

    /**
     * Get the product name string wrapped with the <strong> tag
     *
     * @return string
     */
    public static function getProductNameHtml()
    {
        return '<strong>'.self::getProductName().' Laravel</strong>&nbsp;';
    }

    /**
     * Get plain product name text
     *
     * @return mixed|string
     */
    public static function getProductName()
    {
        return self::getOption('product', 'name');
    }

    /**
     * Get the version number string from config file
     *
     * @return mixed
     */
    public static function getVersion()
    {
        $versions = array_keys(config('changelog', []));
        if (isset($versions[0])) {
            return str_replace('v', '', $versions[0]);
        }

        return null;
    }

    /**
     * Get the current page title from config page.php
     */
    public static function getPageTitle()
    {
        return theme()->getOption('page', 'title');
    }

    /**
     * Get current route name and replace with a new route name
     *
     * @param $name
     *
     * @return string
     */
    public static function subRoute($name)
    {
        $routes = explode('.', Route::currentRouteName());
        array_pop($routes);

        $parent = implode('.', $routes);

        return $parent.'.'.$name;
    }

    public static function putProVersionTooltip($attr = array())
    {
        ob_start();

        // Call the function from core Theme
        parent::putProVersionTooltip($attr);

        return ob_get_clean();
    }

    public static function getIllustrationUrl($file, $dark = true)
    {
        if ($dark === true) {
            if (self::isDarkMode()) {
                $file = str_replace(".svg", "-dark.svg", $file);
                $file = str_replace(".png", "-dark.png", $file);
                $file = str_replace(".jpg", "-dark.jpg", $file);
            }
        }

        $folder = 'illustrations/'.self::getOption('layout', 'illustrations/set');

        return self::getMediaUrlPath().$folder.'/'.$file;
    }

    /**
     * Check dark mode
     *
     * @return mixed|string
     */
    public static function isDarkMode()
    {
        return self::getCurrentMode() === 'dark';
    }

    /**
     * Get current skin
     *
     * @return mixed|string
     */
    public static function getCurrentMode()
    {
        if (self::isDarkModeEnabled() && isset($_REQUEST['mode']) && $_REQUEST['mode']) {
            return $_REQUEST['mode'];
        }

        return 'default';
    }

    /**
     * Check if current theme has dark mode
     *
     * @return bool
     */
    public static function isDarkModeEnabled()
    {
        return (bool) self::getOption('layout', 'main/dark-mode-enabled');
    }

    /**
     * Get media path
     *
     * @return string
     */
    public static function getMediaUrlPath()
    {
        return theme()->getDemo().'/media/';
    }

    public static function getImageUrl($folder, $file, $dark = true)
    {
        if ($dark) {
            if (self::isDarkMode()) {
                $file = str_replace(".svg", "-dark.svg", $file);
                $file = str_replace(".png", "-dark.png", $file);
                $file = str_replace(".jpg", "-dark.jpg", $file);
            }
        }

        return self::getMediaUrlPath().$folder.'/'.$file;
    }

    /**
     * Rebuild config and merge with main and page config level in boot
     */
    public function initConfig()
    {
        $mainConfig   = collect(config('global'));
        $demoConfig   = config(Theme::$demo);
        $mergedConfig = $mainConfig->replaceRecursive($demoConfig);
        config([Theme::$demo => $mergedConfig->all()]);

        self::$config = $mergedConfig->all();

        // Get config by url path
        $configPath = Theme::$demo.'.pages.'.str_replace('/', '.', Theme::getPagePath());
        $pageConfig = collect(config($configPath));

        // Merge group config with child config
        $pageGroupOptions = Theme::getPageGroupOptions(config(Theme::$demo.'.pages'), Theme::getPagePath());
        if ($pageGroupOptions) {
            $overridenConfig = $pageConfig->replaceRecursive($pageGroupOptions);
            config([$configPath => $overridenConfig->all()]);
        }

        $generalConfig = collect(config(Theme::$demo.'.general'));
        // Merge general config with page level config
        config([Theme::$demo.'.general' => $generalConfig->replaceRecursive(config($configPath))->all()]);
    }

    /**
     * Get current page path
     *
     * @return mixed
     */
    public static function getPagePath()
    {
        // Override page path
        $segments = request()->segments();
        if (!empty($segments)) {
            \App\Core\Theme::$page = implode('/', $segments);
        }

        return \App\Core\Theme::getPagePath();
    }

    /**
     * Get menu array from config
     *
     * @return array
     */
    public function getMenu()
    {
        $menus = self::getOption('menu');

        $output = [];

        foreach ($menus as $menu) {
            if (is_array($menu)) {
                $this->iterateMenu($menu, $output);
            }
        }

        return $output;
    }

    /**
     * Iterate menu array for self::getMenu() function
     *
     * @param $menus
     * @param $output
     */
    private function iterateMenu($menus, &$output)
    {
        if (!is_array($menus)) {
            return;
        }

        if (isset($menus['path'])) {
            $output[] = $menus;
        }

        if (is_array($menus)) {
            foreach ($menus as $menu) {
                $this->iterateMenu($menu, $output);
            }
        }
    }

}
