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
        <b>Simple tables</b> The <code>v-simple-table</code> component is a
        simple wrapper component around the <code>&lt;table&gt;</code> element.
        Inside the component you can use all the regular table elements such as
        <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,
        <code>&lt;tr&gt;</code>, etc.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/simple-tables"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Fixed height and fixed header'">
          <template v-slot:preview>
            <p>
              Use the <code>fixed-header</code> prop together with the
              <code>height</code> prop to fix the header to the top of the
              table.
            </p>
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in code1.desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Dense'">
          <template v-slot:preview>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in code2.desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
        html: `<v-simple-table fixed-header height="300px">
  <template v-slot:default>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </template>
</v-simple-table>`,
        js: `export default {
  data () {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}`,
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159
          },
          {
            name: "Ice cream sandwich",
            calories: 237
          },
          {
            name: "Eclair",
            calories: 262
          },
          {
            name: "Cupcake",
            calories: 305
          },
          {
            name: "Gingerbread",
            calories: 356
          },
          {
            name: "Jelly bean",
            calories: 375
          },
          {
            name: "Lollipop",
            calories: 392
          },
          {
            name: "Honeycomb",
            calories: 408
          },
          {
            name: "Donut",
            calories: 452
          },
          {
            name: "KitKat",
            calories: 518
          }
        ]
      },

      code2: {
        html: `<v-simple-table dense>
  <template v-slot:default>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </template>
</v-simple-table>`,
        js: `export default {
  data () {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}`,
        desserts: [
          {
            name: "Frozen Yogurt",
            calories: 159
          },
          {
            name: "Ice cream sandwich",
            calories: 237
          },
          {
            name: "Eclair",
            calories: 262
          },
          {
            name: "Cupcake",
            calories: 305
          },
          {
            name: "Gingerbread",
            calories: 356
          },
          {
            name: "Jelly bean",
            calories: 375
          },
          {
            name: "Lollipop",
            calories: 392
          },
          {
            name: "Honeycomb",
            calories: 408
          },
          {
            name: "Donut",
            calories: 452
          },
          {
            name: "KitKat",
            calories: 518
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
      { title: "Simple Tables" }
    ]);
  }
};
</script>
