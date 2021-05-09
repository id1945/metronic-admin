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
        <b>Toasts</b> Push notifications to your visitors with a &lt;b-toast&gt;
        and &lt;b-toaster&gt;, lightweight components which are easily
        customizable for generating alert messages.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/toast"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Toasts'">
          <template v-slot:preview>
            <p>
              Toasts are slightly translucent, too, so they blend over whatever
              they might appear over. For browsers that support the
              <code>backdrop-filter</code> CSS property, they also attempt to
              blur the elements under the toast.
            </p>
            <div
              class="p-3 bg-secondary progress-bar-striped"
              style="min-height: 170px;"
            >
              <b-button
                class="mb-2"
                variant="primary"
                @click="$bvToast.show('example-toast')"
              >
                Show toast
              </b-button>
              <b-toast
                id="example-toast"
                title="BootstrapVue"
                static
                no-auto-hide
              >
                Hello, world! This is a toast message.
              </b-toast>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Toasts on demand'">
          <template v-slot:preview>
            <p>
              Generate a dynamic toast from anywhere in your app via the
              <code>this.$bvToast</code> Vue component instance injection,
              without the need to place a <code>&lt;b-toast&gt;</code> component
              in your app.
            </p>
            <div>
              <b-button class="mr-3" @click="makeToast()">
                Show Toast
              </b-button>
              <b-button class="mr-3" @click="makeToast(true)">
                Show Toast (appended)
              </b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Variants'">
          <template v-slot:preview>
            <p>
              BootstrapVue toasts provide custom CSS to define color variants.
              Variants follow the standard Bootstrap v4 variant names. If you
              have custom SCSS defined Bootstrap color theme variants, the toast
              custom SCSS will automatically create toast variants for you
              (refer to the
              <a
                href="https://bootstrap-vue.js.org/docs/reference/theming"
                target="_blank"
              >
                Theming
              </a>
              reference section).
            </p>
            <div>
              <b-button @click="makeToastVariant()" class="mb-2 mr-3">
                Default
              </b-button>
              <b-button
                variant="primary"
                @click="makeToastVariant('primary')"
                class="mb-2 mr-3"
              >
                Primary
              </b-button>
              <b-button
                variant="secondary"
                @click="makeToastVariant('secondary')"
                class="mb-2 mr-3"
              >
                Secondary
              </b-button>
              <b-button
                variant="danger"
                @click="makeToastVariant('danger')"
                class="mb-2 mr-3"
              >
                Danger
              </b-button>
              <b-button
                variant="warning"
                @click="makeToastVariant('warning')"
                class="mb-2 mr-3"
              >
                Warning
              </b-button>
              <b-button
                variant="success"
                @click="makeToastVariant('success')"
                class="mb-2 mr-3"
              >
                Success
              </b-button>
              <b-button
                variant="info"
                @click="makeToastVariant('info')"
                class="mb-2"
              >
                Info
              </b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Toaster target'">
          <template v-slot:preview>
            <p>
              The below toasters place the toasts in a stacked (columnar
              format), fixed within the viewport (meaning they will always be in
              view regardless of viewport scroll position). If there are more
              toasts than can fit on the viewport screen, some will be visually
              hidden offscreen until other toasts are closed/hidden.
            </p>
            <div>
              <b-button @click="toast('b-toaster-top-right')" class="mb-2 mr-3">
                b-toaster-top-right
              </b-button>
              <b-button @click="toast('b-toaster-top-left')" class="mb-2 mr-3">
                b-toaster-top-left
              </b-button>
              <b-button
                @click="toast('b-toaster-top-center')"
                class="mb-2 mr-3"
              >
                b-toaster-top-center
              </b-button>
              <b-button @click="toast('b-toaster-top-full')" class="mb-2 mr-3">
                b-toaster-top-full
              </b-button>
              <b-button
                @click="toast('b-toaster-bottom-right', true)"
                class="mb-2 mr-3"
              >
                b-toaster-bottom-right
              </b-button>
              <b-button
                @click="toast('b-toaster-bottom-left', true)"
                class="mb-2 mr-3"
              >
                b-toaster-bottom-left
              </b-button>
              <b-button
                @click="toast('b-toaster-bottom-center', true)"
                class="mb-2 mr-3"
              >
                b-toaster-bottom-center
              </b-button>
              <b-button
                @click="toast('b-toaster-bottom-full', true)"
                class="mb-2"
              >
                b-toaster-bottom-full
              </b-button>
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
        html: `<div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;">
    <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast')">
      Show toast
    </b-button>
    <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
      Hello, world! This is a toast message.
    </b-toast>
  </div>`
      },

      code2: {
        html: `<div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>`,
        js: `export default {
    data() {
      return {
        toastCount: 0
      }
    },
    methods: {
      makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(\`This is toast number ${this.toastCount}\`, {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          appendToast: append
        })
      }
    }
  }`
      },
      toastCount: 0,

      code3: {
        html: `<div>
    <b-button @click="makeToast()" class="mb-2">Default</b-button>
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
    <b-button variant="secondary" @click="makeToast('secondary')" class="mb-2">Secondary</b-button>
    <b-button variant="danger" @click="makeToast('danger')" class="mb-2">Danger</b-button>
    <b-button variant="warning" @click="makeToast('warning')" class="mb-2">Warning</b-button>
    <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>
    <b-button variant="info" @click="makeToast('info')" class="mb-2">Info</b-button>
  </div>`,
        js:
          "export default {\n" +
          "    methods: {\n" +
          "      makeToast(variant = null) {\n" +
          "        this.$bvToast.toast('Toast body content', {\n" +
          "          title: `Variant ${variant || 'default'}`,\n" +
          "          variant: variant,\n" +
          "          solid: true\n" +
          "        })\n" +
          "      }\n" +
          "    }\n" +
          "  }"
      },

      code4: {
        html: `<div>
    <b-button @click="toast('b-toaster-top-right')" class="mb-2">b-toaster-top-right</b-button>
    <b-button @click="toast('b-toaster-top-left')" class="mb-2">b-toaster-top-left</b-button>
    <b-button @click="toast('b-toaster-top-center')" class="mb-2">b-toaster-top-center</b-button>
    <b-button @click="toast('b-toaster-top-full')" class="mb-2">b-toaster-top-full</b-button>
    <b-button @click="toast('b-toaster-bottom-right', true)" class="mb-2">b-toaster-bottom-right</b-button>
    <b-button @click="toast('b-toaster-bottom-left', true)" class="mb-2">b-toaster-bottom-left</b-button>
    <b-button @click="toast('b-toaster-bottom-center', true)" class="mb-2">b-toaster-bottom-center</b-button>
    <b-button @click="toast('b-toaster-bottom-full', true)" class="mb-2">b-toaster-bottom-full</b-button>
  </div>`,
        js:
          "export default {\n" +
          "    data() {\n" +
          "      return {\n" +
          "        counter: 0\n" +
          "      }\n" +
          "    },\n" +
          "    methods: {\n" +
          "      toast(toaster, append = false) {\n" +
          "        this.counter++\n" +
          "        this.$bvToast.toast(`Toast ${this.counter} body content`, {\n" +
          "          title: `Toaster ${toaster}`,\n" +
          "          toaster: toaster,\n" +
          "          solid: true,\n" +
          "          appendToast: append\n" +
          "        })\n" +
          "      }\n" +
          "    }\n" +
          "  }"
      },
      counter: 0
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: append
      });
    },
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    },
    makeToastVariant(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Notify", route: "popover" },
      { title: "Toasts" }
    ]);
  }
};
</script>
