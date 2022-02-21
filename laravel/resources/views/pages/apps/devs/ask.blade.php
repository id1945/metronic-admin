<x-base-layout>

    <!--begin:Form-->
    <form id="kt_devs_ask_form" class="form" action="javascript:void(0)">
        <!--begin::Input group-->
        <div class="d-flex flex-column mb-8 fv-row">
            <!--begin::Label-->
            <label class="d-flex align-items-center mb-2">
                <span class="text-gray-700 fs-6 fw-bolder required">Title</span>

                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your question's title"></i>
            </label>
            <!--end::Label-->

            <!--begin::Form control-->
            <input type="text" class="form-control" placeholder="Your question title" name="title"/>
            <!--end::Form control-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-8">
            <!--begin::Label-->
            <label class="mb-2">
                <span class="text-gray-700 fs-6 fw-bolder required">Question</span>
            </label>
            <!--end::Label-->

            <!--begin::Form control-->
            <div class="fv-row">
                <textarea class="form-control mb-3" rows="10" name="question" placeholder="Please specify your question" data-kt-autosize="true"></textarea>
            </div>
            <!--end::Form control-->

            <!--begin::Formating toggle-->
            <div class="text-primary fs-base fw-bold cursor-pointer" data-bs-toggle="collapse" data-bs-target="#kt_devs_ask_formatting">
                Text formatting options
            </div>
            <!--end::Formating toggle-->

            {{ theme()->getView('pages/apps/devs/_text-formatting') }}
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-8">
            <!--begin::Label-->
            <label class="mb-2">
                <span class="text-gray-700 fs-6 fw-bolder">Product</span>
                <span class="text-muted fs-7">(optional)</span>
            </label>
            <!--end::Label-->

            <!--begin::Form control-->
            <select class="form-select" data-control="select2" data-placeholder="Select a product" name="product">
                <option value=""></option>
                <option value="1">HTML</option>
                <option value="1">Angular</option>
                <option value="2">React</option>
                <option value="3">Laravel</option>
                <option value="4">Vue</option>
                <option value="5">Django</option>
                <option value="5">Aspdotnet</option>
                <option value="5">Rails</option>
            </select>
            <!--end::Form control-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-8 fv-row">
            <!--begin::Label-->
            <label class="mb-2">
                <span class="text-gray-700 fs-6 fw-bolder">Tags</span>
                <span class="text-muted fs-7">(optional)</span>
            </label>
            <!--end::Label-->

            <!--begin::Form control-->
            <input class="form-control" placeholder="E.g:  PHP, React, Vue" name="tags"/>
            <!--end::Form control-->
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="d-flex flex-stack">
            <!--begin::Public-->
            <label class="form-check form-switch form-check-custom form-check-solid">
                <input class="form-check-input" type="checkbox" name="public" value="1" checked="checked"/>
                <span class="form-check-label fs-7 fw-bolder text-gray-800">
                Public

                <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" data-bs-dismiss="click" title="Make your question public to help others with solutions"></i>
            </span>
            </label>
            <!--end::Public-->

            <!--begin::Submit-->
            <button type="submit" id="kt_devs_ask_submit" class="btn btn-primary">
                {{ theme()->getView('partials/general/_button-indicator') }}
            </button>
            <!--begin::Submit-->
        </div>
        <!--end::Actions-->
    </form>
    <!--end:Form-->

</x-base-layout>
