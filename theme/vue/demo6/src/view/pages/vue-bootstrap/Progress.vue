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
        <b>Progress</b> Use our custom progress component for displaying simple
        or complex progress bars, featuring support for horizontally stacked
        bars, animated backgrounds, and text labels.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/progress"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Progress'">
          <template v-slot:preview>
            <div>
              <b-progress
                :value="code1.value"
                :max="code1.max"
                show-progress
                animated
              ></b-progress>
              <b-progress class="mt-2" :max="code1.max" show-value>
                <b-progress-bar
                  :value="code1.value * (6 / 10)"
                  variant="success"
                ></b-progress-bar>
                <b-progress-bar
                  :value="code1.value * (2.5 / 10)"
                  variant="warning"
                ></b-progress-bar>
                <b-progress-bar
                  :value="code1.value * (1.5 / 10)"
                  variant="danger"
                ></b-progress-bar>
              </b-progress>

              <b-button class="mt-3" @click="randomValue">Click me</b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Labels'">
          <template v-slot:preview>
            <p>
              Add labels to your progress bars by either enabling
              <code>show-progress</code> (percentage of max) or
              <code>show-value</code> for the current absolute value. You may
              also set the precision (number of digits after the decimal) via
              the <code>precision</code> prop (default is 0digits after the
              decimal).
            </p>
            <div>
              <h5>No label</h5>
              <b-progress
                :value="code2.value"
                :max="code2.max"
                class="mb-3"
              ></b-progress>

              <h5>Value label</h5>
              <b-progress
                :value="code2.value"
                :max="code2.max"
                show-value
                class="mb-3"
              ></b-progress>

              <h5>Progress label</h5>
              <b-progress
                :value="code2.value"
                :max="code2.max"
                show-progress
                class="mb-3"
              ></b-progress>

              <h5>Value label with precision</h5>
              <b-progress
                :value="code2.value"
                :max="code2.max"
                :precision="2"
                show-value
                class="mb-3"
              ></b-progress>

              <h5>Progress label with precision</h5>
              <b-progress
                :value="code2.value"
                :max="code2.max"
                :precision="2"
                show-progress
                class="mb-3"
              ></b-progress>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom progress label'">
          <template v-slot:preview>
            <p>
              Need more control over the label? Provide your own label by using
              the default slot within a
              <code
                >&lt;b-progress-bar&gt; sub-component, or by using the label or
                label-html property on &lt;b-progress-bar&gt;</code
              >:
            </p>
            <div>
              <h5>Custom label via default slot</h5>
              <b-progress :max="code3.max" height="2rem">
                <b-progress-bar :value="code3.value">
                  <span>
                    Progress:
                    <strong
                      >{{ code3.value.toFixed(2) }} / {{ code3.max }}</strong
                    >
                  </span>
                </b-progress-bar>
              </b-progress>

              <h5 class="mt-3">Custom label via property</h5>
              <b-progress :max="code3.max">
                <b-progress-bar
                  :value="code3.value"
                  :label="`${((code3.value / code3.max) * 100).toFixed(2)}%`"
                ></b-progress-bar>
              </b-progress>

              <h5 class="mt-3">Custom label via property (HTML support)</h5>
              <b-progress :max="code3.max">
                <b-progress-bar
                  :value="code3.value"
                  :label-html="`<del>${code3.value}</del>`"
                ></b-progress-bar>
              </b-progress>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Width and height'">
          <template v-slot:preview>
            <div>
              <h5>Default width</h5>
              <b-progress :value="code4.value" class="mb-3"></b-progress>

              <h5>Custom widths</h5>
              <b-progress :value="code4.value" class="w-75 mb-2"></b-progress>
              <b-progress :value="code4.value" class="w-50 mb-2"></b-progress>
              <b-progress :value="code4.value" class="w-25"></b-progress>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Solid background variants'">
          <template v-slot:preview>
            <div>
              <div
                v-for="(bar, i) in code5.bars"
                class="row mb-1"
                v-bind:key="i"
              >
                <div class="col-sm-2">{{ bar.variant }}:</div>
                <div class="col-sm-10 pt-1">
                  <b-progress
                    :value="bar.value"
                    :variant="bar.variant"
                    :key="bar.variant"
                  ></b-progress>
                </div>
              </div>
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

