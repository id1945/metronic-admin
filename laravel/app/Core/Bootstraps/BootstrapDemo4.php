<?php

namespace App\Core\Bootstraps;

use App\Core\Adapters\BootstrapBase;
use App\Core\Adapters\Menu;
use App\Core\Adapters\Theme;

class BootstrapDemo4 extends BootstrapBase {
    // Private Properties
    private static $asideMenu;
    private static $horizontalMenu;

    // Private Methods
    private static function initHeader() {
        if (Theme::getOption('layout', 'header/width') == 'fluid') {
            Theme::addHtmlClass('header-container', 'container-fluid');
        } else {
            Theme::addHtmlClass('header-container', 'container-xxl');
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
        } else {
            Theme::addHtmlClass('content-container', 'container');
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

    private static function initAsideMenu() {
        self::$asideMenu = new Menu( Theme::getOption('menu', 'compact'), Theme::getPagePath() );
        self::$asideMenu->setIconType(Theme::getOption('layout', 'aside/menu-icon', 'svg'));
    }

    private static function initHorizontalMenu() {
        self::$horizontalMenu = new Menu( Theme::getOption('menu', 'horizontal'), Theme::getPagePath() );
        self::$horizontalMenu->setItemLinkClass('py-3');
        self::$horizontalMenu->setIconType(Theme::getOption('layout', 'header/menu-icon', 'svg'));
    }

    private static function initFooter() {
        if (Theme::getOption('layout', 'footer/width') == 'fluid') {
            Theme::addHtmlClass('footer-container', 'container-fluid');
        } else {
            Theme::addHtmlClass('footer-container', 'container-xxl');
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
    public static function getAsideMenu() {
        return self::$asideMenu;
    }

    public static function getHorizontalMenu() {
        return self::$horizontalMenu;
    }

    public static function getBreadcrumb() {
        $options = array(
            'skip-active' => false
        );

        return self::getHorizontalMenu()->getBreadcrumb($options);
    }

    public static function initLayout() {
        self::initHeader();
        self::initContent();
        self::initAside();
        self::initFooter();
        self::initAsideMenu();
        self::initHorizontalMenu();
        self::initScripts();
    }
}
