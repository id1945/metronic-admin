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
            'dark-mode-enabled' => true, // Enable optioanl dark mode mode
            'primary-color'     => '#04C8C8',
        ),

        // Loader
        'loader'     => array(
            'display' => false,
            'type'    => 'default' // Set default|spinner-message|spinner-logo to hide or show page loader
        ),

        // Scrolltop
        'scrolltop'  => array(
            'display' => true // Enable scrolltop
        ),

        // Header
        'header'     => array(
            'display' => true, // Set true|false to show or hide Header
            'width'   => 'fixed', // Set fixed|fluid to change width type
            'fixed'   => array(
                'desktop'           => false,  // Set true|false to set fixed Header for desktop mode
                'tablet-and-mobile' => false // Set true|false to set fixed Header for tablet and mobile modes
            ),
        ),

        // Page title
        'page-title' => array(
            'display'               => true, // Display page title
            'breadcrumb'            => true, // Display breadcrumb
            'description'           => false, // Display description
            'responsive'            => true, // Move page title to cotnent on mobile mode
            'responsive-breakpoint' => 'lg', // Responsive breakpoint value(e.g: md, lg, or 300px)
            'responsive-target'     => '#kt_toolbar_container' // Responsive target selector
        ),

        // Aside
        'aside'      => array(
            'menu-icon' => 'svg' // Menu icon type(svg|font)
        ),

        // Sidebar
        'sidebar'    => array(
            'display' => true,
        ),

        // Content
        'content'    => array(
            'width' => 'fixed', // Set fixed|fluid to change width type
        ),

        // Footer
        'footer'     => array(
            'width' => 'fixed' // Set fixed|fluid to change width type
        ),
    ),
);
