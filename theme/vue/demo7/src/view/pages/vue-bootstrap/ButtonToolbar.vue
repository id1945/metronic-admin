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
        <b>Button toolbar</b> Group a series of button-groups and/or
        input-groups together on a single line, with optional keyboard
        navigation.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/button-toolbar"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Button toolbar'">
          <template v-slot:preview>
            <p>With button groups & Keyboard navigation</p>
            <div>
              <b-button-toolbar key-nav aria-label="Toolbar with button groups">
                <b-button-group class="mx-1">
                  <b-button class="mr-2">&laquo;</b-button>
                  <b-button class="mr-2">&lsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-button class="mr-2">Edit</b-button>
                  <b-button class="mr-2">Undo</b-button>
                  <b-button class="mr-2">Redo</b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-button class="mr-2">&rsaquo;</b-button>
                  <b-button class="mr-2">&raquo;</b-button>
                </b-button-group>
              </b-button-toolbar>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Button toolbar'">
          <template v-slot:preview>
            <p>With mixture of small button group and small input group</p>
            <div>
              <b-button-toolbar
                aria-label="Toolbar with button groups and input groups"
              >
                <b-button-group size="sm" class="mr-1">
                  <b-button class="mr-2">Save</b-button>
                  <b-button class="mr-2">Cancel</b-button>
                </b-button-group>
                <b-input-group size="sm" prepend="$" append=".00">
                  <b-form-input value="100" class="text-right"></b-form-input>
                </b-input-group>
              </b-button-toolbar>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Button toolbar'">
          <template v-slot:preview>
            <p>With button groups and dropdown menu</p>
            <div>
              <b-button-toolbar
                aria-label="Toolbar with button groups and dropdown menu"
              >
                <b-button-group class="mx-1">
                  <b-button class="mr-2">New</b-button>
                  <b-button class="mr-2">Edit</b-button>
                  <b-button class="mr-2">Undo</b-button>
                </b-button-group>
                <b-dropdown class="mx-1" right text="menu">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-button-group class="mx-1">
                  <b-button class="mr-2">Save</b-button>
                  <b-button class="mr-2">Cancel</b-button>
                </b-button-group>
              </b-button-toolbar>
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
  <b-button-toolbar key-nav aria-label="Toolbar with button groups">
    <b-button-group class="mx-1">
      <b-button>&laquo;</b-button>
      <b-button>&lsaquo;</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button>Edit</b-button>
      <b-button>Undo</b-button>
      <b-button>Redo</b-button>
    </b-button-group>
    <b-button-group class="mx-1">
      <b-button>&rsaquo;</b-button>
      <b-button>&raquo;</b-button>
    </b-button-group>
  </b-button-toolbar>
</div>`,

      html2: `<div>
  <b-button-toolbar aria-label="Toolbar with button groups and input groups">
    <b-button-group size="sm" class="mr-1">
      <b-button>Save</b-button>
      <b-button>Cancel</b-button>
    </b-button-group>
    <b-input-group size="sm" prepend="$" append=".00">
      <b-form-input value="100" class="text-right"></b-form-input>
    </b-input-group>
  </b-button-toolbar>
</div>`,

      html3: `<div>
  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
    <b-button-group class="mx-1">
      <b-button>New</b-button>
      <b-button>Edit</b-button>
      <b-button>Undo</b-button>
    </b-button-group>
    <b-dropdown class="mx-1" right text="menu">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>
    <b-button-group class="mx-1">
      <b-button>Save</b-button>
      <b-button>Cancel</b-button>
    </b-button-group>
  </b-button-toolbar>
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
      { title: "Button Toolbar" }
    ]);
  }
};
</script>
