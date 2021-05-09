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
        <b>Modals</b> Modals are streamlined, but flexible dialog prompts
        powered by JavaScript and CSS. They support a number of use cases from
        user notification to completely custom content and feature a handful of
        helpful sub-components, sizes, variants, accessibility, and more.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/media"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Modal'">
          <template v-slot:preview>
            <div>
              <b-button v-b-modal.modal-1>Launch demo modal</b-button>

              <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
              </b-modal>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            Using <code>v-b-modal</code> directive
          </template>
          <template v-slot:preview>
            <div>
              <!-- Using modifiers -->
              <b-button class="mr-3" v-b-modal.my-modal>Show Modal</b-button>

              <!-- Using value -->
              <b-button class="mr-3" v-b-modal="'my-modal'">
                Show Modal
              </b-button>

              <!-- The modal -->
              <b-modal id="my-modal">Hello From My Modal!</b-modal>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview>
          <template v-slot:title>
            Using <code>this.$bvModal.show()</code> and
            <code>this.$bvModal.hide()</code> instance methods
          </template>
          <template v-slot:preview>
            <p>
              When <code>BootstrapVue</code> is installed as a plugin, or the
              <code>ModalPlugin</code> plugin is used, BootstrapVue will inject
              a <code></code> object into every Vue instance (components, apps).
              <code>$bvModal</code> exposes several methods, of which two are
              for showing and hiding modals:
            </p>
            <div>
              <b-button class="mr-3" id="show-btn" @click="showModal">
                Open Modal
              </b-button>
              <b-button class="mr-3" id="toggle-btn" @click="toggleModal">
                Toggle Modal
              </b-button>

              <b-modal
                ref="my-modal"
                hide-footer
                title="Using Component Methods"
              >
                <div class="d-block text-center">
                  <h3>Hello From My Modal!</h3>
                </div>
                <b-button
                  class="mt-3"
                  variant="outline-danger"
                  block
                  @click="hideModal"
                >
                  Close Me
                </b-button>
                <b-button
                  class="mt-2"
                  variant="outline-warning"
                  block
                  @click="toggleModal"
                >
                  Toggle Me
                </b-button>
              </b-modal>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            Using <code>show()</code>, <code>hide()</code>, and
            <code>toggle()</code> component methods
          </template>
          <template v-slot:preview>
            <p>
              You can access modal using <code>ref</code> attribute and then
              call the <code>show()</code>, <code>hide()</code> or
              <code>toggle()</code> methods.
            </p>
            <div>
              <b-button class="mr-3" id="show-btn" @click="showModal">
                Open Modal
              </b-button>
              <b-button class="mr-3" id="toggle-btn" @click="toggleModal">
                Toggle Modal
              </b-button>

              <b-modal
                ref="my-modal"
                hide-footer
                title="Using Component Methods"
              >
                <div class="d-block text-center">
                  <h3>Hello From My Modal!</h3>
                </div>
                <b-button
                  class="mt-3 mr-3"
                  variant="outline-danger"
                  block
                  @click="hideModal"
                >
                  Close Me
                </b-button>
                <b-button
                  class="mt-2 mr-3"
                  variant="outline-warning"
                  block
                  @click="toggleModal"
                >
                  Toggle Me
                </b-button>
              </b-modal>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
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
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>`
      },

      code2: {
        html: `<div>
  <!-- Using modifiers -->
  <b-button v-b-modal.my-modal>Show Modal</b-button>

  <!-- Using value -->
  <b-button v-b-modal="'my-modal'">Show Modal</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Hello From My Modal!</b-modal>
</div>`
      },

      code3: {
        html: `<div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
  </div>`,
        js: `export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }`
      },

      code4: {
        html: `<div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
  </div>`,
        js: `export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }`
      }
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Modal" }
    ]);
  }
};
</script>
