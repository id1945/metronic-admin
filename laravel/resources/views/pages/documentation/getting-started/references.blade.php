<x-base-layout>

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="overview">
            <a href="#overview"></a>
            Composer Packages
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-5">
            {!! theme()->getProductNameHtml() !!} uses the following open source resources:
        </div>

        <!--begin::Table-->
        <div class="py-5">
            <div class="table-responsive border rounded">
                <table class="table table-striped table-flush align-middle mb-0">
                    <!--begin::Block-->
                    <thead>
                    <tr class="fs-4 fw-bolder text-dark p-6">
                        <th class="min-w-400px">Name</th>
                        <th class="min-w-400px">Link</th>
                        <th class="min-w-100px">Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($composer as $reference)
                        <tr class="p-6">
                            <td><code>{{ $reference['name'] }}</code></td>
                            <td>
                                <a href="{{ $reference['url'] }}" target="_blank">{{ $reference['url'] }}</a>
                            </td>
                            <td>v{{ $reference['version'] }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                    <!--end::Block-->
                </table>
            </div>
        </div>
        <!--end::Table-->
    </div>
    <!--end::Section-->

    <!--begin::Section-->
    <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-2" id="overview">
            <a href="#overview"></a>
            NPM Packages
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-5">
            {!! theme()->getProductNameHtml() !!} uses the following open source resources:
        </div>

        <!--begin::Table-->
        <div class="py-5">
            <div class="table-responsive border rounded">
                <table class="table table-striped table-flush align-middle mb-0">
                    <!--begin::Block-->
                    <thead>
                    <tr class="fs-4 fw-bolder text-dark p-6">
                        <th class="min-w-400px">Name</th>
                        <th class="min-w-400px">Link</th>
                        <th class="min-w-100px">Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($npm as $reference)
                        <tr class="p-6">
                            <td><code>{{ $reference['name'] }}</code></td>
                            <td>
                                <a href="{{ $reference['url'] }}" target="_blank">{{ $reference['url'] }}</a>
                            </td>
                            <td>v{{ $reference['version'] }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                    <!--end::Block-->
                </table>
            </div>
        </div>
        <!--end::Table-->
    </div>
    <!--end::Section-->

</x-base-layout>
