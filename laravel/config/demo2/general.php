<?php
return array(
    // Assets
    'assets' => array(
        'favicon' => 'media/logos/favicon.ico',
        'fonts'   => array(
            'google' => array(
                'Poppins:300,400,500,600,700',
            ),
        ),
        'css'     => array(
            'plugins/global/plugins.bundle.css',
            'plugins/global/plugins-custom.bundle.css',
            'css/style.bundle.css',
        ),
        'js'      => array(
            'plugins/global/plugins.bundle.js',
            'js/scripts.bundle.js',
            'js/custom/widgets.js',
        ),
    ),

    // Layout
    'layout' => array(
        // Main
        'main'       => array(
            'type'              => 'default', // Set layout type: default|blank|none
            'primary-color'     => '#009EF7',
            'dark-mode-enabled' => true, // Enable optioanl dark mode mode
            'body'              => array(
                'background-image' => 'patterns/'.(theme()->isDarkMode() ? 'header-bg-dark.png' : 'header-bg.jpg'),
            ),
        ),

        // Loader
        'loader'     => array(
            'display' => false,
            'type'    => 'default' // Set default|spinner-message|spinner-logo to hide or show page loader
        ),

        // Header
        'header'     => array(
            'display'   => true, // Display header
            'width'     => 'fixed', // Set header width(fixed|fluid)
            'left'      => 'menu', // Set left part content(menu|page-title)
            'fixed'     => array(
                'desktop'           => true,  // Set fixed header for desktop
                'tablet-and-mobile' => true // Set fixed header for talet & mobile
            ),
            'menu-icon' => 'svg' // Menu icon type(svg|font)
        ),

        // Toolbar
        'toolbar'    => array(
            'display' => true, // Display toolbar
            'layout'  => 'default',  // Set content layout(default|documentation)
            'width'   => 'fixed', // Set toolbar container width(fluid|fixed)
        ),

        // Page title
        'page-title' => array(
            'display'     => true, // Display page title
            'breadcrumb'  => true, // Display breadcrumb
            'description' => false, // Display description
        ),

        // Aside
        'aside'      => array(
            'display'   => false, // Display aside
            'sticky'    => true, // Enable sticky aside
            'menu'      => 'main', // Set aside menu(main|documentation)
            'menu-icon' => 'svg' // Menu icon type(svg|font)
        ),

        // Content
        'content'    => array(
            'width'  => 'fixed', // Set content width(fixed|fluid)
            'layout' => 'default'  // Set content layout(default|documentation)
        ),

        // Footer
        'footer'     => array(
            'width' => 'fixed' // Set fixed|fluid to change width type
        ),

        // Scrolltop
        'scrolltop'  => array(
            'display' => true // Display scrolltop
        ),
    ),
);
