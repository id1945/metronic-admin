<template>
  <div>
    <!--begin::Notice-->
    <div
      class="alert alert-custom alert-white alert-shadow gutter-b"
      role="alert"
    >
      <div class="alert-icon alert-icon-top">
        <span class="svg-icon svg-icon-3x svg-icon-primary mt-4">
          <!--begin::Svg Icon-->
          <inline-svg src="media/svg/icons/Tools/Tools.svg" />
          <!--end::Svg Icon-->
        </span>
      </div>
      <div class="alert-text">
        <p>
          The layout builder helps to configure the layout with preferred
          options and preview it in real time. The configured layout options
          will be saved until you change or reset them. To use the layout
          builder choose the layout options and click the
          <code>Preview</code> button to preview the changes.
        </p>
        <p>
          <span
            class="label label-inline label-pill label-info label-rounded mr-2"
          >
            INFO:
          </span>
          Some pages from the <code>html</code> version might not exist in the
          <code>vue</code>. But the CSS styles from <code>html</code> version
          already integrated into the <code>vue</code>. All the components from
          the <code>html</code> version are static and non-working components.
          You can copy the component HTML from the <code>html</code> version,
          and paste it in the <code>vue</code> component to get the same style.
          The actual functionality and implementation need to be done by the
          customer because every application has its own business requirements.
        </p>
      </div>
    </div>
    <!--end::Notice-->

    <div class="card card-custom gutter-b">
      <div class="card-header card-header-tabs-line">
        <ul
          class="nav nav-dark nav-bold nav-tabs nav-tabs-line"
          role="tablist"
          ref="builder-tab"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              v-on:click="setActiveTab"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Page
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="1"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Header
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="2"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Subheader
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="3"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Content
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="4"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Aside
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="5"
              data-toggle="tab"
              href="#"
              role="tab"
            >
              Footer
            </a>
          </li>
        </ul>
      </div>

      <!--begin::Form-->
      <form class="form" v-on:submit="submit($event)">
        <div class="card-body">
          <b-tabs class="hide-tabs" v-model="tabIndex">
            <b-tab active>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Page Loader:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <select class="form-control" v-model="config.loader.type">
                    <option value="false">
                      Disabled
                    </option>
                    <option value="spinner-logo" selected="selected">
                      Spinner &amp; Logo
                    </option>
                  </select>
                  <div class="form-text text-muted">
                    Select page loading indicator.
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Desktop Fixed Header:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.self.fixed.desktop"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Enable fixed header for desktop mode
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Mobile Fixed Header:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.header.self.fixed.mobile"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">
                    Enable fixed header for mobile mode
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">
                  Header Width:
                </label>
                <div class="col-lg-9 col-xl-4">
                  <select
                    class="form-control"
                    v-model="config.header.self.width"
                  >
                    <option value="fluid" selected="">Fluid</option>
                    <option value="fixed">Fixed</option>
                  </select>
                  <div class="form-text text-muted">
                    Select header width type.
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">Width:</label>
                <div class="col-lg-9 col-xl-4">
                  <select class="form-control" v-model="config.content.width">
                    <option value="fluid">Fluid</option>
                    <option value="fixed" selected="">Fixed</option>
                  </select>
                  <div class="form-text text-muted">
                    Select layout width type.
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">Display:</label>
                <div class="col-lg-9 col-xl-4">
                  <span class="switch switch-icon">
                    <label>
                      <input
                        type="checkbox"
                        v-model="config.aside.self.display"
                        value="true"
                        checked=""
                      />
                      <span></span>
                    </label>
                  </span>
                  <div class="form-text text-muted">Display aside</div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label">Width:</label>
                <div class="col-lg-9 col-xl-4">
                  <select class="form-control" v-model="config.footer.width">
                    <option value="fluid" selected="">Fluid</option>
                    <option value="fixed">Fixed</option>
                  </select>
                  <div class="form-text text-muted">
                    Select layout width type.
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>

        <div class="card-footer">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-9">
              <button type="submit" class="btn btn-primary font-weight-bold">
                <i class="la la-eye"></i>
                Preview
              </button>
              &nbsp;
              <button
                v-on:click="reset($event)"
                class="btn btn-clean font-weight-bold"
              >
                <i class="la la-recycle"></i>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
      <!--end::Form-->
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label">Generated Config</h3>
        </div>
      </div>
      <div class="card-body">
        <!--begin::Example-->
        <div class="example mb-10">
          <p>
            Use for layout config in
            <code>/src/core/config/layout.config.json</code>
          </p>
          <div class="example-code">
            <div class="example-code">
              <span
                class="example-copy"
                v-b-tooltip.hover.top="'Copy code'"
              ></span>
              <div class="example-highlight">
                <highlight-code lang="json" class="language-json">
                  {{ config }}
                </highlight-code>
              </div>
            </div>
          </div>
        </div>
        <!--end::Example-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "builder",
  components: {},
  data() {
    return {
      tabIndex: 0
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  mounted() {
    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Layout Builder" }]);

    this.$nextTick(() => {
      const hljs = this.$el.querySelectorAll(".hljs");
      hljs.forEach(hl => {
        hl.classList.remove("hljs");
        hl.classList.add(`language-${hl.classList[1]}`);
      });
    });
  },
  destroyed() {
    localStorage.removeItem("builderTab");
  },
  methods: {
    /**
     * Reset config
     */
    reset(event) {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    setActivePreviousTab() {
      this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
      const links = this.$refs["builder-tab"].querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.$refs["builder-tab"]
        .querySelector(`[data-tab="${this.tabIndex}"]`)
        .classList.add("active");
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");

      // keep active tab
      localStorage.setItem("builderTab", this.tabIndex);
    },

    /**
     * Submit form
     * @param event
     */
    submit(event) {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    }
  }
};
</script>
