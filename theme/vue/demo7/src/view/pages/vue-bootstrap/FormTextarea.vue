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
        <b>Form textarea</b> Create multi-line text inputs with support for auto
        height sizing, minimum and maximum number of rows, and contextual
        states.
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
        <KTCodePreview v-bind:title="'Form textarea'">
          <template v-slot:preview>
            <div>
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>

              <pre class="mt-3 mb-0">{{ text }}</pre>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Control sizing'">
          <template v-slot:preview>
            <p>
              Set text height using the size prop to <code>sm</code> or
              <code>lg</code> for small or large respectively.
            </p>
            <b-container fluid>
              <b-row>
                <b-col sm="2">
                  <label for="textarea-small">Small:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-small"
                    size="sm"
                    placeholder="Small textarea"
                  ></b-form-textarea>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col sm="2">
                  <label for="textarea-default">Default:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-default"
                    placeholder="Default textarea"
                  ></b-form-textarea>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col sm="2">
                  <label for="textarea-large">Large:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-large"
                    size="lg"
                    placeholder="Large textarea"
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Displayed rows'">
          <template v-slot:preview>
            <p>
              To set the height of <code>&lt;b-form-textarea&gt;</code>, set the
              <code>rows</code> prop to the desired number of rows. If no value
              is provided to <code>rows</code>, then it will default to
              <code>2</code> (the browser default and minimum acceptable value).
              Setting it to null or a value below <code>2</code> will result in
              the default of 2 being used.
            </p>
            <div>
              <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
              ></b-form-textarea>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Auto height'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-form-textarea&gt;</code> can also automatically adjust
              its height (text rows) to fit the content, even as the user enters
              or deletes text. The height of the textarea will either grow or
              shrink to fit the content (grow to a maximum of
              <code>max-rows</code> or shrink to a minimum of
              <code>rows</code>).
            </p>
            <b-container fluid>
              <b-row>
                <b-col sm="2">
                  <label for="textarea-auto-height">Auto height:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-auto-height"
                    placeholder="Auto height textarea"
                    rows="3"
                    max-rows="8"
                  ></b-form-textarea>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col sm="2">
                  <label for="textarea-no-auto-shrink">No auto-shrink:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-no-auto-shrink"
                    placeholder="Auto height (no-shrink) textarea"
                    rows="3"
                    max-rows="8"
                    no-auto-shrink
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code4.html }}
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
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
  </div>`,
        js: `export default {
    data() {
      return {
        text: ''
      }
    }
  }`
      },
      text: "",

      code2: {
        html: `<b-container fluid>
  <b-row>
    <b-col sm="2">
      <label for="textarea-small">Small:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-small"
        size="sm"
        placeholder="Small textarea"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-default">Default:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-default"
        placeholder="Default textarea"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-large">Large:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder="Large textarea"
      ></b-form-textarea>
    </b-col>
  </b-row>
</b-container>`
      },

      code3: {
        html: `<div>
  <b-form-textarea
    id="textarea-rows"
    placeholder="Tall textarea"
    rows="8"
  ></b-form-textarea>
</div>`
      },

      code4: {
        html: `<b-container fluid>
  <b-row>
    <b-col sm="2">
      <label for="textarea-auto-height">Auto height:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-auto-height"
        placeholder="Auto height textarea"
        rows="3"
        max-rows="8"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-no-auto-shrink">No auto-shrink:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-no-auto-shrink"
        placeholder="Auto height (no-shrink) textarea"
        rows="3"
        max-rows="8"
        no-auto-shrink
      ></b-form-textarea>
    </b-col>
  </b-row>
</b-container>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form Textarea" }
    ]);
  }
};
</script>
