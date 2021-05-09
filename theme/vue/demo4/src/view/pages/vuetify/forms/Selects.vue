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
        <b>Selects</b> Select fields components are used for collecting user
        provided information from a list of options.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/selects"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Disabled'">
          <template v-slot:preview>
            <p>You cannot use disabled <code>v-select</code>.</p>
            <v-row align="center">
              <v-col cols="12">
                <v-select
                  :items="code1.items"
                  disabled
                  label="Disabled"
                ></v-select>
              </v-col>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Read-only'">
          <template v-slot:preview>
            <p>
              You cannot use read-only <code>v-select</code>, but it looks
              default.
            </p>
            <v-row align="center">
              <v-col cols="12">
                <v-select
                  :items="code3.items"
                  readonly
                  label="Read-only"
                ></v-select>
              </v-col>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Dense'">
          <template v-slot:preview>
            <p>
              You can use <code>dense</code> prop to reduce the field height and
              lower max height of list items.
            </p>
            <v-container fluid>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="code5.items"
                    label="Standard"
                    dense
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="code5.items"
                    filled
                    label="Filled style"
                    dense
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="code5.items"
                    label="Outlined style"
                    dense
                    outlined
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="code5.items"
                    label="Solo field"
                    dense
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Change selection appearance'">
          <template v-slot:preview>
            <p>
              The <code>selection</code> slot can be used to customize the way
              selected values are shown in the input. This is great when you
              want something like <code>foo (+20 others)</code> or don't want
              the selection to occupy multiple lines.
            </p>
            <v-container fluid>
              <v-select
                v-model="code7.value"
                :items="code7.items"
                label="Select Item"
                multiple
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index === 0">
                    <span>{{ item }}</span>
                  </v-chip>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ code7.value.length - 1 }} others)</span
                  >
                </template>
              </v-select>
            </v-container>
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
        <KTCodePreview v-bind:title="'Icons'">
          <template v-slot:preview>
            <p>Use a custom prepended or appended icon.</p>
            <v-container fluid>
              <v-row align="center">
                <v-col cols="6">
                  <v-subheader>Prepended icon</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="code2.e1"
                    :items="code2.states"
                    menu-props="auto"
                    label="Select"
                    hide-details
                    prepend-icon="map"
                    single-line
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-subheader>Appended icon</v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="code2.e2"
                    :items="code2.states"
                    append-outer-icon="map"
                    menu-props="auto"
                    hide-details
                    label="Select"
                    single-line
                  ></v-select>
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

        <KTCodePreview v-bind:title="'Multiple'">
          <template v-slot:preview>
            <p>
              A multi-select can utilize <code>v-chip</code> as the display for
              selected items.
            </p>
            <v-container fluid>
              <v-row align="center">
                <v-col cols="12" sm="6">
                  <v-subheader
                    v-text="'Multiple with persistent hint'"
                  ></v-subheader>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="code4.e6"
                    :items="code4.states"
                    :menu-props="{ maxHeight: '400' }"
                    label="Select"
                    multiple
                    hint="Pick your favorite states"
                    persistent-hint
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-subheader
                    v-text="'Multiple (Chips) with persistent hint'"
                  ></v-subheader>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    v-model="code4.e7"
                    :items="code4.states"
                    label="Select"
                    multiple
                    chips
                    hint="What are the target regions"
                    persistent-hint
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Prepend/Append item slots'">
          <template v-slot:preview>
            <p>
              The <code>v-select</code> components can be optionally expanded
              with prepended and appended items. This is perfect for customized
              <strong>select-all</strong> functionality.
            </p>
            <v-container fluid>
              <v-select
                v-model="code6.selectedFruits"
                :items="code6.fruits"
                label="Favorite Fruits"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action>
                      <v-icon
                        :color="
                          code6.selectedFruits.length > 0
                            ? 'indigo darken-4'
                            : ''
                        "
                        >{{ icon }}</v-icon
                      >
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Select All</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:append-item>
                  <v-divider class="mb-2"></v-divider>
                  <v-list-item disabled>
                    <v-list-item-avatar color="grey lighten-3">
                      <v-icon>mdi-food-apple</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content v-if="likesAllFruit">
                      <v-list-item-title
                        >Holy smokes, someone call the fruit
                        police!</v-list-item-title
                      >
                    </v-list-item-content>

                    <v-list-item-content v-else-if="likesSomeFruit">
                      <v-list-item-title>Fruit Count</v-list-item-title>
                      <v-list-item-subtitle>{{
                        code6.selectedFruits.length
                      }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-content v-else>
                      <v-list-item-title>
                        How could you not like fruit?
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        Go ahead, make a selection above!
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
            </v-container>
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
        html: `<v-row align="center">
  <v-col cols="12">
    <v-select
      :items="items"
      disabled
      label="Disabled"
    ></v-select>
  </v-col>
</v-row>`,
        js: `export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}`,
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },

      code2: {
        html: `<v-container fluid>
  <v-row align="center">
    <v-col cols="6">
      <v-subheader>Prepended icon</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-select
        v-model="e1"
        :items="states"
        menu-props="auto"
        label="Select"
        hide-details
        prepend-icon="map"
        single-line
      ></v-select>
    </v-col>
    <v-col cols="6">
      <v-subheader>Appended icon</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-select
        v-model="e2"
        :items="states"
        append-outer-icon="map"
        menu-props="auto"
        hide-details
        label="Select"
        single-line
      ></v-select>
    </v-col>
  </v-row>
</v-container>`,
        js: `export default {
  data () {
    return {
      e1: 'Florida',
      e2: 'Texas',
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' },
      ],
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
        e1: "Florida",
        e2: "Texas",
        e3: null,
        e4: null,
        items: [
          { text: "State 1" },
          { text: "State 2" },
          { text: "State 3" },
          { text: "State 4" },
          { text: "State 5" },
          { text: "State 6" },
          { text: "State 7" }
        ],
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
      },

      code3: {
        html: `<v-row align="center">
  <v-col cols="12">
    <v-select
      :items="items"
      readonly
      label="Read-only"
    ></v-select>
  </v-col>
</v-row>`,
        js: `export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}`,
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },

      code4: {
        html: `<v-container fluid>
  <v-row align="center">
    <v-col cols="12" sm="6">
      <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="e6"
        :items="states"
        :menu-props="{ maxHeight: '400' }"
        label="Select"
        multiple
        hint="Pick your favorite states"
        persistent-hint
      ></v-select>
    </v-col>

    <v-col cols="12" sm="6">
      <v-subheader v-text="'Multiple (Chips) with persistent hint'"></v-subheader>
    </v-col>

    <v-col cols="12" sm="6">
      <v-select
        v-model="e7"
        :items="states"
        label="Select"
        multiple
        chips
        hint="What are the target regions"
        persistent-hint
      ></v-select>
    </v-col>
  </v-row>
