<template>
  <b-dropdown
    size="sm"
    variant="link"
    toggle-class="custom-v-dropdown btn btn-clean btn-hover-light-primary btn-sm btn-icon"
    no-caret
    right
    no-flip
  >
    <template v-slot:button-content>
      <i class="ki ki-bold-more-hor"></i>
    </template>
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px">
      <b-dropdown-text tag="div" class="navi-header font-weight-bold">
        <span class="font-size-lg">
          Choose Label:
        </span>
        <i
          class="flaticon2-information icon-md text-muted"
          v-b-tooltip="'Click to learn more...'"
        ></i>
      </b-dropdown-text>
      <b-dropdown-text
        tag="div"
        class="navi-separator mb-3 opacity-70"
      ></b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-text">
            <span class="label label-xl label-inline label-light-success">
              Customer
            </span>
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-text">
            <span class="label label-xl label-inline label-light-danger">
              Partner
            </span>
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-text">
            <span class="label label-xl label-inline label-light-warning">
              Suplier
            </span>
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-text">
            <span class="label label-xl label-inline label-light-primary">
              Member
            </span>
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-text">
            <span class="label label-xl label-inline label-light-dark">
              Staff
            </span>
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text
        tag="div"
        class="navi-separator mt-3 opacity-70"
      ></b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-footer pt-5 pb-4">
        <a class="btn btn-clean font-weight-bold btn-sm" href="#">
          <i class="ki ki-plus icon-sm"></i>Add new</a
        >
      </b-dropdown-text>
    </div>
    <!--end::Navigation-->
  </b-dropdown>
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
export default {
  name: "dropdown-2",
  components: {},
  mounted() {}
};
</script>
