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
        <b>Pagination</b> The component &amp;lt;b-navbar&amp;gt; is a wrapper
        that positions branding, navigation, and other elements into a concise
        header. It's easily extensible and thanks to the
        &amp;lt;b-collapse&amp;gt; component, it can easily integrate responsive
        behaviors.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/pagination"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Pagination'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-pagination&gt;</code> is a custom input component that
              provides a current page number input control. The value should be
              bound via <code>v-model</code> in your app. Page numbers are
              indexed from 1. The number of pages is computed from the provided
              prop values for <code>total-rows</code> and <code>per-page</code>.
            </p>
            <div class="overflow-auto">
              <b-pagination
                v-model="code1.currentPage"
                :total-rows="rows"
                :per-page="code1.perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="mt-3">Current Page: {{ code1.currentPage }}</p>

              <b-table
                id="my-table"
                :items="code1.items"
                :per-page="code1.perPage"
                :current-page="code1.currentPage"
                small
              ></b-table>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button content'">
          <template v-slot:preview>
            <div class="overflow-auto">
              <!-- Use text in props -->
              <b-pagination
                v-model="code2.currentPage1"
                :total-rows="code2.rows1"
                :per-page="code2.perPage1"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
              ></b-pagination>

              <!-- Use emojis in props -->
              <b-pagination
                v-model="code2.currentPage2"
                :total-rows="code2.rows2"
                :per-page="code2.perPage2"
                first-text="⏮"
                prev-text="⏪"
                next-text="⏩"
                last-text="⏭"
                class="mt-4"
              ></b-pagination>

              <!-- Use HTML and sub-components in slots -->
              <b-pagination
                v-model="code2.currentPage3"
                :total-rows="code2.rows3"
                :per-page="code2.perPage3"
                class="mt-4"
              >
                <template v-slot:first-text
                  ><span class="text-success">First</span></template
                >
                <template v-slot:prev-text
                  ><span class="text-danger">Prev</span></template
                >
                <template v-slot:next-text
                  ><span class="text-warning">Next</span></template
                >
                <template v-slot:last-text
                  ><span class="text-info">Last</span></template
                >
                <template v-slot:ellipsis-text>
                  <b-spinner small type="grow"></b-spinner>
                  <b-spinner small type="grow"></b-spinner>
                  <b-spinner small type="grow"></b-spinner>
                </template>
                <template v-slot:page="{ page, active }">
                  <b v-if="active">{{ page }}</b>
                  <i v-else>{{ page }}</i>
                </template>
              </b-pagination>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button size'">
          <template v-slot:preview>
            <div class="overflow-auto">
              <div>
                <h6>Small</h6>
                <b-pagination
                  v-model="code3.currentPage1"
                  :total-rows="code3.rows1"
                  size="sm"
                ></b-pagination>
              </div>

              <div class="mt-3">
                <h6>Default</h6>
                <b-pagination
                  v-model="code3.currentPage2"
                  :total-rows="code3.rows2"
                ></b-pagination>
              </div>

              <div class="mt-3">
                <h6>Large</h6>
                <b-pagination
                  v-model="code3.currentPage3"
                  :total-rows="code3.rows3"
                  size="lg"
                ></b-pagination>
              </div>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Alignment'">
          <template v-slot:preview>
            <div class="overflow-auto">
              <div>
                <h6>Left alignment (default)</h6>
                <b-pagination
                  v-model="code4.currentPage1"
                  :total-rows="code4.rows1"
                ></b-pagination>
              </div>

              <div class="mt-3">
                <h6 class="text-center">Center alignment</h6>
                <b-pagination
                  v-model="code4.currentPage2"
                  :total-rows="code4.rows2"
                  align="center"
                ></b-pagination>
              </div>

              <div class="mt-3">
                <h6 class="text-right">Right (end) alignment</h6>
                <b-pagination
                  v-model="code4.currentPage3"
                  :total-rows="code4.rows3"
                  align="right"
                ></b-pagination>
              </div>

              <div class="mt-3">
                <h6 class="text-center">Fill alignment</h6>
                <b-pagination
                  v-model="code4.currentPage4"
                  :total-rows="code4.rows4"
                  align="fill"
                ></b-pagination>
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
        html: `<div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>`,
        js: `export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }`,
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: "Fred", last_name: "Flintstone" },
          { id: 2, first_name: "Wilma", last_name: "Flintstone" },
          { id: 3, first_name: "Barney", last_name: "Rubble" },
          { id: 4, first_name: "Betty", last_name: "Rubble" },
          { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
          { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
          { id: 7, first_name: "The Great", last_name: "Gazzoo" },
          { id: 8, first_name: "Rockhead", last_name: "Slate" },
          { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
        ]
      },

      code2: {
        html: `<div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>

    <!-- Use emojis in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
    >
      <template v-slot:first-text><span class="text-success">First</span></template>
      <template v-slot:prev-text><span class="text-danger">Prev</span></template>
      <template v-slot:next-text><span class="text-warning">Next</span></template>
      <template v-slot:last-text><span class="text-info">Last</span></template>
      <template v-slot:ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template v-slot:page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>`,
        js: `export default {
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1
      }
    }
  }`,
        rows1: 100,
        perPage1: 10,
        currentPage1: 1,
        rows2: 100,
        perPage2: 10,
        currentPage2: 1,
        rows3: 100,
        perPage3: 10,
        currentPage3: 1
      },

      code3: {
        html: `<div class="overflow-auto">
    <div>
      <h6>Small</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Default</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Large</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>
    </div>
  </div>`,
        js: `export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }
  }`,
        rows1: 100,
        currentPage1: 1,
        rows2: 100,
        currentPage2: 1,
        rows3: 100,
        currentPage3: 1
      },

      code4: {
        html: `<div class="overflow-auto">
    <div>
      <h6>Left alignment (default)</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Right (end) alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="right"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Fill alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="fill"></b-pagination>
    </div>
  </div>`,
        js: `export default {
    data() {
      return {
        rows: 100,
        currentPage: 3
      }
    }
  }`,
        rows1: 100,
        currentPage1: 3,
        rows2: 100,
        currentPage2: 3,
        rows3: 100,
        currentPage3: 3,
        rows4: 100,
        currentPage4: 3
      },

      code5: {
        html: ``,
        js: ``
      }
    };
  },
  components: {
    KTCodePreview
  },
  computed: {
    rows() {
      return this.code1.items.length;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Pagination" }
    ]);
  }
};
</script>
