<template>
  <!--begin::Modal - View Users-->
  <div
    class="modal fade"
    id="kt_modal_view_users"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
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
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Heading-->
          <div class="text-center mb-13">
            <!--begin::Title-->
            <h1 class="mb-3">Browse Users</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="text-gray-400 fw-bold fs-5">
              If you need more info, please check out our
              <a href="#" class="link-primary fw-bolder">Users Directory</a>.
            </div>
            <!--end::Description-->
          </div>
          <!--end::Heading-->

          <!--begin::Users-->
          <div class="mb-15">
            <!--begin::List-->
            <div class="mh-375px scroll-y me-n7 pe-7">
              <template v-for="(user, index) in users" :key="index">
                <!--begin::User-->
                <div
                  class="
                    d-flex
                    flex-stack
                    py-5
                    border-bottom border-gray-300 border-bottom-dashed
                  "
                >
                  <!--begin::Details-->
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                      <img v-if="user.avatar" alt="Pic" :src="user.avatar" />
                      <span
                        v-else
                        :class="`bg-light-${user.state} text-${user.state}`"
                        class="symbol-label fw-bold"
                      >
                        {{ user.name.charAt(0) }}
                      </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-6">
                      <!--begin::Name-->
                      <a
                        href="#"
                        class="
                          d-flex
                          align-items-center
                          fs-5
                          fw-bolder
                          text-dark text-hover-primary
                        "
                      >
                        {{ user.name }}

                        <span class="badge badge-light fs-8 fw-bold ms-2">
                          {{ user.position }}
                        </span>
                      </a>
                      <!--end::Name-->

                      <!--begin::Email-->
                      <div class="fw-bold text-gray-400">{{ user.email }}</div>
                      <!--end::Email-->
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::Details-->

                  <!--begin::Stats-->
                  <div class="d-flex">
                    <!--begin::Sales-->
                    <div class="text-end">
                      <div class="fs-5 fw-bolder text-dark">
                        ${{ user.sales }}
                      </div>

                      <div class="fs-7 text-muted">Sales</div>
                    </div>
                    <!--end::Sales-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::User-->
              </template>
            </div>
            <!--end::List-->
          </div>
          <!--end::Users-->

          <!--begin::Notice-->
          <div class="d-flex justify-content-between">
            <!--begin::Label-->
            <div class="fw-bold">
              <label class="fs-6">Adding Users by Team Members</label>

              <div class="fs-7 text-gray-400">
                If you need more info, please check budget planning
              </div>
            </div>
            <!--end::Label-->

            <!--begin::Switch-->
            <label
              class="form-check form-switch form-check-custom form-check-solid"
            >
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                checked="checked"
              />

              <span class="form-check-label fw-bold text-gray-400">
                Allowed
              </span>
            </label>
            <!--end::Switch-->
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - View Users-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "view-users-modal",
  components: {},
  setup() {
    const users = [
      {
        avatar: "media/avatars/150-1.jpg",
        name: "Emma Smith",
        email: "e.smith@kpmg.com.au",
        position: "Art Director",
        sales: "23,000",
      },
      {
        state: "danger",
        name: "Melody Macy",
        email: "melody@altbox.com",
        position: "Marketing Analytic",
        sales: "50,500",
      },
      {
        avatar: "media/avatars/150-2.jpg",
        name: "Max Smith",
        email: "max@kt.com",
        position: "Software Enginer",
        sales: "75,900",
      },
      {
        avatar: "media/avatars/150-2.jpg",
        name: "Sean Bean",
        email: "sean@dellito.com",
        position: "Web Developer",
        sales: "10,500",
      },
      {
        avatar: "media/avatars/150-15.jpg",
        name: "Brian Cox",
        email: "brian@exchange.com",
        position: "UI/UX Designer",
        sales: "20,000",
      },
      {
        state: "warning",
        name: "Mikaela Collins",
        email: "mikaela@pexcom.com",
        position: "Head Of Marketing",
        sales: "9,300",
      },
      {
        avatar: "media/avatars/150-8.jpg",
        name: "Francis Mitcham",
        email: "f.mitcham@kpmg.com.au",
        position: "Software Arcitect",
        sales: "15,000",
      },
      {
        state: "danger",
        name: "Olivia Wild",
        email: "olivia@corpmail.com",
        position: "System Admin",
        sales: "23,000",
      },
      {
        state: "info",
        name: "Neil Owen",
        email: "owen.neil@gmail.com",
        position: "Account Manager",
        sales: "45,000",
      },
      {
        avatar: "media/avatars/150-6.jpg",
        name: "Dan Wilson",
        email: "dam@consilting.com",
        position: "Web Desinger",
        sales: "90,500",
      },
      {
        state: "danger",
        name: "Emma Bold",
        email: "emma@intenso.com",
        position: "Corporate Finance",
        sales: "5,000",
      },
      {
        avatar: "media/avatars/150-7.jpg",
        name: "Ana Crown",
        email: "ana.cf@limtel.com",
        position: "Customer Relationship",
        sales: "70,000",
      },
      {
        state: "primary",
        name: "Robert Doe",
        email: "robert@benko.com",
        position: "Marketing Executive",
        sales: "45,500",
      },
    ];

    return {
      users,
    };
  },
});
</script>
