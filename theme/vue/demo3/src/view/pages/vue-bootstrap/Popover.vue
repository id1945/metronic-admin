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
        <b>Popover</b> The Popover feature, which provides a tooltip-like
        behavior, can be easily applied to any interactive element via the
        &lt;b-popover&gt; component or v-b-popover directive.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/popover"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Popover'">
          <template v-slot:preview>
            <div class="text-center my-3">
              <b-button
                class="mr-3"
                v-b-popover.hover.top="'I am popover directive content!'"
                title="Popover Title"
              >
                Hover Me
              </b-button>
              <b-button id="popover-target-1">
                Hover Me
              </b-button>
              <b-popover
                target="popover-target-1"
                triggers="hover"
                placement="top"
              >
                <template v-slot:title>Popover Title</template>
                I am popover <b>component</b> content!
              </b-popover>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>&lt;b-popover&gt;</code> Component basic usage
          </template>
          <template v-slot:preview>
            <b-container fluid>
              <h5 class="my-3">Placement</h5>
              <b-row>
                <b-col
                  v-for="placement in placements"
                  :key="placement"
                  md="4"
                  class="py-4 text-center"
                >
                  <b-button :id="`popover-1-${placement}`" variant="primary">{{
                    placement
                  }}</b-button>
                  <b-popover
                    :target="`popover-1-${placement}`"
                    :placement="placement"
                    title="Popover!"
                    triggers="hover focus"
                    :content="`Placement ${placement}`"
                  ></b-popover>
                </b-col>
              </b-row>

              <h5 class="my-3">Content via properties or slots</h5>
              <b-row>
                <b-col md="6" class="py-4 text-center">
                  <b-button id="popover-2" variant="primary"
                    >Using properties</b-button
                  >
                  <b-popover
                    target="popover-2"
                    title="Prop Examples"
                    triggers="hover focus"
                    content="Embedding content using properties is easy"
                  ></b-popover>
                </b-col>

                <b-col md="6" class="py-4 text-center">
                  <b-button id="popover-3" variant="primary"
                    >Using slots</b-button
                  >
                  <b-popover target="popover-3" triggers="hover focus">
                    <template v-slot:title>Content via Slots</template>
                    Embedding content
                    <span class="text-danger">using slots</span> affords you
                    <em>greater <strong>control.</strong></em> and basic HTML
                    support.
                  </b-popover>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Variants and custom class'">
          <template v-slot:preview>
            <p>
              BootstrapVue's popovers support contextual color variants via our
              custom CSS, via the <code>variant</code> prop:
            </p>
            <div class="text-center">
              <b-button id="popover-button-variant">Button</b-button>
              <b-popover
                target="popover-button-variant"
                variant="danger"
                triggers="focus"
              >
                <template v-slot:title>Danger!</template>
                Danger variant popover
              </b-popover>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Programmatically show and hide popover'">
          <template v-slot:preview>
            <p>
              You can manually control the visibility of a popover via the
              syncable Boolean <code>show</code> prop. Setting it to
              <code>true</code> will show the popover, while setting it to
              <code>false</code> will hide the popover.
            </p>
            <div class="d-flex flex-column text-md-center">
              <div class="p-2">
                <b-button id="popover-button-sync" variant="primary"
                  >I have a popover</b-button
                >
              </div>

              <div class="p-2">
                <b-button class="px-1" @click="show = !show"
                  >Toggle Popover</b-button
                >

                <b-popover
                  :show.sync="show"
                  target="popover-button-sync"
                  title="Popover"
                >
                  Hello <strong>World!</strong>
                </b-popover>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Programmatic control'">
          <template v-slot:preview>
            <p>
              Programmatic control can also be affected by submitting
              '<code>enable</code>' and '<code>disable</code>' events to the
              popover by reference.
            </p>
            <div class="d-flex flex-column text-md-center">
              <div class="p-2">
                <b-button id="popover-button-event" variant="primary"
                  >I have a popover</b-button
                >
              </div>

              <div class="p-2">
                <b-button class="px-1 mr-3" @click="onOpen">Open</b-button>
                <b-button class="px-1" @click="onClose">Close</b-button>
              </div>

              <b-popover
                ref="popover"
                target="popover-button-event"
                title="Popover"
              >
                Hello <strong>World!</strong>
              </b-popover>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
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
  <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
    Hover Me
  </b-button>

  <b-button id="popover-target-1">
    Hover Me
  </b-button>
  <b-popover target="popover-target-1" triggers="hover" placement="top">
    <template v-slot:title>Popover Title</template>
    I am popover <b>component</b> content!
  </b-popover>
