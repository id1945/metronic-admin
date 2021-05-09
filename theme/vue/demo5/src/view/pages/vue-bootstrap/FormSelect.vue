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
        <b>Form Select</b> Bootstrap custom &lt;select&gt; using custom styles.
        Optionally specify options based on an array, array of objects, or an
        object.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-select"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Form Select'">
          <template v-slot:preview>
            <p>
              Generate your select options by passing an array or object to the
              <code>options</code> props:
            </p>
            <div>
              <b-form-select
                v-model="code1.selected1"
                :options="code1.options"
              ></b-form-select>
              <b-form-select
                v-model="code1.selected2"
                :options="code1.options"
                size="sm"
                class="mt-3"
              ></b-form-select>

              <div class="mt-3">
                <p>
                  Selected: <strong>{{ code1.selected1 }}</strong>
                </p>
                <p>
                  Selected: <strong>{{ code1.selected2 }}</strong>
                </p>
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

        <KTCodePreview v-bind:title="'Options and optgroups'">
          <template v-slot:preview>
            <div>
              <b-form-select v-model="code2.selected" class="mb-3">
                <option :value="null">Please select an option</option>
                <option value="a">Option A</option>
                <option value="b" disabled>Option B (disabled)</option>
                <optgroup label="Grouped Options">
                  <option :value="{ C: '3PO' }"
                    >Option with object value</option
                  >
                  <option :value="{ R: '2D2' }"
                    >Another option with object value</option
                  >
                </optgroup>
              </b-form-select>

              <div class="mt-2">
                Selected: <strong>{{ code2.selected }}</strong>
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
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Changing the option field names'">
          <template v-slot:preview>
            <p>
              If you want to customize the field property names (for example
              using <code>name</code> field for display <code>text</code>) you
              can easily change them by setting the <code>text-field</code>,
              <code>html-field</code>, <code>value-field</code>, and
              <code>disabled-field</code> props to a string that contains the
              property name you would like to use:
            </p>
            <div>
              <b-form-select
                v-model="code3.selected"
                :options="code3.options"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ code3.selected }}</strong>
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

        <KTCodePreview v-bind:title="'Value in single mode'">
          <template v-slot:preview>
            <p>
              In non <code>multiple</code> mode,
              <code>&lt;b-form-select&gt;</code> returns the a single
              <code>value</code> of the currently selected option.
            </p>
            <div>
              <b-form-select
                v-model="code4.selected"
                :options="code4.options"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ code4.selected }}</strong>
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
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }`,
        selected1: null,
        selected2: null,
        options: [
          { value: null, text: "Please select an option" },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
          { value: { C: "3PO" }, text: "This is an option with object value" },
          { value: "d", text: "This one is disabled", disabled: true }
        ]
      },

      code2: {
        html: `<div>
    <b-form-select v-model="selected" class="mb-3">
      <option :value="null">Please select an option</option>
      <option value="a">Option A</option>
      <option value="b" disabled>Option B (disabled)</option>
      <optgroup label="Grouped Options">
        <option :value="{ C: '3PO' }">Option with object value</option>
        <option :value="{ R: '2D2' }">Another option with object value</option>
      </optgroup>
    </b-form-select>

    <div class="mt-2">Selected: <strong>{{ selected }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: null
      }
    }
  }`
      },

      code3: {
        html: `<div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' },
        ]
      }
    }
  }`,
        selected: "A",
        options: [
          { item: "A", name: "Option A" },
          { item: "B", name: "Option B" },
          { item: "D", name: "Option C", notEnabled: true },
          { item: { d: 1 }, name: "Option D" }
        ]
      },

      code4: {
        html: `<div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>`,
        js: `export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true },
        ]
      }
    }
  }`,
        selected: null,
        options: [
          { value: null, text: "Please select some item" },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Default Selected Option" },
          { value: "c", text: "This is another option" },
          { value: "d", text: "This one is disabled", disabled: true }
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
      { title: "Form Select" }
    ]);
  }
};
</script>
