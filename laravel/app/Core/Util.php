<?php

namespace App\Core;

use tidy;
use App\Core\Adapters\Theme;

class Util {
    /**
     * Class init state.
     *
     * @var boolean
    */
    private static $initialized = false;

    /**
     * Class constructor.
     *
    */
    public static function init() {
        if (self::$initialized) {
            return;
        }

        self::$initialized = true;
    }

    public static function startCode() {
        ob_start();
    }

    public static function endCode() {
        $str = ob_get_clean();
        $str = trim($str);
        $str = htmlspecialchars($str);

        echo $str;
    }

    public static function outputCode($str) {
        $str = trim($str);
        $str = htmlspecialchars($str);

        echo $str;
    }

    public static function code($str) {
        echo self::getCode($str);
    }

    public static function getCode($str) {
        $str = trim($str);
        $str = htmlspecialchars($str);

        return $str;
    }

    public static function parseCode($code, $lang = 'html', $height = 0) {
        $height = $height > 0 ? 'style="height:' . $height . 'px"' : '';

        $code = '<pre class="language-' . $lang . '"   ' . $height . '><code class="language-' . $lang . '">' . htmlspecialchars(trim($code), ENT_QUOTES) . '</code></pre>';

        return $code;
    }

    public static function highlight() {
        $tabItemActive = 'active';
        $tabPaneActive = 'show active';

        $args = func_get_args();

        echo '<!--begin::Highlight-->';
        echo '<div class="highlight">';
        echo '  <button class="highlight-copy btn" data-bs-toggle="tooltip" title="Copy code">copy</button>';

        if ( !empty($args) ) {
            if ( isset($args[0]) && is_array($args[0]) === false ) {
                echo '    <div class="highlight-code">';
                echo            Util::parseCode($args[0], @$args[1], @$args[2]);
                echo '    </div>';
            } else if ( is_array($args[0]) && isset($args[1]) === false ) {
                $options = $args[0];

                echo '<ul class="nav nav-pills" role="tablist">';
                foreach ( $options as $key => $each ) {
                    if ( isset($each['lang']) === true ) {
                        $uid = 'kt_highlight_' . uniqid();
                        $options[$key]['id'] = $uid;

                        echo '<li class="nav-item">';
                        echo '    <a class="nav-link ' . $tabItemActive . '" href="#" data-bs-toggle="tab" href="#' . $uid . '" role="tab">' . strtoupper($each['lang']) . '</a>';
                        echo '</li>';

                        $tabItemActive = '';
                    }
                }
                echo '</ul>';

                echo '<div class="tab-content">';
                foreach ( $options as $each ) {
                    if ( isset($each['lang']) === true ) {
                        echo '<div class="tab-pane fade ' . $tabPaneActive . '" id="' . $each['id']. '" role="tabpanel">';
                        echo '    <div class="highlight-code">';
                        echo            Util::parseCode($each['code'], $each['lang'], @$each['height']);
                        echo '    </div>';
                        echo '</div>';

                        $tabPaneActive = '';
                    }
                }
                echo '</div>';
            }
        }

        echo '</div>';
        echo '<!--end::Highlight-->';
    }


    public static function tidyHtml($buffer) {
        if ( ! extension_loaded('Tidy')) {
            return $buffer;
        }

        // Specify configuration
        $config = array(
            // 'clean'               => true,
            'drop-empty-elements' => false,
            'doctype'             => 'omit',
            'indent'              => 2,
            // 'output-html'         => true,
            // 'output-xhtml'        => true,
            // 'force-output'        => true,
            'show-body-only'      => true,
            'indent-with-tabs'    => true,
            'tab-size'            => 1,
            'indent-spaces'       => 1,
            'tidy-mark'           => false,
            'wrap'                => 0,
            'indent-attributes'   => false,
            'input-xml'           => true,
            // HTML5 tags
            'new-blocklevel-tags' => 'article aside audio bdi canvas details dialog figcaption figure footer header hgroup main menu menuitem nav section source summary template track video',
            'new-empty-tags'      => 'command embed keygen source track wbr',
            'new-inline-tags'     => 'code audio command datalist embed keygen mark menuitem meter output progress source time video wbr',
        );

        // Tidy
        $tidy = new Tidy;
        $tidy->parseString($buffer, $config, 'utf8');
        $tidy->cleanRepair();

        // Output
        return $tidy;
    }

