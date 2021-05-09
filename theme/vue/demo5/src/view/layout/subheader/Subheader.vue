<template>
  <div
    class="subheader py-2 py-lg-12 subheader-transparent"
    v-bind:class="subheaderClasses"
    id="kt_subheader"
  >
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex align-items-center flex-wrap mr-2">
        <!--begin::Heading-->
        <div class="d-flex flex-column">
          <!--begin::Title-->
          <h2 class="text-white font-weight-bold my-2 mr-5">
            {{ title }}
          </h2>
          <ul class="d-flex align-items-center font-weight-bold my-2">
            <router-link :to="'/'" class="opacity-75 hover-opacity-100">
              <i class="flaticon2-shelter text-white icon-1x"></i>
            </router-link>

            <template v-for="(breadcrumb, i) in breadcrumbs">
              <span
                class="label label-dot label-sm bg-white opacity-75 mx-3"
                :key="i"
              ></span>
              <router-link
                :key="`${i}-${breadcrumb.id}`"
                v-if="breadcrumb.route"
                :to="breadcrumb.route"
                class="text-white text-hover-white opacity-75 hover-opacity-100"
              >
                {{ breadcrumb.title }}
              </router-link>
              <span
                class="text-white text-hover-white opacity-75 hover-opacity-100"
                :key="`${i}-${breadcrumb.id}`"
                v-if="!breadcrumb.route"
              >
                {{ breadcrumb.title }}
              </span>
            </template>
          </ul>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <!--begin::Button-->
        <a
          href="#"
          class="btn btn-transparent-white font-weight-bold py-3 px-6 mr-2"
        >
          Reports
        </a>
        <!--end::Button-->
        <!--begin::Dropdown-->
        <b-dropdown
          size="sm"
          variant="link"
          toggle-class="custom-v-dropdown btn btn-white font-weight-bold py-3 px-6"
          no-caret
          right
          no-flip
          text="Actions"
          v-b-tooltip.hover="'Quick actions'"
        >
          <!--begin::Navigation-->
          <div class="navi navi-hover min-w-md-250px">
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-drop"></i>
                </span>
                <span class="navi-text">New Group</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-list-3"></i>
                </span>
                <span class="navi-text">Contacts</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-rocket-1"></i>
                </span>
                <span class="navi-text">Groups</span>
                <span class="navi-link-badge">
                  <span
                    class="label label-light-primary label-inline font-weight-bold"
                    >new</span
                  >
                </span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-bell-2"></i>
                </span>
                <span class="navi-text">Calls</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-gear"></i>
                </span>
                <span class="navi-text">Settings</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text
              tag="div"
              class="navi-separator my-3"
            ></b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-magnifier-tool"></i>
                </span>
                <span class="navi-text">Help</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-bell-2"></i>
                </span>
                <span class="navi-text">Privacy</span>
                <span class="navi-link-badge">
                  <span
                    class="label label-light-danger label-rounded font-weight-bold"
                    >5</span
                  >
                </span>
              </a>
            </b-dropdown-text>
          </div>
          <!--end::Navigation-->
        </b-dropdown>
        <!--end::Dropdown-->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.custom-v-dropdown {
  &.dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  &.dropdown-menu {
    margin: 0;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTSubheader",
  props: {
    breadcrumbs: Array,
    title: String
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("subheader.width") === "fluid";
    },

    subheaderClasses() {
      const classes = [];
      const style = this.layoutConfig("subheader.style");
      if (style) {
        classes.push(style);

        if (style === "solid") {
          classes.push("bg-white");
        }

        if (this.layoutConfig("subheader.fixed")) {
          classes.push("border-top");
        }
      }
      return classes.join(" ");
    }
  }
};
</script>
