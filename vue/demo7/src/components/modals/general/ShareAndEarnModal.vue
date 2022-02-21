<template>
  <!--begin::Modal - Share & Earn-->
  <div
    class="modal fade"
    id="kt_modal_share_earn"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-800px">
      <!--begin::Modal content-->
      <div class="modal-content">
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
        <div class="modal-body scroll-y pt-0 pb-15">
          <!--begin::Wrapper-->
          <div class="mw-lg-600px mx-auto">
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">Share & Earn</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <div class="text-gray-400 fw-bold fs-5">
                If you need more info, please check
                <a href="#" class="link-primary fw-bolder">Author Commision</a>.
              </div>
              <!--end::Description-->
            </div>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="mb-10">
              <!--begin::Title-->
              <h4 class="fs-5 fw-bold text-gray-800">
                Share my referral link with friends
              </h4>
              <!--end::Title-->

              <!--begin::Title-->
              <div class="d-flex">
                <input
                  ref="inputRef"
                  id="kt_share_earn_link_input"
                  type="text"
                  class="form-control form-control-solid me-3 flex-grow-1"
                  name="search"
                  value="https://keenthemes.com/?ref=skitechnology"
                />

                <button
                  ref="copyButtonRef"
                  id="kt_share_earn_link_copy_button"
                  class="btn btn-light fw-bolder flex-shrink-0"
                  data-clipboard-target="#kt_share_earn_link_input"
                >
                  Copy Link
                </button>
              </div>
              <!--end::Title-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="d-flex">
              <a href="#" class="btn btn-light-primary w-100">
                <img
                  alt="Logo"
                  src="media/svg/brand-logos/google-icon.svg"
                  class="h-15px me-3"
                />
                Import Contacts
              </a>

              <a href="#" class="btn btn-icon btn-facebook w-100 mx-6">
                <img
                  alt="Logo"
                  src="media/svg/brand-logos/facebook-2.svg"
                  class="h-20px me-3"
                />
                Facebook
              </a>

              <a href="#" class="btn btn-icon btn-twitter w-100">
                <img
                  alt="Logo"
                  src="media/svg/brand-logos/twitter.svg"
                  class="h-20px me-3"
                />
                Twitter
              </a>
            </div>
            <!--end::Actions-->

            <!--begin::Input group-->
            <div class="d-flex align-items-center mt-10">
              <!--begin::Label-->
              <div class="flex-grow-1">
                <span class="fs-6 fw-bold text-gray-800 d-block"
                  >Adding Users by Team Members</span
                >

                <span class="fs-7 fw-bold text-gray-400"
                  >If you need more info, please check budget planning</span
                >
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
                <span class="form-check-label"> Allowed </span>
              </label>
              <!--end::Switch-->
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Share & Earn-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ClipboardJS from "clipboard";

export default defineComponent({
  name: "share-and-earn-modal",
  components: {},
  setup() {
    const copyButtonRef = ref<null | HTMLElement>(null);
    const inputRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      const clipboard = new ClipboardJS(copyButtonRef.value as Element);

      clipboard.on("success", function (e) {
        const buttonCaption = copyButtonRef.value?.innerHTML;
        //Add bgcolor
        inputRef.value?.classList.add("bg-success");
        inputRef.value?.classList.add("text-inverse-success");

        if (copyButtonRef.value) {
          copyButtonRef.value.innerHTML = "Copied!";
        }

        setTimeout(function () {
          if (copyButtonRef.value && buttonCaption) {
            copyButtonRef.value.innerHTML = buttonCaption;
          }

          // Remove bgcolor
          inputRef.value?.classList.remove("bg-success");
          inputRef.value?.classList.remove("text-inverse-success");
        }, 3000); // 3seconds

        e.clearSelection();
      });
    });

    return {
      copyButtonRef,
      inputRef,
    };
  },
});
</script>
