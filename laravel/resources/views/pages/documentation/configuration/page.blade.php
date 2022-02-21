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
                The page config link the menu to the view.
                The Laravel page configuration is separated into 2 types which are <code>global</code> and <code>demo</code> level config. Both configs will be merged.
                The global page can be found in the config folder <code>config/global/page.php</code>. The page items will be available for all demos in the future updates.
            </p>

            <p class="mb-3">
                The demo config can be found in the config folder <code>config/demo1/page.php</code>. The page in this config will be specifically available for current selected demo.
            </p>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-3">
                The <code>global</code> page contains <code>documentation</code> and other general pages as example below.
            </p>

            <div class="py-5">
                <?php util()->highlight("
return array(
    // Documentation pages
    'documentation' => array(
        '*' => array(...),

        'getting-started' => array(...),

        'general' => array(...),

        'configuration' => array(...),
    ),
);
", 'php')
                ?>
            </div>
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <p class="mb-3">
                Each page may contains this config to override the global value. For example JS and CSS assets from general config in <code>config/demo1/general.php</code>
            </p>

            <div class="py-5">
                <?php util()->highlight("
'login'           => array(
    'title'  => 'Login',
    'assets' => array(
        'custom' => array(
            'js' => array(
                'js/custom/authentication/sign-in/general.js',
            ),
        ),
    ),
),
", 'php')
                ?>
            </div>
        </div>
        <!--end::Block-->

    </div>
    <!--end::Section-->

</x-base-layout>
