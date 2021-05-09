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
        <b>Form Checkbox Inputs</b> For cross browser consistency,
        &lt;b-form-checkbox-group&gt; and &lt;b-form-checkbox&gt; use
        Bootstrap's custom checkbox input to replace the browser default
        checkbox input. It is built on top of semantic and accessible markup, so
        it is a solid replacement for the default checkbox input.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-checkbox"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Single checkbox'">
          <template v-slot:preview>
            <div>
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                I accept the terms and use
              </b-form-checkbox>

              <div class="mt-3">
                State: <strong>{{ status }}</strong>
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

        <KTCodePreview v-bind:title="'Multiple choice checkboxes'">
          <template v-slot:preview>
            <div>
              <b-form-group label="Using options array:">
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="code2.selected1"
                  :options="code2.options"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>

              <div class="mb-5">
                Selected: <strong>{{ code2.selected1 }}</strong>
              </div>

              <b-form-group label="Using sub-components:">
                <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="code2.selected2"
                  name="flavour-2"
                >
                  <b-form-checkbox value="orange">Orange</b-form-checkbox>
                  <b-form-checkbox value="apple">Apple</b-form-checkbox>
                  <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                  <b-form-checkbox value="grape">Grape</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <div>
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

        <KTCodePreview v-bind:title="'Inline and stacked checkboxes'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-form-checkbox-group&gt;</code> components render
              inline checkboxes by default, while
              <code>&lt;b-form-checkbox&gt;</code> renders block-level (stacked)
              checkboxes.
            </p>
            <div>
              <b-form-group
                label="Form-checkbox-group inline checkboxes (default)"
              >
                <b-form-checkbox-group
                  v-model="code3.selected1"
                  :options="code3.options"
                  name="flavour-1a"
                ></b-form-checkbox-group>
              </b-form-group>

              <b-form-group label="Form-checkbox-group stacked checkboxes">
                <b-form-checkbox-group
                  v-model="code3.selected2"
                  :options="code3.options"
                  name="flavour-2a"
                  stacked
                ></b-form-checkbox-group>
              </b-form-group>

              <b-form-group label="Individual stacked checkboxes (default)">
                <b-form-checkbox
                  v-for="option in code3.options"
                  v-model="code3.selected3"
                  :key="option.value"
                  :value="option.value"
                  name="flavour-3a"
                >
                  {{ option.text }}
                </b-form-checkbox>
              </b-form-group>

              <b-form-group label="Individual inline checkboxes">
                <b-form-checkbox
                  v-for="option in code3.options"
                  v-model="code3.selected4"
                  :key="option.value"
                  :value="option.value"
                  name="flavour-4a"
                  inline
                >
                  {{ option.text }}
                </b-form-checkbox>
              </b-form-group>
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
              Use the <code>size</code> prop to control the size of the
              checkbox. The default size is medium. Supported size values are
              <code>sm</code> (small) and <code>lg</code> (large).
            </p>
            <div>
              <b-form-checkbox size="sm">Small</b-form-checkbox>
              <b-form-checkbox>Default</b-form-checkbox>
              <b-form-checkbox size="lg">Large</b-form-checkbox>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ code4.html }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Grouped button style checkboxes'">
          <template v-slot:preview>
            <div>
              <b-form-group label="Button-group style checkboxes">
                <b-form-checkbox-group
                  v-model="code5.selected1"
                  :options="code5.options"
                  name="buttons-1"
                  buttons
                ></b-form-checkbox-group>
              </b-form-group>

              <b-form-group
                label="Button-group style checkboxes with variant primary and large buttons"
              >
                <b-form-checkbox-group
                  v-model="code5.selected2"
                  :options="code5.options"
                  buttons
                  button-variant="primary"
                  size="lg"
                  name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>

              <b-form-group
                label="Stacked (vertical) button-group style checkboxes"
              >
                <b-form-checkbox-group
                  v-model="code5.selected3"
                  :options="code5.options"
                  stacked
                  buttons
                ></b-form-checkbox-group>
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
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        status: 'not_accepted'
      }
    }
  }`
      },
      status: "not_accepted",

      code2: {
        html: `<div>
    <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }`,
        selected1: [], // Must be an array reference!
        selected2: [], // Must be an array reference!
        options: [
          { text: "Orange", value: "orange" },
          { text: "Apple", value: "apple" },
          { text: "Pineapple", value: "pineapple" },
          { text: "Grape", value: "grape" }
        ]
      },

      code3: {
        html: `<div>
    <b-form-group label="Form-checkbox-group inline checkboxes (default)">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="flavour-1a"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Form-checkbox-group stacked checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="flavour-2a"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Individual stacked checkboxes (default)">
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>

    <b-form-group label="Individual inline checkboxes">
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="flavour-4a"
        inline
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }`,
        selected1: [], // Must be an array reference!
        selected2: [], // Must be an array reference!
        selected3: [], // Must be an array reference!
        selected4: [], // Must be an array reference!
        options: [
          { text: "Orange", value: "orange" },
          { text: "Apple", value: "apple" },
          { text: "Pineapple", value: "pineapple" },
          { text: "Grape", value: "grape" }
        ]
      },

      code4: {
        html: `<div>
  <b-form-checkbox size="sm">Small</b-form-checkbox>
  <b-form-checkbox>Default</b-form-checkbox>
  <b-form-checkbox size="lg">Large</b-form-checkbox>
</div>`
      },

      code5: {
        html: `<div>
    <b-form-group label="Button-group style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="buttons-1"
        buttons
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Button-group style checkboxes with variant primary and large buttons">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Stacked (vertical) button-group style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        stacked
        buttons
      ></b-form-checkbox-group>
    </b-form-group>
  </div>`,
        js: `
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }`,
        selected1: [], // Must be an array reference!
        selected2: [], // Must be an array reference!
        selected3: [], // Must be an array reference!
        options: [
          { text: "Orange", value: "orange" },
          { text: "Apple", value: "apple" },
          { text: "Pineapple", value: "pineapple" },
          { text: "Grape", value: "grape" }
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
      { title: "Form Checkbox" }
    ]);
  }
};
</script>
