<!--begin::Page title-->
<div id="kt_page_title" class="d-flex bg-white p-5 p-md-0 rounded mb-5 mb-md-0 {{ @$params['class'] }}" {{ theme()->printHtmlAttributes("page-title") }}>
    <!--begin::Wrapper-->
    <div class="d-flex align-items-center text-nowrap me-6">
        <!--begin::Label-->
        <span class="fs-7 fw-bolder text-gray-700 pe-4">Project:</span>
        <!--end::Label-->

        <!--begin::Select-->
        <select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="The Sky 2021" data-hide-search="true">
            <option value=""></option>
            <option value="1" selected>The Sky 2021</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
        </select>
        <!--end::Select-->
    </div>
    <!--end::Wrapper-->

    <!--begin::Wrapper-->
    <div class="d-flex align-items-center text-nowrap">
        <!--begin::Label-->
        <span class="fs-7 fw-bolder text-gray-700 pe-4">Team:</span>
        <!--end::Label-->

        <!--begin::Select-->
        <select class="form-select form-select-sm form-select-solid w-125px" data-control="select2" data-placeholder="UnWork" data-hide-search="true">
            <option value=""></option>
            <option value="1" selected>UnWork</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
        </select>
        <!--end::Select-->
    </div>
    <!--end::Wrapper-->
</div>
<!--end::Page title-->
