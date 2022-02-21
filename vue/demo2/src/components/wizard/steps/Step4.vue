<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Billing Details</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please check out
        <a href="#" class="text-primary fw-bolder">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <div class="w-100">
      <!--begin::Input group-->
      <div class="d-flex flex-column mb-7 fv-row">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
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
        />
        <ErrorMessage
          class="fv-plugins-message-container invalid-feedback"
          name="nameOnCard"
        />
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="d-flex flex-column mb-7 fv-row">
        <!--begin::Label-->
        <label class="required fs-6 fw-bold form-label mb-2">Card Number</label>
        <!--end::Label-->

        <!--begin::Input wrapper-->
        <div class="position-relative">
          <!--begin::Input-->
          <Field
            type="text"
            class="form-control form-control-solid"
            placeholder="Enter card number"
            name="cardNumber"
          />
          <ErrorMessage
            class="fv-plugins-message-container invalid-feedback"
            name="cardNumber"
          />
          <!--end::Input-->

          <!--begin::Card logos-->
          <div class="position-absolute translate-middle-y top-50 end-0 me-5">
            <img src="media/svg/card-logos/visa.svg" alt="" class="h-25px" />
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
                name="cardExpiryMonth"
                class="form-select form-select-solid select2-hidden-accessible"
                placeholder="Month"
                as="select"
              >
                <option v-for="i in 12" :key="i" :label="i" :value="i"></option>
              </Field>
              <ErrorMessage
                class="fv-plugins-message-container invalid-feedback"
                name="cardExpiryMonth"
              />
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-6">
              <Field
                name="cardExpiryYear"
                class="form-select form-select-solid select2-hidden-accessible"
                placeholder="Year"
                as="select"
              >
                <option
                  v-for="i in 10"
                  :key="i"
                  :label="i + (new Date().getFullYear() - 1)"
                  :value="i"
                ></option>
              </Field>
              <ErrorMessage
                class="fv-plugins-message-container invalid-feedback"
                name="cardExpiryYear"
              />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-md-4 fv-row">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
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
              type="text"
              class="form-control form-control-solid"
              minlength="3"
              maxlength="4"
              placeholder="CVV"
              name="cardCvv"
            />
            <ErrorMessage
              class="fv-plugins-message-container invalid-feedback"
              name="cardCvv"
            />
            <!--end::Input-->

            <!--begin::CVV icon-->
            <div class="position-absolute translate-middle-y top-50 end-0 me-3">
              <span class="svg-icon svg-icon-2hx">
                <inline-svg src="media/icons/duotune/finance/fin002.svg" />
              </span>
            </div>
            <!--end::CVV icon-->
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
          class="form-check form-switch form-check-custom form-check-solid"
        >
          <Field
            type="checkbox"
            class="form-check-input"
            name="saveCard"
            value="1"
          />
          <span class="form-check-label fw-bold text-gray-400">
            Save Card
          </span>
        </label>
        <!--end::Switch-->
      </div>
      <!--end::Input group-->
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-4",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
