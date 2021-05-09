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
        <b>Form Radio Inputs</b> For cross browser consistency,
        &lt;b-form-radio-group&gt; and &lt;b-form-radio&gt; uses Bootstrap's
        custom radio input to replace the browser default radio input. It is
        built on top of semantic and accessible markup, so it is a solid
        replacement for the default radio input.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-radio"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Individual radios'">
          <template v-slot:preview>
            <div>
              <b-form-group label="Individual radios">
                <b-form-radio
                  v-model="code1.selected"
                  name="some-radios"
                  value="A"
                >
                  Option A
                </b-form-radio>
                <b-form-radio
                  v-model="code1.selected"
                  name="some-radios"
                  value="B"
                >
                  Option B
                </b-form-radio>
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ code1.selected }}</strong>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Grouped radios'">
          <template v-slot:preview>
            <p>
              The individual radio inputs in
              <code>&lt;b-form-radio-group&gt;</code> can be specified via the
              options prop, or via manual placement of the
              <code>&lt;b-form-radio&gt;</code> sub component. When using
              manually placed <code>&lt;b-form-radio&gt;</code> components
              within a <code>&lt;b-form-radio-group&gt;</code>, they will
              inherit most props and the v-model from the
              <code>&lt;b-form-radio-group&gt;</code>
            </p>
            <div>
              <b-form-group label="Radios using options">
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="code2.selected1"
                  :options="code2.options"
                  name="radio-options"
                ></b-form-radio-group>
              </b-form-group>

              <div class="mt-3 mb-6">
                Selected: <strong>{{ code2.selected1 }}</strong>
              </div>

              <b-form-group label="Radios using sub-components">
                <b-form-radio-group
                  id="radio-group-2"
                  v-model="code2.selected2"
                  name="radio-sub-component"
                >
                  <b-form-radio value="first">
                    Toggle this custom radio
                  </b-form-radio>
                  <b-form-radio value="second">
                    Or toggle this other custom radio
                  </b-form-radio>
                  <b-form-radio value="third" disabled>
                    This one is Disabled
                  </b-form-radio>
                  <b-form-radio :value="{ fourth: 4 }">
                    This is the (fourth: 4) object radio
                  </b-form-radio>
                </b-form-radio-group>
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ code2.selected2 }}</strong>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Inline or stacked radios'">
          <template v-slot:preview>
            <p>
              By default <code>&lt;b-form-radio-group&gt;</code> generates
              inline radio inputs, while
              <code>&lt;b-form-radio&gt;</code> generates stacked radios. Set
              the prop <code>stacked</code> on
              <code>&lt;b-form-radio-group&gt;</code> to make the radios appear
              one over the other, or when using radios not in a group, set the
              <code>inline</code> prop on <code>b-form-radio</code> to true to
              render them inline
            </p>
            <div>
              <b-form-group label="Inline radios (default)">
                <b-form-radio-group
                  v-model="code3.selected1"
                  :options="code3.options"
                  name="radio-inline"
                ></b-form-radio-group>
              </b-form-group>

              <div class="mt-3 mb-6">
                Selected: <strong>{{ code3.selected1 }}</strong>
              </div>

              <b-form-group label="Stacked radios">
                <b-form-radio-group
                  v-model="code3.selected2"
                  :options="code3.options"
                  name="radios-stacked"
                  stacked
                ></b-form-radio-group>
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ code3.selected2 }}</strong>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Control sizing'">
          <template v-slot:preview>
            <p>
              Use the <code>size</code> prop to control the size of the radio.
              The default size is medium. Supported size values are
              <code>sm</code> (small) and <code>lg</code> (large).
            </p>
            <div>
              <b-form-radio name="radio-size" size="sm">Small</b-form-radio>
              <b-form-radio name="radio-size">Default</b-form-radio>
              <b-form-radio name="radio-size" size="lg">Large</b-form-radio>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button style radios'">
          <template v-slot:preview>
            <p>
              Render radios with the look of buttons by setting the prop
              <code>buttons</code> to <code>true</code> on
              <code>&lt;b-form-radio-group&gt;</code>. Set the button variant by
              setting the <code>button-variant</code> prop to one of the
              standard Bootstrap button variants (see
              <code>&lt;b-button&gt;</code> for supported variants). The default
              <code>button-variant</code> is <code>secondary</code>.
            </p>
            <div>
              <b-form-group label="Button style radios">
                <b-form-radio-group
                  id="btn-radios-1"
                  v-model="code5.selected1"
                  :options="code5.options"
                  buttons
                  name="radios-btn-default"
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group
                label="Button style radios with outline-primary variant and size lg"
              >
                <b-form-radio-group
                  id="btn-radios-2"
                  v-model="code5.selected2"
                  :options="code5.options"
                  buttons
                  button-variant="outline-primary"
                  size="lg"
                  name="radio-btn-outline"
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group label="Stacked button style radios">
                <b-form-radio-group
                  id="btn-radios-3"
                  v-model="code5.selected3"
                  :options="code5.options"
                  buttons
                  stacked
                  name="radio-btn-stacked"
                ></b-form-radio-group>
              </b-form-group>
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
        html: `<div>
  <b-form-group label="Individual radios">
    <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
    <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
  </b-form-group>

  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
</div>`,
        js: `export default {
  data() {
    return {
      selected: ''
    }
  }
}`,
        selected: ""
      },

      code2: {
        html: `<div>
  <b-form-group label="Radios using options">
    <b-form-radio-group
      id="radio-group-1"
      v-model="selected"
      :options="options"
      name="radio-options"
    ></b-form-radio-group>
  </b-form-group>

  <b-form-group label="Radios using sub-components">
    <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
      <b-form-radio value="first">Toggle this custom radio</b-form-radio>
      <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
      <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
      <b-form-radio :value="{ fourth: 4 }">This is the (fourth: 4) object radio</b-form-radio>
    </b-form-radio-group>
  </b-form-group>

  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
</div>`,
        js: `export default {
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Toggle this custom radio', value: 'first' },
        { text: 'Or toggle this other custom radio', value: 'second' },
        { text: 'This one is Disabled', value: 'third', disabled: true },
        { text: 'This is the (fourth: 4) object radio', value: { fourth: 4 } }
      ]
    }
  }
}`,
        selected1: "first",
        selected2: "first",
        options: [
          { text: "Toggle this custom radio", value: "first" },
          { text: "Or toggle this other custom radio", value: "second" },
          { text: "This one is Disabled", value: "third", disabled: true },
          { text: "This is the (fourth: 4) object radio", value: { fourth: 4 } }
        ]
      },

      code3: {
        html3: `<div>
  <b-form-group label="Inline radios (default)">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      name="radio-inline"
    ></b-form-radio-group>
  </b-form-group>

  <b-form-group label="Stacked radios">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      name="radios-stacked"
      stacked
    ></b-form-radio-group>
  </b-form-group>

  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
</div>`,
        js3: `export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }`,
        selected1: "first",
        selected2: "first",
        options: [
          { text: "First radio", value: "first" },
          { text: "Second radio", value: "second" },
          { text: "Third radio", value: "third" }
        ]
      },

      code4: {
        html: `<div>
  <b-form-radio name="radio-size" size="sm">Small</b-form-radio>
  <b-form-radio name="radio-size">Default</b-form-radio>
  <b-form-radio name="radio-size" size="lg">Large</b-form-radio>
</div>`
      },

      code5: {
        html5: `<div>
  <b-form-group label="Button style radios">
    <b-form-radio-group
      id="btn-radios-1"
      v-model="selected"
      :options="options"
      buttons
      name="radios-btn-default"
    ></b-form-radio-group>
  </b-form-group>

  <b-form-group label="Button style radios with outline-primary variant and size lg">
    <b-form-radio-group
      id="btn-radios-2"
      v-model="selected"
      :options="options"
      buttons
      button-variant="outline-primary"
      size="lg"
      name="radio-btn-outline"
    ></b-form-radio-group>
  </b-form-group>

  <b-form-group label="Stacked button style radios">
    <b-form-radio-group
      id="btn-radios-3"
      v-model="selected"
      :options="options"
      buttons
      stacked
      name="radio-btn-stacked"
    ></b-form-radio-group>
  </b-form-group>
</div>`,
        js5: `export default {
    data() {
      return {
        selected: 'radio1',
        options: [
          { text: 'Radio 1', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
          { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
          { text: 'Radio 4', value: 'radio4' }
        ]
      }
    }
  }`,
        selected1: "radio1",
        selected2: "radio1",
        selected3: "radio1",
        options: [
          { text: "Radio 1", value: "radio1" },
          { text: "Radio 3", value: "radio2" },
          { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
          { text: "Radio 4", value: "radio4" }
        ]
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form Radio" }
    ]);
  }
};
</script>
