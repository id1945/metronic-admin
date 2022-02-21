<x-base-layout>

    <!--begin:Search form-->
    <form id="kt_devs_search_form" class="form mb-6" action="{{ theme()->getPageUrl('apps/devs/search') }}">
        <div class="d-flex">
            <input type="hidden" name="demo" value="{{ theme()->getDemo() }}">

            <!--begin::Form control-->
            <input type="text" class="form-control flex-grow-1 me-5" placeholder="Enter search query" name="query"/>
            <!--end::Form control-->

            <!--begin::Submit-->
            <button type="submit" id="kt_devs_ask_submit" class="btn btn-primary flex-shrink-0">
                Search Again
            </button>
            <!--begin::Submit-->
        </div>
    </form>
    <!--end:Search form-->

    <!--begin:Search info-->
    <div class="fw-bold fw-base text-gray-600">56 results found for keyword “Laravel”</div>
    <!--end:Search info-->

    <!--begin::Separator-->
    <div class="separator separator-dashed border-gray-300 my-6"></div>
    <!--end::Separator-->

    {{ theme()->getView('pages/apps/devs/_questions') }}

</x-base-layout>
