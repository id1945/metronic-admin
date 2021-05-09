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
        <b>Tooltips</b> Easily add tooltips to elements or components via the
        &lt;b-tooltip&gt; component or v-b-tooltip directive (preferred method).
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/tooltip"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Tooltips'">
          <template v-slot:preview>
            <div class="text-center my-3">
              <b-button
                class="mr-3"
                v-b-tooltip.hover
                title="Tooltip directive content"
              >
                Hover Me
              </b-button>
              <b-button class="mr-3" id="tooltip-target-1">
                Hover Me
              </b-button>
              <b-tooltip
                class="mr-3"
                target="tooltip-target-1"
                triggers="hover"
              >
                I am tooltip <b>component</b> content!
              </b-tooltip>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Disabled elements'">
          <template v-slot:preview>
            <p>
              Elements with the <code>disabled</code> attribute aren't
              interactive, meaning users cannot focus, hover, or click them to
              trigger a tooltip (or popover). As a workaround, you'll want to
              trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or
              <code>&lt;span&gt;</code>, ideally made keyboard-focusable using
              <code>tabindex=&quot;0&quot;</code>, and override the
              <code>pointer-events</code> on the disabled element.
            </p>
            <div>
              <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
                <b-button
                  variant="primary"
                  style="pointer-events: none;"
                  disabled
                >
                  Disabled button
                </b-button>
              </span>
              <b-tooltip target="disabled-wrapper">Disabled tooltip</b-tooltip>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>&lt;b-tooltip&gt;</code> component usage
          </template>
          <template v-slot:preview>
            <b-container fluid>
              <b-row>
                <b-col md="4" class="py-4">
                  <b-button id="button-1" variant="outline-success">
                    Live chat
                  </b-button>
                </b-col>
                <b-col md="4" class="py-4">
                  <b-button id="button-2" variant="outline-success">
                    Html chat
                  </b-button>
                </b-col>
                <b-col md="4" class="py-4">
                  <b-button ref="button-3" variant="outline-success">
                    Alternative chat
                  </b-button>
                </b-col>
              </b-row>

              <!-- Tooltip title specified via prop title -->
              <b-tooltip target="button-1" title="Online!"></b-tooltip>

              <!-- HTML title specified via default slot -->
              <b-tooltip target="button-2" placement="bottom">
                Hello <strong>World!</strong>
              </b-tooltip>

              <!-- Tooltip for an element identified by ref -->
              <b-tooltip
                :target="() => $refs['button-3']"
                title="Alternative!"
              ></b-tooltip>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Programmatically show and hide tooltip'">
          <template v-slot:preview>
            <p>
              You can manually control the visibility of a tooltip via the
              syncable Boolean <code>show</code> prop. Setting it to
              <code>true</code> will show the tooltip, while setting it to
              <code>false</code> will hide the tooltip.
            </p>
            <div class="text-center">
              <div>
                <b-button id="tooltip-button-1" variant="primary">
                  I have a tooltip
                </b-button>
              </div>

              <div class="mt-3">
                <b-button @click="show = !show">Toggle Tooltip</b-button>
              </div>

              <b-tooltip
                :show.sync="show"
                target="tooltip-button-1"
                placement="top"
              >
                Hello <strong>World!</strong>
              </b-tooltip>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Programmatic control'">
          <template v-slot:preview>
            <p>
              Programmatic control can also be affected by submitting
              '<code>open</code>' and '<code>close</code>' events to the tooltip
              by reference.
            </p>
            <div class="d-flex flex-column text-md-center">
              <div class="p-2">
                <b-button id="tooltip-button-show-event" variant="primary">
                  I have a tooltip
                </b-button>
              </div>

              <div class="p-2">
                <b-button class="px-1 mr-3" @click="onOpen">Open</b-button>
                <b-button class="px-1 mr-3" @click="onClose">Close</b-button>
              </div>

              <b-tooltip ref="tooltip" target="tooltip-button-show-event">
                Hello <strong>World!</strong>
              </b-tooltip>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>v-b-tooltip</code> directive usage
          </template>
          <template v-slot:preview>
            <p>
              The <code>v-b-tooltip</code> directive makes adding tooltips even
              easier, without additional placeholder markup:
            </p>
            <b-container fluid>
              <b-row>
                <b-col md="6" class="py-4">
                  <b-button
                    v-b-tooltip
                    title="Online!"
                    variant="outline-success"
                    >Live chat</b-button
                  >
                </b-col>

                <b-col md="6" class="py-4">
                  <b-button
                    v-b-tooltip.html
                    title="Hello <strong>World!</strong>"
                    variant="outline-success"
                  >
                    Html chat
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code6.html }}
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
        html: `<div class="text-center my-3">
  <b-button v-b-tooltip.hover title="Tooltip directive content">
    Hover Me
  </b-button>

  <b-button id="tooltip-target-1">
    Hover Me
  </b-button>
  <b-tooltip target="tooltip-target-1" triggers="hover">
    I am tooltip <b>component</b> content!
  </b-tooltip>
</div>`
      },
      show: false,

      code2: {
        html: `<div>
  <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
    <b-button variant="primary" style="pointer-events: none;" disabled>Disabled button</b-button>
  </span>
  <b-tooltip target="disabled-wrapper">Disabled tooltip</b-tooltip>
</div>`
      },

      code3: {
        html: `<b-container fluid>
  <b-row>
    <b-col md="4" class="py-4">
      <b-button id="button-1" variant="outline-success">Live chat</b-button>
    </b-col>
    <b-col md="4" class="py-4">
      <b-button id="button-2" variant="outline-success">Html chat</b-button>
    </b-col>
    <b-col md="4" class="py-4">
      <b-button ref="button-3" variant="outline-success">Alternative chat</b-button>
    </b-col>
  </b-row>

  <!-- Tooltip title specified via prop title -->
  <b-tooltip target="button-1" title="Online!"></b-tooltip>

  <!-- HTML title specified via default slot -->
  <b-tooltip target="button-2" placement="bottom">
    Hello <strong>World!</strong>
  </b-tooltip>

  <!-- Tooltip for an element identified by ref -->
  <b-tooltip :target="() => $refs['button-3']" title="Alternative!"></b-tooltip>
</b-container>`
      },

      code4: {
        html: `<div class="text-center">
    <div>
      <b-button id="tooltip-button-1" variant="primary">I have a tooltip</b-button>
    </div>

    <div class="mt-3">
      <b-button @click="show = !show">Toggle Tooltip</b-button>
    </div>

    <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
      Hello <strong>World!</strong>
    </b-tooltip>
  </div>`,
        js: `export default {
    data: {
      show: true
    }
  }`
      },

      code5: {
        html: `<div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="tooltip-button-show-event" variant="primary">I have a tooltip</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Open</b-button>
      <b-button class="px-1" @click="onClose">Close</b-button>
    </div>

    <b-tooltip ref="tooltip" target="tooltip-button-show-event">
      Hello <strong>World!</strong>
    </b-tooltip>
  </div>`,
        js: `export default {
    methods: {
      onOpen() {
        this.$refs.tooltip.$emit('open')
      },
      onClose() {
        this.$refs.tooltip.$emit('close')
      }
    }
  }`
      },

      code6: {
        html: `<b-container fluid>
  <b-row>
    <b-col md="6" class="py-4">
      <b-button v-b-tooltip title="Online!" variant="outline-success">Live chat</b-button>
    </b-col>

    <b-col md="6" class="py-4">
      <b-button
        v-b-tooltip.html
        title="Hello <strong>World!</strong>"
        variant="outline-success"
      >
        Html chat
      </b-button>
    </b-col>
  </b-row>
</b-container>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    onOpen() {
      this.$refs.tooltip.$emit("open");
    },
    onClose() {
      this.$refs.tooltip.$emit("close");
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Notify", route: "popover" },
      { title: "Tooltip" }
    ]);
  }
};
</script>
