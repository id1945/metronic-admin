<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="error error-6 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div class="d-flex flex-column flex-row-fluid text-center">
        <h1
          class="error-title font-weight-boldest text-white mb-12"
          style="margin-top: 12rem;"
        >
          Oops...
        </h1>
        <p class="display-4 font-weight-bold text-white">
          Looks like something went wrong.
          <br />We're working on it
          <br />
        </p>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-6.scss";
</style>

<script>
export default {
  name: "Error-6",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg6.jpg";
    }
  }
};
</script>
