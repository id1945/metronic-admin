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
        <b>Navs</b> Navigation available in Bootstrap share general markup and
        styles, from the base &lt;b-nav&gt; class to the active and disabled
        states. Swap modifier props to switch between each style.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/nav"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Navs'">
          <template v-slot:preview>
            <div>
              <b-nav>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Tab style'">
          <template v-slot:preview>
            <p>
              Make the nav look like tabs by setting the <code>tabs</code> prop.
            </p>
            <div>
              <b-nav tabs>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Pill style'">
          <template v-slot:preview>
            <p>Use the pill style by setting the <code>pills</code> prop.</p>
            <div>
              <b-nav pills>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fill'">
          <template v-slot:preview>
            <p>
              To proportionately fill all available space with your
              <code>&lt;b-nav-item&gt;</code> components, set the
              <code>fill</code> prop. Notice that all horizontal space is
              occupied, but not every nav item has the same width.
            </p>
            <div>
              <b-nav tabs fill>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Link with a long name </b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Justified'">
          <template v-slot:preview>
            <p>
              For equal-width elements, set the <code>justified</code> prop
              instead. All horizontal space will be occupied by nav links, but
              unlike <code>fill</code> above, every
              <code>&lt;b-nav-item&gt;</code> will be the same width.
            </p>
            <div>
              <b-nav tabs justified>
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Link with a long name </b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
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
  <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>`
      },

      code2: {
        html: `<div>
  <b-nav tabs>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>`
      },

      code3: {
        html: `<div>
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>`
      },

      code4: {
        html: `<div>
  <b-nav tabs fill>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link with a long name </b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>`
      },

      code5: {
        html: `<div>
  <b-nav tabs justified>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link with a long name </b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
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
      { title: "Nav" }
    ]);
  }
};
</script>
