<template>
  <b-dropdown
    size="sm"
    variant="primary"
    :toggle-class="btnClass"
    :text="btnText"
  >
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px">
      <b-dropdown-text tag="div" class="navi-header pb-1">
        <span class="text-primary text-uppercase font-weight-bold"
          >Add new:</span
        >
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-graph-1"></i>
          </span>
          <span class="navi-text">Order</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-calendar-4"></i>
          </span>
          <span class="navi-text">Event</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-layers-1"></i>
          </span>
          <span class="navi-text">Report</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-calendar-4"></i>
          </span>
          <span class="navi-text">Post</span>
        </a>
      </b-dropdown-text>
      <b-dropdown-text tag="div" class="navi-item">
        <a class="navi-link">
          <span class="navi-icon">
            <i class="flaticon2-file-1"></i>
          </span>
          <span class="navi-text">File</span>
        </a>
      </b-dropdown-text>
    </div>
    <!--end::Navigation-->
  </b-dropdown>
</template>

<script>
export default {
  name: "dropdown-4",
  props: {
    btnClass: String,
    btnText: String
  },
  components: {},
  mounted() {}
};
</script>
