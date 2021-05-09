<template>
  <div>
    <b-alert
      show
      variant="light"
      class="alert alert-custom alert-white alert-shadow fade show gutter-b"
    >
      <div class="alert-icon">
        <span class="svg-icon svg-icon-lg">
          <inline-svg src="media/svg/icons/Tools/Compass.svg" />
        </span>
      </div>
      <div class="alert-text">
        <b>Responsive Embeds</b> Create responsive video or slideshow embeds
        based on the width of the parent by creating an intrinsic ratio that
        scales on any device.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/embed"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Embed'">
          <template v-slot:preview>
            <p>
              Rules are directly applied to <code>&lt;iframe&gt;</code>,
              <code>&lt;embed&gt;</code>, <code>&lt;video&gt;</code>, and
              <code>&lt;object&gt;</code> elements
            </p>
            <div>
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></b-embed>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html1 }}
            </highlight-code>
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      html1: `<div>
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    allowfullscreen
  ></b-embed>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Embed" }
    ]);
  }
};
</script>
