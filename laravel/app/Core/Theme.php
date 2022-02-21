<?php

namespace App\Core;

class Theme {
    /**
     * Class init state.
     *
     * @var boolean
    */
    private static $initialized = false;

    /**
     * Theme's actual config.
     *
     * @var array
    */
    public static $config;

    /**
     * Theme execution mode(dev, preview, export, release)
     *
     * @var string
    */
    public static $viewMode;

    /**
     * Theme name
     *
     * @var string
    */
    public static $name;

    /**
     * Demo name
     *
     * @var string
    */
    public static $demo;

    /**
     * Current page's path
     *
     * @var string
    */
    public static $page = 'index';

    public static $htmlAttributes;

    public static $htmlClasses;

    public static $cssVariables;

    // Page layout variables
    public static $pageLayoutPath;
    public static $pageLayoutView;
    public static $pageLayoutParams;

    // Free version flag

    public static $freeVersion = false;

    /**
     * Class constructor.
     *
    */
    public static function init($theme, $demo = '') {
        global $_COMMON_PATH, $_THEME_PATH;

        if (self::$initialized) {
            return;
        }

        // Set theme name
        self::$name = $theme;
        self::$demo = $demo;

        // Get the current theme config
        $theme_config = include $_THEME_PATH . '/dist/config/general.php';

        // Init theme general config so some parameters will be available within theme menu and page configs
        self::$config = $theme_config;

        // Get common config
        $common_config = include $_COMMON_PATH . '/dist/config/general.php';
        $common_config['pages'] = include $_COMMON_PATH . '/dist/config/pages.php';
        $common_config['menu'] = include $_COMMON_PATH . '/dist/config/menu.php';

        $theme_config['menu'] = include $_THEME_PATH . '/dist/config/menu.php';
        $theme_config['pages'] = include $_THEME_PATH . '/dist/config/pages.php';

        // For multi demo, merge demo1 menu config with current demo
        if (self::$demo != '' && self::$demo != 'demo1') {
            $demo1_actual_path = str_replace(self::$demo, 'demo1/', $_THEME_PATH);
            $demo1_general_config = include $demo1_actual_path . '/dist/config/general.php';
            $demo1_menu_config = include $demo1_actual_path . '/dist/config/menu.php';
            $demo1_pages_config = include $demo1_actual_path . '/dist/config/pages.php';

            $common_config['product'] = array_replace_recursive($common_config['product'], $demo1_general_config['product']);
            $common_config['meta'] = array_replace_recursive($common_config['meta'], $demo1_general_config['meta']);
            $theme_config['menu'] = array_replace_recursive($demo1_menu_config, $theme_config['menu']);
            $theme_config['pages'] = array_replace_recursive($demo1_pages_config, $theme_config['pages']);
        }

        // Merge the config arrays
        self::$config = array_replace_recursive($common_config, $theme_config);

        // Check option to enable pretty URL
        if (empty($_SERVER['QUERY_STRING']) && self::getOption('pretty-url')) {
            $_REQUEST['type'] = 'html';
        }

        // Set initialized
        self::$initialized = true;

        // Set html direction
        if (isset($_REQUEST['rtl']) && $_REQUEST['rtl']) {
            // RTL html attribute
            self::addHtmlAttribute('html', 'dir', 'rtl');
            self::addHtmlAttribute('html', 'direction', 'rtl');
            self::addHtmlAttribute('html', 'style', 'direction:rtl;');
        }
    }

    /**
     * Handle requests.
     *
     * @param string $theme The theme name.
     * @param string $demo The theme's demo name.
    */
    public static function run() {
        LayoutBuilder::init();

        if (isset($_POST['layout-builder']) || isset($_REQUEST['download'])) {
            LayoutBuilder::process();
            echo "OK";
        } else {
            self::handlePage();
        }
    }

