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
        <b>Buttons</b> The <code>v-btn</code> component replaces the standard
        html button with a material design theme and a multitude of options. Any
        color helper class can be used to alter the background or text color.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/buttons"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Flat'">
          <template v-slot:preview>
            <p>
              Flat buttons have no box shadow and no background. Only on hover
              is the container for the button shown.
            </p>
            <v-row align="center">
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text small>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small disabled>Disabled</v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text disabled>Disabled</v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text large>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large disabled>Disabled</v-btn>
                </div>
              </v-col>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button Dropdown Variants'">
          <template v-slot:preview>
            <p>Button dropdowns are regular selects with additional styling.</p>
            <v-container id="dropdown-example">
              <v-row>
                <v-col cols="12" sm="4">
                  <p>Overflow</p>

                  <v-overflow-btn
                    class="my-2"
                    :items="code3.dropdown_font"
                    label="Overflow Btn"
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>

                <v-col cols="12" sm="4">
                  <p>Segmented</p>

                  <v-overflow-btn
                    class="my-2"
                    :items="code3.dropdown_icon"
                    label="Segmented Btn"
                    segmented
                    target="#dropdown-example"
                  ></v-overflow-btn>
                </v-col>

                <v-col cols="12" sm="4">
                  <p>Editable</p>

                  <v-overflow-btn
                    class="my-2"
                    :items="code3.dropdown_edit"
                    label="Editable Btn"
                    editable
                    item-value="text"
                  ></v-overflow-btn>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Floating'">
          <template v-slot:preview>
            <p>Floating buttons are rounded and usually contain an icon.</p>
            <div class="text-center">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="teal">
                <v-icon dark>mdi-format-list-bulleted-square</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="cyan">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="purple">
                <v-icon dark>mdi-android</v-icon>
              </v-btn>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Outlined'">
          <template v-slot:preview>
            <div class="text-center">
              <v-btn class="ma-2" outlined color="indigo"
                >Outlined Button</v-btn
              >
              <v-btn class="ma-2" outlined fab color="teal">
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined large fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Tile'">
          <template v-slot:preview>
            <div class="text-center">
              <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
              <v-btn class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon> Edit
              </v-btn>
              <v-btn class="ma-2" tile large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </div>
          </template>
          <template v-slot:html>
            {{ code9.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Rounded'">
          <template v-slot:preview>
            <div class="text-center">
              <v-btn rounded color="primary" dark>Rounded Button</v-btn>
            </div>
          </template>
          <template v-slot:html>
            {{ code8.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Raised'">
          <template v-slot:preview>
            <p>
              Raised buttons have a box shadow that increases when clicked. This
              is the default style.
            </p>
            <v-row align="center">
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn small>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small disabled>Disabled</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn disabled>Disabled</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn large>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large disabled>Disabled</v-btn>
                </div>
              </v-col>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Icon'">
          <template v-slot:preview>
            <p>Icons can be used for the primary content of a button.</p>
            <v-card flat>
              <v-card-text>
                <v-container fluid class="pa-0">
                  <v-row>
                    <v-col cols="12">
                      <p>Normal</p>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn text icon color="pink">
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn text icon color="indigo">
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn text icon color="green">
                        <v-icon>mdi-cached</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn text icon color="deep-orange">
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>

                  <v-row class="mt-12">
                    <v-col cols="12">
                      <p>Disabled</p>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn icon disabled>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn icon disabled>
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn icon disabled>
                        <v-icon>mdi-cached</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn icon disabled>
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Sizing'">
          <template v-slot:preview>
            <p>
              Buttons can be given different sizing options to fit a multitude
              of scenarios.
            </p>
            <v-container fluid class="pa-0">
              <v-row align="center">
                <v-col cols="12" sm="6">
                  <div class="text-center">
                    <div class="my-2">
                      <v-btn x-small color="secondary" dark
                        >Extra small Button</v-btn
                      >
                    </div>
                    <div class="my-2">
                      <v-btn small color="primary" dark>Small Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="warning" dark>Normal Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="error" dark large>Large Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn x-large color="success" dark
                        >Extra large Button</v-btn
                      >
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="text-center">
                    <div class="my-2">
                      <v-btn color="secondary" fab x-small dark>
                        <v-icon>mdi-television</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="primary" fab small dark>
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="warning" fab dark>
                        <v-icon>mdi-account-circle</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="error" fab large dark>
                        <v-icon>mdi-alarm</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="success" fab x-large dark>
                        <v-icon>mdi-domain</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Loaders'">
          <template v-slot:preview>
            <p>
              Using the loading prop, you can notify a user that there is
              processing taking place. The default behavior is to use a
              <code>v-progress-circular</code> component but this can be
              customized.
            </p>
            <div class="text-center">
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click="loader = 'loading'"
              >
                Accept Terms
              </v-btn>

              <v-btn
                :loading="loading3"
                :disabled="loading3"
                color="blue-grey"
                class="ma-2 white--text"
                @click="loader = 'loading3'"
              >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>

              <v-btn
                class="ma-2"
                :loading="loading2"
                :disabled="loading2"
                color="success"
                @click="loader = 'loading2'"
              >
                Custom Loader
                <template v-slot:loader>
                  <span>Loading...</span>
                </template>
              </v-btn>

              <v-btn
                class="ma-2"
                :loading="loading4"
                :disabled="loading4"
                color="info"
                @click="loader = 'loading4'"
              >
                Icon Loader
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </template>
              </v-btn>

              <v-btn
                :loading="loading5"
                :disabled="loading5"
                color="blue-grey"
                class="ma-2 white--text"
                fab
                @click="loader = 'loading5'"
              >
                <v-icon dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </div>
          </template>
          <template v-slot:html>
            {{ code10.html }}
          </template>
          <template v-slot:js>
            {{ code10.js }}
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
        html: ` <v-row align="center">
  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn text small>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn text small color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn text small color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn text small disabled>Disabled</v-btn>
    </div>
  </v-col>

  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn text>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn text color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn text color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn text disabled>Disabled</v-btn>
    </div>
  </v-col>

  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn text large>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn text large color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn text large color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn text large disabled>Disabled</v-btn>
    </div>
  </v-col>
</v-row>`
      },

      code2: {
        html: `<v-row align="center">
  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn small>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn small color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn small color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn small disabled>Disabled</v-btn>
    </div>
  </v-col>
  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn disabled>Disabled</v-btn>
    </div>
  </v-col>
  <v-col class="text-center" cols="12" sm="4">
    <div class="my-2">
      <v-btn large>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn large color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn large color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn large disabled>Disabled</v-btn>
    </div>
  </v-col>
</v-row>`
      },

      code3: {
        html: ` <v-container id="dropdown-example">
  <v-row>
    <v-col cols="12" sm="4">
      <p>Overflow</p>

      <v-overflow-btn
        class="my-2"
        :items="dropdown_font"
        label="Overflow Btn"
        target="#dropdown-example"
      ></v-overflow-btn>
    </v-col>

    <v-col cols="12" sm="4">
      <p>Segmented</p>

      <v-overflow-btn
        class="my-2"
        :items="dropdown_icon"
        label="Segmented Btn"
        segmented
        target="#dropdown-example"
      ></v-overflow-btn>
    </v-col>

    <v-col cols="12" sm="4">
      <p>Editable</p>

      <v-overflow-btn
        class="my-2"
        :items="dropdown_edit"
        label="Editable Btn"
        editable
        item-value="text"
      ></v-overflow-btn>
    </v-col>
  </v-row>
</v-container>`,
        js: `export default {
  data: () => ({
    dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
    dropdown_icon: [
      { text: 'list', callback: () => console.log('list') },
      { text: 'favorite', callback: () => console.log('favorite') },
      { text: 'delete', callback: () => console.log('delete') },
    ],
    dropdown_edit: [
      { text: '100%' },
      { text: '75%' },
      { text: '50%' },
      { text: '25%' },
      { text: '0%' },
    ],
  }),
}`,
        dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
        dropdown_icon: [
          {
            text: "list",
            callback: () => {
              /*console.log("list")*/
            }
          },
          {
            text: "favorite",
            callback: () => {
              /*console.log("favorite")*/
            }
          },
          {
            text: "delete",
            callback: () => {
              /*console.log("delete")*/
            }
          }
        ],
        dropdown_edit: [
          { text: "100%" },
          { text: "75%" },
          { text: "50%" },
          { text: "25%" },
          { text: "0%" }
        ]
      },

      code4: {
        html: `<v-card flat>
  <v-card-text>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12">
          <p>Normal</p>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn text icon color="pink">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn text icon color="indigo">
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn text icon color="green">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn text icon color="deep-orange">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12">
          <p>Disabled</p>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon disabled>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon disabled>
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon disabled>
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon disabled>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</v-card>`
      },

      code5: {
        html: `<div class="text-center">
  <v-btn class="mx-2" fab dark small color="primary">
    <v-icon dark>mdi-minus</v-icon>
  </v-btn>

  <v-btn class="mx-2" fab dark small color="pink">
    <v-icon dark>mdi-heart</v-icon>
  </v-btn>

  <v-btn class="mx-2" fab dark color="indigo">
    <v-icon dark>mdi-plus</v-icon>
  </v-btn>

  <v-btn class="mx-2" fab dark color="teal">
    <v-icon dark>mdi-format-list-bulleted-square</v-icon>
  </v-btn>

  <v-btn class="mx-2" fab dark large color="cyan">
    <v-icon dark>mdi-pencil</v-icon>
  </v-btn>

  <v-btn class="mx-2" fab dark large color="purple">
    <v-icon dark>mdi-android</v-icon>
  </v-btn>
</div>`
      },

      code6: {
        html: `<v-container fluid class="pa-0">
  <v-row align="center">
    <v-col cols="12" sm="6">
      <div class="text-center">
        <div class="my-2">
          <v-btn x-small color="secondary" dark>Extra small Button</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="primary" dark>Small Button</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="warning" dark>Normal Button</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="error" dark large>Large Button</v-btn>
        </div>
        <div class="my-2">
          <v-btn x-large color="success" dark>Extra large Button</v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="6">
      <div class="text-center">
        <div class="my-2">
          <v-btn color="secondary" fab x-small dark>
            <v-icon>mdi-television</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="primary" fab small dark>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="warning" fab dark>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="error" fab large dark>
            <v-icon>mdi-alarm</v-icon>
          </v-btn>
        </div>
        <div class="my-2">
          <v-btn color="success" fab x-large dark>
            <v-icon>mdi-domain</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</v-container>`
      },

      code7: {
        html: `<div class="text-center">
  <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
  <v-btn class="ma-2" outlined fab color="teal">
    <v-icon>mdi-format-list-bulleted-square</v-icon>
  </v-btn>
  <v-btn class="ma-2" outlined large fab color="indigo">
    <v-icon>mdi-pencil</v-icon>
  </v-btn>
</div>`
      },

      code8: {
        html: `<div class="text-center">
  <v-btn rounded color="primary" dark>Rounded Button</v-btn>
</div>`
      },

      code9: {
        html: `<div class="text-center">
  <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
  <v-btn class="ma-2" tile outlined color="success">
    <v-icon left>mdi-pencil</v-icon> Edit
  </v-btn>
  <v-btn class="ma-2" tile large color="teal" icon>
    <v-icon>mdi-vuetify</v-icon>
  </v-btn>
</div>`
      },

      code10: {
        html: `<div class="text-center">
  <v-btn
    class="ma-2"
    :loading="loading"
    :disabled="loading"
    color="secondary"
    @click="loader = 'loading'"
  >
    Accept Terms
  </v-btn>

  <v-btn
    :loading="loading3"
    :disabled="loading3"
    color="blue-grey"
    class="ma-2 white--text"
    @click="loader = 'loading3'"
  >
    Upload
    <v-icon right dark>mdi-cloud-upload</v-icon>
  </v-btn>

  <v-btn
    class="ma-2"
    :loading="loading2"
    :disabled="loading2"
    color="success"
    @click="loader = 'loading2'"
  >
    Custom Loader
    <template v-slot:loader>
      <span>Loading...</span>
    </template>
  </v-btn>

  <v-btn
    class="ma-2"
    :loading="loading4"
    :disabled="loading4"
    color="info"
    @click="loader = 'loading4'"
  >
    Icon Loader
    <template v-slot:loader>
      <span class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </template>
  </v-btn>

  <v-btn
    :loading="loading5"
    :disabled="loading5"
    color="blue-grey"
    class="ma-2 white--text"
    fab
    @click="loader = 'loading5'"
  >
    <v-icon dark>mdi-cloud-upload</v-icon>
  </v-btn>
</div>`,
        js: `export default {
  data () {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}`
      },
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Buttons" }
    ]);
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>
