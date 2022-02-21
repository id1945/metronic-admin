<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_new_card"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Modal title-->
          <h2>Add New Card</h2>
          <!--end::Modal title-->

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
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <!--begin::Form-->
          <Form
            id="kt_modal_new_card_form"
            class="form"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label
                class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
              >
                <span class="required">Name On Card</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a card holder's name"
                ></i>
              </label>
              <!--end::Label-->

              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder=""
                name="nameOnCard"
                v-model="cardData.nameOnCard"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nameOnCard" />
                </div>
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label class="required fs-6 fw-bold form-label mb-2"
                >Card Number</label
              >
              <!--end::Label-->

              <!--begin::Input wrapper-->
              <div class="position-relative">
                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="Enter card number"
                  name="cardNumber"
                  v-model="cardData.cardNumber"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="cardNumber" />
                  </div>
                </div>
                <!--end::Input-->

                <!--begin::Card logos-->
                <div
                  class="position-absolute translate-middle-y top-50 end-0 me-5"
                >
                  <img
                    src="media/svg/card-logos/visa.svg"
                    alt=""
                    class="h-25px"
                  />
                  <img
                    src="media/svg/card-logos/mastercard.svg"
                    alt=""
                    class="h-25px"
                  />
                  <img
                    src="media/svg/card-logos/american-express.svg"
                    alt=""
                    class="h-25px"
                  />
                </div>
                <!--end::Card logos-->
              </div>
              <!--end::Input wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-10">
              <!--begin::Col-->
              <div class="col-md-8 fv-row">
                <!--begin::Label-->
                <label class="required fs-6 fw-bold form-label mb-2"
                  >Expiration Date</label
                >
                <!--end::Label-->

                <!--begin::Row-->
                <div class="row fv-row">
                  <!--begin::Col-->
                  <div class="col-6">
                    <Field
                      v-model="cardData.expirationMonth"
                      name="expirationMonth"
                      class="form-select form-select-solid"
                      data-control="select2"
                      data-hide-search="true"
                      data-placeholder="Month"
                      as="select"
                    >
                      <option></option>
                      <template v-for="i in 12" :key="i">
                        <option :value="i">{{ i }}</option>
                      </template>
                    </Field>
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="expirationMonth" />
                      </div>
                    </div>
                  </div>
                  <!--end::Col-->

                  <!--begin::Col-->
                  <div class="col-6">
                    <Field
                      v-model="cardData.expirationYear"
                      name="expirationYear"
                      class="form-select form-select-solid"
                      data-control="select2"
                      data-hide-search="true"
                      data-placeholder="Year"
                      as="select"
                    >
                      <option></option>
                      <template v-for="i in 10" :key="i">
                        <option :value="new Date().getFullYear() + i">
                          {{ new Date().getFullYear() + i }}
                        </option>
                      </template>
                    </Field>
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="expirationYear" />
                      </div>
                    </div>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-md-4 fv-row">
                <!--begin::Label-->
                <label
                  class="d-flex align-items-center fs-6 fw-bold form-label mb-2"
                >
                  <span class="required">CVV</span>
                  <i
                    class="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Enter a card CVV code"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input wrapper-->
                <div class="position-relative">
                  <!--begin::Input-->
                  <Field
                    v-model="cardData.cvv"
                    type="text"
                    class="form-control form-control-solid"
                    minlength="3"
                    maxlength="4"
                    placeholder="CVV"
                    name="cvv"
                  />
                  <!--end::Input-->

                  <!--begin::CVV icon-->
                  <div
                    class="
                      position-absolute
                      translate-middle-y
                      top-50
                      end-0
                      me-3
                    "
                  >
                    <span class="svg-icon svg-icon-2hx">
                      <inline-svg
                        src="media/icons/duotune/finance/fin002.svg"
                      />
                    </span>
                  </div>
                  <!--end::CVV icon-->
                </div>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="cvv" />
                  </div>
                </div>
                <!--end::Input wrapper-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-stack">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-bold form-label"
                  >Save Card for further billing?</label
                >
                <div class="fs-7 fw-bold text-gray-400">
                  If you need more info, please check budget planning
                </div>
              </div>
              <!--end::Label-->

              <!--begin::Switch-->
              <label
                class="
                  form-check form-switch form-check-custom form-check-solid
                "
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  checked="checked"
                />
                <span class="form-check-label fw-bold text-gray-400">
                  Save Card
                </span>
              </label>
              <!--end::Switch-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center pt-15">
              <button
                type="reset"
                id="kt_modal_new_card_cancel"
                class="btn btn-white me-3"
              >
                Discard
              </button>

              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
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
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

export default defineComponent({
  name: "new-card-modal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const cardData = ref<CardData>({
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      expirationMonth: "",
      expirationYear: "",
      cvv: "",
    });

    const validationSchema = Yup.object().shape({
      nameOnCard: Yup.string().required().label("Name"),
      cardNumber: Yup.string().required().label("Card number"),
      expirationMonth: Yup.string().required().label("Month"),
      expirationYear: Yup.string().required().label("Year"),
      cvv: Yup.string().required().label("CVV"),
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
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
          hideModal(newCardModalRef.value);
        });
      }, 2000);
    };

    return {
      cardData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>
