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
        <b>Layout and Grid System</b> Use the powerful mobile-first flexbox grid
        (via the &lt;b-container&gt;, &lt;b-row&gt;, &lt;b-form-row&gt; and
        &lt;b-col&gt; components) to build layouts of all shapes and sizes
        thanks to a twelve column system, five default responsive tiers, CSS
        Sass variables and mixins, and dozens of predefined classes.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/layout"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'How it works'">
          <template v-slot:preview>
            <p>
              Bootstrap's grid system uses a series of containers, rows, and
              columns to layout and align content. It's built with
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
                target="_blank"
                >flexbox</a
              >
              and is fully responsive. Below is an example and an in-depth look
              at how the grid comes together.
            </p>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Equal-width columns'">
          <template v-slot:preview>
            <p>
              For example, here are two grid layouts that apply to every device
              and viewport, from <code>xs</code> to <code>xl</code>. Add any
              number of unit-less classes for each breakpoint you need and every
              column will be the same width.
            </p>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>1 of 2</b-col>
                <b-col>2 of 2</b-col>
              </b-row>

              <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Setting one column width'">
          <template v-slot:preview>
            <p>
              Auto-layout for flexbox grid columns also means you can set the
              width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column.
            </p>
            <b-container class="bv-example-row">
              <b-row class="text-center">
                <b-col>1 of 3</b-col>
                <b-col cols="8">2 of 3 (wider)</b-col>
                <b-col>3 of 3</b-col>
              </b-row>

              <b-row class="text-center">
                <b-col>1 of 3</b-col>
                <b-col cols="5">2 of 3 (wider)</b-col>
                <b-col>3 of 3</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Variable width content'">
          <template v-slot:preview>
            <p>
              Use <code>{breakpoint}="auto"</code> props to size columns based
              on the natural width of their content.
            </p>
            <b-container class="bv-example-row">
              <b-row class="justify-content-md-center">
                <b-col col lg="2">1 of 3</b-col>
                <b-col cols="12" md="auto">Variable width content</b-col>
                <b-col col lg="2">3 of 3</b-col>
              </b-row>

              <b-row>
                <b-col>1 of 3</b-col>
                <b-col cols="12" md="auto">Variable width content</b-col>
                <b-col col lg="2">3 of 3</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'All breakpoints'">
          <template v-slot:preview>
            <p>
              For grids that are the same from the smallest of devices to the
              largest, use the <code>col</code> and <code>cols="*"</code> props.
              Specify a number of <code>cols</code> when you need a particularly
              sized column; otherwise, feel free to stick to
              <code>col</code> (which is applied automatically if no
              <code>cols</code> are specified).
            </p>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>col</b-col>
                <b-col>col</b-col>
                <b-col>col</b-col>
                <b-col>col</b-col>
              </b-row>

              <b-row>
                <b-col cols="8">col-8</b-col>
                <b-col cols="4">col-4</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Stacked to horizontal'">
          <template v-slot:preview>
            <p>
              Using a single set of <code>sm="*"</code> or
              <code>sm</code> (boolean for equal width @sm) props, you can
              create a basic grid system that starts out stacked on extra small
              devices before becoming horizontal on desktop (medium) devices
            </p>
            <b-container class="bv-example-row">
              <b-row>
                <b-col sm="8">col-sm-8</b-col>
                <b-col sm="4">col-sm-4</b-col>
              </b-row>

              <b-row>
                <b-col sm>col-sm</b-col>
                <b-col sm>col-sm</b-col>
                <b-col sm>col-sm</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Mix and match'">
          <template v-slot:preview>
            <p>
              Don't want your columns to simply stack in some grid tiers? Use a
              combination of different props for each tier as needed. See the
              example below for a better idea of how it all works.
            </p>
            <b-container class="bv-example-row">
              <!-- Stack the columns on mobile by making one full-width and the other half-width -->
              <b-row>
                <b-col cols="12" md="8">cols="12" md="8"</b-col>
                <b-col cols="6" md="4">cols="6" md="4"</b-col>
              </b-row>

              <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
              <b-row>
                <b-col cols="6" md="4">cols="6" md="4"</b-col>
                <b-col cols="6" md="4">cols="6" md="4"</b-col>
                <b-col cols="6" md="4">cols="6" md="4"</b-col>
              </b-row>

              <!-- Columns are always 50% wide, on mobile and desktop -->
              <b-row>
                <b-col cols="6">cols="6"</b-col>
                <b-col cols="6">cols="6"</b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bv-example-row .row > .col:not(.header),
.bv-example-row .row > [class^="col-"] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}
</style>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: `<b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>`
      },

      code2: {
        html: `<b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 2</b-col>
    <b-col>2 of 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>`
      },

      code3: {
        html: `<b-container class="bv-example-row">
  <b-row class="text-center">
    <b-col>1 of 3</b-col>
    <b-col cols="8">2 of 3 (wider)</b-col>
    <b-col>3 of 3</b-col>
  </b-row>

  <b-row class="text-center">
    <b-col>1 of 3</b-col>
    <b-col cols="5">2 of 3 (wider)</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>`
      },

      code4: {
        html: `<b-container class="bv-example-row">
  <b-row class="justify-content-md-center">
    <b-col col lg="2">1 of 3</b-col>
    <b-col cols="12" md="auto">Variable width content</b-col>
    <b-col col lg="2">3 of 3</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col cols="12" md="auto">Variable width content</b-col>
    <b-col col lg="2">3 of 3</b-col>
  </b-row>
</b-container>`
      },

      code5: {
        html: `<b-container class="bv-example-row">
  <b-row>
    <b-col>col</b-col>
    <b-col>col</b-col>
    <b-col>col</b-col>
    <b-col>col</b-col>
  </b-row>

  <b-row>
    <b-col cols="8">col-8</b-col>
    <b-col cols="4">col-4</b-col>
  </b-row>
</b-container>`
      },

      code6: {
        html: `<b-container class="bv-example-row">
  <b-row>
    <b-col sm="8">col-sm-8</b-col>
    <b-col sm="4">col-sm-4</b-col>
  </b-row>

  <b-row>
    <b-col sm>col-sm</b-col>
    <b-col sm>col-sm</b-col>
    <b-col sm>col-sm</b-col>
  </b-row>
</b-container>`
      },

      code7: {
        html: `<b-container class="bv-example-row">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <b-row>
    <b-col cols="12" md="8">cols="12" md="8"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
  </b-row>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <b-row>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
    <b-col cols="6" md="4">cols="6" md="4"</b-col>
  </b-row>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <b-row>
    <b-col cols="6">cols="6"</b-col>
    <b-col cols="6">cols="6"</b-col>
  </b-row>
</b-container>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Layout and Grid System" }
    ]);
  }
};
</script>
