<?php

namespace App\Core\Bootstraps;

use App\Core\Adapters\BootstrapBase;
use App\Core\Adapters\Menu;
use App\Core\Adapters\Theme;

class BootstrapDemo3 extends BootstrapBase {
	// Private Properties
	private static $menu;

	// Private Methods
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
		// Aside enabled
		if (Theme::getOption('layout', 'aside/display')) {
			Theme::addHtmlClass('body', 'aside-enabled');
		}
	}

	private static function initSidebar() {
		// Sidebar enabled
		if (Theme::getOption('layout', 'sidebar/display')) {
			Theme::addHtmlClass('body', 'sidebar-enabled');
		}
	}

	private static function initMenu() {
		self::$menu = new Menu( Theme::getOption('menu', 'main'), Theme::getPagePath());
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
		self::initHeader();
		self::initContent();
		self::initAside();
		self::initSidebar();
		self::initFooter();
		self::initMenu();
		self::initScripts();
	}
}
