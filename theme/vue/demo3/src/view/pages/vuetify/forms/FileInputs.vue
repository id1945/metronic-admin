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
        <b>File inputs</b> The <code>v-file-input</code> component is a
        specialized input that provides a clean interface for selecting files,
        showing detailed selection information and upload progress. It is meant
        to be a direct replacement for a standard file input.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/file-inputs"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Multiple'">
          <template v-slot:preview>
            <p>
              The <code>v-file-input</code> can contain multiple files at the
              same time when using the <strong>multiple</strong> prop.
            </p>
            <v-file-input multiple label="File input"></v-file-input>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom icons'">
          <template v-slot:preview>
            <p>
              The <code>v-file-input</code> has a default prepended icon that
              can be set on the component or adjusted globally.
            </p>
            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
            ></v-file-input>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Counter'">
          <template v-slot:preview>
            <p>
              When using the show-size property along with counter, the total
              number of files and size will be displayed under the input.
            </p>
            <v-file-input
              show-size
              counter
              multiple
              label="File input"
            ></v-file-input>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Complex selection slots'">
          <template v-slot:preview>
            <p>
              The flexibility of the selection slot allows you accomodate
              complex use-cases. In this example we show the first 2 selections
              as chips while adding a number indicator for the remaining amount.
            </p>
            <v-file-input
              v-model="code7.files"
              color="deep-purple accent-4"
              counter
              label="File input"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >
                  +{{ code7.files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
          <template v-slot:js>
            {{ code7.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'With chips'">
          <template v-slot:preview>
            <p>
              A selected file can be displayed as a chip. When using the chips
              and multiple props, each chip will be displayed (as opposed to the
              file count).
            </p>
            <div>
              <v-file-input
                chips
                multiple
                label="File input w/ chips"
              ></v-file-input>
              <v-file-input
                small-chips
                multiple
                label="File input w/ small chips"
              ></v-file-input>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Accept formats'">
          <template v-slot:preview>
            <p>
              <code>v-file-input</code> component can accept only specific media
              formats/file types if you want.
            </p>
            <v-file-input accept="image/*" label="File input"></v-file-input>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Size displaying'">
          <template v-slot:preview>
            <p>
              The displayed size of the selected file(s) can be configured with
              the show-size property. Display sizes can be either 1024 (the
              default used when providing true) or 1000.
            </p>
            <v-file-input show-size label="File input"></v-file-input>
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
        html: ` <v-file-input multiple label="File input"></v-file-input>`
      },

      code2: {
        html: `<v-file-input accept="image/*" label="File input"></v-file-input>`
      },

      code3: {
        html: `<div>
  <v-file-input chips multiple label="File input w/ chips"></v-file-input>
  <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
</div>`
      },

      code4: {
        html: `<v-file-input show-size label="File input"></v-file-input>`
      },

      code5: {
        html: `<v-file-input show-size counter multiple label="File input"></v-file-input>`
      },

      code6: {
        html: `<v-file-input
  label="File input"
  filled
  prepend-icon="mdi-camera"
></v-file-input>`
      },

      code7: {
        html: `<v-file-input
  v-model="files"
  color="deep-purple accent-4"
  counter
  label="File input"
  multiple
  placeholder="Select your files"
  prepend-icon="mdi-paperclip"
  outlined
  :show-size="1000"
>
  <template v-slot:selection="{ index, text }">
    <v-chip
      v-if="index < 2"
      color="deep-purple accent-4"
      dark
      label
      small
    >
      {{ text }}
    </v-chip>

    <span
      v-else-if="index === 2"
      class="overline grey--text text--darken-3 mx-2"
    >
      +{{ files.length - 2 }} File(s)
    </span>
  </template>
</v-file-input>`,
        js: `export default {
  data: () => ({
    files: [],
  }),
}`,
        files: []
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "File Inputs" }
    ]);
  }
};
</script>
