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
        <b>Pagination Navigation</b> Quick first, previous, next, last, and page
        buttons for navigation based pagination, supporting regular links or
        router links.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/pagination-nav"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Pagination Navigation'">
          <template v-slot:preview>
            <p>
              <code>b-pagination-nav</code> will try and auto-detect which page
              link is active page button based on the current page's URL (via
              either <code>$route</code> detection or, if no
              <code>$router</code> detected, the browser location URL).
            </p>
            <div class="overflow-auto">
              <b-pagination-nav
                :link-gen="code1.linkGen"
                :number-of-pages="10"
                use-router
              ></b-pagination-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Page number generation'">
          <template v-slot:preview>
            <p>
              By default, <code>&lt;b-pagination-nav&gt;</code> renders page
              numbers (1-N) in the page link buttons. You can override this
              behaviour by supplying a function reference to the
              <code>page-gen</code> property. The function reference should
              accept a single argument which is a page number (1-N). The
              <code>page-gen</code> function should return a string.
            </p>
            <div class="overflow-auto">
              <b-pagination-nav
                :link-gen="code2.linkGen"
                :page-gen="code2.pageGen"
                :number-of-pages="code2.links.length"
              ></b-pagination-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Providing an array of pages'">
          <template v-slot:preview>
            <p>
              Rather than using <code>number-of-pages</code> to auto generate
              page links, you can pass an array of links via the pages prop.
              When the <code>pages</code> prop has an array of length 1 or
              greater, it will be used to generate the page links.
            </p>
            <b-pagination-nav
              :pages="code3.pages1"
              use-router
            ></b-pagination-nav>
            <b-pagination-nav
              :pages="code3.pages2"
              use-router
            ></b-pagination-nav>
            <b-pagination-nav
              :pages="code3.pages3"
              use-router
            ></b-pagination-nav>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Button content'">
          <template v-slot:preview>
            <p>
              <code>&lt;b-pagination-nav&gt;</code> supports several props/slots
              that allow you to customize the appearance. All
              <code>*-text</code> props are text-only and strip out HTML but you
              can use their equally named slot counterparts for that.
            </p>
            <div class="overflow-auto">
              <!-- Use text in props -->
              <b-pagination-nav
                number-of-pages="10"
                base-url="#"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
              ></b-pagination-nav>

              <!-- Use emojis in props -->
              <b-pagination-nav
                number-of-pages="10"
                base-url="#"
                first-text="⏮"
                prev-text="⏪"
                next-text="⏩"
                last-text="⏭"
                class="mt-4"
              ></b-pagination-nav>

              <!-- Use HTML and sub-components in slots -->
              <b-pagination-nav number-of-pages="10" base-url="#" class="mt-4">
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
              </b-pagination-nav>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
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
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>`,
        js:
          "export default {\n" +
          "    methods: {\n" +
          "      linkGen(pageNum) {\n" +
          "        return pageNum === 1 ? '?' : `?page=${pageNum}`\n" +
          "      }\n" +
          "    }\n" +
          "  }",
        linkGen: pageNum => {
          return pageNum === 1 ? "?" : `?page=${pageNum}`;
        }
      },

      code2: {
        html: `<div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    ></b-pagination-nav>
  </div>`,
        js: `export default {
    data() {
      return {
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen(pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen(pageNum) {
        return this.links[pageNum - 1].slice(1)
      }
    }
  }`,
        links: ["#foo", "#bar", "#baz", "#faz"],
        linkGen: pageNum => {
          return this.code2.links[pageNum - 1];
        },
        pageGen: pageNum => {
          return this.code2.links[pageNum - 1].slice(1);
        }
      },

      code3: {
        html: `<b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
  <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>`,
        js: `export default {
  data() {
    return {
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' }
      ],
      // Array of objects with router \`to\` locations
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' }
      ]
    }
  }
}`,
        // Simple array of strings
        pages1: ["?page=1-1", "?page=1-2", "?page=1-3"],
        // Array of objects with string links
        pages2: [
          { link: "?page=2-1", text: "One" },
          { link: "?page=2-2", text: "Two" },
          { link: "?page=2-3", text: "Three" }
        ],
        // Array of objects with router `to` locations
        pages3: [
          { link: { query: { page: "3-1" } }, text: "Page 1" },
          { link: { query: { page: "3-2" } }, text: "Page 2" },
          { link: { query: { page: "3-3" } }, text: "Page 3" }
        ]
      },

      code4: {
        html: `<div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination-nav>

    <!-- Use emojis in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></b-pagination-nav>

    <!-- Use HTML and sub-components in slots -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
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
    </b-pagination-nav>
  </div>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  methods: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Pagination", route: "pagination" },
      { title: "Pagination Nav" }
    ]);
  }
};
</script>
