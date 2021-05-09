<template>
  <v-app>
    <transition name="fade-in-up">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<style lang="scss">
@import "~vuetify/dist/vuetify.css";

.theme--light.v-application {
  background: transparent !important;
}
.v-application code {
  box-shadow: none !important;
}
</style>

<script>
import Vue from "vue";

// vuetify conflict style issue
// https://github.com/vuetifyjs/vuetify/issues/8530

// workaround
// https://github.com/vuetifyjs/vuetify/issues/9999
const ignoreWarnMessage = `The .native modifier for v-on is only valid on components but it was used on <div>.`;
// eslint-disable-next-line no-unused-vars
Vue.config.warnHandler = function(msg, vm, trace) {
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
};

export default {
  components: {}
};
</script>
