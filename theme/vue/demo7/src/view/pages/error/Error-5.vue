<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="error error-5 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <div
        class="container d-flex flex-row-fluid flex-column justify-content-md-center p-12"
      >
        <h1
          class="error-title font-weight-boldest text-info mt-10 mt-md-0 mb-12"
        >
          Oops!
        </h1>
        <p class="font-weight-boldest display-4">
          Something went wrong here.
        </p>
        <p class="font-size-h3">
          We're working on it and we'll get it fixed
          <br />as soon possible. <br />You can back or use our Help Center.
        </p>
      </div>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/error/error-5.scss";
</style>

<script>
export default {
  name: "Error-5",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg5.jpg";
    }
  }
};
</script>
