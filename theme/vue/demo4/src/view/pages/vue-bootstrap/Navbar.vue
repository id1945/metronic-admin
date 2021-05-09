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
        <b>Navbar</b> The component &lt;b-navbar&gt; is a wrapper that positions
        branding, navigation, and other elements into a concise header. It's
        easily extensible and thanks to the &lt;b-collapse&gt; component, it can
        easily integrate responsive behaviors.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/navbar"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Navbar'">
          <template v-slot:preview>
            <div>
              <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                  </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-form-input
                        size="sm"
                        class="mr-sm-2"
                        placeholder="Search"
                      ></b-form-input>
                      <b-button size="sm" class="my-2 my-sm-0" type="submit"
                        >Search</b-button
                      >
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                      <!-- Using 'button-content' slot -->
                      <template v-slot:button-content>
                        <em>User</em>
                      </template>
                      <b-dropdown-item href="#">Profile</b-dropdown-item>
                      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>&lt;b-nav-text&gt;</code>
          </template>
          <template v-slot:preview>
            <p>
              Navbars may contain bits of text with the help of
              <code>&lt;b-nav-text&gt;</code>. This component adjusts vertical
              alignment and horizontal spacing for strings of text.
            </p>
            <div>
              <b-navbar toggleable="sm" type="light" variant="light">
                <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

                <b-navbar-brand>BootstrapVue</b-navbar-brand>

                <b-collapse id="nav-text-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-text>Navbar text</b-nav-text>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>&lt;b-nav-item-dropdown&gt;</code>
          </template>
          <template v-slot:preview>
            <p>
              For <code>&lt;b-nav-item-dropdown&gt;</code> usage, see the
              <router-link to="/vue-bootstrap/dropdown"
                ><code>&lt;b-dropdown&gt;</code></router-link
              >
              docs. Note split dropdowns are not supported in
              <code>&lt;b-navbar&gt;</code> and
              <code>&lt;b-navbar-nav&gt;</code>.
            </p>
            <div>
              <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                  <b-nav-item href="#">Home</b-nav-item>

                  <!-- Navbar dropdowns -->
                  <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item-dropdown text="User" right>
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>
              </b-navbar>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview>
          <template v-slot:title>
            <code>&lt;b-nav-form&gt;</code>
          </template>
          <template v-slot:preview>
            <p>
              Use <code>&lt;b-nav-form&gt;</code> to place inline form controls
              into your navbar.
            </p>
            <div>
              <b-navbar type="light" variant="light">
                <b-nav-form>
                  <b-form-input
                    class="mr-sm-2"
                    placeholder="Search"
                  ></b-form-input>
                  <b-button
                    variant="outline-success"
                    class="my-2 my-sm-0"
                    type="submit"
                    >Search</b-button
                  >
                </b-nav-form>
              </b-navbar>
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
        html: `<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>`
      },

      code2: {
        html: `<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>`
      },

      code3: {
        html: `<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>`
      },

      code4: {
        html: `<div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</div>`
      },

      code5: {
        html: `<div>
  <b-nav tabs justified>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link with a long name </b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Nav", route: "nav" },
      { title: "Navbar" }
    ]);
  }
};
</script>
