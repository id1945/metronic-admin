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
        <b>Tabs</b> Create a widget of tabbable panes of local content. The tabs
        component is built upon navs and cards internally, and provides full
        keyboard navigation control of the tabs.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/tabs"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Basic usage'">
          <template v-slot:preview>
            <div>
              <b-tabs content-class="mt-3">
                <b-tab title="First" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                <b-tab title="Disabled" disabled
                  ><p>I'm a disabled tab!</p></b-tab
                >
              </b-tabs>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Pills variant'">
          <template v-slot:preview>
            <p>
              Tabs use the <code>tabs</code> styling by default. Just add
              <code>pills</code> property to <code>&lt;b-tabs&gt;</code> for the
              pill style variant.
            </p>
            <div>
              <b-card no-body>
                <b-tabs pills card>
                  <b-tab title="Tab 1" active
                    ><b-card-text>Tab Contents 1</b-card-text></b-tab
                  >
                  <b-tab title="Tab 2"
                    ><b-card-text>Tab Contents 2</b-card-text></b-tab
                  >
                </b-tabs>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fill'">
          <template v-slot:preview>
            <p>
              To proportionately fill all available space with your tab
              controls, set the <code>fill</code> prop. Notice that all
              horizontal space is occupied, but not every control has the same
              width.
            </p>
            <div>
              <b-tabs content-class="mt-3" fill>
                <b-tab title="First" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                <b-tab title="Very, very long title"
                  ><p>I'm the tab with the very, very long title</p></b-tab
                >
                <b-tab title="Disabled" disabled
                  ><p>I'm a disabled tab!</p></b-tab
                >
              </b-tabs>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Justified'">
          <template v-slot:preview>
            <p>
              For equal-width controls, use the <code>justified</code> prop
              instead. All horizontal space will be occupied by the controls,
              but unlike using <code>fill</code> above, every control will be
              the same width.
            </p>
            <div>
              <b-tabs content-class="mt-3" justified>
                <b-tab title="First" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                <b-tab title="Very, very long title"
                  ><p>I'm the tab with the very, very long title</p></b-tab
                >
                <b-tab title="Disabled" disabled
                  ><p>I'm a disabled tab!</p></b-tab
                >
              </b-tabs>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Vertical tabs'">
          <template v-slot:preview>
            <p>
              Have the tab controls placed on the lefthand side by setting the
              <code>vertical</code> prop to <code>true</code>. Vertical tabs
              work with or without <code>card</code> mode enabled.
            </p>
            <div>
              <b-card no-body>
                <b-tabs pills card vertical>
                  <b-tab title="Tab 1" active
                    ><b-card-text>Tab Contents 1</b-card-text></b-tab
                  >
                  <b-tab title="Tab 2"
                    ><b-card-text>Tab Contents 2</b-card-text></b-tab
                  >
                  <b-tab title="Tab 3"
                    ><b-card-text>Tab Contents 3</b-card-text></b-tab
                  >
                </b-tabs>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Add custom content to tab title'">
          <template v-slot:preview>
            <p>
              If you want to add custom content to tab title, like HTML code,
              icons, or another non-interactive Vue component, this possible by
              using <code>title</code> slot of <code>&lt;b-tab&gt;</code>
            </p>
            <div>
              <b-tabs>
                <b-tab active>
                  <template v-slot:title>
                    <b-spinner type="grow" small></b-spinner> I'm <i>Custom</i>
                    <strong>Title</strong>
                  </template>
                  <p class="p-3">Tab Contents 1</p>
                </b-tab>

                <b-tab>
                  <template v-slot:title>
                    <b-spinner type="border" small></b-spinner> Tab 2
                  </template>
                  <p class="p-3">Tab Contents 2</p>
                </b-tab>
              </b-tabs>
            </div>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Cards integration'">
          <template v-slot:preview>
            <p>
              Tabs support integrating with Bootstrap cards. Just add the card
              property to <code>&lt;b-tabs&gt;</code> and place it inside a
              <code>&lt;b-card&gt;</code> component. Note that you should add
              the <code>no-body</code> prop on the
              <code>&lt;b-card&gt;</code> component in order to properly
              decorate the card header and remove the extra padding introduced
              by <code>card-body</code>.
            </p>
            <div>
              <b-card no-body>
                <b-tabs card>
                  <b-tab no-body title="Picture 1">
                    <b-card-img
                      bottom
                      src="https://picsum.photos/600/200/?image=21"
                    ></b-card-img>
                    <b-card-footer>Picture 1 footer</b-card-footer>
                  </b-tab>

                  <b-tab no-body title="Picture 2">
                    <b-card-img
                      bottom
                      src="https://picsum.photos/600/200/?image=25"
                    ></b-card-img>
                    <b-card-footer>Picture 2 footer</b-card-footer>
                  </b-tab>

                  <b-tab no-body title="Picture 3">
                    <b-card-img
                      bottom
                      src="https://picsum.photos/600/200/?image=26"
                    ></b-card-img>
                    <b-card-footer>Picture 3 footer</b-card-footer>
                  </b-tab>

                  <b-tab title="Text">
                    <b-card-title>
                      This tab does not have the <code>no-body</code> prop set
                    </b-card-title>
                    <b-card-text>
                      Quis magna Lorem anim amet ipsum do mollit sit cillum
                      voluptate ex nulla tempor. Laborum consequat non elit enim
                      exercitation cillum aliqua consequat id aliqua. Esse ex
                      consectetur mollit voluptate est in duis laboris ad sit
                      ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                      Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                      esse irure.
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
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
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>`
      },

      code2: {
        html: `<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Picture 1">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=21"></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>

      <b-tab no-body title="Picture 2">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=25"></b-card-img>
        <b-card-footer>Picture 2 footer</b-card-footer>
      </b-tab>

      <b-tab no-body title="Picture 3">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=26"></b-card-img>
        <b-card-footer>Picture 3 footer</b-card-footer>
      </b-tab>

      <b-tab title="Text">
        <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
        <b-card-text>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
          esse irure.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>`
      },

      code3: {
        html: `<div>
  <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Tab 1" active><b-card-text>Tab Contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab Contents 2</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>`
      },

      code4: {
        html: `<div>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>`
      },

      code5: {
        html: `<div>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>`
      },

      code6: {
        html: `<div>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active><b-card-text>Tab Contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab Contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab Contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>`
      },

      code7: {
        html: `<div>
  <b-tabs>
    <b-tab active>
      <template v-slot:title>
        <b-spinner type="grow" small></b-spinner> I'm <i>Custom</i> <strong>Title</strong>
      </template>
      <p class="p-3">Tab Contents 1</p>
    </b-tab>

    <b-tab>
      <template v-slot:title>
        <b-spinner type="border" small></b-spinner> Tab 2
      </template>
      <p class="p-3">Tab Contents 2</p>
    </b-tab>
  </b-tabs>
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
      { title: "" }
    ]);
  }
};
</script>
