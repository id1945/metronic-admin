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
        <b>Input Groups</b> Easily extend form controls by adding text, buttons,
        or button groups on either side of textual inputs.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-textarea"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Input Groups'">
          <template v-slot:preview>
            <div>
              <!-- Using props -->
              <b-input-group size="lg" prepend="$" append=".00">
                <b-form-input></b-form-input>
              </b-input-group>

              <!-- Using slots -->
              <b-input-group class="mt-3">
                <template v-slot:append>
                  <b-input-group-text
                    ><strong class="text-danger">!</strong></b-input-group-text
                  >
                </template>
                <b-form-input></b-form-input>
              </b-input-group>

              <!-- Using components -->
              <b-input-group prepend="Username" class="mt-3">
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-success">Button</b-button>
                  <b-button variant="info">Button</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Using prepend and append props'">
          <template v-slot:preview>
            <p>
              Values will be internally wrapped by a
              <code>&lt;b-input-group-text&gt;</code> to display correctly.
            </p>
            <div>
              <b-input-group prepend="$" append=".00">
                <b-form-input></b-form-input>
              </b-input-group>

              <b-input-group prepend="0" append="100" class="mt-3">
                <b-form-input type="range" min="0" max="100"></b-form-input>
              </b-input-group>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Using named slots'">
          <template v-slot:preview>
            <p>
              if you want better control over addons, you can use
              <code>prepend</code> and <code>append</code> slots instead.
            </p>
            <div>
              <b-input-group>
                <template v-slot:prepend>
                  <b-input-group-text>Username</b-input-group-text>
                </template>
                <b-form-input></b-form-input>

                <template v-slot:append>
                  <b-dropdown text="Dropdown" variant="success">
                    <b-dropdown-item>Action A</b-dropdown-item>
                    <b-dropdown-item>Action B</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-input-group>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Using sub-components'">
          <template v-slot:preview>
            <p>
              Use the <code>&lt;b-input-group-prepend&gt;</code> or
              <code>&lt;b-input-group-append&gt;</code> to add arbitrary addons
              wherever you like, and use these components to group buttons in
              your input group. Single buttons must always be wrapped in these
              components for proper styling.
            </p>
            <div>
              <b-input-group>
                <b-input-group-prepend>
                  <b-button variant="outline-info">Button</b-button>
                </b-input-group-prepend>

                <b-form-input type="number" min="0.00"></b-form-input>

                <b-input-group-append>
                  <b-button variant="outline-secondary">Button</b-button>
                  <b-button variant="outline-secondary">Button</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview
          v-bind:title="'Custom radio, checkbox, and switch addons'"
        >
          <template v-slot:preview>
            <p>
              Using <code>&lt;b-form-checkbox&gt;</code> and
              <code>&lt;b-form-radio&gt;</code> components as addons, using
              Bootstrap
              <a
                href="https://bootstrap-vue.js.org/docs/reference/utility-classes"
                target="_blank"
                >utility classes</a
              >
              for additional styling to get them to
              <code>&quot;fit&quot;</code> in the addon:
            </p>
            <div>
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-form-checkbox class="mr-n2">
                    <span class="sr-only">
                      Checkbox for following text input
                    </span>
                  </b-form-checkbox>
                </b-input-group-prepend>
                <b-form-input
                  aria-label="Text input with checkbox"
                ></b-form-input>
              </b-input-group>

              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-form-radio class="mr-n2">
                    <span class="sr-only">Radio for following text input</span>
                  </b-form-radio>
                </b-input-group-prepend>
                <b-form-input
                  aria-label="Text input with radio input"
                ></b-form-input>
              </b-input-group>

              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-form-checkbox switch class="mr-n2">
                    <span class="sr-only">Switch for following text input</span>
                  </b-form-checkbox>
                </b-input-group-prepend>
                <b-form-input
                  aria-label="Text input with switch"
                ></b-form-input>
              </b-input-group>
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
  <!-- Using props -->
  <b-input-group size="lg" prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Using slots -->
  <b-input-group class="mt-3">
    <template v-slot:append>
      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
    </template>
    <b-form-input></b-form-input>
  </b-input-group>

  <!-- Using components -->
  <b-input-group prepend="Username" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-success">Button</b-button>
      <b-button variant="info">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>`
      },

      code2: {
        html: `<div>
  <b-input-group prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>

  <b-input-group prepend="0" append="100" class="mt-3">
    <b-form-input type="range" min="0" max="100"></b-form-input>
  </b-input-group>
</div>`
      },

      code3: {
        html: `<div>
  <b-input-group>
    <template v-slot:prepend>
      <b-input-group-text >Username</b-input-group-text>
    </template>
    <b-form-input></b-form-input>

    <template v-slot:append>
      <b-dropdown text="Dropdown" variant="success">
        <b-dropdown-item>Action A</b-dropdown-item>
        <b-dropdown-item>Action B</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</div>`
      },

      code4: {
        html: `<div>
  <b-input-group>
    <b-input-group-prepend>
      <b-button variant="outline-info">Button</b-button>
    </b-input-group-prepend>

    <b-form-input type="number" min="0.00"></b-form-input>

    <b-input-group-append>
      <b-button variant="outline-secondary">Button</b-button>
      <b-button variant="outline-secondary">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>`
      },

      code5: {
        html: `<div>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-checkbox class="mr-n2">
        <span class="sr-only">Checkbox for following text input</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with checkbox"></b-form-input>
  </b-input-group>

  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-radio class="mr-n2">
        <span class="sr-only">Radio for following text input</span>
      </b-form-radio>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with radio input"></b-form-input>
  </b-input-group>

  <b-input-group>
    <b-input-group-prepend is-text>
      <b-form-checkbox switch class="mr-n2">
        <span class="sr-only">Switch for following text input</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with switch"></b-form-input>
  </b-input-group>
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
      { title: "Input Groups" }
    ]);
  }
};
</script>