    public static function setArrayValue(&$array, $path, $value) {
	    $loc = &$array;
	    foreach ( explode( '/', $path ) as $step ) {
		    $loc = &$loc[ $step ];
	    }

	    return $loc = $value;
    }

    public static function getArrayValue($array, $path) {
        if (is_string($path)) {
            // dot delimiter
            $path = explode('/', $path);
        }

        $ref  = &$array;
        foreach ($path as $key) {
            if ( ! is_array($ref)) {
                $ref = [];
            }

            $ref = &$ref[$key];
        }

        $prev = $ref;

        return $prev;
    }

    public static function hasArrayValue($array, $path) {
        return self::getArrayValue($array, $path) !== null;
    }

    public static function getArrayPath( $array, $searchKey = '' ) {
        //create a recursive iterator to loop over the array recursively
        $iter = new RecursiveIteratorIterator(
            new RecursiveArrayIterator( $array ),
            RecursiveIteratorIterator::SELF_FIRST );

        //loop over the iterator
        foreach ( $iter as $key => $value ) {
            //if the value matches our search
            if ( $value === $searchKey ) {
                //add the current key
                $keys = array( $key );
                //loop up the recursive chain
                for ( $i = $iter->getDepth() - 1; $i >= 0; $i-- ) {
                    //add each parent key
                    array_unshift( $keys, $iter->getSubIterator( $i )->key() );
                }
                //return our output array
                return $keys;
            }
        }

        //return false if not found
        return false;
    }

    public static function matchArrayByKeyValue( $array, $searchKey, $searchValue ) {
        //create a recursive iterator to loop over the array recursively
        $iter = new RecursiveIteratorIterator(
            new RecursiveArrayIterator( $array ),
            RecursiveIteratorIterator::SELF_FIRST );

        //loop over the iterator
        foreach ( $iter as $key => $value ) {
            //if the value matches our search
            if ( $key === $searchKey &&  $value === $searchValue ) {
                return true;
            }
        }

        //return false if not found
        return false;
    }

    public static function searchArrayByKeyValue( $array, $searchKey, $searchValue ) {
        $result = array();

        //create a recursive iterator to loop over the array recursively
        $iter = new RecursiveIteratorIterator(
            new RecursiveArrayIterator( $array ),
            RecursiveIteratorIterator::SELF_FIRST );

        //loop over the iterator
        foreach ( $iter as $key => $value ) {
            //if the value matches our search
            if ( $key === $searchKey &&  $value === $searchValue ) {
                return true;
            }
        }

        //return false if not found
        return false;
    }

    public static function separateCamelCase( $str ) {
        $re           = '/
          (?<=[a-z])
          (?=[A-Z])
        | (?<=[A-Z])
          (?=[A-Z][a-z])
        /x';
        $a            = preg_split( $re, $str );
        $formattedStr = implode( ' ', $a );

        return $formattedStr;
    }

    public static function isExternalURL($url) {
        $url = trim(strtolower($url));

        if (substr($url, 0, 2) == '//') {
            return true;
        }

        if (substr($url, 0, 7) == 'http://') {
            return true;
        }

        if (substr($url, 0, 8) == 'https://') {
            return true;
        }

        if (substr($url, 0, 5) == 'www.') {
            return true;
        }

        return false;
    }

    public static function getIf($cond, $value, $alt = '') {
        return $cond ? $value : $alt;
    }

    public static function putIf($cond, $value, $alt = '') {
        echo self::getIf($cond, $value, $alt);
    }

    public static function notice($text, $state = 'danger', $icon = 'icons/duotune/art/art006.svg') {
        $html = '';

        $html .= '<!--begin::Notice-->';
        $html .= '<div class="d-flex align-items-center rounded py-5 px-4 bg-light-' . $state . ' ">';
        $html .= '  <!--begin::Icon-->';
        $html .= '  <div class="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative ms-3 me-6">';
        $html .= '      ' . Theme::getSvgIcon("icons/duotune/abstract/abs051.svg", "svg-icon-" . $state . " position-absolute opacity-10", "w-80px h-80px");
        $html .= '	    ' . Theme::getSvgIcon($icon, "svg-icon-3x svg-icon-" . $state . "  position-absolute");
        $html .= '  </div>';
        $html .= '  <!--end::Icon-->';

        $html .= '  <!--begin::Description-->';
        $html .= '      <div class="text-gray-700 fw-bold fs-6 lh-lg">';
        $html .=            $text;
        $html .= '      </div>';
        $html .= '  <!--end::Description-->';
        $html .= '</div>';
        $html .= '<!--end::Notice-->';

        echo $html;
    }

