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
        <b>Links</b> Use BootstrapVue's custom b-link component for generating a
        standard &lt;a&gt; link or &lt;router-link&gt;. &lt;b-link&gt; supports
        the disabled state and click event propagation.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/link"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Link'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-link&gt;</code> is the building block for most
              BootstrapVue components that offer link functionality.
            </p>
            <div>
              <b-link href="#foo">Link</b-link>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Link disabled state'">
          <template v-slot:preview>
            <p>
              Disable link functionality by setting the
              <code>disabled</code> prop to true.
            </p>
            <div>
              <b-link href="#foo" disabled>Disabled Link</b-link>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
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
      code1: {
        html: `<div>
  <b-link href="#foo">Link</b-link>
</div>`
      },

      code2: {
        html: `<div>
  <b-link href="#foo" disabled>Disabled Link</b-link>
</div>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Links" }
    ]);
  }
};
</script>
