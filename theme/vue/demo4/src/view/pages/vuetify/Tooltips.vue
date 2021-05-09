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
        <b>Tooltips</b> The <code>v-tooltip</code> component is useful for
        conveying information when a user hovers over an element. You can also
        programmatically control the display of tooltips through a
        <code>v-model</code>. When activated, tooltips display a text label
        identifying an element, such as a description of its function.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/tooltips"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Alignment'">
          <template v-slot:preview>
            <p>
              A tooltip can be aligned to any of the four sides of the activator
              element
            </p>
            <div class="text-center">
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn class="mr-4" color="primary" dark v-on="on"
                    >Left</v-btn
                  >
                </template>
                <span>Left tooltip</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn class="mr-4" color="primary" dark v-on="on">Top</v-btn>
                </template>
                <span>Top tooltip</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn class="mr-4" color="primary" dark v-on="on"
                    >Bottom</v-btn
                  >
                </template>
                <span>Bottom tooltip</span>
              </v-tooltip>

              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn class="mr-4" color="primary" dark v-on="on"
                    >Right</v-btn
                  >
                </template>
                <span>Right tooltip</span>
              </v-tooltip>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Visibility'">
          <template v-slot:preview>
            <p>
              Tooltip visibility can be programmatically changed using
              <code>v-model</code>.
            </p>
            <v-container fluid class="text-center">
              <v-row class="flex" justify="space-between">
                <v-col cols="12">
                  <v-btn @click="show = !show">toggle</v-btn>
                </v-col>

                <v-col cols="12" class="mt-12">
                  <v-tooltip v-model="show" top>
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on">
                        <v-icon color="grey lighten-1">mdi-cart</v-icon>
                      </v-btn>
                    </template>
                    <span>Programmatic tooltip</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
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
        html: ` <div class="text-center">
  <v-tooltip left>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Left</v-btn>
    </template>
    <span>Left tooltip</span>
  </v-tooltip>

  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Top</v-btn>
    </template>
    <span>Top tooltip</span>
  </v-tooltip>

  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Bottom</v-btn>
    </template>
    <span>Bottom tooltip</span>
  </v-tooltip>

  <v-tooltip right>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Right</v-btn>
    </template>
    <span>Right tooltip</span>
  </v-tooltip>
</div>`
      },

      code2: {
        html: `<v-container fluid class="text-center">
  <v-row
    class="flex"
    justify="space-between"
  >
    <v-col cols="12">
      <v-btn @click="show = !show">toggle</v-btn>
    </v-col>

    <v-col cols="12" class="mt-12">
      <v-tooltip v-model="show" top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="grey lighten-1">mdi-cart</v-icon>
          </v-btn>
        </template>
        <span>Programmatic tooltip</span>
      </v-tooltip>
    </v-col>
  </v-row>
</v-container>`,
        js: `export default {
  data () {
    return {
      show: false,
    }
  },
}`
      },
      show: false
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Tooltips" }
    ]);
  }
};
</script>