    /**
     * Handle page requests.
     *
     * @param string $theme The theme name.
     * @param string $demo The theme's demo name.
    */
    public static function handlePage() {
        // Setup current page path
        if (isset($_REQUEST['page'])) {
            self::$page = $_REQUEST['page'];
            // Remove first and last slashes
            self::$page = trim( self::$page, "/" );
            self::$page = rtrim( self::$page, "/" );
        }

        // Lookup for an index page config
        if (Util::hasArrayValue(self::$config['pages'], self::$page . '/index') == true) {
            self::$page = self::$page . '/index';
        }

        // Lookup for page config
        if (Util::hasArrayValue(self::$config['pages'], self::$page)) {
            self::$config['page'] = Util::getArrayValue(self::$config['pages'], self::$page);
        } else {
            echo 'Page not found: ' . self::$page;
            exit;
        }

        // Override wildcard layout config
        $page_group_options = self::getPageGroupOptions(self::$config['pages'], self::$page);
        if ($page_group_options) {
            self::$config['page'] = Util::arrayMergeRecursive($page_group_options, self::$config['page']);
        }

        // Merge Layout Builder Stored Options
        if (LayoutBuilder::hasOptions()) {
            self::$config['layout'] = array_replace_recursive(self::$config['layout'], LayoutBuilder::getOptions());
        }

        // Override page layout config
        if (isset(self::$config['page']['layout'])) {
            self::$config['layout'] = array_replace_recursive(self::$config['layout'], self::$config['page']['layout']);
        }

        // Override page meta config
        if (isset(self::$config['page']['meta'])) {
            self::$config['meta'] = array_replace_recursive(self::$config['meta'], self::$config['page']['meta']);
        }

        // Recursive layout array boolean value format
        array_walk_recursive(
            self::$config['layout'],
            function (&$value) {
                if ($value === 'true') {
                    $value = true;
                } elseif ($value === 'false') {
                    $value = false;
                }
            }
        );

        // Run Layout Bootstrap
        Bootstrap::run();

        // Generate Page
        ob_start(array(Util::class, 'tidyHtml'));

        if (self::getOption("layout", "main/type") == 'none') {
            Theme::getPageView();  // empty layout
        } else {
            self::getCommonView('base'); // normal layout
        }

        ob_end_flush();
    }

    /**
     * Sets the theme's mode.
     *
     * @param string $value the theme's mode(preview, release).
    */
    public static function setViewMode($value) {
        // force preview mode on server
        if (isset($_SERVER['SERVER_NAME']) && strpos($_SERVER['SERVER_NAME'], 'keenthemes.com') !== false) {
            self::$viewMode = 'preview';
        } elseif (isset($_REQUEST['viewMode']) && $_REQUEST['viewMode'] === 'release') {
            self::$viewMode = 'release';
        } else {
            self::$viewMode = $value;
        }
    }

    public static function getViewMode() {
        return self::$viewMode;
    }

    public static function getName() {
        return self::$name;
    }

    public static function getDemo() {
        return self::$demo;
    }

    public static function isMultiDemo() {
        return !empty(self::getDemo());
    }


    public static function hasWebpack() {
        return !(isset($_REQUEST['webpack']) && !filter_var($_REQUEST['webpack'], FILTER_VALIDATE_BOOLEAN));
    }

    public static function isFreeVersion() {
        if (isset($_REQUEST['free'])) {
            return filter_var($_REQUEST['free'], FILTER_VALIDATE_BOOLEAN);
        }

        return self::$freeVersion;
    }

    public static function setFreeVersion($flag) {
        return self::$freeVersion = $flag;
    }

    public static function putProVersionTooltip($attr = array()) {
        $attr['data-bs-toggle'] = 'tooltip';
        $attr['title'] = "Available in <span class='badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1'>Pro</span> version";
        $attr['data-bs-html'] = 'true';

        if (empty($attr) || isset($attr['data-bs-placement']) === false) {
            $attr['data-bs-placement'] = 'bottom';
        }

        if (Theme::isFreeVersion() === true) {
            echo Util::putHtmlAttributes($attr);
        }
    }

    public static function getOption($scope, $path = false, $default = null) {
        if (!self::hasOption($scope, $path)) {
            return $default;
        }

        $result = array();

        if (!isset(self::$config[$scope])) {
            return null;
        }

        if ($path === false) {
            $result = self::$config[$scope];
        } else {
            $result = Util::getArrayValue(self::$config[$scope], $path);
        }

        // check if its a callback
        if (is_callable($result) && !is_string($result)) {
            $result = call_user_func($result);
        }

        return $result;
    }

    public static function setOption($scope, $path, $value) {
        if (isset(self::$config[$scope])) {
            return Util::setArrayValue(self::$config[$scope], $path, $value);
        } else {
            return false;
        }
    }

