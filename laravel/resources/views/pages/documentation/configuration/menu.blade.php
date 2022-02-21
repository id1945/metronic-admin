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
                The Laravel menu configuration is separated into 2 types which are <code>global</code> and <code>demo</code> level config. Both configs will be merged.
                The global menu can be found in the config folder <code>config/global/menu.php</code>. The menu items will be available for all demos in the future updates.
            </p>

            <p class="mb-3">
                The demo config can be found in the config folder <code>config/demo1/menu.php</code>. The menu in this config will be specifically available for current selected demo.
            </p>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-0">
                The <code>global</code> menu contains <code>documentation</code> menu items as example below.
            </p>

            <div class="py-5">
                <?php util()->highlight("
return array(
    // Documentation menu
    'documentation' => array(...),
);
", 'php')
                ?>
            </div>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-0">
                The <code>demo</code> menu is divided into 2 types <code>main</code> and <code>horizontal</code> as example below.
            </p>

            <div class="py-5">
                <?php util()->highlight("
return array(
    // Main menu
    'main'       => array(...),

    // Horizontal menu
    'horizontal' => array(...),
);
", 'php')
                ?>
            </div>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-0">
                <code>title</code> will display in the menu item text and the <code>path</code> will be link. The <code>path</code> will be registered in Laravel <code>route</code>.
            </p>

            <div class="py-5">
                <?php util()->highlight("
array(
    'title' => 'Build',
    'path'  => 'documentation/getting-started/build',
),
", 'php')
                ?>
            </div>

            <p class="mb-0">
                Each menu item added to the <code>config/demo1/menu.php</code>, must a page config registered with it. The pages config can be found in <code>config/demo1/pages.php</code>.
                Below is an example for the page <code>documentation/getting-started/build</code>.
            </p>

            <div class="py-5">
                <?php util()->highlight("
'documentation' => array(
    'getting-started' => array(
        'build' => array(
            'title'       => 'Build',
            'description' => '',
            'view'        => 'documentation/getting-started/build',
        ),
    },
},
", 'php')
                ?>
            </div>

        </div>
        <!--end::Block-->

    </div>
    <!--end::Section-->

</x-base-layout>
