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
            {!! theme()->getProductNameHtml() !!} Javascript code is written in pure(vanila) Javascript(no jquery dependency)
            in order to make it easier to integrate with SPA frameworks such as Angular, React and Vue.
            During the build process the Javascript code from the source folder is minified and moved to the assets folder.
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
            The components folder in <code>/resources/assets/[demo]/src/js/components/</code> contains custom {!! theme()->getProductNameHtml() !!} Components written in vanilla Javascript.
            All components can be used by Angular, React and Vue versions.
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
            The layout folder in <code>/resources/assets/[demo]/src/js/layout/</code> contains Javascript files that handle the Layout partials(Aside, Header, Footer, Subheader, etc).
        </div>
        <!--end::Block-->
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
            <li class="py-3">{!! theme()->getProductNameHtml() !!} compiles layout, components(including the Bootstrap & custom components) Javascript code into the main bundle: <code>/public/js/scripts.bundle.js</code>.</li>
            <li class="py-3">The custom Javascript code is compiled separately into CSS folder: <code>/public/js/custom</code></li>
            <li class="py-3">All 3rd-party plugins Javascript code are bundled into the plugins Javascript bundle file and globally included in all pages. <code>/public/plugins/global/plugins.bundle.js`</code>.</li>
        </ul>
        <!--end::Block-->
    </div>
    <!--end::Section-->

</x-base-layout>