</div>`
      },

      code2: {
        html:
          "<b-container fluid>\n" +
          '    <h5 class="my-3">Placement</h5>\n' +
          "    <b-row>\n" +
          "      <b-col\n" +
          '        v-for="placement in placements"\n' +
          '        :key="placement"\n' +
          '        md="4"\n' +
          '        class="py-4 text-center"\n' +
          "      >\n" +
          '        <b-button :id="`popover-1-${placement}`" variant="primary">{{ placement }}</b-button>\n' +
          "        <b-popover\n" +
          '          :target="`popover-1-${placement}`"\n' +
          '          :placement="placement"\n' +
          '          title="Popover!"\n' +
          '          triggers="hover focus"\n' +
          '          :content="`Placement ${placement}`"\n' +
          "        ></b-popover>\n" +
          "      </b-col>\n" +
          "    </b-row>\n" +
          "\n" +
          '    <h5 class="my-3">Content via properties or slots</h5>\n' +
          "    <b-row>\n" +
          '      <b-col md="6" class="py-4 text-center">\n' +
          '        <b-button id="popover-2" variant="primary">Using properties</b-button>\n' +
          "        <b-popover\n" +
          '          target="popover-2"\n' +
          '          title="Prop Examples"\n' +
          '          triggers="hover focus"\n' +
          '          content="Embedding content using properties is easy"\n' +
          "        ></b-popover>\n" +
          "      </b-col>\n" +
          "\n" +
          '      <b-col md="6" class="py-4 text-center">\n' +
          '        <b-button id="popover-3" variant="primary">Using slots</b-button>\n' +
          '        <b-popover target="popover-3" triggers="hover focus">\n' +
          "          <template v-slot:title>Content via Slots</template>\n" +
          '          Embedding content <span class="text-danger">using slots</span> affords you\n' +
          "          <em>greater <strong>control.</strong></em> and basic HTML support.\n" +
          "        </b-popover>\n" +
          "      </b-col>\n" +
          "    </b-row>\n" +
          "  </b-container>",
        js: `export default {
    data() {
      return {
        placements: [
          'topright',
          'top',
          'topleft',
          'bottomright',
          'bottom',
          'bottomleft',
          'righttop',
          'right',
          'lefttop',
          'rightbottom',
          'left',
          'leftbottom'
        ]
      }
    }`
      },
      placements: [
        "topright",
        "top",
        "topleft",
        "bottomright",
        "bottom",
        "bottomleft",
        "righttop",
        "right",
        "lefttop",
        "rightbottom",
        "left",
        "leftbottom"
      ],

      code3: {
        html: `<div class="text-center">
  <b-button id="popover-button-variant">Button</b-button>
  <b-popover target="popover-button-variant" variant="danger" triggers="focus">
    <template v-slot:title>Danger!</template>
    Danger variant popover
  </b-popover>
</div>`
      },

      code4: {
        html: `<div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-sync" variant="primary">I have a popover</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="show = !show">Toggle Popover</b-button>

      <b-popover :show.sync="show" target="popover-button-sync" title="Popover">
        Hello <strong>World!</strong>
      </b-popover>
    </div>
  </div>`,
        js: `export default {
    data() {
      return {
        show: false
      }
    }
  }`
      },
      show: false,

      code5: {
        html: `<div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-event" variant="primary">I have a popover</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Open</b-button>
      <b-button class="px-1" @click="onClose">Close</b-button>
    </div>

    <b-popover ref="popover" target="popover-button-event" title="Popover">
      Hello <strong>World!</strong>
    </b-popover>
  </div>`,
        js: `export default {
    methods: {
      onOpen() {
        this.$refs.popover.$emit('open')
      },
      onClose() {
        this.$refs.popover.$emit('close')
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
    onOpen() {
      this.$refs.popover.$emit("open");
    },
    onClose() {
      this.$refs.popover.$emit("close");
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Notify" },
      { title: "Popover" }
    ]);
  }
};
</script>
