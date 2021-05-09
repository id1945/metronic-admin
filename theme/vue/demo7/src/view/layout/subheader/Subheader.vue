<template>
  <div
    class="subheader pb-2 pb-lg-4"
    v-bind:class="subheaderClasses"
    id="kt_subheader"
  >
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex align-items-center flex-wrap mr-1">
        <h5 class="text-dark font-weight-bold my-2 mr-5">
          {{ title }}
        </h5>
        <ul
          class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"
        >
          <li class="breadcrumb-item">
            <router-link :to="'/'" class="subheader-breadcrumbs-home">
              <i class="flaticon2-shelter text-muted icon-1x"></i>
            </router-link>
          </li>

          <template v-for="(breadcrumb, i) in breadcrumbs">
            <li class="breadcrumb-item" :key="`${i}-${breadcrumb.id}`">
              <router-link
                v-if="breadcrumb.route"
                :key="i"
                :to="breadcrumb.route"
                class="text-muted"
              >
                {{ breadcrumb.title }}
              </router-link>
              <span class="text-muted" :key="i" v-if="!breadcrumb.route">
                {{ breadcrumb.title }}
              </span>
            </li>
          </template>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-light font-weight-bold btn-sm">
          Actions
        </a>

        <b-dropdown
          size="sm"
          variant="link"
          toggle-class="custom-v-dropdown"
          no-caret
          right
          no-flip
          text="Actions"
          v-b-tooltip.hover="'Quick actions'"
        >
          <template v-slot:button-content>
            <a href="#" class="btn btn-icon" data-toggle="dropdown">
              <span class="svg-icon svg-icon-success svg-icon-2x">
                <!--begin::Svg Icon-->
                <inline-svg src="media/svg/icons/Files/File-plus.svg" />
                <!--end::Svg Icon-->
              </span>
            </a>
          </template>
          <!--begin::Navigation-->
          <div class="navi navi-hover min-w-md-250px">
            <b-dropdown-text tag="div" class="navi-header font-weight-bold">
              Jump to:
              <i
                class="flaticon2-information"
                data-toggle="tooltip"
                data-placement="left"
                v-b-tooltip.hover
                title="Click to learn more..."
              />
            </b-dropdown-text>
            <b-dropdown-text
              tag="div"
              class="navi-separator mb-3"
            ></b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-drop"></i>
                </span>
                <span class="navi-text">Recent Orders</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-calendar-8"></i>
                </span>
                <span class="navi-text">Support Cases</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-telegram-logo"></i>
                </span>
                <span class="navi-text">Projects</span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-item">
              <a href="#" class="navi-link">
                <span class="navi-icon">
                  <i class="flaticon2-new-email"></i>
                </span>
                <span class="navi-text">Messages</span>
                <span class="navi-label">
                  <span class="label label-success label-rounded">5</span>
                </span>
              </a>
            </b-dropdown-text>
            <b-dropdown-text
              tag="div"
              class="navi-separator mt-3"
            ></b-dropdown-text>
            <b-dropdown-text tag="div" class="navi-footer">
              <a
                class="btn btn-light-primary font-weight-bolder btn-sm"
                href="#"
                >Upgrade plan</a
              >
              <a
                class="btn btn-clean font-weight-bold btn-sm"
                href="#"
                data-toggle="tooltip"
                data-placement="left"
                v-b-tooltip.hover
                title="Click to learn more..."
                >Learn more</a
              >
            </b-dropdown-text>
          </div>
          <!--end::Navigation-->
        </b-dropdown>
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
    padding: 0;
    outline: none;
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