    public static function hasOption($scope, $path = false) {
        if (isset(self::$config[$scope])) {
            if ($path === false) {
                return isset(self::$config[$scope]);
            } else {
                return Util::hasArrayValue(self::$config[$scope], $path);
            }
        } else {
            return false;
        }
    }

    public static function getPageGroupOptions($pagesConfig, $pagePath) {
        $parts = explode('/', $pagePath);
        $running = count($parts) - 1;

        for ($i = 0; $i <= count($parts); $i++) {
            $path = array();

            for ($j = 0; $j <= $running; $j++) {
                $path[] = $parts[$j];
            }

            $running--;
            $path = implode('/', $path);
            $path = $path . '/*';

            if ( Util::hasArrayValue($pagesConfig, $path) ) {
                return Util::getArrayValue($pagesConfig, $path);
            }
        }

        return false;
    }

    public static function getPageOptionsByPath($path) {
        if (Util::hasArrayValue(self::$config['pages'], $path)) {
            return Util::getArrayValue(self::$config['pages'], $path);
        } else {
            return false;
        }
    }

    public static function isProPage($path) {
        $pageConfig = self::getPageOptionsByPath($path);

        if ($pageConfig && isset($pageConfig['pro']) && $pageConfig['pro'] === true) {
            return true;
        } else {
            return false;
        }
    }

    public static function isExclusivePage($path) {
        $pageConfig = self::getPageOptionsByPath($path);

        if ($pageConfig && isset($pageConfig['exclusive']) && $pageConfig['exclusive'] === true) {
            return true;
        } else {
            return false;
        }
    }

    public static function getPageKey() {
        $el = (array)explode('/', self::getPagePath());

        return end($el);
    }

    public static function getPagePath() {
        return self::$page;
    }

    public static function getPagePathPart($index) {
        $parts = explode('/', self::$page);

        return isset($parts[$index]) ? $parts[$index] : false;
    }

    public static function addHtmlAttribute($scope, $name, $value) {
        self::$htmlAttributes[$scope][$name] = $value;
    }

    public static function addHtmlAttributes($scope, $attributes) {
        foreach ($attributes as $key => $value) {
            self::$htmlAttributes[$scope][$key] = $value;
        }
    }

    public static function addHtmlClass($scope, $class) {
        self::$htmlClasses[$scope][] = $class;
    }

    public static function addCssVariable($scope, $name, $value) {
        self::$cssVariables[$scope][$name] = $value;
    }

    public static function printHtmlAttributes($scope) {
        $Attributes = array();

        if (isset(self::$htmlAttributes[$scope]) && !empty(self::$htmlAttributes[$scope])) {
            echo  Util::getHtmlAttributes(self::$htmlAttributes[$scope]);
        }

        echo '';
    }

    public static function printHtmlClasses($scope, $full = true) {
        if (isset(self::$htmlClasses[$scope]) && !empty(self::$htmlClasses[$scope])) {
            $classes = implode(' ', self::$htmlClasses[$scope]);

            if ($full) {
                echo  Util::getHtmlClass(self::$htmlClasses[$scope]);
            } else {
                echo  Util::getHtmlClass(self::$htmlClasses[$scope], false);
            }
        } else {
            echo '';
        }
    }

    public static function printCssVariables($scope) {
        $Attributes = array();

        if (isset(self::$cssVariables[$scope]) && !empty(self::$cssVariables[$scope])) {
            echo  Util::getCssVariables(self::$cssVariables[$scope]);
        }
    }

    public static function appendVersionToUrl($path) {
        // only at preview version
        if (self::$viewMode == 'preview') {
            $path .= '?v=' . self::getOption('theme/version');
        }

        return $path;
    }

    public static function getView($path, $params = array()) {
        global $_THEME_PATH, $_COMMON_PATH;

        $actual_path = $_THEME_PATH . '/dist/view/' . $path . '.php';
        $common_path = $_COMMON_PATH . '/dist/view/' . $path . '.php';

        // For multi demo, include from demo1 for other demos
        if ( file_exists($actual_path) === false ) {
            if (self::$demo != '' && self::$demo != 'demo1') {
                $actual_path = str_replace(self::$demo . '/', 'demo1/', $actual_path);
            }
        }

        if ( file_exists($actual_path) === false && file_exists($common_path) === true ) {  // try to find in common
            $actual_path = $common_path;
        }

        self::includeView($actual_path, $params);
    }

