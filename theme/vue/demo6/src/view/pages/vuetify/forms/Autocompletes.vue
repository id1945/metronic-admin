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
        <b>Autocompletes</b> The <code>v-autocomplete</code> component offers
        simple and flexible type-ahead functionality. This is useful when
        searching large sets of data or even dynamically requesting information
        from an API.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/autocompletes"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Custom filter on autocomplete'">
          <template v-slot:preview>
            <p>
              The <code>filter</code> prop can be used to filter each individual
              item with custom logic. In this example we filter items by name
            </p>
            <v-card class="overflow-hidden" color="purple lighten-1" dark>
              <v-toolbar flat color="purple">
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title class="font-weight-light"
                  >User Profile</v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-btn
                  color="purple darken-3"
                  fab
                  small
                  @click="code1.isEditing = !code1.isEditing"
                >
                  <v-icon v-if="code1.isEditing">mdi-close</v-icon>
                  <v-icon v-else>mdi-pencil</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  :disabled="!code1.isEditing"
                  color="white"
                  label="Name"
                ></v-text-field>
                <v-autocomplete
                  :disabled="!code1.isEditing"
                  :items="code1.states"
                  :filter="customFilter"
                  color="white"
                  item-text="name"
                  label="State"
                ></v-autocomplete>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!code1.isEditing"
                  color="success"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
              <v-snackbar
                v-model="code1.hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
              >
                Your profile has been updated
              </v-snackbar>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Advanced slots'">
          <template v-slot:preview>
            <p>
              The <code>v-autocomplete</code> component is extremely flexible
              and can fit in just about any use-case. Create custom displays for
              <strong>no-data</strong>, <strong>item</strong> and
              <strong>selection</strong> slots to provide a unique user
              experience. Using <em>slots</em> enables you to easily customize
              the desired look for your application.
            </p>
            <v-toolbar color="orange accent-1">
              <v-app-bar-nav-icon
                class="hidden-sm-and-down"
              ></v-app-bar-nav-icon>
              <v-toolbar-title class="title mr-6 hidden-sm-and-down"
                >Cryptocurrency</v-toolbar-title
              >
              <v-autocomplete
                v-model="model"
                :items="code3.items"
                :loading="code3.isLoading"
                :search-input.sync="search"
                chips
                clearable
                hide-details
                hide-selected
                item-text="name"
                item-value="symbol"
                label="Search for a coin..."
                solo
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Search for your favorite
                      <strong>Cryptocurrency</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                  <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                  >
                    <v-icon left>mdi-coin</v-icon>
                    <span v-text="item.name"></span>
                  </v-chip>
                </template>
                <template v-slot:item="{ item }">
                  <v-list-item-avatar
                    color="indigo"
                    class="headline font-weight-light white--text"
                  >
                    {{ item.name.charAt(0) }}
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.symbol"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-coin</v-icon>
                  </v-list-item-action>
                </template>
              </v-autocomplete>
              <template v-slot:extension>
                <v-tabs
                  v-model="code3.tab"
                  :hide-slider="!model"
                  color="blue-grey"
                  slider-color="blue-grey"
                >
                  <v-tab :disabled="!model">News</v-tab>
                  <v-tab :disabled="!model">Trading</v-tab>
                  <v-tab :disabled="!model">Blog</v-tab>
                </v-tabs>
              </template>
            </v-toolbar>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Slots'">
          <template v-slot:preview>
            <v-card color="blue-grey darken-1" dark :loading="isUpdating">
              <template v-slot:progress>
                <v-progress-linear
                  absolute
                  color="green lighten-3"
                  height="4"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="200" src="media/stock-600x600/img-10.jpg">
                <v-row>
                  <v-col class="text-right" cols="12">
                    <v-menu bottom left transition="slide-y-transition">
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="isUpdating = true">
                          <v-list-item-action>
                            <v-icon>mdi-settings</v-icon>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>Update</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-row class="pa-4" align="center" justify="center">
                    <v-col class="text-center">
                      <h3 class="headline">{{ code2.name }}</h3>
                      <span class="grey--text text--lighten-1">{{
                        code2.title
                      }}</span>
                    </v-col>
                  </v-row>
                </v-row>
              </v-img>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="code2.name"
                        :disabled="isUpdating"
                        filled
                        color="blue-grey lighten-2"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="code2.title"
                        :disabled="isUpdating"
                        filled
                        color="blue-grey lighten-2"
                        label="Title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="code2.friends"
                        :disabled="isUpdating"
                        :items="code2.people"
                        filled
                        chips
                        color="blue-grey lighten-2"
                        label="Select"
                        item-text="name"
                        item-value="name"
                        multiple
                      >
                        <template v-slot:selection="data">
                          <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            close
                            @click="data.select"
                            @click:close="remove(data.item)"
                          >
                            <v-avatar left>
                              <v-img :src="data.item.avatar"></v-img>
                            </v-avatar>
                            {{ data.item.name }}
                          </v-chip>
                        </template>
                        <template v-slot:item="data">
                          <template v-if="typeof data.item !== 'object'">
                            <v-list-item-content
                              v-text="data.item"
                            ></v-list-item-content>
                          </template>
                          <template v-else>
                            <v-list-item-avatar>
                              <img :src="data.item.avatar" />
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="data.item.name"
                              ></v-list-item-title>
                              <v-list-item-subtitle
                                v-html="data.item.group"
                              ></v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </template>
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <v-divider></v-divider>
              <v-card-actions>
                <v-switch
                  v-model="code2.autoUpdate"
                  :disabled="isUpdating"
                  class="mt-0"
                  color="green lighten-2"
                  hide-details
                  label="Auto Update"
                ></v-switch>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="code2.autoUpdate"
                  :loading="isUpdating"
                  color="blue-grey darken-3"
                  depressed
                  @click="isUpdating = true"
                >
                  <v-icon left>mdi-update</v-icon>
                  Update Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'State selector'">
          <template v-slot:preview>
            <v-card>
              <v-card-title
                class="headline font-weight-regular blue-grey white--text"
                >Profile</v-card-title
              >
              <v-card-text>
                <v-subheader class="pa-0">Where do you live?</v-subheader>
                <v-autocomplete
                  v-model="code4.model"
                  :hint="
                    !code4.isEditing
                      ? 'Click the icon to edit'
                      : 'Click the icon to save'
                  "
                  :items="code4.states"
                  :readonly="!code4.isEditing"
                  :label="
                    `State — ${code4.isEditing ? 'Editable' : 'Readonly'}`
                  "
                  persistent-hint
                  prepend-icon="mdi-city"
                >
                  <template v-slot:append-outer>
                    <v-slide-x-reverse-transition mode="out-in">
                      <v-icon
                        :key="`icon-${code4.isEditing}`"
                        :color="code4.isEditing ? 'success' : 'info'"
                        @click="code4.isEditing = !code4.isEditing"
                        v-text="
                          code4.isEditing
                            ? 'mdi-check-outline'
                            : 'mdi-circle-edit-outline'
                        "
                      ></v-icon>
                    </v-slide-x-reverse-transition>
                  </template>
                </v-autocomplete>
              </v-card-text>
            </v-card>
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

