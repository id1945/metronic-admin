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
        <div class="pt-5">
            {!! theme()->getProductNameHtml() !!} uses <a class="fw-bold" href="https://sass-lang.com/">SASS</a>&nbsp, the most powerful CSS preprocessor for handling the
            theme css efficiently. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="components">
            <a href="#components"></a>
            Components
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            Components folder in <code>/resources/assets/[demo]/src/sass/components/</code> contains SASS code that customizes the core Bootstrap components to match the <strong>{{ theme()->getProductName() }}</strong>'s own design system
            and custom components. Both {!! theme()->getProductNameHtml() !!} and <strong>Bootstrap</strong>&nbsp; components are customized in <code>/resources/assets/[demo]/src/sass/_variables.scss</code>.
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="bootstrap-variables">
            <a href="#bootstrap-variables"></a>
            Bootstrap Variables
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            In <code>/resources/assets/[demo]/src/sass/_variables.scss</code> file, {!! theme()->getProductNameHtml() !!} deeply customizes the standard <strong>Bootstrap</strong>&nbsp; components by
            following the best practices explained in <a class="fw-bold" href="https://getbootstrap.com/docs/4.5/getting-started/theming/">the official documentation</a>.
        </div>
        <!--end::Block-->
        <div class="pt-2 pb-5">
            {{ util()->info('
                Custom variables that used to customize Bootstrap components are marked with <code>Custom variable</code> comment in <code>_variables.scss</code> file.
            ', 'warning') }}
        </div>
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="override-variables">
            <a href="#override-variables"></a>
            Override Variables
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            If you like to change the Bootstrap theme colors, border radiuses, font family and other variables, we suggest using <code>_variables.custom.scss</code> file so you keep your
            own changes separated from future updates to avoid conflicts. All variables to override in this file should be set without the <code>!default</code> attribute to prioritize your code change.
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="layout">
            <a href="#layout"></a>
            Layout
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            Layout related SASS code is located in <code>/resources/assets/[demo]/src/sass/layout/</code> folder. This folder contains the layout's markup and SASS variables files as explained in the below table:
        </div>
        <!--end::Block-->

        <!--begin::Table-->
        <div class="py-5">
            <div class="table-responsive border rounded">
                <table class="table table-striped table-flush align-middle mb-0">
                    <!--begin::Block-->
                    <thead>
                    <tr class="fs-4 fw-bolder text-dark p-6">
                        <th class="min-w-200px">File</th>
                        <th class="min-w-400px">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="p-6">
                        <td>
                            <code>_variables.scss</code>
                        </td>
                        <td>
                            Variables used by Layout Partials. You can easily change Aside width, header height and other common properties.
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>_layout.scss</code>
                        </td>
                        <td>
                            Defines main layout and its dependencies.
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>_main.scss</code>
                        </td>
                        <td>
                            Defines base markup and styles.
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>_header.scss</code>
                        </td>
                        <td>
                            Defines base layout markup and styles.
                        </td>
                    </tr>
                    <tr class="p-6">
                        <td>
                            <code>_footer.scss</code>
                        </td>
                        <td>
                            Defines footer markup and styles.
                        </td>
                    </tr>

                    </tbody>
                    <!--end::Block-->
                </table>
            </div>
        </div>
        <!--end::Table-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="pt-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="compilation">
            <a href="#compilation"></a>
            Compilation
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <ul class="py-5">
            <li class="py-3">{!! theme()->getProductNameHtml() !!} compiles layout, components(including the Bootstrap & custom components) into the main bundle: <code>/public/css/style.bundle.css</code>.</li>
            <li class="py-3">The custom SASS files are compiled separately into CSS folder: <code>/public/css/custom</code></li>
            <li class="py-3">All 3rd-party plugins css files are bundled into the plugins bundle CSS file and globally included in all pages. <code>/public/plugins/global/plugins.bundle.css</code>.</li>
        </ul>
        <!--end::Block-->
    </div>
    <!--end::Section-->

</x-base-layout>