    public static function getPageView($params = array()) {
        global $_THEME_PATH, $_COMMON_PATH;

        $actual_path = $_THEME_PATH . '/dist/view/pages/' . self::$config['page']['view'] . '.php';
        $common_path = $_COMMON_PATH . '/dist/view/pages/' . self::$config['page']['view'] . '.php';

        // For multi demo, include from demo1 for other demos
        if ( file_exists($actual_path) === false ) {
            if (self::$demo != '' && self::$demo != 'demo1') {
                $actual_path = str_replace(self::$demo . '/', 'demo1/', $actual_path);
            }
        }

        if ( file_exists($actual_path) === false && file_exists($common_path) === true ) {  // try to find in common
            $actual_path = $common_path;
        }

        self::includeView($actual_path, $params);
    }

    public static function getCommonView($path, $params = array()) {
        global $_COMMON_PATH;

        $actual_path = $_COMMON_PATH . '/dist/view/' . $path . '.php';

        self::includeView($actual_path, $params);
    }

    public static function includeView($path, $params = array()) {
        if (!file_exists($path)) {
            echo '"' . $path . '" does not exist!<br>';
            return;
        }

        if (isset($_REQUEST['layout-marker'])) {
            preg_match('/dist\/view\/(.*?)\.php$/', $path, $matches);
            if ( ! empty($matches)) {
                echo '<!--layout-partial-start:'.htmlentities($matches[1]).'-->';
                include($path);
                echo '<!--layout-partial-end:'.htmlentities($matches[1]).'-->';
            }
        } else {
            include($path);
        }

        return $path;
        //echo ob_get_contents();
    }

    public static function beginPageLayout($path, $params = array()) {
        self::$pageLayoutPath = $path;
        self::$pageLayoutParams = $params;
        ob_start();
    }

    public static function getPageLayoutView() {
        echo self::$pageLayoutView;
    }

    public static function endPageLayout() {
        self::$pageLayoutView = ob_get_contents();
        ob_end_clean();

        self::getView(self::$pageLayoutPath, self::$pageLayoutParams);
    }

    public static function getAssetsPath() {
        global $_THEME_PATH;

        return $_THEME_PATH . '/dist/assets/';
    }

    public static function getMediaPath() {
        return self::getAssetsPath() . 'media/';
    }

    public static function getBaseUrlPath() {
        if ( ! isset($_SERVER['PHP_SELF'])) {
            return '';
        }

        if (!empty($_SERVER['PHP_SELF'])) {
            return dirname($_SERVER['PHP_SELF']).'/';
        }

        return '';
    }

    public static function getAssetsUrlPath() {
        return self::getBaseUrlPath() . 'assets/';
    }

    public static function getMediaUrlPath() {
        return self::getAssetsUrlPath() . 'media/';
    }

    public static function includeFonts($value='') {
        if (self::hasOption('assets', 'fonts/google')) {
            $fonts = self::getOption('assets', 'fonts/google');

            echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=' . implode('|', $fonts) . '"/>';
        }
    }

    public static function rtlCssFilename($path) {
        if (isset($_REQUEST['rtl']) && $_REQUEST['rtl'] == 1) {
            if (strpos($path, 'fullcalendar') !== false) {
            } else {
                $path = str_replace('.css', '.rtl.css', $path);
            }

            if (isset($_REQUEST['mode']) && $_REQUEST['mode'] && !in_array($_REQUEST['mode'], ['default', 'rtl'])) {
                if (self::isDarkModeEnabled() && (strpos($path, 'plugins.bundle') !== false || strpos($path, 'style.bundle') !== false)) {
                    // import dark mode css
                    $path = str_replace('.bundle', '.'.$_REQUEST['mode'].'.bundle', $path);
                }
            }

        } elseif (isset($_REQUEST['mode']) && $_REQUEST['mode'] && !in_array($_REQUEST['mode'], ['default', 'rtl'])) {
            if (self::isDarkModeEnabled() && (strpos($path, 'plugins.bundle.css') !== false || strpos($path, 'style.bundle.css') !== false)) {
                // import dark mode css
                $path = str_replace('.bundle', '.'.$_REQUEST['mode'].'.bundle', $path);
            }
        }

        return $path;
    }

    public static function isRTL() {
        if (isset($_REQUEST['rtl']) && $_REQUEST['rtl'] == 1) {
            return true;
        } else {
            return false;
        }
    }

