<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div
        class="px-10 px-md-30 py-10 py-md-0 d-flex flex-column justify-content-md-center"
      >
        <h1 class="error-title text-stroke text-transparent">
          404
        </h1>
        <p class="display-4 font-weight-boldest text-white mb-12">
          How did you get here
        </p>
        <p class="font-size-h1 font-weight-boldest text-dark-75">
          Sorry we can't seem to find the page you're looking for.
        </p>
        <p class="font-size-h4 line-height-md">
          There may be a misspelling in the URL entered,
          <br />or the page you are looking for may no longer exist.
        </p>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-3.scss";
</style>

<script>
export default {
  name: "Error-3",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg3.jpg";
    }
  }
};
</script>