</v-container>`,
        js: `export default {
  data () {
    return {
      e6: [],
      e7: [],
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
        e6: [],
        e7: [],
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
      },

      code5: {
        html: `<v-container fluid>
  <v-row align="center">
    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        :items="items"
        label="Standard"
        dense
      ></v-select>
    </v-col>

    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        :items="items"
        filled
        label="Filled style"
        dense
      ></v-select>
    </v-col>

    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        :items="items"
        label="Outlined style"
        dense
        outlined
      ></v-select>
    </v-col>

    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        :items="items"
        label="Solo field"
        dense
        solo
      ></v-select>
    </v-col>
  </v-row>
</v-container>`,
        js: `export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}`,
        items: ["Foo", "Bar", "Fizz", "Buzz"]
      },

      code6: {
        html: `<v-container fluid>
  <v-select
    v-model="selectedFruits"
    :items="fruits"
    label="Favorite Fruits"
    multiple
  >
    <template v-slot:prepend-item>
      <v-list-item
        ripple
        @click="toggle"
      >
        <v-list-item-action>
          <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Select All</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
    <template v-slot:append-item>
      <v-divider class="mb-2"></v-divider>
      <v-list-item disabled>
        <v-list-item-avatar color="grey lighten-3">
          <v-icon>mdi-food-apple</v-icon>
        </v-list-item-avatar>

        <v-list-item-content v-if="likesAllFruit">
          <v-list-item-title>Holy smokes, someone call the fruit police!</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content v-else-if="likesSomeFruit">
          <v-list-item-title>Fruit Count</v-list-item-title>
          <v-list-item-subtitle>{{ selectedFruits.length }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content v-else>
          <v-list-item-title>
            How could you not like fruit?
          </v-list-item-title>
          <v-list-item-subtitle>
            Go ahead, make a selection above!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</v-container>`,
        js: `export default {
  data: () => ({
    fruits: [
      'Apples',
      'Apricots',
      'Avocado',
      'Bananas',
      'Blueberries',
      'Blackberries',
      'Boysenberries',
      'Bread fruit',
      'Cantaloupes (cantalope)',
      'Cherries',
      'Cranberries',
      'Cucumbers',
      'Currants',
      'Dates',
      'Eggplant',
      'Figs',
      'Grapes',
      'Grapefruit',
      'Guava',
      'Honeydew melons',
      'Huckleberries',
      'Kiwis',
      'Kumquat',
      'Lemons',
      'Limes',
      'Mangos',
      'Mulberries',
      'Muskmelon',
      'Nectarines',
      'Olives',
      'Oranges',
      'Papaya',
      'Peaches',
      'Pears',
      'Persimmon',
      'Pineapple',
      'Plums',
      'Pomegranate',
      'Raspberries',
      'Rose Apple',
      'Starfruit',
      'Strawberries',
      'Tangerines',
      'Tomatoes',
      'Watermelons',
      'Zucchini',
    ],
    selectedFruits: [],
  }),

  computed: {
    likesAllFruit () {
      return this.selectedFruits.length === this.fruits.length
    },
    likesSomeFruit () {
      return this.selectedFruits.length > 0 && !this.likesAllFruit
    },
    icon () {
      if (this.likesAllFruit) return 'mdi-close-box'
      if (this.likesSomeFruit) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },

  methods: {
    toggle () {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedFruits = []
        } else {
          this.selectedFruits = this.fruits.slice()
        }
      })
    },
  },
}`,
        fruits: [
          "Apples",
          "Apricots",
          "Avocado",
          "Bananas",
          "Blueberries",
          "Blackberries",
          "Boysenberries",
          "Bread fruit",
          "Cantaloupes (cantalope)",
          "Cherries",
          "Cranberries",
          "Cucumbers",
          "Currants",
          "Dates",
          "Eggplant",
          "Figs",
          "Grapes",
          "Grapefruit",
          "Guava",
          "Honeydew melons",
          "Huckleberries",
          "Kiwis",
          "Kumquat",
          "Lemons",
          "Limes",
          "Mangos",
          "Mulberries",
          "Muskmelon",
          "Nectarines",
          "Olives",
          "Oranges",
          "Papaya",
          "Peaches",
          "Pears",
          "Persimmon",
          "Pineapple",
          "Plums",
          "Pomegranate",
          "Raspberries",
          "Rose Apple",
          "Starfruit",
          "Strawberries",
          "Tangerines",
          "Tomatoes",
          "Watermelons",
          "Zucchini"
        ],
        selectedFruits: []
      },

      code7: {
        html: `<v-container fluid>
    <v-select
      v-model="value"
      :items="items"
      label="Select Item"
      multiple
    >
      <template v-slot:selection="{ item, index }">
        <v-chip v-if="index === 0">
          <span>{{ item }}</span>
        </v-chip>
        <span
          v-if="index === 1"
          class="grey--text caption"
        >(+{{ value.length - 1 }} others)</span>
      </template>
    </v-select>
</v-container>`,
        js: `export default {
  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
    value: ['foo', 'bar', 'fizz'],
  }),
}`,
        items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
        value: ["foo", "bar", "fizz"]
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
      { title: "Selects" }
    ]);
  },

  computed: {
    // code6
    likesAllFruit() {
      return this.code6.selectedFruits.length === this.code6.fruits.length;
    },
    likesSomeFruit() {
      return this.code6.selectedFruits.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },

  methods: {
    // code6
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.code6.selectedFruits = [];
        } else {
          this.code6.selectedFruits = this.code6.fruits.slice();
        }
      });
    }
  }
};
</script>
