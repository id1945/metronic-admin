<template>
  <div
    class="modal fade"
    id="kt_customers_export_modal"
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
          <h2 class="fw-bolder">Export Customers</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_customers_export_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
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
          <el-form
            @submit.prevent="submit()"
            :model="formData"
            :rules="rules"
            ref="formRef"
          >
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5"
                >Select Date Range:</label
              >
              <!--end::Label-->

              <!--begin::Input-->
              <el-form-item prop="name">
                <el-date-picker type="daterange" v-model="formData.dateRange">
                </el-date-picker>
              </el-form-item>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5"
                >Select Export Format:</label
              >
              <!--end::Label-->

              <!--begin::Input-->
              <el-select v-model="formData.exportFormat" class="d-block">
                <el-option value="excel" key="excel" label="Excel" />
                <el-option value="pdf" key="pdf" label="PDF" />
                <el-option value="cvs" key="cvs" label="CVS" />
                <el-option value="zip" key="zip" label="ZIP" />
              </el-select>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Row-->
            <div class="row fv-row mb-15">
              <!--begin::Label-->
              <label class="fs-5 fw-bold form-label mb-5">Payment Type:</label>
              <!--end::Label-->

              <!--begin::Radio group-->
              <div class="d-flex flex-column">
                <el-radio
                  class="mb-5"
                  v-model="formData.paymentType"
                  label="All"
                ></el-radio>
                <el-radio
                  class="mb-5"
                  v-model="formData.paymentType"
                  label="Visa"
                ></el-radio>
                <el-radio
                  class="mb-5"
                  v-model="formData.paymentType"
                  label="Mastercard"
                ></el-radio>
                <el-radio
                  v-model="formData.paymentType"
                  label="American Express"
                ></el-radio>
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Row-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_customers_export_cancel"
                class="btn btn-light me-3"
              >
                Discard
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                type="submit"
                class="btn btn-lg btn-primary"
              >
                <span v-if="!loading" class="indicator-label">
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg src="icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Button-->
            </div>
            <!--end::Actions-->
          </el-form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<style lang="scss">
.el-date-editor--daterange.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "export-customers-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);
    const state = reactive({
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
    });

    const formData = ref({
      dateRange: [],
      exportFormat: "",
      paymentType: "",
    });

    const rules = ref({
      dateRange: [
        {
          required: true,
          message: "Date range is required",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              window.location.reload();
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      ...toRefs(state),
      formData,
      rules,
      submit,
      formRef,
      loading,
    };
  },
});
</script>
