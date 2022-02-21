<?php

namespace App\Core\Bootstraps;

use App\Core\Adapters\BootstrapBase;
use App\Core\Adapters\Menu;
use App\Core\Adapters\Theme;

class BootstrapDemo7 extends BootstrapBase {
    // Private Properties
    private static $menu;

    // Private Methods
    private static function initPage() {
        Theme::addHtmlAttribute('body', 'style', 'background-image: url(' . Theme::getOption('layout', 'main/body/background-image') . ')');
    }

    private static function initHeader() {
        if (Theme::getOption('layout', 'header/width') == 'fluid') {
            Theme::addHtmlClass('header-container', 'container-fluid');
        } else {
            Theme::addHtmlClass('header-container', 'container');
        }

        if (Theme::getOption('layout', 'header/fixed/desktop') === true) {
            Theme::addHtmlClass('body', 'header-fixed');
        }

        if (Theme::getOption('layout', 'header/fixed/tablet-and-mobile') === true) {
            Theme::addHtmlClass('body', 'header-tablet-and-mobile-fixed');
        }
    }

    private static function initContent() {
        if (Theme::getOption('layout', 'content/width') == 'fluid') {
            Theme::addHtmlClass('content-container', 'container-fluid');
        } else if (Theme::getOption('layout', 'content/width') == 'fixed') {
            Theme::addHtmlClass('content-container', 'container');
        }

        if (Theme::getOption('layout', 'content/class')) {
            Theme::addHtmlClass('content', Theme::getOption('layout', 'content/class'));
        }

        if (Theme::getOption('layout', 'content/container-class')) {
            Theme::addHtmlClass('content-container', Theme::getOption('layout', 'content/container-class'));
        }
    }

    private static function initAside() {
        // Fixed aside
        if (Theme::getOption('layout', 'aside/fixed')) {
            Theme::addHtmlClass('body', 'aside-fixed');
        }

        // Default minimized
        if (Theme::getOption('layout', 'aside/minimized')) {
            Theme::addHtmlAttribute('body', 'data-kt-aside-minimize', 'on');
            Theme::addHtmlClass('asideToggle', 'active');
        }

        // Aside Secondary
        if (Theme::getOption('layout', 'aside/secondary-display') === true) {
            Theme::addHtmlClass('body', 'aside-secondary-enabled');
        } else {
            Theme::addHtmlClass('body', 'aside-secondary-disabled');
        }
    }

    private static function initMenu() {
        self::$menu = new Menu( Theme::getOption('menu', 'main'), Theme::getPagePath() );

        if (Theme::getOption('layout', 'aside/menu-icons-display') === false) {
            self::$menu->displayIcons(false);
        }

        self::$menu->setIconType(Theme::getOption('layout', 'aside/menu-icon'));
    }

    private static function initFooter() {
        if (Theme::getOption('layout', 'footer/width') == 'fluid') {
            Theme::addHtmlClass('footer-container', 'container-fluid');
        } else {
            Theme::addHtmlClass('footer-container', 'container');
        }
    }

    private static function initScripts() {
        Theme::addPageJs('js/custom/widgets.js');
        Theme::addPageJs('js/custom/apps/chat/chat.js');
        Theme::addPageJs('js/custom/modals/create-app.js');
        Theme::addPageJs('js/custom/modals/upgrade-plan.js');

        if (Theme::getViewMode() !== 'release') {
            Theme::addPageJs('js/custom/intro.js');
        }
    }

    // Public Methods
    public static function getMenu() {
        return self::$menu;
    }

    public static function getBreadcrumb() {
        $options = array(
            'skip-active' => false
        );

        return self::getMenu()->getBreadcrumb($options);
    }

    public static function initLayout() {
        self::initPage();
        self::initHeader();
        self::initContent();
        self::initAside();
        self::initFooter();
        self::initMenu();
        self::initScripts();
    }
}
