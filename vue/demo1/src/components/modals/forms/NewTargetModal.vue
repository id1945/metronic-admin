<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    id="kt_modal_new_target"
    ref="newTargetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
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
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <el-form
            id="kt_modal_new_target_form"
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Set First Target</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-bold fs-5">
                If you need more info, please check
                <a href="#" class="fw-bolder link-primary">Project Guidelines</a
                >.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span class="required">Target Title</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target name for future usage and reference"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="targetTitle">
                <el-input
                  v-model="targetData.targetTitle"
                  placeholder="Enter Target Title"
                  name="targetTitle"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row g-9 mb-8">
              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-bold mb-2">Assign</label>

                <el-form-item prop="assign">
                  <el-select
                    v-model="targetData.assign"
                    placeholder="Select a Team Member"
                    name="assign"
                    as="select"
                  >
                    <el-option value="">Select user...</el-option>
                    <el-option label="Karina Clark" value="1"
                      >Karina Clark</el-option
                    >
                    <el-option label="Robert Doe" value="2"
                      >Robert Doe</el-option
                    >
                    <el-option label="Niel Owen" value="3">Niel Owen</el-option>
                    <el-option label="Olivia Wild" value="4"
                      >Olivia Wild</el-option
                    >
                    <el-option label="Sean Bean" value="5">Sean Bean</el-option>
                  </el-select>
                </el-form-item>
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-bold mb-2">Due Date</label>

                <!--begin::Input-->
                <div class="position-relative align-items-center">
                  <!--begin::Icon-->
                  <div class="symbol symbol-20px me-4 position-absolute ms-4">
                    <span class="symbol-label bg-secondary">
                      <span class="svg-icon">
                        <inline-svg
                          src="media/icons/duotune/general/gen025.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <!--end::Icon-->

                  <!--begin::Datepicker-->
                  <el-form-item prop="dueDate">
                    <el-date-picker
                      v-model="targetData.dueDate"
                      placeholder="Select a date"
                      name="dueDate"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
                </div>
                <!--end::Input-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
              <label class="fs-6 fw-bold mb-2">Target Details</label>

              <el-form-item prop="targetDetails">
                <el-input
                  v-model="targetData.targetDetails"
                  type="textarea"
                  rows="3"
                  name="targetDetails"
                  placeholder="Type Target Details"
                />
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-bold mb-2">
                <span class="required">Tags</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target priorty"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="tags">
                <el-select
                  v-model="targetData.tags"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="Choose tags for your target"
                >
                  <el-option label="Important" value="important"> </el-option>
                  <el-option label="Urgent" value="urgent"> </el-option>
                  <el-option label="high" value="high"> </el-option>
                  <el-option label="low" value="low"> </el-option>
                  <el-option label="medium" value="medium"> </el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-stack mb-8">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-bold">Adding Users by Team Members</label>

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
                  Allowed
                </span>
              </label>
              <!--end::Switch-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-15 fv-row">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack">
                <!--begin::Label-->
                <div class="fw-bold me-5">
                  <label class="fs-6">Notifications</label>

                  <div class="fs-7 text-gray-400">
                    Allow Notifications by Phone or Email
                  </div>
                </div>
                <!--end::Label-->

                <!--begin::Checkboxes-->
                <div class="d-flex align-items-center">
                  <!--begin::Checkbox-->
                  <label
                    class="form-check form-check-custom form-check-solid me-10"
                  >
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="email"
                      checked="checked"
                    />

                    <span class="form-check-label fw-bold"> Email </span>
                  </label>
                  <!--end::Checkbox-->

                  <!--begin::Checkbox-->
                  <label class="form-check form-check-custom form-check-solid">
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="phone"
                    />

                    <span class="form-check-label fw-bold"> Phone </span>
                  </label>
                  <!--end::Checkbox-->
                </div>
                <!--end::Checkboxes-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_modal_new_target_cancel"
                class="btn btn-white me-3"
              >
                Cancel
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
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
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface NewAddressData {
  targetTitle: string;
  assign: string;
  dueDate: string;
  targetDetails: string;
  tags: Array<string>;
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const targetData = ref<NewAddressData>({
      targetTitle: "",
      assign: "",
      dueDate: "",
      targetDetails: "",
      tags: ["important", "urgent"],
    });

    const rules = ref({
      targetTitle: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      assign: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      dueDate: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      tags: [
        {
          required: true,
          message: "Please select Activity zone",
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
              hideModal(newTargetModalRef.value);
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
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
    };
  },
});
</script>