const srcs = {
  1: "media/users/300_1.jpg",
  2: "media/users/300_2.jpg",
  3: "media/users/300_3.jpg",
  4: "media/users/300_4.jpg",
  5: "media/users/300_5.jpg"
};

export default {
  data() {
    return {
      code1: {
        html: ` <v-card
  class="overflow-hidden"
  color="purple lighten-1"
  dark
>
  <v-toolbar
    flat
    color="purple"
  >
    <v-icon>mdi-account</v-icon>
    <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      color="purple darken-3"
      fab
      small
      @click="isEditing = !isEditing"
    >
      <v-icon v-if="isEditing">mdi-close</v-icon>
      <v-icon v-else>mdi-pencil</v-icon>
    </v-btn>
  </v-toolbar>
  <v-card-text>
    <v-text-field
      :disabled="!isEditing"
      color="white"
      label="Name"
    ></v-text-field>
    <v-autocomplete
      :disabled="!isEditing"
      :items="states"
      :filter="customFilter"
      color="white"
      item-text="name"
      label="State"
    ></v-autocomplete>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
      :disabled="!isEditing"
      color="success"
      @click="save"
    >
      Save
    </v-btn>
  </v-card-actions>
  <v-snackbar
    v-model="hasSaved"
    :timeout="2000"
    absolute
    bottom
    left
  >
    Your profile has been updated
  </v-snackbar>
</v-card>`,
        js: `export default {
  data () {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: 'Florida', abbr: 'FL', id: 1 },
        { name: 'Georgia', abbr: 'GA', id: 2 },
        { name: 'Nebraska', abbr: 'NE', id: 3 },
        { name: 'California', abbr: 'CA', id: 4 },
        { name: 'New York', abbr: 'NY', id: 5 },
      ],
    }
  },

  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    },
  },
}`,
        hasSaved: false,
        isEditing: null,
        model: null,
        states: [
          { name: "Florida", abbr: "FL", id: 1 },
          { name: "Georgia", abbr: "GA", id: 2 },
          { name: "Nebraska", abbr: "NE", id: 3 },
          { name: "California", abbr: "CA", id: 4 },
          { name: "New York", abbr: "NY", id: 5 }
        ]
      },

      code2: {
        html: `<v-card
  color="blue-grey darken-1"
  dark
  :loading="isUpdating"
>
  <template v-slot:progress>
    <v-progress-linear
      absolute
      color="green lighten-3"
      height="4"
      indeterminate
    ></v-progress-linear>
  </template>
  <v-img
    height="200"
    src="media/stock-600x600/img-10.jpg"
  >
    <v-row>
      <v-col
        class="text-right"
        cols="12"
      >
        <v-menu
          bottom
          left
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="isUpdating = true">
              <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Update</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-row
        class="pa-4"
        align="center"
        justify="center"
      >
        <v-col class="text-center">
          <h3 class="headline">{{ name }}</h3>
          <span class="grey--text text--lighten-1">{{ title }}</span>
        </v-col>
      </v-row>
    </v-row>
  </v-img>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="name"
            :disabled="isUpdating"
            filled
            color="blue-grey lighten-2"
            label="Name"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="title"
            :disabled="isUpdating"
            filled
            color="blue-grey lighten-2"
            label="Title"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="friends"
            :disabled="isUpdating"
            :items="people"
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="name"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
              >
                <v-avatar left>
                  <v-img :src="data.item.avatar"></v-img>
                </v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-avatar>
                  <img :src="data.item.avatar">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-divider></v-divider>
  <v-card-actions>
    <v-switch
      v-model="autoUpdate"
      :disabled="isUpdating"
      class="mt-0"
      color="green lighten-2"
      hide-details
      label="Auto Update"
    ></v-switch>
    <v-spacer></v-spacer>
    <v-btn
      :disabled="autoUpdate"
      :loading="isUpdating"
      color="blue-grey darken-3"
      depressed
      @click="isUpdating = true"
    >
      <v-icon left>mdi-update</v-icon>
      Update Now
    </v-btn>
  </v-card-actions>
</v-card>`,
        js: `export default {
  data () {
    const srcs = {
      1: 'media/users/300_1.jpg',
      2: 'media/users/300_2.jpg',
      3: 'media/users/300_3.jpg',
      4: 'media/users/300_4.jpg',
      5: 'media/users/300_5.jpg',
    }

    return {
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      name: 'Midnight Crew',
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
      ],
      title: 'The summer breeze',
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },

  methods: {
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
  },
}`,
        autoUpdate: true,
        friends: ["Sandra Adams", "Britta Holt"],
        name: "Midnight Crew",
        people: [
          { header: "Group 1" },
          { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
          { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
          { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
          { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
          { divider: true },
          { header: "Group 2" },
          { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
          { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
          { name: "John Smith", group: "Group 2", avatar: srcs[1] },
          { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] }
        ],
        title: "The summer breeze"
      },
      isUpdating: false,

      code3: {
        html: `<v-toolbar color="orange accent-1">
  <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
  <v-toolbar-title class="title mr-6 hidden-sm-and-down">Cryptocurrency</v-toolbar-title>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    chips
    clearable
    hide-details
    hide-selected
    item-text="name"
    item-value="symbol"
    label="Search for a coin..."
    solo
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          Search for your favorite
          <strong>Cryptocurrency</strong>
        </v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attr, on, item, selected }">
      <v-chip
        v-bind="attr"
        :input-value="selected"
        color="blue-grey"
        class="white--text"
        v-on="on"
      >
        <v-icon left>mdi-coin</v-icon>
        <span v-text="item.name"></span>
      </v-chip>
    </template>
    <template v-slot:item="{ item }">
      <v-list-item-avatar
        color="indigo"
        class="headline font-weight-light white--text"
      >
        {{ item.name.charAt(0) }}
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-coin</v-icon>
      </v-list-item-action>
    </template>
  </v-autocomplete>
  <template v-slot:extension>
    <v-tabs
      v-model="tab"
      :hide-slider="!model"
      color="blue-grey"
      slider-color="blue-grey"
    >
      <v-tab :disabled="!model">News</v-tab>
      <v-tab :disabled="!model">Trading</v-tab>
      <v-tab :disabled="!model">Blog</v-tab>
    </v-tabs>
  </template>
</v-toolbar>`,
        js: `export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.coinmarketcap.com/v2/listings/')
        .then(res => res.json())
        .then(res => {
          this.items = res.data
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },
}`,
        isLoading: false,
        items: [],
        tab: null
      },
      model: null,
      search: null,

      code4: {
        html: `<v-card>
  <v-card-title class="headline font-weight-regular blue-grey white--text">Profile</v-card-title>
  <v-card-text>
    <v-subheader class="pa-0">Where do you live?</v-subheader>
    <v-autocomplete
      v-model="model"
      :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
      :items="states"
      :readonly="!isEditing"
      :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
      persistent-hint
      prepend-icon="mdi-city"
    >
      <template v-slot:append-outer>
        <v-slide-x-reverse-transition
          mode="out-in"
        >
          <v-icon
            :key="\`icon-\${isEditing}\`"
            :color="isEditing ? 'success' : 'info'"
            @click="isEditing = !isEditing"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
          ></v-icon>
        </v-slide-x-reverse-transition>
      </template>
    </v-autocomplete>
  </v-card-text>
</v-card>`,
        js: `export default {
  data () {
    return {
      isEditing: false,
      model: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
    }
  },
}`,
        isEditing: false,
        model: null,
        states: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "District of Columbia",
          "Federated States of Micronesia",
          "Florida",
          "Georgia",
          "Guam",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Marshall Islands",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Northern Mariana Islands",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Palau",
          "Pennsylvania",
          "Puerto Rico",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virgin Island",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
        ]
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
      { title: "Autocompletes" }
    ]);
  },

  watch: {
    // code 2
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },

    // code 3
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(/*val*/) {
      // Items have already been loaded
      if (this.code3.items.length > 0) return;

      this.code3.isLoading = true;

      // Lazily load input items
      fetch("https://api.coinmarketcap.com/v2/listings/")
        .then(res => res.json())
        .then(res => {
          this.code3.items = res.data;
        })
        .catch((/*err*/) => {
          // console.log(err);
        })
        .finally(() => (this.code3.isLoading = false));
    }
  },

  methods: {
    // code 1
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.code1.isEditing = !this.code1.isEditing;
      this.code1.hasSaved = true;
    },

    // code 2
    remove(item) {
      const index = this.code2.friends.indexOf(item.name);
      if (index >= 0) this.code2.friends.splice(index, 1);
    }
  }
};
</script>