    public static function strposa($haystack, $needle, $offset = 0) {
        if (!is_array($needle)) {
            $needle = array($needle);
        }
        foreach ($needle as $query) {
            if (strpos($haystack, $query, $offset) !== false) {
                return true;
            } // stop on first true result
        }

        return false;
    }

    /**
     * Check if current theme has dark mode
     *
     * @return bool
     */
    public static function isDarkModeEnabled() {
        return (bool) self::getOption('layout', 'main/dark-mode-enabled');
    }

    /**
     * Get current mode
     *
     * @return mixed|string
     */
    public static function getCurrentMode() {
        if (self::isDarkModeEnabled() && isset($_REQUEST['mode']) && $_REQUEST['mode']) {
            return $_REQUEST['mode'];
        }

        return 'default';
    }

    /**
     * Check dark mode
     *
     * @return mixed|string
     */
    public static function isDarkMode() {
        return self::getCurrentMode() === 'dark';
    }

    public static function getPageUrl($path, $demo = '', $mode = null) {
        // Disable pro page URL's for the free version
        if (self::isFreeVersion() === true && self::isProPage($path) === true) {
            return "#";
        }

        $baseUrl = self::getBaseUrlPath();

        $params = '';
        if (isset($_REQUEST['type']) && $_REQUEST['type'] === 'html') {
            // param keep in url
            if (isset($_REQUEST['rtl']) && $_REQUEST['rtl']) {
                $params = 'rtl/';
            }

            if ($mode !== null) {
                if ($mode) {
                    $params = $mode.'/';
                }
            } else {
                if (isset($_REQUEST['mode']) && $_REQUEST['mode']) {
                    $params = $_REQUEST['mode'].'/';
                }
            }

            if (!empty($demo)) {
                if (self::getViewMode() === 'release') {
                    // force add link to other demo in release
                    $baseUrl .= '../../'.$demo.'/dist/';
                } else {
                    // for preview
                    $baseUrl .= '../'.$demo.'/'.$params;
                }
            } else {
                $d = '';
                if (!empty(self::getDemo())) {
                    $d = '../'.self::getDemo().'/';
                }
                if (self::getViewMode() === 'release') {
                    // force add link to other demo in release
                    $baseUrl .= '../'.$d.'dist/';
                } else {
                    // for preview
                    $baseUrl .= $d.$params;
                }
            }

            $url = $baseUrl.$path.'.html';

            // skip layout builder page for generated html
            if (strpos($path, 'builder') !== false && self::getViewMode() === 'release') {

                if (!empty(self::getDemo())) {
                    $path = self::getDemo().'/'.$path;
                }

                $url = self::getOption('product', 'preview').'/'.$path.'.html';
            }
        } else {
            if (isset($_REQUEST['rtl']) && $_REQUEST['rtl']) {
                $params = '&rtl=1';
            }

            if ($mode !== null) {
                if ($mode) {
                    $params = '&mode='.$mode;
                }
            } else {
                if (isset($_REQUEST['mode']) && $_REQUEST['mode']) {
                    $params = '&mode='.$_REQUEST['mode'];
                }
            }

            if (!empty($demo)) {
                // force add link to other demo
                $baseUrl .= '../../'.$demo.'/dist/';
            }

            $url = $baseUrl.'?page='.$path.$params;
        }

        return $url;
    }

    public static function isCurrentPage($path) {
        return self::$page === $path;
    }

