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
        <b>Chips</b> The <code>v-chip</code> component is used to convey small
        pieces of information. Using the <code>close</code> property, the chip
        becomes interactive, allowing user interaction.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/chips"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Colored'">
          <template v-slot:preview>
            <p>
              Any color from the Material Design palette can be used to change a
              chips color.
            </p>
            <div class="text-center">
              <v-chip class="ma-2">
                Default
              </v-chip>

              <v-chip class="ma-2" color="primary">
                Primary
              </v-chip>

              <v-chip class="ma-2" color="secondary">
                Secondary
              </v-chip>

              <v-chip class="ma-2" color="red" text-color="white">
                Red Chip
              </v-chip>

              <v-chip class="ma-2" color="green" text-color="white">
                Green Chip
              </v-chip>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Outlined'">
          <template v-slot:preview>
            <p>
              Outlined chips inherit their border color from the current text
              color.
            </p>
            <div class="text-center">
              <v-chip class="ma-2" color="success" outlined>
                <v-icon left>mdi-server-plus</v-icon>
                Server Status
              </v-chip>

              <v-chip class="ma-2" color="primary" outlined pill>
                User Account
                <v-icon right>mdi-account-outline</v-icon>
              </v-chip>

              <v-chip class="ma-2" color="deep-purple accent-4" outlined>
                <v-icon left>mdi-wrench</v-icon>
                Update Settings
              </v-chip>

              <v-chip class="ma-2" close color="indigo darken-3" outlined>
                <v-icon left>mdi-fire</v-icon>
                New Posts Available
              </v-chip>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom lists'">
          <template v-slot:preview>
            <v-card max-width="500">
              <v-toolbar flat color="transparent">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Photo Info</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="$refs.search.focus()">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container class="py-0">
                <v-row align="center" justify="start">
                  <v-col
                    v-for="(selection, i) in code5.selections"
                    :key="selection.text"
                    class="shrink"
                  >
                    <v-chip
                      :disabled="loading"
                      close
                      @click:close="selected.splice(i, 1)"
                    >
                      <v-icon left v-text="selection.icon"></v-icon>
                      {{ selection.text }}
                    </v-chip>
                  </v-col>

                  <v-col v-if="!allSelected" cols="12">
                    <v-text-field
                      ref="search"
                      v-model="code5.search"
                      full-width
                      hide-details
                      label="Search"
                      single-line
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

              <v-divider v-if="!allSelected"></v-divider>

              <v-list>
                <template v-for="(item, i) in categories">
                  <v-list-item
                    v-if="!selected.includes(i)"
                    :key="i"
                    :disabled="code5.loading"
                    @click="selected.push(i)"
                  >
                    <v-list-item-avatar>
                      <v-icon
                        :disabled="code5.loading"
                        v-text="item.icon"
                      ></v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!selected.length"
                  :loading="code5.loading"
                  color="purple"
                  text
                  @click="next"
                  >Next</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Icon'">
          <template v-slot:preview>
            <p>
              Chips can use text or any icon available in the Material Icons
              font library.
            </p>
            <div class="text-center">
              <v-chip class="ma-2" color="indigo" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                Ranee
              </v-chip>

              <v-chip class="ma-2" color="orange" text-color="white">
                Premium
                <v-icon right>mdi-star</v-icon>
              </v-chip>

              <v-chip class="ma-2" color="primary" text-color="white">
                1 Year
                <v-icon right>mdi-cake-variant</v-icon>
              </v-chip>

              <v-chip class="ma-2" color="green" text-color="white">
                <v-avatar left class="green darken-4">
                  1
                </v-avatar>
                Years
              </v-chip>

              <v-chip
                class="ma-2"
                close
                color="teal"
                text-color="white"
                @click:close="close"
              >
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Confirmed
              </v-chip>

              <v-chip
                class="ma-2"
                close
                color="teal"
                text-color="white"
                close-icon="mdi-delete"
                @click:close="close"
              >
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Confirmed
              </v-chip>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Label'">
          <template v-slot:preview>
            <div class="text-center">
              <v-chip class="ma-2" label>
                Label
              </v-chip>

              <v-chip class="ma-2" color="pink" label text-color="white">
                <v-icon left>mdi-label</v-icon>
                Tags
              </v-chip>

              <v-chip class="ma-2" color="primary" label>
                <v-icon left>mdi-account-circle-outline</v-icon>
                Sean Paul
              </v-chip>

              <v-chip class="ma-2" close color="cyan" label text-color="white">
                <v-icon left>mdi-twitter</v-icon>
                New Tweets
              </v-chip>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Expandable'">
          <template v-slot:preview>
            <v-card max-width="400">
              <v-system-bar></v-system-bar>

              <v-row class="px-6 py-3" align="center">
                <span class="mr-4">To</span>
                <v-menu
                  v-model="code6.menu"
                  bottom
                  right
                  transition="scale-transition"
                  origin="top left"
                >
                  <template v-slot:activator="{ on }">
                    <v-chip pill v-on="on">
                      <v-avatar left>
                        <v-img src="media/users/100_11.jpg"></v-img>
                      </v-avatar>
                      Sean Paul
                    </v-chip>
                  </template>
                  <v-card width="300">
                    <v-list dark>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="media/users/100_11.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>Sean Paul</v-list-item-title>
                          <v-list-item-subtitle
                            >support@keenthemes.com</v-list-item-subtitle
                          >
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn icon @click="menu = false">
                            <v-icon>mdi-close-circle</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-list>
                      <v-list-item @click="() => {}">
                        <v-list-item-action>
                          <v-icon>mdi-briefcase</v-icon>
                        </v-list-item-action>
                        <v-list-item-subtitle
                          >support@keenthemes.com</v-list-item-subtitle
                        >
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-row>

              <v-divider></v-divider>

              <v-text-field
                full-width
                value="Re: Vacation Request"
                label="Subject"
                single-line
              ></v-text-field>

              <v-textarea full-width single-line label="Message"></v-textarea>
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

