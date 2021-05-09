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
        <b>Alerts</b> The <code>v-alert</code> component is used to convey
        important information to the user through the use contextual types icons
        and color. These default types come in in 4 variations: success, info,
        warning, and error. Default icons are assigned which help represent
        different actions each type portrays. Many parts of an alert such as
        <code>border</code>, <code>icon</code>, and <code>color</code> can also
        be customized to fit almost any situation.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/alerts"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Type'">
          <template v-slot:preview>
            <div>
              <v-alert type="success">
                I'm a success alert.
              </v-alert>

              <v-alert type="info">
                I'm an info alert.
              </v-alert>

              <v-alert type="warning">
                I'm a warning alert.
              </v-alert>

              <v-alert type="error">
                I'm an error alert.
              </v-alert>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Colored Border'">
          <template v-slot:preview>
            <div>
              <v-alert
                border="left"
                colored-border
                color="deep-purple accent-4"
                elevation="2"
              >
                Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac sapien.
                Fusce vel dui. Praesent ut ligula non mi varius sagittis.
                Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis,
                dictum sed, iaculis a, condimentum nec, nisi.
              </v-alert>
              <v-alert border="top" colored-border type="info" elevation="2">
                Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et
                arcu. Ut varius tincidunt libero. Curabitur ligula sapien,
                tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec
                metus.
              </v-alert>
              <v-alert
                border="bottom"
                colored-border
                type="warning"
                elevation="2"
              >
                Sed in libero ut nibh placerat accumsan. Phasellus leo dolor,
                tempus non, auctor et, hendrerit quis, nisi. Phasellus leo
                dolor, tempus non, auctor et, hendrerit quis, nisi. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
                quis gravida magna mi a libero. Donec elit libero, sodales nec,
                volutpat a, suscipit non, turpis.
              </v-alert>
              <v-alert border="right" colored-border type="error" elevation="2">
                Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus
                tempus. Donec posuere vulputate arcu.
              </v-alert>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Border'">
          <template v-slot:preview>
            <div>
              <v-alert border="top" color="red lighten-2" dark>
                I'm an alert with a top border and red color
              </v-alert>
              <v-alert border="right" color="blue-grey" dark>
                I'm an alert with a right border and blue-grey color
              </v-alert>
              <v-alert border="bottom" color="pink darken-1" dark>
                I'm an alert with a bottom border and pink color
              </v-alert>
              <v-alert border="left" color="indigo" dark>
                I'm an alert with a border left type info
              </v-alert>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Dismissible'">
          <template v-slot:preview>
            <div>
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color="deep-purple accent-4"
                dark
                dismissible
              >
                Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut
                neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed
                mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
                non adipiscing dolor urna a orci. Sed mollis, eros et ultrices
                tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
                orci. Curabitur blandit mollis lacus. Curabitur ligula sapien,
                tincidunt non, euismod vitae, posuere imperdiet, leo.
              </v-alert>
              <div class="text-center">
                <v-btn
                  v-if="!alert"
                  color="deep-purple accent-4"
                  dark
                  @click="alert = true"
                >
                  Reset
                </v-btn>
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
  <v-alert type="success">
    I'm a success alert.
  </v-alert>

  <v-alert type="info">
    I'm an info alert.
  </v-alert>

  <v-alert type="warning">
    I'm a warning alert.
  </v-alert>

  <v-alert type="error">
    I'm an error alert.
  </v-alert>
</div>`
      },

      code2: {
        html: `<div>
  <v-alert
    border="top"
    color="red lighten-2"
    dark
  >
    I'm an alert with a top border and red color
  </v-alert>
  <v-alert
    border="right"
    color="blue-grey"
    dark
  >
    I'm an alert with a right border and blue-grey color
  </v-alert>
  <v-alert
    border="bottom"
    color="pink darken-1"
    dark
  >
    I'm an alert with a bottom border and pink color
  </v-alert>
  <v-alert
    border="left"
    color="indigo"
    dark
  >
    I'm an alert with a border left type info
  </v-alert>
</div>`
      },

      code3: {
        html: ` <div>
  <v-alert
    border="left"
    colored-border
    color="deep-purple accent-4"
    elevation="2"
  >
    Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

    Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
  </v-alert>
  <v-alert
    border="top"
    colored-border
    type="info"
    elevation="2"
  >
    Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
  </v-alert>
  <v-alert
    border="bottom"
    colored-border
    type="warning"
    elevation="2"
  >
    Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
  </v-alert>
  <v-alert
    border="right"
    colored-border
    type="error"
    elevation="2"
  >
    Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
  </v-alert>
</div>`,
        js: ``
      },

      code4: {
        html: `<div>
  <v-alert
    v-model="alert"
    border="left"
    close-text="Close Alert"
    color="deep-purple accent-4"
    dark
    dismissible
  >
    Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

    Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
  </v-alert>
  <div class="text-center">
    <v-btn
      v-if="!alert"
      color="deep-purple accent-4"
      dark
      @click="alert = true"
    >
      Reset
    </v-btn>
  </div>
</div>`,
        js: `export default {
    data () {
      return {
        alert: true
      }
    },
  }`
      },
      alert: true
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Alerts" }
    ]);
  }
};
</script>
