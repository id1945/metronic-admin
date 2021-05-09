<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    <b-dropdown
      size="sm"
      id="kt_quick_search_toggle"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div
          class="btn btn-icon btn-hover-transparent-white btn-lg btn-dropdown mr-1"
        >
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/General/Search.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTSearchDefault></KTSearchDefault>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Search -->

    <!--begin: Notifications -->
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
          class="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1 pulse pulse-primary"
        >
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/Code/Compiling.svg" />
          </span>
          <span class="pulse-ring"></span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <form>
          <KTDropdownNotification></KTDropdownNotification>
        </form>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Notifications -->

    <!--begin: Quick Actions -->
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
          class="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1"
        >
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTDropdownQuickAction></KTDropdownQuickAction>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Quick Actions -->

    <!--begin: My Cart -->
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
          class="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1"
        >
          <span class="svg-icon svg-icon-xl">
            <inline-svg src="media/svg/icons/Shopping/Cart3.svg" />
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTDropdownMyCart></KTDropdownMyCart>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: My Cart -->

    <!--begin: Quick panel toggle -->
    <KTQuickPanel></KTQuickPanel>
    <!--end: Quick panel toggle -->

    <!--begin: Language bar -->
    <div class="topbar-item">
      <b-dropdown
        size="sm"
        variant="link"
        toggle-class="btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto"
        no-caret
        right
        no-flip
      >
        <template v-slot:button-content>
          <img
            class="h-20px w-20px rounded-sm"
            :src="languageFlag || getLanguageFlag"
            alt=""
          />
        </template>
        <b-dropdown-text tag="div" class="min-w-md-175px">
          <KTDropdownLanguage
            v-on:language-changed="onLanguageChanged"
          ></KTDropdownLanguage>
        </b-dropdown-text>
      </b-dropdown>
    </div>
    <!--end: Language bar -->

    <!--begin: User Bar -->
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
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
import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault.vue";
import KTDropdownNotification from "@/view/layout/extras/dropdown/DropdownNotification.vue";
import KTDropdownQuickAction from "@/view/layout/extras/dropdown/DropdownQuickAction.vue";
import KTDropdownMyCart from "@/view/layout/extras/dropdown/DropdownMyCart.vue";
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";
import i18nService from "@/core/services/i18n.service.js";

export default {
  name: "KTTopbar",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  },
  components: {
    KTSearchDefault,
    KTDropdownNotification,
    KTDropdownQuickAction,
    KTDropdownMyCart,
    KTDropdownLanguage,
    KTQuickUser,
    KTQuickPanel
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find(val => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>
