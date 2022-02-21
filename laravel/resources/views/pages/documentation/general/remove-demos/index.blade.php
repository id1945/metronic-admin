<x-base-layout>

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview-datatables">
            <a href="#overview-datatables"></a>
            Overview
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            <p>Here is the steps to remove unused demos and set only one default demo to use.</p>
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="steps">
            <a href="#steps"></a>
            Steps to remove unused demos
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            <ol class="my-0 py-0">
                <li class="py-2">
                    Open this file <code>app/Providers/AppServiceProvider.php</code>. Remove <code>$theme->setDemo(request()->input('demo', 'demo1'));</code>.
                    Uncomment below code and set the param with your selected demo id.

                    <div class="py-5">
                        <?php util()->highlight('
                        $theme->setDemo(\'demo2\');
                    ', 'php') ?>
                    </div>
                </li>

                <li class="py-2">
                    Remove unused demo layout folders <code>resources/views/layout/demo*</code> and remove doumentation folder <code>resources/views/layout/docs</code>
                </li>

                <li class="py-2">
                    Remove unused assets folders <code>resources/assets/demo*</code>
                </li>

                <li class="py-2">
                    Remove unused demo config folders <code>config/demo*</code>
                </li>

                <li class="py-2">
                    This step is to remove documentation pages config and it is optional. Open this file <code>config/global/pages.php</code>. Remove <code>documentation</code> config.
                </li>
            </ol>
        </div>
        <!--end::Block-->
    </div>
    <!--end::Section-->

</x-base-layout>
