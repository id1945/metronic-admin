<!--begin::Options-->
<div data-kt-element="options">
    <!--begin::Notice-->
    <p class="text-gray-400 fs-5 fw-bold mb-10">
        In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account.
    </p>
    <!--end::Notice-->

    <!--begin::Wrapper-->
    <div class="pb-10">
        <!--begin::Option-->
        <input type="radio" class="btn-check" name="auth_option" value="apps" checked="checked"  id="kt_modal_two_factor_authentication_option_1"/>
        <label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5" for="kt_modal_two_factor_authentication_option_1">
            <?php echo theme()->getSvgIcon("icons/duotune/coding/cod001.svg", "svg-icon-4x me-4")?>

            <span class="d-block fw-bold text-start">
                <span class="text-dark fw-bolder d-block fs-3">Authenticator Apps</span>
                <span class="text-gray-400 fw-bold fs-6">
                    Get codes from an app like Google Authenticator,  Microsoft Authenticator, Authy or 1Password.
                </span>
            </span>
        </label>
        <!--end::Option-->

        <!--begin::Option-->
        <input type="radio" class="btn-check" name="auth_option" value="sms" id="kt_modal_two_factor_authentication_option_2"/>
        <label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center" for="kt_modal_two_factor_authentication_option_2">
            <?php echo theme()->getSvgIcon("icons/duotune/communication/com003.svg", "svg-icon-4x me-4")?>

            <span class="d-block fw-bold text-start">
                <span class="text-dark fw-bolder d-block fs-3">SMS</span>
                <span class="text-gray-400 fw-bold fs-6">We will send a code via SMS if you need to use your backup login method.</span>
            </span>
        </label>
        <!--end::Option-->
    </div>
    <!--end::Options-->

    <!--begin::Action-->
    <button class="btn btn-primary w-100" data-kt-element="options-select">Continue</button>
    <!--end::Action-->
</div>
<!--end::Options-->
