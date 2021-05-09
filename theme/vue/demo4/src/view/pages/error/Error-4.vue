<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="error error-4 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div
        class="d-flex flex-column flex-row-fluid align-items-center align-items-md-start justify-content-md-center text-center text-md-left px-10 px-md-30 py-10 py-md-0 line-height-xs"
      >
        <h1 class="error-title text-success font-weight-boldest line-height-sm">
          404
        </h1>
        <p
          class="error-subtitle font-size-md-90 text-success font-weight-boldest"
        >
          ERROR
        </p>
        <p
          class="display-4 font-size-md-20 text-danger font-weight-boldest mt-8 mt-md-0 line-height-md"
        >
          Nothing left to do here.
        </p>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-4.scss";
</style>

<script>
export default {
  name: "Error-4",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg4.jpg";
    }
  }
};
</script>
