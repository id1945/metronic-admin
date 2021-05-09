<template>
  <b-dropdown
    size="sm"
    variant="link"
    toggle-class="topbar-item text-decoration-none"
    no-caret
    right
    no-flip
  >
    <template v-slot:button-content>
      <div
        class="topbar-item mr-4"
        data-toggle="dropdown"
        data-offset="10px,0px"
      >
        <div class="btn font-weight-bolder btn-sm btn-light-success px-5">
          Create
        </div>
      </div>
    </template>
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px py-5">
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
      <b-dropdown-text tag="div" class="navi-separator my-3"> </b-dropdown-text>
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
