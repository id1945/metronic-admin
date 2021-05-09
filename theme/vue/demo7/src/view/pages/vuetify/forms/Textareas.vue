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
        <b>Textareas</b> Textarea components are used for collecting large
        amounts of textual data.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/textarea"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Icons'">
          <template v-slot:preview>
            <p>
              The <code>append-icon</code> and <code>prepend-icon</code> props
              help add context to <code>v-textarea</code>.
            </p>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-textarea
                    class="mx-2"
                    label="prepend-icon"
                    rows="1"
                    prepend-icon="comment"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-textarea
                    append-icon="comment"
                    class="mx-2"
                    label="append-icon"
                    rows="1"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-textarea
                    prepend-inner-icon="comment"
                    class="mx-2"
                    label="prepend-inner-icon"
                    rows="1"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-textarea
                    append-outer-icon="comment"
                    class="mx-2"
                    label="append-outer-icon"
                    rows="1"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Browser autocomplete'">
          <template v-slot:preview>
            <p>
              The <code>autocomplete</code> prop gives you the option to enable
              the browser to predict user input.
            </p>
            <v-container fluid>
              <v-textarea autocomplete="email" label="Email"></v-textarea>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Auto grow'">
          <template v-slot:preview>
            <p>
              When using the <code>auto-grow</code> prop, textarea's will
              automatically increase in size when the contained text exceeds its
              size.
            </p>
            <v-container fluid>
              <v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Clearable'">
          <template v-slot:preview>
            <p>
              You can clear the text from a <code>v-textarea</code> by using the
              <code>clearable</code> prop, and customize the icon used with the
              <code>clearable-icon</code> prop.
            </p>
            <v-container fluid>
              <v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </v-container>
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
        html: `<v-container>
  <v-row>
    <v-col cols="12" sm="6">
      <v-textarea
        class="mx-2"
        label="prepend-icon"
        rows="1"
        prepend-icon="comment"
      ></v-textarea>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea
        append-icon="comment"
        class="mx-2"
        label="append-icon"
        rows="1"
      ></v-textarea>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea
        prepend-inner-icon="comment"
        class="mx-2"
        label="prepend-inner-icon"
        rows="1"
      ></v-textarea>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea
        append-outer-icon="comment"
        class="mx-2"
        label="append-outer-icon"
        rows="1"
      ></v-textarea>
    </v-col>
  </v-row>
</v-container>`
      },

      code2: {
        html: `<v-container fluid>
  <v-textarea
    name="input-7-1"
    filled
    label="Label"
    auto-grow
    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
  ></v-textarea>
</v-container>`
      },

      code3: {
        html: `<v-container fluid>
  <v-textarea
    autocomplete="email"
    label="Email"
  ></v-textarea>
</v-container>`
      },

      code4: {
        html: `<v-container fluid>
  <v-textarea
    name="input-7-1"
    filled
    label="Label"
    auto-grow
    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
  ></v-textarea>
</v-container>`
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
      { title: "Textareas" }
    ]);
  }
};
</script>