    public static function getSvgIcon($path, $class = '', $svgClass = '') {
        $path = str_replace('\\', '/', $path);
        $full_path = $path;
        if ( ! file_exists($path)) {
            $full_path = self::getMediaPath().$path;

            if ( ! is_string($full_path)) {
                return '';
            }

            if ( ! file_exists($full_path)) {
                return "<!--SVG file not found: $path-->\n";
            }
        }

        $svg_content = file_get_contents($full_path);

        $dom = new DOMDocument();
        $dom->loadXML($svg_content);

        // remove unwanted comments
        $xpath = new DOMXPath($dom);
        foreach ($xpath->query('//comment()') as $comment) {
            $comment->parentNode->removeChild($comment);
        }

        // add class to svg
        if ( ! empty($svgClass)) {
            foreach ($dom->getElementsByTagName('svg') as $element) {
                $element->setAttribute('class', $svgClass);
            }
        }

        // remove unwanted tags
        $title = $dom->getElementsByTagName('title');
        if ($title['length']) {
            $dom->documentElement->removeChild($title[0]);
        }
        $desc = $dom->getElementsByTagName('desc');
        if ($desc['length']) {
            $dom->documentElement->removeChild($desc[0]);
        }
        $defs = $dom->getElementsByTagName('defs');
        if ($defs['length']) {
            $dom->documentElement->removeChild($defs[0]);
        }

        // remove unwanted id attribute in g tag
        $g = $dom->getElementsByTagName('g');
        foreach ($g as $el) {
            $el->removeAttribute('id');
        }
        $mask = $dom->getElementsByTagName('mask');
        foreach ($mask as $el) {
            $el->removeAttribute('id');
        }
        $rect = $dom->getElementsByTagName('rect');
        foreach ($rect as $el) {
            $el->removeAttribute('id');
        }
        $xpath = $dom->getElementsByTagName('path');
        foreach ($xpath as $el) {
            $el->removeAttribute('id');
        }
        $circle = $dom->getElementsByTagName('circle');
        foreach ($circle as $el) {
            $el->removeAttribute('id');
        }
        $use = $dom->getElementsByTagName('use');
        foreach ($use as $el) {
            $el->removeAttribute('id');
        }
        $polygon = $dom->getElementsByTagName('polygon');
        foreach ($polygon as $el) {
            $el->removeAttribute('id');
        }
        $ellipse = $dom->getElementsByTagName('ellipse');
        foreach ($ellipse as $el) {
            $el->removeAttribute('id');
        }

        $string = $dom->saveXML($dom->documentElement);

        // remove empty lines
        $string = preg_replace("/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", "\n", $string);

        $cls = array('svg-icon');

        if ( ! empty($class)) {
            $cls = array_merge($cls, explode(' ', $class));
        }

        $asd = explode('/media/', $path);
        if (isset($asd[1])) {
            $path = 'assets/media/'.$asd[1];
        }

        $output  = "<!--begin::Svg Icon | path: $path-->\n";
        $output .= '<span class="'.implode(' ', $cls).'">'.$string.'</span>';
        $output .= "\n<!--end::Svg Icon-->";

        return $output;
    }

    public static function getProductName() {
        if (Theme::isFreeVersion() === true && self::getOption('product', 'name-free')) {
            return self::getOption('product', 'name-free');
        } else if (self::getOption('product', 'name-pro')) {
            return self::getOption('product', 'name-pro');
        } else {
            return self::getOption('product', 'name');
        }
    }

    public static function getProductNameHtml() {
        return '<strong class="text-gray-900">' . self::getProductName() . '</strong>&nbsp;';
    }

    public static function getProductDescription() {
        return self::getOption('product', 'description');
    }

    public static function getSassVariableMap($key) {
        global $_COMMON_PATH;

        // get cache if available
        $variables = Util::getCache(__CLASS__.'-'.__FUNCTION__);

        if (empty($variables)) {
            // get variable scss file content
            $content = file_get_contents($_COMMON_PATH.'/src/sass/components/_variables.scss');

            // regex capture variables with array
            preg_match_all('/\$([A-Za-z0-9-]+): ?\((.*?)\) ?!default;/sm', $content, $matches);

            $variables = array_combine($matches[1], $matches[2]);

            foreach ($variables as &$variable) {
                preg_match_all('/"?([A-Za-z0-9-]+)"? ?:/', $variable, $matched);
                $variable = $matched[1];
            }

            // keep cache in file
            Util::putCache(__CLASS__.'-'.__FUNCTION__, $variables);
        }

        if (isset($variables[$key])) {
            return $variables[$key];
        }

        return null;
    }

