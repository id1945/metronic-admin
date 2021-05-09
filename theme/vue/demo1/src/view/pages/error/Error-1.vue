<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"
      :style="{
        backgroundImage: `url(${backgroundImage})`
      }"
    >
      <!-- begin:: Content -->
      <h1
        class="font-size-sm-100 font-weight-boldest text-dark-75 mt-15"
        style="font-size: 150px;"
      >
        404
      </h1>
      <p class="font-size-h3 font-weight-light">
        OOPS! Something went wrong here
      </p>
      <!-- end:: Content -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Error-1",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/error/bg1.jpg";
    }
  }
};
</script>
