<!--begin::Modal - Two-factor authentication-->
<div class="modal fade" id="kt_modal_two_factor_authentication" tabindex="-1" aria-hidden="true">
    <!--begin::Modal header-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
            <!--begin::Modal header-->
            <div class="modal-header flex-stack">
                <!--begin::Title-->
                <h2>Choose An Authentication Method</h2>
                <!--end::Title-->

                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {!! theme()->getSvgIcon("icons/duotune/arrows/arr061.svg", "svg-icon-1") !!}
                </div>
                <!--end::Close-->
            </div>
            <!--begin::Modal header-->

            <!--begin::Modal body-->
            <div class="modal-body scroll-y pt-10 pb-15 px-lg-17">
                {{ theme()->getView('partials/modals/two-factor-authentication/partials/_options') }}

                {{ theme()->getView('partials/modals/two-factor-authentication/partials/_app') }}

                {{ theme()->getView('partials/modals/two-factor-authentication/partials/_sms') }}
            </div>
            <!--begin::Modal body-->
        </div>
        <!--end::Modal content-->
    </div>
    <!--end::Modal header-->
</div>
<!--end::Modal - Two-factor authentication-->
