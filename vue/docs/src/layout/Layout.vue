<template>
  <KTLoader></KTLoader>

  <!-- begin:: Body -->
  <div class="docs-page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside></KTAside>
    <!-- end:: Aside Left -->

    <div
      id="kt_docs_wrapper"
      class="docs-wrapper d-flex flex-column flex-row-fluid"
    >
      <KTHeader :breadcrumbs="breadcrumbs" :title="pageTitle"></KTHeader>

      <!-- begin:: Content -->
      <div
        id="kt_docs_content"
        class="docs-content d-flex flex-column flex-column-fluid"
      >
        <!-- begin:: Content Body -->
        <div class="container">
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTExplore></KTExplore>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import { Actions } from "@/store/enums/StoreEnums";
import { MenuComponent, DrawerComponent } from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { ScrollComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTExplore,
    KTLoader,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      DrawerComponent.bootstrap();
      ScrollComponent.bootstrap();
      DrawerComponent.updateAll();
      ScrollComponent.updateAll();

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        DrawerComponent.hideAll();

        removeModalBackdrop();
      }
    );

    return {
      pageTitle,
      breadcrumbs,
    };
  },
});
</script>
