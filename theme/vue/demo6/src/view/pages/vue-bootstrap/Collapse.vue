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
        <b>Collapse</b> Easily toggle visibility of almost any content on your
        pages. Includes support for making accordions.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/collapse"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Collapse'">
          <template v-slot:preview>
            <div>
              <b-button v-b-toggle.collapse-1 variant="primary"
                >Toggle Collapse</b-button
              >
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <p class="card-text">Collapse contents Here</p>
                  <b-button v-b-toggle.collapse-1-inner size="sm"
                    >Toggle Inner Collapse</b-button
                  >
                  <b-collapse id="collapse-1-inner" class="mt-2">
                    <b-card>Hello!</b-card>
                  </b-collapse>
                </b-card>
              </b-collapse>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Trigger multiple collapse elements'">
          <template v-slot:preview>
            <p>
              You can even collapse multiple
              <code>&lt;b-collapse&gt;</code> components via a single
              <code>v-b-toggle</code> by providing multiple target IDs using
              modifiers:
            </p>
            <div>
              <!-- Single button triggers two "<b-collapse>" components -->
              <b-button v-b-toggle.collapse-a.collapse-b>
                Toggle Both Collapse A and B
              </b-button>

              <!-- Elements to collapse -->
              <b-collapse id="collapse-a" class="mt-2">
                <b-card>I am collapsible content A!</b-card>
              </b-collapse>
              <b-collapse id="collapse-b" class="mt-2">
                <b-card>I am collapsible content B!</b-card>
              </b-collapse>
            </div>
          </template>
          <template v-slot:html>
            {{ html4 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Accordion support'">
          <template v-slot:preview>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-1 variant="info"
                    >Accordion 1</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text
                      >I start opened because <code>visible</code> is
                      <code>true</code></b-card-text
                    >
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-2 variant="info"
                    >Accordion 2</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.accordion-3 variant="info"
                    >Accordion 3</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Usage'">
          <template v-slot:preview>
            <p>
              Other elements can easily toggle
              <code>&lt;b-collapse&gt;</code> components using the
              <code></code> directive.
            </p>
            <div>
              <!-- Using modifiers -->
              <b-button v-b-toggle.collapse-2 class="m-1"
                >Toggle Collapse</b-button
              >

              <!-- Using value -->
              <b-button v-b-toggle="'collapse-2'" class="m-1"
                >Toggle Collapse</b-button
              >

              <!-- Element to collapse -->
              <b-collapse id="collapse-2">
                <b-card>I am collapsible content!</b-card>
              </b-collapse>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Initial visibility'">
          <template v-slot:preview>
            <p>
              To make the <code>&lt;b-collapse&gt;</code> show initially, set
              the <code>&lt;b-collapse&gt; visible</code> prop:<br /><br />
            </p>
            <div>
              <b-button v-b-toggle.collapse-3 class="m-1"
                >Toggle Collapse</b-button
              >
              <b-collapse visible id="collapse-3">
                <b-card>I should start open!</b-card>
              </b-collapse>
            </div>
          </template>
          <template v-slot:html>
            {{ html3 }}
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
      html1: `<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>`,

      html2: `<div>
  <!-- Using modifiers -->
  <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>

  <!-- Using value -->
  <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>

  <!-- Element to collapse -->
  <b-collapse id="collapse-2">
    <b-card>I am collapsible content!</b-card>
  </b-collapse>
</div>`,

      html3: `<div>
  <b-button v-b-toggle.collapse-3 class="m-1">Toggle Collapse</b-button>
  <b-collapse visible id="collapse-3">
    <b-card>I should start open!</b-card>
  </b-collapse>
</div>`,

      html4: `<div>
  <!-- Single button triggers two "<b-collapse>" components -->
  <b-button v-b-toggle.collapse-a.collapse-b>Toggle Both Collapse A and B</b-button>

  <!-- Elements to collapse -->
  <b-collapse id="collapse-a" class="mt-2">
    <b-card>I am collapsible content A!</b-card>
  </b-collapse>
  <b-collapse id="collapse-b" class="mt-2">
    <b-card>I am collapsible content B!</b-card>
  </b-collapse>
</div>`,

      html5: `<div role="tablist">
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
    </b-card-header>
    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        <b-card-text>{{ text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
    </b-card-header>
    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
    </b-card-header>
    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>`,

      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Collapse" }
    ]);
  }
};
</script>
