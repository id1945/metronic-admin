<?php

namespace App\Core\Bootstraps;

use App\Core\Adapters\BootstrapBase;
use App\Core\Adapters\Menu;
use App\Core\Adapters\Theme;

class BootstrapDemo5 extends BootstrapBase {
	// Private Properties
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

	// Private Methods
	private static function initContent() {
        if (Theme::getOption('layout', 'content/width') == 'fluid') {
            Theme::addHtmlClass('content-container', 'container-fluid');
        } else {
            Theme::addHtmlClass('content-container', 'container-xxl');
        }
	}

	private static function initAside() {
		if (Theme::getOption('layout', 'aside/display') === true) {
			Theme::addHtmlClass('body', 'aside-enabled');
		}
	}

	private static function initSidebar() {
		if (Theme::getOption('layout', 'sidebar/display') === true) {
			Theme::addHtmlClass('body', 'sidebar-enabled');
		}
	}

	private static function initHorizontalMenu() {
		self::$horizontalMenu = new Menu( Theme::getOption('menu', 'horizontal'), Theme::getPagePath() );
		self::$horizontalMenu->setItemLinkClass('py-3');
		self::$horizontalMenu->setIconType(Theme::getOption('layout', 'header/menu-icon', 'svg'));
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
	public static function initLayout() {
		self::initHeader();
		self::initContent();
		self::initAside();
		self::initSidebar();
		self::initHorizontalMenu();
		self::initScripts();
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
}
