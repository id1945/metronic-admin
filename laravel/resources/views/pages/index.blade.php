<x-base-layout>

    <!--begin::Row-->
    <div class="row gy-5 g-xl-8">
        <!--begin::Col-->
        <div class="col-xxl-4">
            {{ theme()->getView('partials/widgets/mixed/_widget-2', array('class' => 'card-xxl-stretch', 'chartColor' => 'danger', 'chartHeight' => '200px')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xxl-4">
            {{ theme()->getView('partials/widgets/lists/_widget-5', array('class' => 'card-xxl-stretch')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xxl-4">
            {{ theme()->getView('partials/widgets/mixed/_widget-7', array('class' => 'card-xxl-stretch-50 mb-5 mb-xl-8', 'chartColor' => 'primary', 'chartHeight' => '150px')) }}

            {{ theme()->getView('partials/widgets/mixed/_widget-10', array('class' => 'card-xxl-stretch-50 mb-5 mb-xl-8', 'chartColor' => 'primary', 'chartHeight' => '175px')) }}
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row gy-5 gx-xl-8">
        <!--begin::Col-->
        <div class="col-xxl-4">
            {{ theme()->getView('partials/widgets/lists/_widget-3', array('class' => 'card-xxl-stretch mb-xl-3')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-8">
            {{ theme()->getView('partials/widgets/tables/_widget-9', array('class' => 'card-xxl-stretch mb-5 mb-xl-8')) }}
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row gy-5 g-xl-8">
        <!--begin::Col-->
        <div class="col-xl-4">
            {{ theme()->getView('partials/widgets/lists/_widget-2', array('class' => 'card-xl-stretch mb-xl-8')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-4">
            {{ theme()->getView('partials/widgets/lists/_widget-6', array('class' => 'card-xl-stretch mb-xl-8')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-4">
            {{ theme()->getView('partials/widgets/lists/_widget-4', array('class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5')) }}
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row g-5 gx-xxl-8">
        <!--begin::Col-->
        <div class="col-xxl-4">
            {{ theme()->getView('partials/widgets/mixed/_widget-5', array('class' => 'card-xxl-stretch mb-xl-3', 'chartColor' => 'success', 'chartHeight' => '150px')) }}
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xxl-8">
            {{ theme()->getView('partials/widgets/tables/_widget-5', array('class' => 'card-xxl-stretch mb-5 mb-xxl-8')) }}
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

</x-base-layout>
