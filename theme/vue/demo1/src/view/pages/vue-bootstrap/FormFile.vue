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
        <b>Form File Input</b> Customized, cross-browser consistent, file input
        control that supports single file, multiple files, and directory upload
        (for browsers that support directory mode)
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-file"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Form File Input'">
          <template v-slot:preview>
            <div>
              <!-- Styled -->
              <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <div class="mt-3">Selected file: {{ file ? file.name : "" }}</div>

              <!-- Plain mode -->
              <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
              <div class="mt-3">
                Selected file: {{ file2 ? file2.name : "" }}
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
          <template v-slot:js>
            {{ js1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'File name formatting via scoped slot'">
          <template v-slot:preview>
            <p>
              Alternatively, you can use the scoped slot
              <code>file-name</code> to render the file names. The scoped slot
              will receive the following properties:
            </p>
            <b-form-file multiple>
              <template slot="file-name" slot-scope="{ names }">
                <b-badge variant="dark">{{ names[0] }}</b-badge>
                <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                  + {{ names.length - 1 }} More files
                </b-badge>
              </template>
            </b-form-file>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Control sizing'">
          <template v-slot:preview>
            <p>
              Use the <code>size</code> prop to control the visual size of the
              input. The default size is considered <code>md</code> (medium).
              Optional sizes are <code>lg</code> (large) and
              <code>sm</code> (small). These sizes line up with the sizes
              available on other form controls.
            </p>
            <div>
              <b-form-group
                label="Small:"
                label-for="file-small"
                label-cols-sm="2"
                label-size="sm"
              >
                <b-form-file id="file-small" size="sm"></b-form-file>
              </b-form-group>

              <b-form-group
                label="Default:"
                label-for="file-default"
                label-cols-sm="2"
              >
                <b-form-file id="file-default"></b-form-file>
              </b-form-group>

              <b-form-group
                label="Large:"
                label-for="file-large"
                label-cols-sm="2"
                label-size="lg"
              >
                <b-form-file id="file-large" size="lg"></b-form-file>
              </b-form-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
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
    <!-- Styled -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

    <!-- Plain mode -->
    <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
  </div>`,
      js1: `export default {
    data() {
      return {
        file: null,
        file2: null
      }
    }`,
      file: null,
      file2: null,

      html2: `<div>
  <b-form-group label="Small:" label-for="file-small" label-cols-sm="2" label-size="sm">
    <b-form-file id="file-small" size="sm"></b-form-file>
  </b-form-group>

  <b-form-group label="Default:" label-for="file-default" label-cols-sm="2">
    <b-form-file id="file-default"></b-form-file>
  </b-form-group>

  <b-form-group label="Large:" label-for="file-large" label-cols-sm="2" label-size="lg">
    <b-form-file id="file-large" size="lg"></b-form-file>
  </b-form-group>
</div>`,

      html3: `<b-form-file multiple>
   <template slot="file-name" slot-scope="{ names }">
     <b-badge variant="dark">{{ names[0] }}</b-badge>
     <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
       + {{ names.length - 1 }} More files
     </b-badge>
   </template>
  </b-form-file>`
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form File" }
    ]);
  }
};
</script>
