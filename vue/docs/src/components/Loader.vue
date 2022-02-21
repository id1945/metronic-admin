<template>
  <!--begin::Page loader-->
  <template v-if="loaderType === 'spinner-message'">
    <div class="page-loader flex-column">
      <span class="spinner-border text-primary" role="status"></span>
      <span class="text-muted fs-6 fw-bold mt-5">Loading...</span>
    </div>
  </template>
  <template v-else-if="loaderType === 'spinner-logo'">
    <div class="page-loader flex-column">
      <img alt="Logo" class="max-h-75px" :src="logo" />

      <div class="d-flex align-items-center mt-5">
        <span class="spinner-border text-primary" role="status"></span>
        <span class="text-muted fs-6 fw-bold ms-5">Loading...</span>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="page-loader">
      <span class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </span>
    </div>
  </template>
  <!--end::Page Loader-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Loader",
  props: {
    logo: String,
  },
  setup() {
    const store = useStore();

    const loaderType = computed(() => {
      return store.getters.layoutConfig("loader.type");
    });

    return {
      loaderType,
    };
  },
});
</script>
