<template>
  <!--begin::Brand-->
  <div
    class="aside-brand d-flex flex-column align-items-center flex-column-auto py-4 py-lg-8"
  >
    <!--begin::Logo-->
    <router-link to="/">
      <img :src="siteLogo()" alt="Logo" class="max-h-30px" />
    </router-link>
    <!--end::Logo-->
  </div>
  <!--end::Brand-->
</template>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}
</style>

<script>
import { mapGetters } from "vuex";
import objectPath from "object-path";

export default {
  name: "KTBrand",
  mounted() {},
  methods: {
    siteLogo() {
      const menuAsideLeftSkin = this.layoutConfig("brand.self.theme");
      // set brand logo
      const logoObject = this.layoutConfig("self.logo");

      let logo;
      if (typeof logoObject === "string") {
        logo = logoObject;
      }
      if (typeof logoObject === "object") {
        logo = objectPath.get(logoObject, menuAsideLeftSkin + "");
      }
      if (typeof logo === "undefined") {
        const logos = this.layoutConfig("self.logo");
        logo = logos[Object.keys(logos)[0]];
      }
      return process.env.BASE_URL + logo;
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  }
};
</script>
