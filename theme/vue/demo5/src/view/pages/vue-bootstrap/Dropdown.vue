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
        <b>Dropdowns</b> Dropdowns are toggleable, contextual overlays for
        displaying lists of links and actions in a dropdown menu format.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/dropdown"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Dropdowns'">
          <template v-slot:preview>
            <div>
              <b-dropdown id="dropdown-1" text="Dropdown Button">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html1 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button content'">
          <template v-slot:preview>
            <p>
              You can customize the text of the dropdown button by using either
              the <code>text</code> prop (shown in previous examples), or use
              the <code>button-content</code> slot instead of the
              <code>text</code> prop. The <code>button-content</code> slot
              allows you to use basic HTML and icons in the button content.
            </p>
            <div>
              <b-dropdown text="Button text via Prop" class="mr-3">
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
              </b-dropdown>

              <b-dropdown>
                <template v-slot:button-content>
                  Custom <strong>Content</strong> with <em>HTML</em> via Slot
                </template>
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html2 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Menu alignment'">
          <template v-slot:preview>
            <div>
              <b-dropdown
                id="dropdown-left"
                text="Left align"
                variant="primary"
                class="m-2"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>

              <b-dropdown
                id="dropdown-right"
                right
                text="Right align"
                variant="primary"
                class="m-2"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html3 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Sizing'">
          <template v-slot:preview>
            <p>
              Dropdowns work with trigger buttons of all sizes, including
              default and split dropdown buttons. Set the size prop to either
              <code>sm</code> for small button(s), or <code>lg</code> for large
              button(s).
            </p>
            <div>
              <div>
                <b-dropdown size="lg" text="Large" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Another action
                  </b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Something else here
                  </b-dropdown-item-button>
                </b-dropdown>

                <b-dropdown size="lg" split text="Large Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Another action
                  </b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Something else here...
                  </b-dropdown-item-button>
                </b-dropdown>
              </div>
              <div>
                <b-dropdown size="sm" text="Small" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Another action
                  </b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Something else here...
                  </b-dropdown-item-button>
                </b-dropdown>

                <b-dropdown size="sm" split text="Small Split" class="m-2">
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Another action
                  </b-dropdown-item-button>
                  <b-dropdown-item-button>
                    Something else here...
                  </b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html7 }}
            </highlight-code>
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Dropup'">
          <template v-slot:preview>
            <p>
              Turn your dropdown menu into a drop-up menu by setting the
              <code>dropup</code> prop.
            </p>
            <div>
              <b-dropdown
                id="dropdown-dropup"
                dropup
                text="Drop-Up"
                variant="primary"
                class="m-2"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html4 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Drop right or left'">
          <template v-slot:preview>
            <p>
              Turn your dropdown menu into a drop-right menu by setting the
              <code>dropright</code> prop. Or, turn it into a drop-left menu by
              setting the <code>dropleft</code> right prop to true.
            </p>
            <div>
              <b-dropdown
                id="dropdown-dropright"
                dropright
                text="Drop-Right"
                variant="primary"
                class="m-2"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>

              <b-dropdown
                id="dropdown-dropleft"
                dropleft
                text="Drop-Left"
                variant="primary"
                class="m-2"
              >
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html5 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Split button support'">
          <template v-slot:preview>
            <div>
              <b-dropdown split text="Split Dropdown" class="m-2">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">
                  Something else here...
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html6 }}
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
  <b-dropdown id="dropdown-1" text="Dropdown Button">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>`,

      html2: `<div>
  <b-dropdown text="Button text via Prop">
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>

  <b-dropdown>
    <template v-slot:button-content>
      Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>
</div>`,

      html3: `<div>
  <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>

  <b-dropdown id="dropdown-right" right text="Right align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</div>`,

      html4: `<div>
  <b-dropdown id="dropdown-dropup" dropup text="Drop-Up" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</div>`,

      html5: `<div>
  <b-dropdown id="dropdown-dropright" dropright text="Drop-Right" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>

  <b-dropdown id="dropdown-dropleft" dropleft text="Drop-Left" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</div>`,

      html6: `<div>
  <b-dropdown split text="Split Dropdown" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</div>`,

      html7: `<div>
  <div>
    <b-dropdown size="lg" text="Large" class="m-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here</b-dropdown-item-button>
    </b-dropdown>

    <b-dropdown size="lg" split text="Large Split" class="m-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
    </b-dropdown>
  </div>
  <div>
    <b-dropdown size="sm" text="Small" class="m-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
    </b-dropdown>

    <b-dropdown size="sm" split text="Small Split" class="m-2">
      <b-dropdown-item-button>Action</b-dropdown-item-button>
      <b-dropdown-item-button>Another action</b-dropdown-item-button>
      <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
    </b-dropdown>
  </div>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Dropdown" }
    ]);
  }
};
</script>
