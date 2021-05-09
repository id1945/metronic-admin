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
        <b>Button group</b> Group a series of buttons together on a single line
        with &lt;b-button-group&gt;.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/button-group"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Button group'">
          <template v-slot:preview>
            <p>
              Default button group and button group using contextual variants.
            </p>
            <div>
              <b-button-group>
                <b-button>Button 1</b-button>
                <b-button>Button 2</b-button>
                <b-button>Button 3</b-button>
              </b-button-group>
            </div>
            <div class="mt-3">
              <b-button-group>
                <b-button variant="success">Success</b-button>
                <b-button variant="info">Info</b-button>
                <b-button variant="warning">Warning</b-button>
              </b-button-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Sizing'">
          <template v-slot:preview>
            <p>
              Set the size prop to <code>lg</code> or <code>sm</code> to render
              larger or smaller, respectively, buttons. There is no need to
              specify the size on the individual buttons.
            </p>
            <div>
              <b-button-group>
                <b-button>Button 1</b-button>
                <b-button>Button 2</b-button>
                <b-button>Button 3</b-button>
              </b-button-group>
            </div>
            <div class="mt-3">
              <b-button-group size="sm">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
            </div>
            <div class="mt-3">
              <b-button-group size="lg">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Vertical variation'">
          <template v-slot:preview>
            <p>
              Make a set of buttons appear vertically stacked rather than
              horizontally by setting the <code>vertical</code> prop. Split
              button dropdowns are not supported here.
            </p>
            <div>
              <b-button-group vertical>
                <b-button>Top</b-button>
                <b-button>Middle</b-button>
                <b-button>Bottom</b-button>
              </b-button-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Dropdown menu support'">
          <template v-slot:preview>
            <p>
              Add <code>&lt;b-dropdown&gt;</code> menus directly inside your
              <code>&lt;b-button-group&gt;</code>. Note that split dropdown
              menus are not supported when prop codevertical is set.
            </p>
            <div>
              <b-button-group>
                <b-button>Button</b-button>
                <b-dropdown right text="Menu">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-dropdown right split text="Split Menu">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
              </b-button-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html4 }}
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
      html1: `
  <div>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Success</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="warning">Warning</b-button>
    </b-button-group>
  </div>`,

      html2: `
  <div>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="sm">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="lg">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
  </div>`,

      html3: `
        <b-button-group vertical>
          <b-button>Top</b-button>
          <b-button>Middle</b-button>
          <b-button>Bottom</b-button>
        </b-button-group>`,

      html4: `<div>
  <b-button-group>
    <b-button>Button</b-button>
    <b-dropdown right text="Menu">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    <b-dropdown right split text="Split Menu">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
  </b-button-group>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Buttons", route: "button" },
      { title: "Button Group" }
    ]);
  }
};
</script>
