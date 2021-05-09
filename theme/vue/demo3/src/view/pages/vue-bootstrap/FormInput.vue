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
        <b>Textual and Value inputs</b> Create various type inputs such as:
        text, password, number, url, email, search, range, date and more.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-input"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Textual and Value inputs'">
          <template v-slot:preview>
            <div>
              <b-form-input
                v-model="text"
                placeholder="Enter your name"
              ></b-form-input>
              <div class="mt-2">Value: {{ text }}</div>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
          <template v-slot:js>
            {{ js1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Input type'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-form-input&gt;</code> defaults to a text input, but
              you can set the <code>type</code> prop to one of the supported
              native browser HTML5 types: <code>text</code>,
              <code>password</code>, <code>email</code>, <code>number</code>,
              <code>url</code>, <code>tel</code>, <code>search</code>,
              <code>date</code>, <code>datetime</code>,
              <code>datetime-local</code>, <code>month</code>,
              <code>week</code>, <code>time</code>, <code>range</code>, or
              <code>color</code>.
            </p>
            <b-container fluid>
              <b-row class="my-1" v-for="type in types" :key="type">
                <b-col sm="3">
                  <label :for="`type-${type}`">Type {{ type }}:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    :id="`type-${type}`"
                    :type="type"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
          <template v-slot:js>
            {{ js2 }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Control sizing'">
          <template v-slot:preview>
            <p>
              Set heights using the <code>size</code> prop to <code>sm</code> or
              <code>lg</code> for small or large respectively.
            </p>
            <b-container fluid>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="input-small">Small:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-small"
                    size="sm"
                    placeholder="Enter your name"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-1">
                <b-col sm="2">
                  <label for="input-default">Default:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-default"
                    placeholder="Enter your name"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-1">
                <b-col sm="2">
                  <label for="input-large">Large:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-large"
                    size="lg"
                    placeholder="Enter your name"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Contextual states'">
          <template v-slot:preview>
            <p>
              Bootstrap includes validation styles for <code>valid</code> and
              <code>invalid</code> states on most form controls.
            </p>
            <b-container fluid>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input-none">No State:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-none"
                    :state="null"
                    placeholder="No validation"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input-valid">Valid State:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-valid"
                    :state="true"
                    placeholder="Valid input"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input-invalid">Invalid State:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-invalid"
                    :state="false"
                    placeholder="Invalid input"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ html4 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Contextual states Live Example'">
          <template v-slot:preview>
            <div role="group">
              <label for="input-live">Name:</label>
              <b-form-input
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter your name"
                trim
              ></b-form-input>

              <!-- This will only be shown if the preceding input has an invalid state -->
              <b-form-invalid-feedback id="input-live-feedback">
                Enter at least 3 letters
              </b-form-invalid-feedback>

              <!-- This is a form text block (formerly known as help block) -->
              <b-form-text id="input-live-help">Your full name.</b-form-text>
            </div>
          </template>
          <template v-slot:html>
            {{ html5 }}
          </template>
          <template v-slot:js>
            {{ js5 }}
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
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>`,
      js1: `export default {
    data() {
      return {
        text: ''
      }
    }
  }`,
      text: "",

      html2:
        "<b-container fluid>\n" +
        '    <b-row class="my-1" v-for="type in types" :key="type">\n' +
        '      <b-col sm="3">\n' +
        '        <label :for="`type-${type}`">Type {{ type }}:</label>\n' +
        "      </b-col>\n" +
        '      <b-col sm="9">\n' +
        '        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>\n' +
        "      </b-col>\n" +
        "    </b-row>\n" +
        "  </b-container>",
      js2: `export default {
    data() {
      return {
        types: [
          'text',
          'password',
          'email',
          'number',
          'url',
          'tel',
          'date',
          \`time\`,
          'range',
          'color'
        ]
      }
    }
  }`,
      types: [
        "text",
        "password",
        "email",
        "number",
        "url",
        "tel",
        "date",
        `time`,
        "range",
        "color"
      ],

      html3: `<b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">Small:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">Default:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">Large:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="Enter your name"></b-form-input>
    </b-col>
  </b-row>
</b-container>`,

      html4: `<b-container fluid>
  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-none">No State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-valid">Valid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-invalid">Invalid State:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
    </b-col>
  </b-row>
</b-container>`,

      html5: `<div role="group">
    <label for="input-live">Name:</label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
    <b-form-text id="input-live-help">Your full name.</b-form-text>
  </div>`,
      js5: `export default {
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }`,
      name: ""
    };
  },
  components: {
    KTCodePreview
  },
  computed: {
    nameState() {
      return this.name.length > 2;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form Input" }
    ]);
  }
};
</script>
