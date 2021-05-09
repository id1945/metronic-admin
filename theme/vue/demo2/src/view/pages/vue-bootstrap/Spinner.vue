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
        <b>Spinners</b> The &lt;b-spinner&gt; component can be used to show the
        loading state in your projects. They're rendered only with basic HTML
        and CSS as a lightweight Vue functional component. Their appearance,
        alignment, and sizing can be easily customized with a few built-in props
        and/or Bootstrap v4 utility classes.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/spinner"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Spinners'">
          <template v-slot:preview>
            <p>
              Spinners can be placed just about anywhere, including inside
              buttons, alerts, and even <code>&lt;b-table&gt;</code>'s busy
              slot.<br /><br />
            </p>
            <div class="text-center">
              <b-spinner class="mr-3" label="Spinning"></b-spinner>
              <b-spinner class="mr-3" type="grow" label="Spinning"></b-spinner>
              <b-spinner
                class="mr-3"
                variant="primary"
                label="Spinning"
              ></b-spinner>
              <b-spinner
                class="mr-3"
                variant="primary"
                type="grow"
                label="Spinning"
              ></b-spinner>
              <b-spinner
                class="mr-3"
                variant="success"
                label="Spinning"
              ></b-spinner>
              <b-spinner
                class="mr-3"
                variant="success"
                type="grow"
                label="Spinning"
              ></b-spinner>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Flex'">
          <template v-slot:preview>
            <p>Using flex utility classes</p>
            <div>
              <div class="d-flex justify-content-center mb-3">
                <b-spinner label="Loading..."></b-spinner>
              </div>

              <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <b-spinner class="ml-auto"></b-spinner>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Text align'">
          <template v-slot:preview>
            <p>Using text alignment utility classes</p>
            <div class="text-center">
              <b-spinner variant="primary" label="Text Centered"></b-spinner>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Spinners in buttons'">
          <template v-slot:preview>
            <p>
              Use spinners within buttons to indicate an action is currently
              processing or taking place. You may also swap the label text out
              of the spinner element and utilize button text as needed.
            </p>
            <div>
              <b-button class="mr-3" variant="primary" disabled>
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </b-button>
              <b-button variant="primary" disabled>
                <b-spinner small type="grow"></b-spinner>
                Loading...
              </b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Spinner color variants'">
          <template v-slot:preview>
            <p>
              Spinners use <code>currentColor</code> for their color, meaning it
              inherits the current font color. You can customize the color using
              the standard text color variants using the
              <code>variant</code> prop, or place classes or styles on the
              component to change its color.
            </p>
            <div>
              <div class="text-center mb-3 d-flex justify-content-between">
                <b-spinner
                  v-for="variant in code2.variants"
                  :variant="variant"
                  :key="variant"
                ></b-spinner>
              </div>

              <div class="text-center d-flex justify-content-between">
                <b-spinner
                  v-for="variant in code2.variants"
                  :variant="variant"
                  :key="variant"
                  type="grow"
                ></b-spinner>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
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
        html: `<div class="text-center">
  <b-spinner label="Spinning"></b-spinner>
  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="primary" label="Spinning"></b-spinner>
  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="success" label="Spinning"></b-spinner>
  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
</div>`
      },

      code2: {
        html: `<div>
    <div class="text-center mb-3 d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
      ></b-spinner>
    </div>

    <div class="text-center d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
      ></b-spinner>
    </div>
  </div>`,
        js: `export default {
    data() {
      return {
        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
      }
    }
  }`,
        variants: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "success",
          "info",
          "light",
          "dark"
        ]
      },

      code3: {
        html: `<div>
  <div class="d-flex justify-content-center mb-3">
    <b-spinner label="Loading..."></b-spinner>
  </div>

  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <b-spinner class="ml-auto"></b-spinner>
  </div>
</div>`
      },

      code4: {
        html: `<div class="text-center">
  <b-spinner variant="primary" label="Text Centered"></b-spinner>
</div>`
      },

      code5: {
        html: `<div>
  <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    <span class="sr-only">Loading...</span>
  </b-button>

  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    Loading...
  </b-button>
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
      { title: "Progress", route: "progress" },
      { title: "Spinner" }
    ]);
  }
};
</script>
