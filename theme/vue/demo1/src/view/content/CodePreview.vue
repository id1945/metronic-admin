<template>
  <KTCard ref="preview" v-bind:title="title" v-bind:example="true">
    <template v-slot:title v-if="hasTitleSlot">
      <h3 class="card-title">
        <slot name="title"></slot>
      </h3>
    </template>
    <template v-slot:toolbar>
      <div class="example-tools justify-content-center">
        <span
          class="example-toggle"
          data-toggle="tooltip"
          v-b-tooltip.hover.top="'View code'"
        />
        <span
          class="example-copy"
          data-toggle="tooltip"
          v-b-tooltip.hover.top="'Copy code'"
        />
      </div>
    </template>
    <template v-slot:body>
      <!--begin::Code example-->
      <div class="example-code mb-5">
        <ul
          class="example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x"
          role="tablist"
          v-if="!hasGeneralCode && !hasSingleCodeType"
        >
          <li class="nav-item" v-if="hasHtmlCode">
            <a
              class="nav-link active"
              v-on:click="setActiveTab"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="true"
            >
              HTML
            </a>
          </li>
          <li class="nav-item" v-if="hasJsCode">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="1"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="false"
            >
              &nbsp;JS&nbsp;
            </a>
          </li>
          <li class="nav-item" v-if="hasScssCode">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="2"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="false"
            >
              SCSS
            </a>
          </li>
        </ul>
        <div v-if="hasGeneralCode">
          <slot name="code"></slot>
        </div>

        <div v-if="!hasGeneralCode && !hasSingleCodeType">
          <b-tabs class="hide-tabs" content-class="mt-3" v-model="tabIndex">
            <b-tab active class="example-highlight">
              <highlight-code lang="html" class="language-html">
                <slot name="html"></slot>
              </highlight-code>
            </b-tab>
            <b-tab class="example-highlight">
              <highlight-code lang="js" class="language-js">
                <slot name="js"></slot>
              </highlight-code>
            </b-tab>
            <b-tab class="example-highlight">
              <highlight-code lang="scss" class="language-scss">
                <slot name="scss"></slot>
              </highlight-code>
            </b-tab>
          </b-tabs>
        </div>

        <div v-if="hasSingleCodeType" class="example-highlight">
          <highlight-code lang="html" class="language-html" v-if="hasHtmlCode">
            <slot name="html"></slot>
          </highlight-code>
          <highlight-code lang="js" class="language-js" v-if="hasJsCode">
            <slot name="js"></slot>
          </highlight-code>
          <highlight-code lang="scss" class="language-scss" v-if="hasScssCode">
            <slot name="scss"></slot>
          </highlight-code>
        </div>
      </div>
      <!--end::Code example-->

      <slot name="preview"></slot>
    </template>
  </KTCard>
</template>

<script>
import KTCard from "@/view/content/Card.vue";
import KTLayoutExamples from "@/assets/js/layout/extended/examples.js";

export default {
  name: "KTCodePreview",
  props: {
    title: String
  },
  data() {
    return {
      tabIndex: 0,
      isOpen: false
    };
  },
  components: {
    KTCard
  },
  mounted() {
    // init example codes
    this.$nextTick(() => {
      KTLayoutExamples.init([this.$el]);
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.add(`language-${hl.classList[1]}`);
        hl.classList.remove("hljs");
      });
    });
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll('[data-toggle="tab"]');
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));
    }
  },
  computed: {
    /**
     * Check if has title
     * @returns {boolean}
     */
    hasTitleSlot() {
      return !!this.$slots["title"];
    },

    /**
     * Check if code only has one, exclude the tabs
     * @returns {boolean}
     */
    hasSingleCodeType() {
      let exist = 0;
      ["html", "js", "scss"].forEach(type => {
        if (this.$slots.hasOwnProperty(type)) {
          exist++;
        }
      });
      return exist === 1;
    },

    /**
     * Custom generate codes
     * @returns {boolean}
     */
    hasGeneralCode() {
      return !!this.$slots["code"];
    },

    /**
     * Check if has JS code slot
     * @returns {boolean}
     */
    hasJsCode() {
      return !!this.$slots["js"];
    },

    /**
     * Check if has SCSS code slot
     * @returns {boolean}
     */
    hasScssCode() {
      return !!this.$slots["scss"];
    },

    /**
     * Check if has HTML code slot
     * @returns {boolean}
     */
    hasHtmlCode() {
      return !!this.$slots["html"];
    }
  }
};
</script>
