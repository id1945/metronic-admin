<template>
  <b-dropdown
    size="sm"
    variant="link"
    toggle-class="btn btn-warning btn-sm font-weight-bolder font-size-sm dropdown-toggle"
    text="Create"
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
  name: "dropdown-6",
  components: {},
  mounted() {}
};
</script>
