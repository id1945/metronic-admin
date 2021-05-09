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
      <i class="ki ki-bold-more-ver"></i>
    </template>
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px">
      <b-dropdown-text tag="div" class="navi-header font-weight-bold py-5">
        <span class="font-size-lg">Add New:</span>
      </b-dropdown-text>
      <b-dropdown-text
        tag="div"
        class="navi-separator mb-3 opacity-70"
      ></b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-shopping-cart-1"></i>
          </span>
          <span class="navi-text">Order</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="navi-icon flaticon2-calendar-8"></i>
          </span>
          <span class="navi-text">Members</span>
          <span class="navi-label">
            <span
              class="label label-light-danger label-rounded font-weight-bold"
              >3</span
            >
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="navi-icon flaticon2-telegram-logo"></i>
          </span>
          <span class="navi-text">Project</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="navi-icon flaticon2-new-email"></i>
          </span>
          <span class="navi-text">Record</span>
          <span class="navi-label">
            <span
              class="label label-light-success label-rounded font-weight-bold"
              >5</span
            >
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text
        tag="div"
        class="navi-separator mt-3 opacity-70"
      ></b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-footer pt-5 pb-4">
        <a class="btn btn-light-primary font-weight-bolder btn-sm" href="#"
          >More options</a
        >
        <a
          class="btn btn-clean font-weight-bold btn-sm d-none"
          href="#"
          data-toggle="tooltip"
          data-placement="right"
          title="Click to learn more..."
          >Learn more</a
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
  name: "dropdown-5",
  components: {},
  mounted() {}
};
</script>
