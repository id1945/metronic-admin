<template>
  <router-view />
</template>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~socicon/css/socicon.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~element-plus/lib/theme-chalk/index.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
    });
  },
});
</script>