export default {
  data() {
    return {
      code1: {
        html: `<div class="text-center">
  <v-chip
    class="ma-2"
  >
    Default
  </v-chip>

  <v-chip
    class="ma-2"
    color="primary"
  >
    Primary
  </v-chip>

  <v-chip
    class="ma-2"
    color="secondary"
  >
    Secondary
  </v-chip>

  <v-chip
    class="ma-2"
    color="red"
    text-color="white"
  >
    Red Chip
  </v-chip>

  <v-chip
    class="ma-2"
    color="green"
    text-color="white"
  >
    Green Chip
  </v-chip>
</div>`
      },

      code2: {
        html: `<div class="text-center">
  <v-chip
    class="ma-2"
    color="indigo"
    text-color="white"
  >
    <v-avatar left>
      <v-icon>mdi-account-circle</v-icon>
    </v-avatar>
    Ranee
  </v-chip>

  <v-chip
    class="ma-2"
    color="orange"
    text-color="white"
  >
    Premium
    <v-icon right>mdi-star</v-icon>
  </v-chip>

  <v-chip
    class="ma-2"
    color="primary"
    text-color="white"
  >
    1 Year
    <v-icon right>mdi-cake-variant</v-icon>
  </v-chip>

  <v-chip
    class="ma-2"
    color="green"
    text-color="white"
  >
    <v-avatar
      left
      class="green darken-4"
    >
      1
    </v-avatar>
    Years
  </v-chip>

  <v-chip
    class="ma-2"
    close
    color="teal"
    text-color="white"
    @click:close="close"
  >
    <v-avatar left>
      <v-icon>mdi-checkbox-marked-circle</v-icon>
    </v-avatar>
    Confirmed
  </v-chip>

  <v-chip
    class="ma-2"
    close
    color="teal"
    text-color="white"
    close-icon="mdi-delete"
    @click:close="close"
  >
    <v-avatar left>
      <v-icon>mdi-checkbox-marked-circle</v-icon>
    </v-avatar>
    Confirmed
  </v-chip>
</div>`,
        js: `export default {
  methods: {
    close () {
      alert('Chip close clicked')
    },
  },
}`
      },

      code3: {
        html: ` <div class="text-center">
  <v-chip
    class="ma-2"
    color="success"
    outlined
  >
    <v-icon left>mdi-server-plus</v-icon>
    Server Status
  </v-chip>

  <v-chip
    class="ma-2"
    color="primary"
    outlined
    pill
  >
    User Account
    <v-icon right>mdi-account-outline</v-icon>
  </v-chip>

  <v-chip
    class="ma-2"
    color="deep-purple accent-4"
    outlined
  >
    <v-icon left>mdi-wrench</v-icon>
    Update Settings
  </v-chip>

  <v-chip
    class="ma-2"
    close
    color="indigo darken-3"
    outlined
  >
    <v-icon left>mdi-fire</v-icon>
    New Posts Available
  </v-chip>
</div>`
      },

      code4: {
        html: ` <div class="text-center">
  <v-chip
    class="ma-2"
    label
  >
    Label
  </v-chip>

  <v-chip
    class="ma-2"
    color="pink"
    label
    text-color="white"
  >
    <v-icon left>mdi-label</v-icon>
    Tags
  </v-chip>

  <v-chip
    class="ma-2"
    color="primary"
    label
  >
    <v-icon left>mdi-account-circle-outline</v-icon>
    Sean Paul
  </v-chip>

  <v-chip
    class="ma-2"
    close
    color="cyan"
    label
    text-color="white"
  >
    <v-icon left>mdi-twitter</v-icon>
    New Tweets
  </v-chip>
</div>`
      },

      code5: {
        html: `<v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      flat
      color="transparent"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Photo Info</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="$refs.search.focus()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="py-0">
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          class="shrink"
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            <v-icon
              left
              v-text="selection.icon"
            ></v-icon>
            {{ selection.text }}
          </v-chip>
        </v-col>

        <v-col v-if="!allSelected" cols="12">
          <v-text-field
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list>
      <template v-for="(item, i) in categories">
        <v-list-item
          v-if="!selected.includes(i)"
          :key="i"
          :disabled="loading"
          @click="selected.push(i)"
        >
          <v-list-item-avatar>
            <v-icon
              :disabled="loading"
              v-text="item.icon"
            ></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!selected.length"
        :loading="loading"
        color="purple"
        text
        @click="next"
      >Next</v-btn>
    </v-card-actions>
  </v-card>`,
        js: ` export default {
  data: () => ({
    items: [
      {
        text: 'Nature',
        icon: 'mdi-nature',
      },
      {
        text: 'Nightlife',
        icon: 'mdi-glass-wine',
      },
      {
        text: 'November',
        icon: 'mdi-calendar-range',
      },
      {
        text: 'Portland',
        icon: 'mdi-map-marker',
      },
      {
        text: 'Biking',
        icon: 'mdi-bike',
      },
    ],
    loading: false,
    search: '',
    selected: [],
  }),

  computed: {
    allSelected () {
      return this.selected.length === this.items.length
    },
    categories () {
      const search = this.search.toLowerCase()

      if (!search) return this.items

      return this.items.filter(item => {
        const text = item.text.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
    selections () {
      const selections = []

      for (const selection of this.selected) {
        selections.push(this.items[selection])
      }

      return selections
    },
  },

  watch: {
    selected () {
      this.search = ''
    },
  },

  methods: {
    next () {
      this.loading = true

      setTimeout(() => {
        this.search = ''
        this.selected = []
        this.loading = false
      }, 2000)
    },
  },
}`,
        items: [
          {
            text: "Nature",
            icon: "mdi-nature"
          },
          {
            text: "Nightlife",
            icon: "mdi-glass-wine"
          },
          {
            text: "November",
            icon: "mdi-calendar-range"
          },
          {
            text: "Portland",
            icon: "mdi-map-marker"
          },
          {
            text: "Biking",
            icon: "mdi-bike"
          }
        ],
        loading: false,
        search: ""
      },
      selected: [],

      code6: {
        html: `<v-card
    max-width="400"
    class="mx-auto"
  >
    <v-system-bar></v-system-bar>

    <v-row
      class="px-6 py-3"
      align="center"
    >
      <span class="mr-4">To</span>
      <v-menu
        v-model="menu"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip
            pill
            v-on="on"
          >
            <v-avatar left>
              <v-img src="media/users/100_11.jpg"></v-img>
            </v-avatar>
            Sean Paul
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="media/users/100_11.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Sean Paul</v-list-item-title>
                <v-list-item-subtitle>support@keenthemes.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="menu = false"
                >
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>support@keenthemes.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>

    <v-divider></v-divider>

    <v-text-field
      full-width
      value="Re: Vacation Request"
      label="Subject"
      single-line
    ></v-text-field>

    <v-textarea
      full-width
      single-line
      label="Message"
    ></v-textarea>
  </v-card>`,
        js: `export default {
    data: () => ({
      menu: false,
    }),
  }`,
        menu: false
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Chips" }
    ]);
  },

  computed: {
    // code 5
    allSelected() {
      return this.selected.length === this.code5.items.length;
    },
    categories() {
      const search = this.code5.search.toLowerCase();

      if (!search) return this.code5.items;

      return this.code5.items.filter(item => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(this.code5.items[selection]);
      }

      return selections;
    }
  },

  watch: {
    selected() {
      this.code5.search = "";
    }
  },

  methods: {
    // code 2
    close() {
      alert("Chip close clicked");
    },

    // code 5
    next() {
      this.code5.loading = true;

      setTimeout(() => {
        this.code5.search = "";
        this.selected = [];
        this.code5.loading = false;
      }, 2000);
    }
  }
};
</script>
