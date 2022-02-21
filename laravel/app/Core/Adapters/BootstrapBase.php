<?php

namespace App\Core\Adapters;

abstract class BootstrapBase
{
    public static function initBase()
    {
        theme()->addHtmlAttribute('body', 'id', 'kt_body');

        if (theme()->isDarkModeEnabled() && theme()->getCurrentMode() === 'dark') {
            theme()->addHtmlClass('body', 'dark-mode');
        }

        if (theme()->getOption('layout', 'main/body/background-image')) {
            theme()->addHtmlAttribute('body', 'style', 'background-image: url('.asset(theme()->getMediaUrlPath().theme()->getOption('layout', 'main/body/background-image')).')');
        }

        if (theme()->getOption('layout', 'main/body/class')) {
            theme()->addHtmlClass('body', theme()->getOption('layout', 'main/body/class'));
        }

        if (theme()->getOption('layout', 'main/body/attributes')) {
            theme()->addHtmlAttributes('body', theme()->getOption('layout', 'main/body/attributes'));
        }

        if (theme()->getOption('layout', 'loader/display') === true) {
            theme()->addHtmlClass('body', 'page-loading-enabled');
            theme()->addHtmlClass('body', 'page-loading');
        }
    }

    public static function run()
    {
        if (theme()->getOption('layout', 'base') === 'docs') {
            return;
        }

        // Init	base
        static::initBase();

        // Init layout
        if (theme()->getOption('layout', 'main/type') === 'default') {
            static::initLayout();
        }
    }
}
