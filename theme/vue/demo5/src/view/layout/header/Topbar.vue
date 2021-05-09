<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    <KTSearchDefault></KTSearchDefault>

    <!--begin: Quick panel toggle -->
    <KTQuickPanel></KTQuickPanel>
    <!--end: Quick panel toggle -->

    <!--begin: Quick panel toggle -->
    <KTQuickActions></KTQuickActions>
    <!--end: Quick panel toggle -->

    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->

    <KTQuickNotifications></KTQuickNotifications>
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
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

  .dropdown-menu {
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
import KTSearchDefault from "@/view/layout/extras/dropdown/DropdownCreate.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";
import KTQuickActions from "@/view/layout/extras/offcanvas/QuickActions.vue";
import KTQuickNotifications from "@/view/layout/extras/offcanvas/QuickNotifications.vue";

export default {
  name: "KTTopbar",
  data() {
    return {};
  },
  components: {
    KTSearchDefault,
    KTQuickUser,
    KTQuickPanel,
    KTQuickActions,
    KTQuickNotifications
  },
  methods: {},
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>
