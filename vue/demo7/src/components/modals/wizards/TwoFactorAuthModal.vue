<template>
  <!--begin::Modal - Two-factor authentication-->
  <div
    class="modal fade"
    id="kt_modal_two_factor_authentication"
    tabindex="-1"
    aria-hidden="true"
  >
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
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y pt-10 pb-15 px-lg-17">
          <!--begin::Options-->
          <div :class="[state !== '' && 'd-none']">
            <!--begin::Notice-->
            <p class="text-gray-400 fs-5 fw-bold mb-10">
              In addition to your username and password, you’ll have to enter a
              code (delivered via app or SMS) to log into your account.
            </p>
            <!--end::Notice-->

            <!--begin::Wrapper-->
            <div class="pb-10">
              <!--begin::Option-->
              <input
                type="radio"
                class="btn-check"
                name="auth_option"
                value="apps"
                checked="checked"
                id="kt_modal_two_factor_authentication_option_1"
                v-model="value"
              />
              <label
                class="
                  btn btn-outline btn-outline-dashed btn-outline-default
                  p-7
                  d-flex
                  align-items-center
                  mb-5
                "
                for="kt_modal_two_factor_authentication_option_1"
              >
                <span class="svg-icon svg-icon-4x me-4">
                  <inline-svg src="media/icons/duotune/coding/cod001.svg" />
                </span>

                <span class="d-block fw-bold text-start">
                  <span class="text-dark fw-bolder d-block fs-3"
                    >Authenticator Apps</span
                  >
                  <span class="text-gray-400 fw-bold fs-6">
                    Get codes from an app like Google Authenticator, Microsoft
                    Authenticator, Authy or 1Password.
                  </span>
                </span>
              </label>
              <!--end::Option-->

              <!--begin::Option-->
              <input
                type="radio"
                class="btn-check"
                name="auth_option"
                value="sms"
                id="kt_modal_two_factor_authentication_option_2"
                v-model="value"
              />
              <label
                class="
                  btn btn-outline btn-outline-dashed btn-outline-default
                  p-7
                  d-flex
                  align-items-center
                "
                for="kt_modal_two_factor_authentication_option_2"
              >
                <span class="svg-icon svg-icon-4x me-4">
                  <inline-svg
                    src="media/icons/duotune/communication/com003.svg"
                  />
                </span>

                <span class="d-block fw-bold text-start">
                  <span class="text-dark fw-bolder d-block fs-3">SMS</span>
                  <span class="text-gray-400 fw-bold fs-6"
                    >We will send a code via SMS if you need to use your backup
                    login method.</span
                  >
                </span>
              </label>
              <!--end::Option-->
            </div>
            <!--end::Options-->

            <!--begin::Action-->
            <button @click="state = value" class="btn btn-primary w-100">
              Continue
            </button>
            <!--end::Action-->
          </div>
          <!--end::Options-->

          <!--begin::Apps-->
          <div :class="[state !== 'apps' && 'd-none']" data-kt-element="apps">
            <!--begin::Heading-->
            <h3 class="text-dark fw-bolder mb-7">Authenticator Apps</h3>
            <!--end::Heading-->

            <!--begin::Description-->
            <div class="text-gray-500 fw-bold fs-6 mb-10">
              Using an authenticator app like
              <a
                href="https://support.google.com/accounts/answer/1066447?hl=en"
                target="_blank"
                >Google Authenticator</a
              >,
              <a
                href="https://www.microsoft.com/en-us/account/authenticator"
                target="_blank"
                >Microsoft Authenticator</a
              >,
              <a href="https://authy.com/download/" target="_blank">Authy</a>,
              or
              <a
                href="https://support.1password.com/one-time-passwords/"
                target="_blank"
                >1Password</a
              >, scan the QR code. It will generate a 6 digit code for you to
              enter below.

              <!--begin::QR code image-->
              <div class="pt-5 text-center">
                <img src="media/misc/qr.png" alt="" class="mw-150px" />
              </div>
              <!--end::QR code image-->
            </div>
            <!--end::Description-->

            <div
              class="
                notice
                d-flex
                bg-light-warning
                rounded
                border-warning border border-dashed
                mb-10
                p-6
              "
            >
              <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                <inline-svg src="media/icons/duotune/general/gen044.svg" />
              </span>
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack flex-grow-1">
                <!--begin::Content-->
                <div class="fw-bold">
                  <div class="fs-6 text-gray-600">
                    If you having trouble using the QR code, select manual entry
                    on your app, and enter your username and the code:
                    <div class="fw-bolder text-dark pt-2">
                      KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN
                    </div>
                  </div>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>

            <!--begin::Form-->
            <Form
              class="form"
              @submit="submitAuthCodeForm()"
              :validation-schema="schema2"
            >
              <!--begin::Input group-->
              <div class="mb-10 fv-row">
                <Field
                  type="text"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="Enter authentication code"
                  name="code"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="code" />
                  </div>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Actions-->
              <div class="d-flex flex-center">
                <button
                  type="reset"
                  @click="state = ''"
                  class="btn btn-white me-3"
                >
                  Cancel
                </button>

                <button
                  ref="submitAuthCodeButtonRef"
                  type="submit"
                  data-kt-element="apps-submit"
                  class="btn btn-primary"
                >
                  <span class="indicator-label"> Submit </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </Form>
            <!--end::Form-->
          </div>
          <!--end::Options-->

          <!--begin::SMS-->
          <div :class="[state !== 'sms' && 'd-none']" data-kt-element="sms">
            <!--begin::Heading-->
            <h3 class="text-dark fw-bolder fs-3 mb-5">
              SMS: Verify Your Mobile Number
            </h3>
            <!--end::Heading-->

            <!--begin::Notice-->
            <div class="text-gray-400 fw-bold mb-10">
              Enter your mobile phone number with country code and we will send
              you a verification code upon request.
            </div>
            <!--end::Notice-->

            <!--begin::Form-->
            <Form
              class="form"
              @submit="submitMobileForm()"
              :validation-schema="schema1"
            >
              <!--begin::Input group-->
              <div class="mb-10 fv-row">
                <Field
                  type="text"
                  class="form-control form-control-lg form-control-solid"
                  placeholder="Mobile number with country code..."
                  name="mobile"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="mobile" />
                  </div>
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Actions-->
              <div class="d-flex flex-center">
                <button @click="state = ''" class="btn btn-white me-3">
                  Cancel
                </button>

                <button
                  ref="submitMobileButtonRef"
                  type="submit"
                  data-kt-element="sms-submit"
                  class="btn btn-primary"
                >
                  <span class="indicator-label"> Submit </span>
                  <span class="indicator-progress">
                    Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
              </div>
              <!--end::Actions-->
            </Form>
            <!--end::Form-->
          </div>
          <!--end::SMS-->
        </div>
        <!--begin::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal header-->
  </div>
  <!--end::Modal - Two-factor authentication-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as Yup from "yup";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "two-factor-auth-modal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const value = ref("apps");

    const state = ref("");

    const submitAuthCodeButtonRef = ref<null | HTMLButtonElement>(null);
    const submitMobileButtonRef = ref<null | HTMLButtonElement>(null);

    const schema1 = Yup.object().shape({
      mobile: Yup.string().required().label("Mobile"),
    });

    const schema2 = Yup.object().shape({
      code: Yup.string().required().label("Code"),
    });

    const submitAuthCodeForm = () => {
      if (submitAuthCodeButtonRef.value) {
        // Activate indicator
        submitAuthCodeButtonRef.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitAuthCodeButtonRef.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Form has been successfully submitted!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(() => {
            state.value = "";
          });
        }, 2000);
      }
    };

    const submitMobileForm = () => {
      if (!submitMobileButtonRef.value) {
        return;
      }

      //Disable button
      submitMobileButtonRef.value.disabled = true;
      // Activate indicator
      submitMobileButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitMobileButtonRef.value) {
          submitMobileButtonRef.value.disabled = false;

          submitMobileButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          state.value = "";
        });
      }, 2000);
    };

    return {
      value,
      state,
      schema1,
      schema2,
      submitAuthCodeForm,
      submitMobileForm,
      submitAuthCodeButtonRef,
      submitMobileButtonRef,
    };
  },
});
</script>