    public static function getPackageReferences() {
        global $_COMMON_PATH;

        $content = file_get_contents($_COMMON_PATH.'/tools/package.json');

        $json         = json_decode($content, true);
        $dependencies = $json['dependencies'];

        // predefined
        $references = array(
            array(
                'name'    => 'Node.js',
                'url'     => 'https://www.npmjs.com/',
                'version' => '14.16.0',
            ),
            array(
                'name'    => 'Gulp',
                'url'     => 'https://gulpjs.com/',
                'version' => '4.0.2',
            ),
            array(
                'name'    => 'Yarn',
                'url'     => 'https://yarnpkg.com/',
                'version' => '1.22.10',
            ),
            array(
                'name'    => 'FormValidation',
                'url'     => 'https://formvalidation.io/',
                'version' => '1.8.0',
            ),
            array(
                'name'    => 'bootstrap-multiselectsplitter',
                'url'     => 'https://github.com/poolerMF/bootstrap-multiselectsplitter/',
                'version' => '1.0.4',
            ),
        );

        foreach ($dependencies as $plugin => $version) {
            try {
                $json_file = $_COMMON_PATH.'/tools/node_modules/'.$plugin.'/package.json';
                if (!file_exists($json_file)) {
                    continue;
                }
                $plugin_content = file_get_contents($json_file);
                $plugin_json    = json_decode($plugin_content, true);

                $url = '';
                if (isset($plugin_json['homepage'])) {
                    $url = $plugin_json['homepage'];

                } elseif (isset($plugin_json['repository']['url'])) {
                    // if it is a git url convert to normal url
                    $url = preg_replace('/(git)?(\+https)?:\/\/(.*?)\.git$/', 'https://$3', $plugin_json['repository']['url']);

                } elseif (isset($plugin_json['bugs']['url'])) {
                    $url = $plugin_json['bugs']['url'];

                } elseif (isset($plugin_json['funding'])) {
                    $url = $plugin_json['funding'];
                    if (isset($plugin_json['funding']['url'])) {
                        $url = $plugin_json['funding']['url'];
                    }
                }

                if (!empty($url)) {
                    $references[$url] = array(
                        'name'    => $plugin,
                        'url'     => $url,
                        'version' => $plugin_json['version'] ?? '',
                    );
                }
            } catch (Exception $exception) {
            }
        }

        return $references;
    }

    public static function getChangelogInfo() {
        global $_THEME_PATH, $_COMMON_PATH;

        $changelog = array();

        $common_path = $_COMMON_PATH . '/dist/changelog';
        $current_path = $_THEME_PATH . '/dist/changelog';

        // For multi demo, include from demo1 for other demos
        if ( file_exists($current_path) === false ) {
            if (self::$demo != '' && self::$demo != 'demo1') {
                $current_path = str_replace(self::$demo . '/', 'demo1/', $current_path);
            }
        }

        // Read core changelog dir
        if ($handle = @opendir($common_path)) {
            while (false !== ($entry = readdir($handle))) {
                $path = $common_path . '/' . $entry;

                if ($entry != "." && $entry != ".." && file_exists($path)) {
                    $array = include($common_path . '/' . $entry);

                    $changelog = array_replace_recursive($changelog, $array);
                }
            }

            closedir($handle);
        }

        // Read current changelog dir
        if ($handle = @opendir($current_path)) {
            while (false !== ($entry = readdir($handle))) {
                $path = $current_path . '/' . $entry;

                if ($entry != "." && $entry != ".." && file_exists($path)) {
                    $array = include($path);

                    $changelog = array_replace_recursive($changelog, $array);
                }
            }

            closedir($handle);
        }

        // reverse sort by key
        uasort($changelog, function ($a, $b) {
            $a = strtotime($a['date']);
            $b = strtotime($b['date']);
            if ($a == $b) {
                return 0;
            }

            return ($a < $b) ? 1 : -1;
        });

        return $changelog;
    }

    public static function getVersion() {
        return self::getOption("product", "version");
    }

    public static function addPageJs($path) {
        self::$config["page"]["assets"]['custom']['js'][] = $path;
    }

    public static function getCorePath() {
        return __DIR__.'/../..';
    }

    public static function getImageUrl($folder, $file, $dark = true) {
        if ($dark) {
            if (Theme::isDarkMode()) {
                $file = str_replace(".svg", "-dark.svg", $file);
                $file = str_replace(".png", "-dark.png", $file);
                $file = str_replace(".jpg", "-dark.jpg", $file);
            }
        }

        return  Theme::getMediaUrlPath() . $folder . '/' . $file;
    }

    public static function getIllustrationUrl($file, $dark = true) {
        if ($dark === true) {
            if (Theme::isDarkMode()) {
                $file = str_replace(".svg", "-dark.svg", $file);
                $file = str_replace(".png", "-dark.png", $file);
                $file = str_replace(".jpg", "-dark.jpg", $file);
            }
        }

        $folder = 'illustrations/' . Theme::getOption('layout', 'illustrations/set');

        return  Theme::getMediaUrlPath() . $folder . '/' . $file;
    }
}