<style lang="scss">
.progress-bar.progress-bar-striped.progress-bar-animated {
  background-repeat: repeat !important;
}
</style>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: `<div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-2" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
    </b-progress>

    <b-button class="mt-3" @click="randomValue">Click me</b-button>
  </div>`,
        js: `export default {
    data() {
      return {
        value: 45,
        max: 100
      }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max
      }
    }
  }`,
        value: 45,
        max: 100
      },

      code2: {
        html: `<div>
    <h5>No label</h5>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>

    <h5>Value label</h5>
    <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>

    <h5>Progress label</h5>
    <b-progress :value="value" :max="max" show-progress class="mb-3"></b-progress>

    <h5>Value label with precision</h5>
    <b-progress :value="value" :max="max" :precision="2" show-value class="mb-3"></b-progress>

    <h5>Progress label with precision</h5>
    <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-3"></b-progress>
  </div>`,
        js: `export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }`,
        value: 33.333333333,
        max: 50
      },

      code3: {
        html:
          "<div>\n" +
          "    <h5>Custom label via default slot</h5>\n" +
          '    <b-progress :max="max" height="2rem">\n' +
          '      <b-progress-bar :value="value">\n' +
          "        Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong>\n" +
          "      </b-progress-bar>\n" +
          "    </b-progress>\n" +
          "\n" +
          '    <h5 class="mt-3">Custom label via property</h5>\n' +
          '    <b-progress :max="max">\n' +
          '      <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>\n' +
          "    </b-progress>\n" +
          "\n" +
          '    <h5 class="mt-3">Custom label via property (HTML support)</h5>\n' +
          '    <b-progress :max="max">\n' +
          '      <b-progress-bar :value="value" :label-html="`<del>${value}</del>`"></b-progress-bar>\n' +
          "    </b-progress>\n" +
          "  </div>",
        js: `export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      }
    }
  }`,
        value: 33.333333333,
        max: 50
      },

      code4: {
        html: `<div>
    <h5>Default width</h5>
    <b-progress :value="value" class="mb-3"></b-progress>

    <h5>Custom widths</h5>
    <b-progress :value="value" class="w-75 mb-2"></b-progress>
    <b-progress :value="value" class="w-50 mb-2"></b-progress>
    <b-progress :value="value" class="w-25"></b-progress>
  </div>`,
        js: `export default {
    data() {
      return {
        value: 75
      }
    }
  }`,
        value: 75
      },

      code5: {
        html: `<div>
    <div v-for="bar in bars" class="row mb-1">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>`,
        js: `export default {
    data() {
      return {
        bars: [
          { variant: 'success', value: 75 },
          { variant: 'info', value: 75 },
          { variant: 'warning', value: 75 },
          { variant: 'danger', value: 75 },
          { variant: 'primary', value: 75 },
          { variant: 'secondary', value: 75 },
          { variant: 'dark', value: 75 }
        ],
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
      }, 2000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }`,
        bars: [
          { variant: "success", value: 75 },
          { variant: "info", value: 75 },
          { variant: "warning", value: 75 },
          { variant: "danger", value: 75 },
          { variant: "primary", value: 75 },
          { variant: "secondary", value: 75 },
          { variant: "dark", value: 75 }
        ],
        timer: null
      }
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    randomValue() {
      this.code1.value = Math.random() * this.code1.max;
    }
  },
  beforeDestroy() {
    clearInterval(this.code5.timer);
    this.code5.timer = null;
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Progress" }
    ]);
    this.code5.timer = setInterval(() => {
      this.code5.bars.forEach(bar => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  }
};
</script>
