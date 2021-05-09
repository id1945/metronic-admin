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
        <b>Jumbotron</b> A lightweight, flexible component that can optionally
        extend the entire viewport to showcase key marketing messages on your
        site.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/jumbotron"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Usage with props'">
          <template v-slot:preview>
            <p>
              You can set the heading and lead text via the
              <code>header</code> and <code>lead</code> props, or use the named
              slots <code>header</code> and <code>lead</code> if you need HTML
              support.
            </p>
            <div>
              <b-jumbotron
                header="BootstrapVue"
                lead="Bootstrap v4 Components for Vue.js 2"
              >
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
              </b-jumbotron>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Usage with slots'">
          <template v-slot:preview>
            <div>
              <b-jumbotron>
                <template v-slot:header>BootstrapVue</template>

                <template v-slot:lead>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </template>

                <hr class="my-4" />

                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>

                <b-button class="mr-3" variant="primary" href="#"
                  >Do Something</b-button
                >
                <b-button variant="success" href="#"
                  >Do Something Else</b-button
                >
              </b-jumbotron>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Variants'">
          <template v-slot:preview>
            <p>
              Control the overall background variant with the
              <code>bg-variant</code> prop ( set to <code>info</code>,
              <code>danger</code>, <code>warning</code>, <code>light</code>,
              <code>dark</code>, etc), the border variant with the
              <code>border-variant</code> prop, and the text variant with
              <code>text-variant</code> prop. All three props default to
              <code>null</code>, which will instruct the jumbotron to use the
              default styling<span class="code"></span>
            </p>
            <div>
              <b-jumbotron
                bg-variant="info"
                text-variant="white"
                border-variant="dark"
              >
                <template v-slot:header>BootstrapVue</template>

                <template v-slot:lead>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </template>

                <hr class="my-4" />

                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
              </b-jumbotron>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
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
  <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
    <p>For more information visit website</p>
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
</div>`
      },

      code2: {
        html: `<div>
  <b-jumbotron>
    <template v-slot:header>BootstrapVue</template>

    <template v-slot:lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
</div>`
      },

      code3: {
        html: `<div>
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <template v-slot:header>BootstrapVue</template>

    <template v-slot:lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
  </b-jumbotron>
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
      { title: "Jumbotron" }
    ]);
  }
};
</script>
