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
        <b>Badges</b> Small and adaptive tag for adding context to just about
        any content.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/badge"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Badges'">
          <template v-slot:preview>
            <p>
              Badges scale to match the size of the immediate parent element by
              using relative font sizing and <code>em</code> units.
            </p>
            <div>
              <h2>
                Example heading
                <b-badge>New</b-badge>
              </h2>
              <h3>
                Example heading
                <b-badge>New</b-badge>
              </h3>
              <h4>
                Example heading
                <b-badge>New</b-badge>
              </h4>
              <h5>
                Example heading
                <b-badge>New</b-badge>
              </h5>
              <h6>
                Example heading
                <b-badge>New</b-badge>
              </h6>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Actionable badges'">
          <template v-slot:preview>
            <p>
              Quickly provide actionable badges with hover and focus states by
              specifying either the <code>href</code> prop (links) or
              <code>to</code> prop (router-links):
            </p>
            <div>
              <b-badge class="mr-1" href="#" variant="primary">Primary</b-badge>
              <b-badge class="mr-1" href="#" variant="secondary">
                Secondary
              </b-badge>
              <b-badge class="mr-1" href="#" variant="success">Success</b-badge>
              <b-badge class="mr-1" href="#" variant="danger">Danger</b-badge>
              <b-badge class="mr-1" href="#" variant="warning">Warning</b-badge>
              <b-badge class="mr-1" href="#" variant="info">Info</b-badge>
              <b-badge class="mr-1" href="#" variant="light">Light</b-badge>
              <b-badge class="mr-1" href="#" variant="dark">Dark</b-badge>
            </div>
          </template>
          <template v-slot:html>
            {{ html4 }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Contextual variations'">
          <template v-slot:preview>
            <p>
              Add any of the following <code>variants</code> via the variant
              prop to change the appearance of a <code>&lt;b-badge&gt;</code>:
              <code>default</code>, <code>primary</code>, <code>success</code>,
              <code>warning</code>, <code>info</code>, and <code>danger</code>.
              If no variant is specified <code>default</code> will be used.
            </p>
            <div>
              <b-badge class="mr-1" variant="primary">Primary</b-badge>
              <b-badge class="mr-1" variant="secondary">Secondary</b-badge>
              <b-badge class="mr-1" variant="success">Success</b-badge>
              <b-badge class="mr-1" variant="danger">Danger</b-badge>
              <b-badge class="mr-1" variant="warning">Warning</b-badge>
              <b-badge class="mr-1" variant="info">Info</b-badge>
              <b-badge class="mr-1" variant="light">Light</b-badge>
              <b-badge class="mr-1" variant="dark">Dark</b-badge>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Pill badges'">
          <template v-slot:preview>
            <p>
              Use the <code>pill</code> prop to make badges more rounded (with a
              larger border-radius and additional horizontal padding). Useful if
              you miss the badges from Bootstrap v3.
            </p>
            <div>
              <b-badge class="mr-1" pill variant="primary">Primary</b-badge>
              <b-badge class="mr-1" pill variant="secondary">Secondary</b-badge>
              <b-badge class="mr-1" pill variant="success">Success</b-badge>
              <b-badge class="mr-1" pill variant="danger">Danger</b-badge>
              <b-badge class="mr-1" pill variant="warning">Warning</b-badge>
              <b-badge class="mr-1" pill variant="info">Info</b-badge>
              <b-badge class="mr-1" pill variant="light">Light</b-badge>
              <b-badge class="mr-1" pill variant="dark">Dark</b-badge>
            </div>
          </template>
          <template v-slot:html>
            {{ html3 }}
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
    <h2>Example heading
        <b-badge>New</b-badge>
    </h2>
    <h3>Example heading
        <b-badge>New</b-badge>
    </h3>
    <h4>Example heading
        <b-badge>New</b-badge>
    </h4>
    <h5>Example heading
        <b-badge>New</b-badge>
    </h5>
    <h6>Example heading
        <b-badge>New</b-badge>
    </h6>
</div>`,

      html2: `<div>
    <b-badge class="mr-1" variant="primary">Primary</b-badge>
    <b-badge class="mr-1" variant="secondary">Secondary</b-badge>
    <b-badge class="mr-1" variant="success">Success</b-badge>
    <b-badge class="mr-1" variant="danger">Danger</b-badge>
    <b-badge class="mr-1" variant="warning">Warning</b-badge>
    <b-badge class="mr-1" variant="info">Info</b-badge>
    <b-badge class="mr-1" variant="light">Light</b-badge>
    <b-badge class="mr-1" variant="dark">Dark</b-badge>
</div>`,

      html3: `<div>
    <b-badge pill variant="primary">Primary</b-badge>
    <b-badge pill variant="secondary">Secondary</b-badge>
    <b-badge pill variant="success">Success</b-badge>
    <b-badge pill variant="danger">Danger</b-badge>
    <b-badge pill variant="warning">Warning</b-badge>
    <b-badge pill variant="info">Info</b-badge>
    <b-badge pill variant="light">Light</b-badge>
    <b-badge pill variant="dark">Dark</b-badge>
</div>`,

      html4: `<div>
    <b-badge href="#" variant="primary">Primary</b-badge>
    <b-badge href="#" variant="secondary">Secondary</b-badge>
    <b-badge href="#" variant="success">Success</b-badge>
    <b-badge href="#" variant="danger">Danger</b-badge>
    <b-badge href="#" variant="warning">Warning</b-badge>
    <b-badge href="#" variant="info">Info</b-badge>
    <b-badge href="#" variant="light">Light</b-badge>
    <b-badge href="#" variant="dark">Dark</b-badge>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Badges" }
    ]);
  }
};
</script>
