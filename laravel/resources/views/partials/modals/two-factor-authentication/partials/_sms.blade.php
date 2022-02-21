<!--begin::SMS-->
<div class="d-none" data-kt-element="sms">
    <!--begin::Heading-->
    <h3 class="text-dark fw-bolder fs-3 mb-5">
        SMS: Verify Your Mobile Number
    </h3>
    <!--end::Heading-->

    <!--begin::Notice-->
    <div class="text-gray-400 fw-bold mb-10">
        Enter your mobile phone number with country code and we will send you a verification code upon request.
    </div>
    <!--end::Notice-->

    <!--begin::Form-->
    <form data-kt-element="sms-form" class="form" action="#">
        <!--begin::Input group-->
        <div class="mb-10 fv-row">
            <input type="text" class="form-control form-control-lg form-control-solid" placeholder="Mobile number with country code..." name="mobile"/>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="d-flex flex-center">
            <button type="reset" data-kt-element="sms-cancel" class="btn btn-white me-3">
                Cancel
            </button>

            <button type="submit" data-kt-element="sms-submit" class="btn btn-primary">
                @include('partials.general._button-indicator')
            </button>
        </div>
        <!--end::Actions-->
    </form>
    <!--end::Form-->
</div>
<!--end::SMS-->
