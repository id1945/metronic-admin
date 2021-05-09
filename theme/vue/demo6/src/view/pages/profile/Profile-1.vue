<template>
  <div class="d-flex flex-row">
    <div
      class="flex-row-auto offcanvas-mobile w-300px w-xl-350px"
      id="kt_profile_aside"
    >
      <div class="card card-custom card-stretch">
        <div class="card-body pt-4">
          <div class="d-flex justify-content-end">
            <KTDropdown2></KTDropdown2>
          </div>
          <div class="d-flex align-items-center">
            <div
              class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center"
            >
              <div
                class="symbol-label"
                :style="{
                  backgroundImage: `url(${currentUserPersonalInfo.photo})`
                }"
              ></div>
              <i class="symbol-badge bg-success"></i>
            </div>
            <div>
              <a
                class="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                >{{ getFullName }}</a
              >
              <div class="text-muted">Application Developer</div>
              <div class="mt-2">
                <a
                  class="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1"
                  >Chat</a
                >
                <a
                  class="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1"
                  >Follow</a
                >
              </div>
            </div>
          </div>
          <!--end::User-->
          <!--begin::Contact-->
          <div class="py-9">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="font-weight-bold mr-2">Email:</span>
              <a class="text-muted text-hover-primary">{{
                currentUserPersonalInfo.email
              }}</a>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="font-weight-bold mr-2">Phone:</span>
              <span class="text-muted">{{
                currentUserPersonalInfo.phone
              }}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="font-weight-bold mr-2">Company Name:</span>
              <span class="text-muted">{{
                currentUserPersonalInfo.company_name
              }}</span>
            </div>
          </div>
          <!--end::Contact-->
          <!--begin::Nav-->
          <div
            class="navi navi-bold navi-hover navi-active navi-link-rounded"
            role="tablist"
          >
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4 active"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="0"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Design/Layers.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Profile Overview</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="1"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/General/User.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Personal Information</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="2"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Account Information</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="3"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Shield-user.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Change Passwort</span>
                <span class="navi-label">
                  <span
                    class="label label-light-danger label-rounded font-weight-bold"
                    >5</span
                  >
                </span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                @click="setActiveTab"
                style="cursor:pointer"
                data-tab="4"
                data-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Communication/Mail-opened.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Email settings</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg
                      src="media/svg/icons/Layout/Layout-top-panel-6.svg"
                    />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Saved Credit Cards</span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Files/File.svg" />
                  </span>
                </span>
                <span class="navi-text font-size-lg">Tax information</span>
                <span class="navi-label">
                  <span
                    class="label label-light-primary label-inline font-weight-bold"
                    >new</span
                  >
                </span>
              </a>
            </div>
            <div class="navi-item mb-2">
              <a
                class="navi-link py-4"
                v-b-tooltip.hover.right="'Comming soon...'"
              >
                <span class="navi-icon mr-2">
                  <span class="svg-icon">
                    <inline-svg src="media/svg/icons/Text/Article.svg" />
                  </span>
                </span>
                <span class="navi-text">Statements</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--begin::Content-->
    <div class="flex-row-fluid ml-lg-8">
      <b-tabs class="hide-tabs" v-model="tabIndex">
        <b-tab active>
          <KTProfileOverview></KTProfileOverview>
        </b-tab>

        <b-tab>
          <KTPersonalInformation></KTPersonalInformation>
        </b-tab>

        <b-tab>
          <KTAccountInformation></KTAccountInformation>
        </b-tab>

        <b-tab>
          <KTChangePassword></KTChangePassword>
        </b-tab>

        <b-tab>
          <KTEmailSettings></KTEmailSettings>
        </b-tab>
      </b-tabs>
    </div>
    <!--end::Content-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTDropdown2 from "@/view/content/dropdown/Dropdown2";
import KTProfileOverview from "@/view/pages/profile/profile-comp-1/ProfileOverview";
import KTPersonalInformation from "@/view/pages/profile/profile-comp/PersonalInformation";
import KTAccountInformation from "@/view/pages/profile/profile-comp/AccountInformation";
import KTChangePassword from "@/view/pages/profile/profile-comp/ChangePassword";
import KTEmailSettings from "@/view/pages/profile/profile-comp/EmailSettings";

export default {
  name: "custom-page",
  components: {
    KTDropdown2,
    KTProfileOverview,
    KTPersonalInformation,
    KTAccountInformation,
    KTChangePassword,
    KTEmailSettings
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profile 1" }]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      let target = event.target;
      if (!event.target.classList.contains("navi-link")) {
        target = event.target.closest(".navi-link");
      }

      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".navi-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),

    getFullName() {
      return (
        this.currentUserPersonalInfo.name +
        " " +
        this.currentUserPersonalInfo.surname
      );
    }
  }
};
</script>
