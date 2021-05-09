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
        <b>Treeview</b> The <code>v-treeview</code> component is useful for
        displaying large amounts of nested data.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/treeview"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Dense mode'">
          <template v-slot:preview>
            <p>
              Dense mode provides more compact layout with decreased heights of
              the items.
            </p>
            <v-treeview dense :items="code1.items"></v-treeview>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Selectable'">
          <template v-slot:preview>
            <p>You can easily select treeview nodes and children.</p>
            <v-treeview selectable :items="code3.items"></v-treeview>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Searching a directory'">
          <template v-slot:preview>
            <v-card class="mx-auto" max-width="500">
              <v-sheet class="pa-4 primary lighten-2">
                <v-text-field
                  v-model="code5.search"
                  label="Search Company Directory"
                  dark
                  flat
                  solo-inverted
                  hide-details
                  clearable
                  clear-icon="mdi-close-circle-outline"
                ></v-text-field>
                <v-checkbox
                  v-model="code5.caseSensitive"
                  dark
                  hide-details
                  label="Case sensitive search"
                ></v-checkbox>
              </v-sheet>
              <v-card-text>
                <v-treeview
                  :items="code5.items"
                  :search="code5.search"
                  :filter="code5.filter"
                  :open.sync="code5.open"
                >
                  <template v-slot:prepend="{ item }">
                    <v-icon
                      v-if="item.children"
                      v-text="
                        `mdi-${
                          item.id === 1 ? 'home-variant' : 'folder-network'
                        }`
                      "
                    ></v-icon>
                  </template>
                </v-treeview>
              </v-card-text>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom selectable icons'">
          <template v-slot:preview>
            <p>
              Customize the on, off and indeterminate icons for your selectable
              tree. Combine with other advanced functionality like API loaded
              items.
            </p>
            <v-card>
              <v-toolbar color="primary" dark flat>
                <v-icon>mdi-silverware</v-icon>
                <v-toolbar-title>Local hotspots</v-toolbar-title>
              </v-toolbar>

              <v-row>
                <v-col>
                  <v-card-text>
                    <v-treeview
                      v-model="code7.tree"
                      :load-children="fetch"
                      :items="items7"
                      selected-color="indigo"
                      open-on-click
                      selectable
                      return-object
                      expand-icon="mdi-chevron-down"
                      on-icon="mdi-bookmark"
                      off-icon="mdi-bookmark-outline"
                      indeterminate-icon="mdi-bookmark-minus"
                    >
                    </v-treeview>
                  </v-card-text>
                </v-col>

                <v-divider vertical></v-divider>

                <v-col cols="12" md="6">
                  <v-card-text>
                    <div
                      v-if="code7.tree.length === 0"
                      key="title"
                      class="title font-weight-light grey--text pa-4 text-center"
                    >
                      Select your favorite breweries
                    </div>

                    <v-scroll-x-transition group hide-on-leave>
                      <v-chip
                        v-for="(selection, i) in code7.tree"
                        :key="i"
                        color="grey"
                        dark
                        small
                        class="ma-1"
                      >
                        <v-icon left small>mdi-beer</v-icon>
                        {{ selection.name }}
                      </v-chip>
                    </v-scroll-x-transition>
                  </v-card-text>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text @click="code7.tree = []">
                  Reset
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn class="white--text" color="green darken-1" depressed>
                  Save
                  <v-icon right>mdi-content-save</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
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
        <KTCodePreview v-bind:title="'Checkbox color'">
          <template v-slot:preview>
            <p>You can control the color of the selected node checkbox.</p>
            <v-treeview
              selectable
              selected-color="red"
              :items="code2.items"
            ></v-treeview>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Slots'">
          <template v-slot:preview>
            <p>
              Using slots we are able to create an intuitive file explorer.
              Apart from the <code>prepend</code> slot, there is also one for
              the <code>label</code>, and an <code>append</code> slot.
            </p>
            <v-treeview
              v-model="code4.tree"
              :open="code4.open"
              :items="code4.items"
              activatable
              item-key="name"
              open-on-click
            >
              <template v-slot:prepend="{ item, open }">
                <v-icon v-if="!item.file">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon v-else>
                  {{ code4.files[item.file] }}
                </v-icon>
              </template>
            </v-treeview>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Async items'">
          <template v-slot:preview>
            <v-card>
              <v-card-title class="indigo white--text headline">
                User Directory
              </v-card-title>
              <v-row class="pa-4" justify="space-between">
                <v-col cols="5">
                  <v-treeview
                    :active.sync="code6.active"
                    :items="items"
                    :load-children="fetchUsers"
                    :open.sync="code6.open"
                    activatable
                    color="warning"
                    open-on-click
                    transition
                  >
                    <template v-slot:prepend="{ item, active }">
                      <v-icon v-if="!item.children">mdi-account</v-icon>
                    </template>
                  </v-treeview>
                </v-col>

                <v-divider vertical></v-divider>

                <v-col class="d-flex text-center">
                  <v-scroll-y-transition mode="out-in">
                    <div
                      v-if="!selected"
                      class="title grey--text text--lighten-1 font-weight-light"
                      style="align-self: center;"
                    >
                      Select a User
                    </div>
                    <v-card
                      v-else
                      :key="selected.id"
                      class="pt-6 mx-auto"
                      flat
                      max-width="400"
                    >
                      <v-card-text>
                        <v-avatar v-if="code6.avatar" size="88">
                          <v-img
                            :src="`https://avataaars.io/${code6.avatar}`"
                            class="mb-6"
                          ></v-img>
                        </v-avatar>
                        <h3 class="headline mb-2">
                          {{ selected.name }}
                        </h3>
                        <div class="blue--text mb-2">{{ selected.email }}</div>
                        <div class="blue--text subheading font-weight-bold">
                          {{ selected.username }}
                        </div>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-row class="text-left" tag="v-card-text">
                        <v-col
                          class="text-right mr-4 mb-2"
                          tag="strong"
                          cols="5"
                          >Company:</v-col
                        >
                        <v-col>{{ selected.company.name }}</v-col>
                        <v-col
                          class="text-right mr-4 mb-2"
                          tag="strong"
                          cols="5"
                          >Website:</v-col
                        >
                        <v-col>
                          <a :href="`//${selected.website}`" target="_blank">{{
                            selected.website
                          }}</a>
                        </v-col>
                        <v-col
                          class="text-right mr-4 mb-2"
                          tag="strong"
                          cols="5"
                          >Phone:</v-col
                        >
                        <v-col>{{ selected.phone }}</v-col>
                      </v-row>
                    </v-card>
                  </v-scroll-y-transition>
                </v-col>
              </v-row>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
          <template v-slot:js>
            {{ code6.js }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
  "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
  "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
  "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
  "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"
];

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data() {
    return {
      code1: {
        html: ` <v-treeview
  dense
  :items="items"
></v-treeview>`,
        js: ` export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),
}`,
        items: [
          {
            id: 1,
            name: "Applications :",
            children: [
              { id: 2, name: "Calendar : app" },
              { id: 3, name: "Chrome : app" },
              { id: 4, name: "Webstorm : app" }
            ]
          },
          {
            id: 5,
            name: "Documents :",
            children: [
              {
                id: 6,
                name: "vuetify :",
                children: [
                  {
                    id: 7,
                    name: "src :",
                    children: [
                      { id: 8, name: "index : ts" },
                      { id: 9, name: "bootstrap : ts" }
                    ]
                  }
                ]
              },
              {
                id: 10,
                name: "material2 :",
                children: [
                  {
                    id: 11,
                    name: "src :",
                    children: [
                      { id: 12, name: "v-btn : ts" },
                      { id: 13, name: "v-card : ts" },
                      { id: 14, name: "v-window : ts" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 15,
            name: "Downloads :",
            children: [
              { id: 16, name: "October : pdf" },
              { id: 17, name: "November : pdf" },
              { id: 18, name: "Tutorial : html" }
            ]
          },
          {
            id: 19,
            name: "Videos :",
            children: [
              {
                id: 20,
                name: "Tutorials :",
                children: [
                  { id: 21, name: "Basic layouts : mp4" },
                  { id: 22, name: "Advanced techniques : mp4" },
                  { id: 23, name: "All about app : dir" }
                ]
              },
              { id: 24, name: "Intro : mov" },
              { id: 25, name: "Conference introduction : avi" }
            ]
          }
        ]
      },

      code2: {
        html: `<v-treeview
  selectable
  selected-color="red"
  :items="items"
></v-treeview>`,
        js: `export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),
}`,
        items: [
          {
            id: 1,
            name: "Applications :",
            children: [
              { id: 2, name: "Calendar : app" },
              { id: 3, name: "Chrome : app" },
              { id: 4, name: "Webstorm : app" }
            ]
          },
          {
            id: 5,
            name: "Documents :",
            children: [
              {
                id: 6,
                name: "vuetify :",
                children: [
                  {
                    id: 7,
                    name: "src :",
                    children: [
                      { id: 8, name: "index : ts" },
                      { id: 9, name: "bootstrap : ts" }
                    ]
                  }
                ]
              },
              {
                id: 10,
                name: "material2 :",
                children: [
                  {
                    id: 11,
                    name: "src :",
                    children: [
                      { id: 12, name: "v-btn : ts" },
                      { id: 13, name: "v-card : ts" },
                      { id: 14, name: "v-window : ts" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 15,
            name: "Downloads :",
            children: [
              { id: 16, name: "October : pdf" },
              { id: 17, name: "November : pdf" },
              { id: 18, name: "Tutorial : html" }
            ]
          },
          {
            id: 19,
            name: "Videos :",
            children: [
              {
                id: 20,
                name: "Tutorials :",
                children: [
                  { id: 21, name: "Basic layouts : mp4" },
                  { id: 22, name: "Advanced techniques : mp4" },
                  { id: 23, name: "All about app : dir" }
                ]
              },
              { id: 24, name: "Intro : mov" },
              { id: 25, name: "Conference introduction : avi" }
            ]
          }
        ]
      },

      code3: {
        html: `<v-treeview
  selectable
  :items="items"
></v-treeview>`,
        js: `export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),
}`,
        items: [
          {
            id: 1,
            name: "Applications :",
            children: [
              { id: 2, name: "Calendar : app" },
              { id: 3, name: "Chrome : app" },
              { id: 4, name: "Webstorm : app" }
            ]
          },
          {
            id: 5,
            name: "Documents :",
            children: [
              {
                id: 6,
                name: "vuetify :",
                children: [
                  {
                    id: 7,
                    name: "src :",
                    children: [
                      { id: 8, name: "index : ts" },
                      { id: 9, name: "bootstrap : ts" }
                    ]
                  }
                ]
              },
              {
                id: 10,
                name: "material2 :",
                children: [
                  {
                    id: 11,
                    name: "src :",
                    children: [
                      { id: 12, name: "v-btn : ts" },
                      { id: 13, name: "v-card : ts" },
                      { id: 14, name: "v-window : ts" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 15,
            name: "Downloads :",
            children: [
              { id: 16, name: "October : pdf" },
              { id: 17, name: "November : pdf" },
              { id: 18, name: "Tutorial : html" }
            ]
          },
          {
            id: 19,
            name: "Videos :",
            children: [
              {
                id: 20,
                name: "Tutorials :",
                children: [
                  { id: 21, name: "Basic layouts : mp4" },
                  { id: 22, name: "Advanced techniques : mp4" },
                  { id: 23, name: "All about app : dir" }
                ]
              },
              { id: 24, name: "Intro : mov" },
              { id: 25, name: "Conference introduction : avi" }
            ]
          }
        ]
      },

      code4: {
        html: `<v-treeview
  v-model="tree"
  :open="open"
  :items="items"
  activatable
  item-key="name"
  open-on-click
>
  <template v-slot:prepend="{ item, open }">
    <v-icon v-if="!item.file">
      {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
    </v-icon>
    <v-icon v-else>
      {{ files[item.file] }}
    </v-icon>
  </template>
</v-treeview>`,
        js: `export default {
  data: () => ({
    open: ['public'],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-json',
      md: 'mdi-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel',
    },
    tree: [],
    items: [
      {
        name: '.git',
      },
      {
        name: 'node_modules',
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [{
              name: 'logo.png',
              file: 'png',
            }],
          },
          {
            name: 'favicon.ico',
            file: 'png',
          },
          {
            name: 'index.html',
            file: 'html',
          },
        ],
      },
      {
        name: '.gitignore',
        file: 'txt',
      },
      {
        name: 'babel.config.js',
        file: 'js',
      },
      {
        name: 'package.json',
        file: 'json',
      },
      {
        name: 'README.md',
        file: 'md',
      },
      {
        name: 'vue.config.js',
        file: 'js',
      },
      {
        name: 'yarn.lock',
        file: 'txt',
      },
    ],
  }),
}`,
        open: ["public"],
        files: {
          html: "mdi-language-html5",
          js: "mdi-nodejs",
          json: "mdi-json",
          md: "mdi-markdown",
          pdf: "mdi-file-pdf",
          png: "mdi-file-image",
          txt: "mdi-file-document-outline",
          xls: "mdi-file-excel"
        },
        tree: [],
        items: [
          {
            name: ".git"
          },
          {
            name: "node_modules"
          },
          {
            name: "public",
            children: [
              {
                name: "static",
                children: [
                  {
                    name: "logo.png",
                    file: "png"
                  }
                ]
              },
              {
                name: "favicon.ico",
                file: "png"
              },
              {
                name: "index.html",
                file: "html"
              }
            ]
          },
          {
            name: ".gitignore",
            file: "txt"
          },
          {
            name: "babel.config.js",
            file: "js"
          },
          {
            name: "package.json",
            file: "json"
          },
          {
            name: "README.md",
            file: "md"
          },
          {
            name: "vue.config.js",
            file: "js"
          },
          {
            name: "yarn.lock",
            file: "txt"
          }
        ]
      },

      code5: {
        html: ` <v-card
  class="mx-auto"
  max-width="500"
>
  <v-sheet class="pa-4 primary lighten-2">
    <v-text-field
      v-model="search"
      label="Search Company Directory"
      dark
      flat
      solo-inverted
      hide-details
      clearable
      clear-icon="mdi-close-circle-outline"
    ></v-text-field>
    <v-checkbox
      v-model="caseSensitive"
      dark
      hide-details
      label="Case sensitive search"
    ></v-checkbox>
  </v-sheet>
  <v-card-text>
    <v-treeview
      :items="items"
      :search="search"
      :filter="filter"
      :open.sync="open"
    >
      <template v-slot:prepend="{ item }">
        <v-icon
          v-if="item.children"
          v-text="\`mdi-\${item.id === 1 ? 'home-variant' : 'folder-network'}\`"
        ></v-icon>
      </template>
    </v-treeview>
  </v-card-text>
</v-card>`,
        js: `export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Vuetify Human Resources',
        children: [
          {
            id: 2,
            name: 'Core team',
            children: [
              {
                id: 201,
                name: 'Sean',
              },
              {
                id: 202,
                name: 'Kael',
              },
              {
                id: 203,
                name: 'Nekosaur',
              },
              {
                id: 204,
                name: 'Jacek',
              },
              {
                id: 205,
                name: 'Andrew',
              },
            ],
          },
          {
            id: 3,
            name: 'Administrators',
            children: [
              {
                id: 301,
                name: 'Ranee',
              },
              {
                id: 302,
                name: 'Rachel',
              },
            ],
          },
          {
            id: 4,
            name: 'Contributors',
            children: [
              {
                id: 401,
                name: 'Phlow',
              },
              {
                id: 402,
                name: 'Brandon',
              },
              {
                id: 403,
                name: 'Sean',
              },
            ],
          },
        ],
      },
    ],
    open: [1, 2],
    search: null,
    caseSensitive: false,
  }),
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    },
  },
}`,
        items: [
          {
            id: 1,
            name: "Vuetify Human Resources",
            children: [
              {
                id: 2,
                name: "Core team",
                children: [
                  {
                    id: 201,
                    name: "Sean"
                  },
                  {
                    id: 202,
                    name: "Kael"
                  },
                  {
                    id: 203,
                    name: "Nekosaur"
                  },
                  {
                    id: 204,
                    name: "Jacek"
                  },
                  {
                    id: 205,
                    name: "Andrew"
                  }
                ]
              },
              {
                id: 3,
                name: "Administrators",
                children: [
                  {
                    id: 301,
                    name: "Ranee"
                  },
                  {
                    id: 302,
                    name: "Rachel"
                  }
                ]
              },
              {
                id: 4,
                name: "Contributors",
                children: [
                  {
                    id: 401,
                    name: "Phlow"
                  },
                  {
                    id: 402,
                    name: "Brandon"
                  },
                  {
                    id: 403,
                    name: "Sean"
                  }
                ]
              }
            ]
          }
        ],
        open: [1, 2],
        search: null,
        caseSensitive: false
      },

      code6: {
        html: `<v-card>
  <v-card-title class="indigo white--text headline">
    User Directory
  </v-card-title>
  <v-row
    class="pa-4"
    justify="space-between"
  >
    <v-col cols="5">
      <v-treeview
        :active.sync="active"
        :items="items"
        :load-children="fetchUsers"
        :open.sync="open"
        activatable
        color="warning"
        open-on-click
        transition
      >
        <template v-slot:prepend="{ item, active }">
          <v-icon v-if="!item.children">mdi-account</v-icon>
        </template>
      </v-treeview>
    </v-col>

    <v-divider vertical></v-divider>

    <v-col
      class="d-flex text-center"
    >
      <v-scroll-y-transition mode="out-in">
        <div
          v-if="!selected"
          class="title grey--text text--lighten-1 font-weight-light"
          style="align-self: center;"
        >
          Select a User
        </div>
        <v-card
          v-else
          :key="selected.id"
          class="pt-6 mx-auto"
          flat
          max-width="400"
        >
          <v-card-text>
            <v-avatar
              v-if="avatar"
              size="88"
            >
              <v-img
                :src="\`https://avataaars.io/\${avatar}\`"
                class="mb-6"
              ></v-img>
            </v-avatar>
            <h3 class="headline mb-2">
              {{ selected.name }}
            </h3>
            <div class="blue--text mb-2">{{ selected.email }}</div>
            <div class="blue--text subheading font-weight-bold">{{ selected.username }}</div>
          </v-card-text>
          <v-divider></v-divider>
          <v-row
            class="text-left"
            tag="v-card-text"
          >
            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Company:</v-col>
            <v-col>{{ selected.company.name }}</v-col>
            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Website:</v-col>
            <v-col>
              <a :href="\`//\${selected.website}\`" target="_blank">{{ selected.website }}</a>
            </v-col>
            <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Phone:</v-col>
            <v-col>{{ selected.phone }}</v-col>
          </v-row>
        </v-card>
      </v-scroll-y-transition>
    </v-col>
  </v-row>
</v-card>`,
        js: `const avatars = [
  '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
]

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: [],
  }),

  computed: {
    items () {
      return [
        {
          name: 'Users',
          children: this.users,
        },
      ]
    },
    selected () {
      if (!this.active.length) return undefined

      const id = this.active[0]

      return this.users.find(user => user.id === id)
    },
  },

  watch: {
    selected: 'randomAvatar',
  },

  methods: {
    async fetchUsers (item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500)

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => (item.children.push(...json)))
        .catch(err => console.warn(err))
    },
    randomAvatar () {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
    },
  },
}`,
        active: [],
        avatar: null,
        open: [],
        users: []
      },

      code7: {
        html: `<v-card>
  <v-toolbar
    color="primary"
    dark
    flat
  >
    <v-icon>mdi-silverware</v-icon>
    <v-toolbar-title>Local hotspots</v-toolbar-title>
  </v-toolbar>

  <v-row>
    <v-col>
      <v-card-text>
        <v-treeview
          v-model="tree"
          :load-children="fetch"
          :items="items"
          selected-color="indigo"
          open-on-click
          selectable
          return-object
          expand-icon="mdi-chevron-down"
          on-icon="mdi-bookmark"
          off-icon="mdi-bookmark-outline"
          indeterminate-icon="mdi-bookmark-minus"
        >
        </v-treeview>
      </v-card-text>
    </v-col>

    <v-divider vertical></v-divider>

    <v-col
      cols="12"
      md="6"
    >
      <v-card-text>
        <div
          v-if="tree.length === 0"
          key="title"
          class="title font-weight-light grey--text pa-4 text-center"
        >
          Select your favorite breweries
        </div>

        <v-scroll-x-transition
          group
          hide-on-leave
        >
          <v-chip
            v-for="(selection, i) in tree"
            :key="i"
            color="grey"
            dark
            small
            class="ma-1"
          >
            <v-icon left small>mdi-beer</v-icon>
            {{ selection.name }}
          </v-chip>
        </v-scroll-x-transition>
      </v-card-text>
    </v-col>
  </v-row>

  <v-divider></v-divider>

  <v-card-actions>
    <v-btn
      text
      @click="tree = []"
    >
      Reset
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      class="white--text"
      color="green darken-1"
      depressed
    >
      Save
      <v-icon right>mdi-content-save</v-icon>
    </v-btn>
  </v-card-actions>
</v-card>`,
        js: ` export default {
  data: () => ({
    breweries: [],
    isLoading: false,
    tree: [],
    types: [],
  }),

  computed: {
    items () {
      const children = this.types.map(type => ({
        id: type,
        name: this.getName(type),
        children: this.getChildren(type),
      }))

      return [{
        id: 1,
        name: 'All Breweries',
        children,
      }]
    },
    shouldShowTree () {
      return this.breweries.length > 0 && !this.isLoading
    },
  },

  watch: {
    breweries (val) {
      this.types = val.reduce((acc, cur) => {
        const type = cur.brewery_type

        if (!acc.includes(type)) acc.push(type)

        return acc
      }, []).sort()
    },
  },

  methods: {
    fetch () {
      if (this.breweries.length) return

      return fetch('https://api.openbrewerydb.org/breweries')
        .then(res => res.json())
        .then(data => (this.breweries = data))
        .catch(err => console.log(err))
    },
    getChildren (type) {
      const breweries = []

      for (const brewery of this.breweries) {
        if (brewery.brewery_type !== type) continue

        breweries.push({
          ...brewery,
          name: this.getName(brewery.name),
        })
      }

      return breweries.sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
    },
    getName (name) {
      return \`\${name.charAt(0).toUpperCase()}${name.slice(1)}\`
    },
  },
}`,
        isLoading: false,
        tree: [],
        types: []
      },
      breweries: []
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Treeview" }
    ]);
  },

  computed: {
    filter() {
      return this.code5.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },

    // code 6
    items() {
      return [
        {
          name: "Users",
          children: this.code6.users
        }
      ];
    },
    selected() {
      if (!this.code6.active.length) return undefined;

      const id = this.code6.active[0];

      return this.code6.users.find(user => user.id === id);
    },

    // code 7
    items7() {
      const children = this.code7.types.map(type => ({
        id: type,
        name: this.getName(type),
        children: this.getChildren(type)
      }));

      return [
        {
          id: 1,
          name: "All Breweries",
          children
        }
      ];
    },
    shouldShowTree() {
      return this.breweries.length > 0 && !this.code7.isLoading;
    }
  },

  watch: {
    // code 6
    selected: "randomAvatar",

    // code 7
    breweries(val) {
      this.code7.types = val
        .reduce((acc, cur) => {
          const type = cur.brewery_type;

          if (!acc.includes(type)) acc.push(type);

          return acc;
        }, [])
        .sort();
    }
  },

  methods: {
    // code 6
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500);

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => item.children.push(...json))
        .catch((/*err*/) => {
          /*console.warn(err)*/
        });
    },
    randomAvatar() {
      this.code6.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    },

    // code 7
    fetch() {
      if (this.breweries.length) return;

      return fetch("https://api.openbrewerydb.org/breweries")
        .then(res => res.json())
        .then(data => (this.breweries = data))
        .catch((/*err*/) => {
          /*console.log(err)*/
        });
    },
    getChildren(type) {
      const breweries = [];

      for (const brewery of this.breweries) {
        if (brewery.brewery_type !== type) continue;

        breweries.push({
          ...brewery,
          name: this.getName(brewery.name)
        });
      }

      return breweries.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    getName(name) {
      return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
  }
};
</script>
