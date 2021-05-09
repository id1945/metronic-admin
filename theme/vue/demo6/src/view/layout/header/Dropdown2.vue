<template>
  <b-dropdown
    toggle-class="btn btn-dark font-weight-bold px-6"
    no-caret
    right
    no-flip
    text="Create"
  >
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px">
      <b-dropdown-text tag="div" class="navi-header pb-1">
        <span class="text-primary text-uppercase font-weight-bold">
          Add new:
        </span>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-graph-1"></i>
          </span>
          <span class="navi-text">
            Order
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-calendar-4"></i>
          </span>
          <span class="navi-text">
            Event
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-layers-1"></i>
          </span>
          <span class="navi-text">
            Report
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-calendar-4"></i>
          </span>
          <span class="navi-text">
            Post
          </span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a href="#" class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-file-1"></i>
          </span>
          <span class="navi-text">
            File
          </span>
        </a>
      </b-dropdown-text>
    </div>
    <!--end::Navigation-->
  </b-dropdown>
</template>

<style lang="scss">
.dropdown-menu {
  outline: none;
}
</style>

<script>
export default {
  name: "dropdown-1",
  components: {},
  mounted() {}
};
</script>
