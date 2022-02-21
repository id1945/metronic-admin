<x-base-layout>

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="title">
            <a href="#title"></a>
            {{ theme()->getPageTitle() }}
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-3">
                General configuration is a global configuration for all pages. Each page config can be overridden in the <code>Page Configuration</code>.
                The global and demo configuration can be found in <code>config/global/general.php</code> and <code>config/demo1/general.php</code>
            </p>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <div class="py-5">
                <?php util()->highlight("
<?php
return array(
    // Product
    'product' => array(
        'name'        => 'Metronic',
        'description' => 'Metronic - #1 Selling Bootstrap 5 HTML Multi-demo Admin Dashboard Theme',
        'preview'     => 'https://preview.keenthemes.com/metronic8',
        'purchase'    => 'https://1.envato.market/EA4JP',
        'demos'       => array(...),
    ),

    // Assets
    'assets'  => array(
        'favicon' => 'media/logos/favicon.ico',
        'fonts'   => array(
            'google' => array(
                'Poppins:300,400,500,600,700',
            ),
        ),
        'css'     => array(
            'plugins/global/plugins.bundle.css',
            'css/style.bundle.css',
        ),
        'js'      => array(
            'plugins/global/plugins.bundle.js',
            'js/scripts.bundle.js',
        ),
    ),

    // Layout
    'layout'  => array(
        // Main
        'main'       => array(
            'base'              => 'default', // Set base layout: default|docs
            'type'              => 'default', // Set layout type: default|blank|none
            'primary-color'     => '#009EF7',
        ),

        // Docs
        'docs'       => array(
            'logo-path'  => 'logos/logo-1-dark.svg',
            'logo-class' => 'h-15px',
        ),

        // Loader
        'loader'     => array(
            'display' => false,
            'type'    => 'default' // Set default|spinner-message|spinner-logo to hide or show page loader
        ),

        // Header
        'header'     => array(
            'display'   => true, // Display header
            'width'     => 'fluid', // Set header width(fixed|fluid)
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
            'width'   => 'fluid', // Set toolbar container width(fluid|fixed)
            'fixed'   => array(
                'desktop'           => true,  // Set fixed header for desktop
                'tablet-and-mobile' => true // Set fixed header for talet & mobile
            ),
            'layout'  => 'toolbar-1', // Set toolbar type
        ),

        // Page title
        'page-title' => array(
            'display'               => true, // Display page title
            'breadcrumb'            => true, // Display breadcrumb
            'description'           => false, // Display description
            'layout'                => 'default', // Set layout(default|select)
            'direction'             => 'row', // Flex direction(column|row))
            'responsive'            => true, // Move page title to cotnent on mobile mode
            'responsive-breakpoint' => 'lg', // Responsive breakpoint value(e.g: md, lg, or 300px)
            'responsive-target'     => '#kt_toolbar_container' // Responsive target selector
        ),

        // Aside
        'aside'      => array(
            'display'   => true, // Display aside
            'theme'     => 'dark', // Set aside theme(dark|light)
            'menu'      => 'main', // Set aside menu(main|documentation)
            'fixed'     => true,  // Enable aside fixed mode
            'minimized' => false, // Set aside minimized by default
            'minimize'  => true, // Allow aside minimize toggle
            'hoverable' => true, // Allow aside hovering when minimized
            'menu-icon' => 'svg' // Menu icon type(svg|font)
        ),

        // Content
        'content'    => array(
            'width'  => 'fixed', // Set content width(fixed|fluid)
            'layout' => 'default'  // Set content layout(default|documentation)
        ),

        // Footer
        'footer'     => array(
            'width' => 'fluid' // Set fixed|fluid to change width type
        ),

        // Scrolltop
        'scrolltop'  => array(
            'display' => true // Display scrolltop
        ),
    ),
);

", 'php')
                ?>
            </div>
        </div>
        <!--end::Block-->

    </div>
    <!--end::Section-->

</x-base-layout>
