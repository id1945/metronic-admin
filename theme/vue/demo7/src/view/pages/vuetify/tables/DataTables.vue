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
        <b>Data tables</b> The <code>v-data-table</code> component is used for
        displaying tabular data. Features include sorting, searching,
        pagination, inline-editing, header tooltips, and row selection.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/data-tables"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Selectable rows '">
          <template v-slot:preview>
            <p>
              The <code>show-select</code> prop will render a checkbox in the
              default header to toggle all rows, and a checkbox for each default
              row. You can customize these with the slots
              <code>header.data-table-select</code> and
              <code>item.data-table-select</code> respectively. You can also
              switch between allowing multiple selected rows at the same time or
              just one with the <code>single-select</code> prop.
            </p>
            <v-data-table
              v-model="code1.selected"
              :headers="code1.headers"
              :items="code1.desserts"
              :single-select="code1.singleSelect"
              item-key="name"
              show-select
              class="elevation-1"
            >
              <template v-slot:top>
                <v-switch
                  v-model="code1.singleSelect"
                  label="Single select"
                  class="pa-3"
                ></v-switch>
              </template>
            </v-data-table>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Grouped rows'">
          <template v-slot:preview>
            <p>
              Using the <code>group-by</code> and <code>group-desc</code> props
              you can group rows on an item property. The
              <code>show-group-by</code> prop will show a group button in the
              default header.
            </p>
            <v-data-table
              :headers="code2.headers"
              :items="code2.desserts"
              item-key="name"
              group-by="category"
              class="elevation-1"
              show-group-by
            ></v-data-table>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Sort on multiple columns'">
          <template v-slot:preview>
            <p>
              Using the <code>multi-sort</code> prop will enable you to sort on
              multiple columns at the same time. When enabled, you can pass
              arrays to both <code>sort-by</code> and <code>sort-desc</code> to
              programmatically control the sorting, instead of single values.
            </p>
            <v-data-table
              :headers="code3.headers"
              :items="code3.desserts"
              :sort-by="['calories', 'fat']"
              :sort-desc="[false, true]"
              multi-sort
              class="elevation-1"
            ></v-data-table>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Search'">
          <template v-slot:preview>
            <p>
              The data table exposes a <code>search</code> prop that allows you
              to filter your data.
            </p>
            <v-card>
              <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="code4.search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="code4.headers"
                :items="code4.desserts"
                :search="code4.search"
              ></v-data-table>
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

export default {
  data() {
    return {
      code1: {
        html: `<v-data-table
  v-model="selected"
  :headers="headers"
  :items="desserts"
  :single-select="singleSelect"
  item-key="name"
  show-select
  class="elevation-1"
>
  <template v-slot:top>
    <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
  </template>
</v-data-table>`,
        js: `export default {
  data () {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}`,
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          },
          {
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%"
          },
          {
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%"
          },
          {
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%"
          },
          {
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%"
          }
        ]
      },

      code2: {
        html: `<v-data-table
  :headers="headers"
  :items="desserts"
  item-key="name"
  group-by="category"
  class="elevation-1"
  show-group-by
></v-data-table>`,
        js: `export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            value: 'name',
          },
          { text: 'Category', value: 'category' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
          },
          {
            name: 'Donut',
            category: 'Pastry',
          },
          {
            name: 'KitKat',
            category: 'Candy',
          },
        ],
      }
    },
  }`,
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "left",
            value: "name"
          },
          { text: "Category", value: "category" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            category: "Ice cream"
          },
          {
            name: "Ice cream sandwich",
            category: "Ice cream"
          },
          {
            name: "Eclair",
            category: "Cookie"
          },
          {
            name: "Cupcake",
            category: "Pastry"
          },
          {
            name: "Gingerbread",
            category: "Cookie"
          },
          {
            name: "Jelly bean",
            category: "Candy"
          },
          {
            name: "Lollipop",
            category: "Candy"
          },
          {
            name: "Honeycomb",
            category: "Toffee"
          },
          {
            name: "Donut",
            category: "Pastry"
          },
          {
            name: "KitKat",
            category: "Candy"
          }
        ]
      },

      code3: {
        html: `<v-data-table
  :headers="headers"
  :items="desserts"
  :sort-by="['calories', 'fat']"
  :sort-desc="[false, true]"
  multi-sort
  class="elevation-1"
></v-data-table>`,
        js: ` export default {
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 200,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 200,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 300,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 300,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 400,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 400,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 400,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 400,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 500,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 500,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}`,
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            name: "Ice cream sandwich",
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            name: "Eclair",
            calories: 300,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            name: "Cupcake",
            calories: 300,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            name: "Gingerbread",
            calories: 400,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            name: "Jelly bean",
            calories: 400,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          },
          {
            name: "Lollipop",
            calories: 400,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%"
          },
          {
            name: "Honeycomb",
            calories: 400,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%"
          },
          {
            name: "Donut",
            calories: 500,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%"
          },
          {
            name: "KitKat",
            calories: 500,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%"
          }
        ]
      },

      code4: {
        html: `<v-card>
  <v-card-title>
    Nutrition
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
  ></v-data-table>
</v-card>`,
        js: ` export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}`,
        search: "",
        headers: [
          {
            text: "Dessert (100g serving)",
            align: "left",
            sortable: false,
            value: "name"
          },
          { text: "Calories", value: "calories" },
          { text: "Fat (g)", value: "fat" },
          { text: "Carbs (g)", value: "carbs" },
          { text: "Protein (g)", value: "protein" },
          { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: "1%"
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: "1%"
          },
          {
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: "7%"
          },
          {
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: "8%"
          },
          {
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: "16%"
          },
          {
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: "0%"
          },
          {
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: "2%"
          },
          {
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: "45%"
          },
          {
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: "22%"
          },
          {
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: "6%"
          }
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
      { title: "Tables", route: "simple-tables" },
      { title: "Data Tables" }
    ]);
  }
};
</script>