    public static function info($text, $state = 'danger', $icon = 'icons/duotune/general/gen044.svg') {
        $html = '';

        $html .= '<!--begin::Information-->';
        $html .= '<div class="d-flex align-items-center rounded py-5 px-5 bg-light-' . $state . ' ">';
        $html .= '    <!--begin::Icon-->';
        $html .= '	  ' . Theme::getSvgIcon($icon, 'svg-icon-3x svg-icon-' . $state . ' me-5');
        $html .= '    <!--end::Icon-->';

        $html .= '    <!--begin::Description-->';
        $html .= '    <div class="text-gray-700 fw-bold fs-6">';
        $html .=      $text;
        $html .= '    </div>';
        $html .= '    <!--end::Description-->';
        $html .= '</div>';
        $html .= '<!--end::Information-->';

        echo $html;
    }

    public static function getHtmlAttributes($attributes) {
        $result = array();

        foreach ($attributes as $name => $value) {
            if ( !empty($value) ) {
                $result[] = $name . '="' . $value . '"';
            }
        }

        return ' ' . implode(' ', $result) . ' ';
    }

    public static function putHtmlAttributes($attributes) {
        echo self::getHtmlAttributes($attributes);
    }

    public static function getHtmlClass($classes, $full = true) {
        $result = array();

        $classes = implode(' ', $classes);

        if ( $full === true ) {
            return ' class="' . $classes . '" ';
        } else {
            return ' ' . $classes . ' ';
        }
    }

    public static function getCssVariables($variables, $full = true) {
        $result = array();

        foreach ($variables as $name => $value) {
            if ( !empty($value) ) {
                $result[] = $name . ':' . $value;
            }
        }

        $result = implode(';', $result);

        if ( $full === true ) {
            return ' style="' . $result . '" ';
        } else {
            return ' ' . $result . ' ';
        }
    }

    /**
     * Create a cache file
     *
     * @param $key
     * @param $value
     */
    public static function putCache($key, $value) {
        global $_COMMON_PATH;

        // check if cache file exist
        $cache = $_COMMON_PATH.'/dist/libs/cache/'.$key.'.cache.json';

        // create cache folder if folder does not exist
        if(!file_exists(dirname($cache))) {
            mkdir(dirname($cache), 0777, true);
        }

        // create cache file
        file_put_contents($cache, json_encode($value));
    }

    /**
     * Retrieve a cache file by key
     *
     * @param $key
     *
     * @return mixed|null
     */
    public static function getCache($key) {
        global $_COMMON_PATH;

        // check if cache file exist
        $cache = $_COMMON_PATH.'/dist/libs/cache/'.$key.'.cache.json';

        // check if the requested cache file exists
        if(file_exists($cache)) {
            return json_decode(file_get_contents($cache), true);
        }

        return null;
    }

    /**
     * Sample demo for docs for multidemo site
     *
     * @return string
     */
    public static function sampleDemoText() {
        $demo = '';
        if (Theme::isMultiDemo()) {
            $demo = '--demo1';
        }
        return $demo;
    }

    public static function camelize($input, $separator = '_') {
        return str_replace($separator, ' ', ucwords($input, $separator));
    }

    public static function arrayMergeRecursive() {
        $arrays = func_get_args();
        $merged = array();

        while ($arrays) {
            $array = array_shift($arrays);

            if (!is_array($array)) {
                trigger_error(__FUNCTION__ .' encountered a non array argument', E_USER_WARNING);
                return;
            }

            if (!$array) {
                continue;
            }

            foreach ($array as $key => $value) {
                if (is_string($key)) {
                    if (is_array($value) && array_key_exists($key, $merged) && is_array($merged[$key])) {
                        $merged[$key] = self::arrayMergeRecursive($merged[$key], $value);
                    } else {
                        $merged[$key] = $value;
                    }
                } else {
                    $merged[] = $value;
                }
            }
        }

        return $merged;
    }
}
