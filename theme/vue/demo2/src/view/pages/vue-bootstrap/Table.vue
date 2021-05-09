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
        <b>Tables</b> For displaying tabular data, &lt;b-table&gt; supports
        pagination, filtering, sorting, custom rendering, various style options,
        events, and asynchronous data. For simple display of tabular data
        without all the fancy features, BootstrapVue provides two lightweight
        alternative components &lt;b-table-lite&gt; and &lt;b-table-simple&gt;.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/table"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Basic usage'">
          <template v-slot:preview>
            <div>
              <b-table striped hover :items="code1.items"></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Using variants for table cells'">
          <template v-slot:preview>
            <p>
              Record data may also have additional special reserved name keys
              for colorizing rows and individual cells (variants), and for
              triggering additional row detail. The supported optional item
              record modifier properties (make sure your field keys do not
              conflict with these names):
            </p>
            <div>
              <b-table hover :items="code2.items"></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fields as a simple array'">
          <template v-slot:preview>
            <p>
              Fields can be a simple array, for defining the order of the
              columns, and which columns to display:
            </p>
            <div>
              <b-table
                striped
                hover
                :items="code3.items"
                :fields="code3.fields"
              ></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fields as an array of objects'">
          <template v-slot:preview>
            <p>
              Fields can be a an array of objects, providing additional control
              over the fields (such as sorting, formatting, etc). Only columns
              (keys) that appear in the fields array will be shown:
            </p>
            <div>
              <b-table
                striped
                hover
                :items="code4.items"
                :fields="code4.fields"
              ></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Table style options'">
          <template v-slot:preview>
            <p>
              Table style options <code>fixed</code>, <code>stacked</code>,
              <code>caption-top</code>, <code>no-border-collapse</code>, sticky
              headers, sticky columns, and the table sorting feature, all
              require BootstrapVue's custom CSS.
            </p>
            <div>
              <b-form-group label="Table Options" label-cols-lg="2">
                <b-form-checkbox v-model="code5.striped" inline>
                  Striped
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.bordered" inline>
                  Bordered
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.borderless" inline>
                  Borderless
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.outlined" inline>
                  Outlined
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.small" inline>
                  Small
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.hover" inline>
                  Hover
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.dark" inline>
                  Dark
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.fixed" inline>
                  Fixed
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.footClone" inline>
                  Foot Clone
                </b-form-checkbox>
                <b-form-checkbox v-model="code5.noCollapse" inline>
                  No border collapse
                </b-form-checkbox>
              </b-form-group>
              <b-form-group label="Head Variant" label-cols-lg="2">
                <b-form-radio-group v-model="code5.headVariant" class="mt-lg-2">
                  <b-form-radio :value="null" inline>None</b-form-radio>
                  <b-form-radio value="light" inline>Light</b-form-radio>
                  <b-form-radio value="dark" inline>Dark</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-form-group
                label="Table Variant"
                label-for="table-style-variant"
                label-cols-lg="2"
              >
                <b-form-select
                  v-model="code5.tableVariant"
                  :options="code5.tableVariants"
                  id="table-style-variant"
                >
                  <template v-slot:first>
                    <option value="">-- None --</option>
                  </template>
                </b-form-select>
              </b-form-group>

              <b-table
                :striped="code5.striped"
                :bordered="code5.bordered"
                :borderless="code5.borderless"
                :outlined="code5.outlined"
                :small="code5.small"
                :hover="code5.hover"
                :dark="code5.dark"
                :fixed="code5.fixed"
                :foot-clone="code5.footClone"
                :no-border-collapse="code5.noCollapse"
                :items="code5.items"
                :fields="code5.fields"
                :head-variant="code5.headVariant"
                :table-variant="code5.tableVariant"
              ></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
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
    <b-table striped hover :items="items"></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }`,
        items: [
          { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { age: 21, first_name: "Larsen", last_name: "Shaw" },
          { age: 89, first_name: "Geneva", last_name: "Wilson" },
          { age: 38, first_name: "Jami", last_name: "Carney" }
        ]
      },

      code2: {
        html: `<div>
    <b-table hover :items="items"></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'danger'
          },
          {
            age: 40,
            first_name: 'Thor',
            last_name: 'MacDonald',
            _cellVariants: { age: 'info', first_name: 'warning' }
          },
          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
        ]
      }
    }
  }`,
        items: [
          { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { age: 21, first_name: "Larsen", last_name: "Shaw" },
          {
            age: 89,
            first_name: "Geneva",
            last_name: "Wilson",
            _rowVariant: "danger"
          },
          {
            age: 40,
            first_name: "Thor",
            last_name: "MacDonald",
            _cellVariants: { age: "info", first_name: "warning" }
          },
          { age: 29, first_name: "Dick", last_name: "Dunlap" }
        ]
      },

      code3: {
        html: `<div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        // Note \`isActive\` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }`,
        fields: ["first_name", "last_name", "age"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "Dickerson",
            last_name: "Macdonald"
          },
          { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
          {
            isActive: false,
            age: 89,
            first_name: "Geneva",
            last_name: "Wilson"
          },
          { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
        ]
      },

      code4: {
        html: `<div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }`,
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: "last_name",
            sortable: true
          },
          {
            key: "first_name",
            sortable: false
          },
          {
            key: "age",
            label: "Person age",
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: "danger"
          }
        ],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "Dickerson",
            last_name: "Macdonald"
          },
          { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
          {
            isActive: false,
            age: 89,
            first_name: "Geneva",
            last_name: "Wilson"
          },
          { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
        ]
      },

      code5: {
        html: `<div>
    <b-form-group label="Table Options" label-cols-lg="2">
      <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
      <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>
      <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>
      <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>
      <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
      <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>
      <b-form-checkbox v-model="dark" inline>Dark</b-form-checkbox>
      <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>
      <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>
      <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>
    </b-form-group>
    <b-form-group label="Head Variant" label-cols-lg="2">
      <b-form-radio-group v-model="headVariant" class="mt-lg-2">
        <b-form-radio :value="null" inline>None</b-form-radio>
        <b-form-radio value="light" inline>Light</b-form-radio>
        <b-form-radio value="dark" inline>Dark</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
      <b-form-select
        v-model="tableVariant"
        :options="tableVariants"
        id="table-style-variant"
      >
        <template v-slot:first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false
      }
    }
  }`,
        fields: ["first_name", "last_name", "age"],
        items: [
          { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { age: 21, first_name: "Larsen", last_name: "Shaw" },
          { age: 89, first_name: "Geneva", last_name: "Wilson" }
        ],
        tableVariants: [
          "primary",
          "secondary",
          "info",
          "danger",
          "warning",
          "success",
          "light",
          "dark"
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: "",
        noCollapse: false
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "" }
    ]);
  }
};
</script>
