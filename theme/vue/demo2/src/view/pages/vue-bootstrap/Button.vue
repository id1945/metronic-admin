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
        <b>Buttons</b> Use Bootstrap's custom b-button component for actions in
        forms, dialogs, and more. Includes support for a handful of contextual
        variations, sizes, states, and more.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/button"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Buttons'">
          <template v-slot:preview>
            <div>
              <b-button class="mr-3">Button</b-button>
              <b-button class="mr-3" variant="danger">Button</b-button>
              <b-button class="mr-3" variant="success">Button</b-button>
              <b-button class="mr-3" variant="outline-primary">Button</b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Element type'">
          <template v-slot:preview>
            <div>
              <b-button class="mr-3">I am a Button</b-button>
              <b-button class="mr-3" href="#">I am a Link</b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Sizing'">
          <template v-slot:preview>
            <p>
              Fancy larger or smaller buttons? Specify <code>lg</code> or
              <code>sm</code> via the <code>size</code> prop.
            </p>
            <b-row>
              <b-col lg="4" class="pb-2">
                <b-button size="sm">Small Button</b-button>
              </b-col>
              <b-col lg="4" class="pb-2">
                <b-button>Default Button</b-button>
              </b-col>
              <b-col lg="4" class="pb-2">
                <b-button size="lg">Large Button</b-button>
              </b-col>
            </b-row>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Pill style'">
          <template v-slot:preview>
            <p>
              Prefer buttons with a more rounded-pill style? Just set the prop
              <code>pill</code> to true.
            </p>
            <div>
              <b-button class="mr-3" pill>Button</b-button>
              <b-button class="mr-3" pill variant="primary">Button</b-button>
              <b-button class="mr-3" pill variant="outline-secondary">
                Button
              </b-button>
              <b-button class="mr-3" pill variant="success">Button</b-button>
              <b-button class="mr-3" pill variant="outline-danger">
                Button
              </b-button>
              <b-button class="mr-3" pill variant="info">Button</b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ html4 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Squared style'">
          <template v-slot:preview>
            <p>
              Prefer buttons with a more square corner style? Just set the prop
              <code>squared</code> to true.
            </p>
            <div>
              <b-button class="mr-3" squared>Button</b-button>
              <b-button class="mr-3" squared variant="primary">Button</b-button>
              <b-button class="mr-3" squared variant="outline-secondary"
                >Button</b-button
              >
              <b-button class="mr-3" squared variant="success">Button</b-button>
              <b-button class="mr-3" squared variant="outline-danger"
                >Button</b-button
              >
              <b-button class="mr-3" squared variant="info">Button</b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ html5 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Pressed state and toggling'">
          <template v-slot:preview>
            <p>
              Buttons will appear pressed (with a darker background, darker
              border, and inset shadow) when the prop <code>pressed</code> is
              set to true.
            </p>
            <div>
              <h5>Pressed and un-pressed state</h5>
              <b-button class="mr-3" :pressed="true" variant="success"
                >Always Pressed</b-button
              >
              <b-button class="mr-3" :pressed="false" variant="success"
                >Not Pressed</b-button
              >

              <h5 class="mt-3">Toggleable Button</h5>
              <b-button class="mr-3" :pressed.sync="myToggle" variant="primary"
                >Toggle Me</b-button
              >
              <p class="mt-3">
                Pressed State: <strong>{{ myToggle }}</strong>
              </p>

              <h5>In a button group</h5>
              <b-button-group size="sm">
                <b-button
                  class="mr-3"
                  v-for="(btn, idx) in buttons"
                  :key="idx"
                  :pressed.sync="btn.state"
                  variant="primary"
                >
                  {{ btn.caption }}
                </b-button>
              </b-button-group>
              <p class="mt-3">
                Pressed States: <strong>{{ btnStates }}</strong>
              </p>
            </div>
          </template>
          <template v-slot:html>
            {{ html6 }}
          </template>
          <template v-slot:js>
            {{ js6 }}
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
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
</div>`,

      html2: `<div>
    <b-button>I am a Button</b-button>
    <b-button href="#">I am a Link</b-button>
</div>`,

      html3: `<b-row>
    <b-col lg="4" class="pb-2">
        <b-button size="sm">Small Button</b-button>
    </b-col>
    <b-col lg="4" class="pb-2">
        <b-button>Default Button</b-button>
    </b-col>
    <b-col lg="4" class="pb-2">
        <b-button size="lg">Large Button</b-button>
    </b-col>
</b-row>`,

      html4: `<div>
    <b-button pill>Button</b-button>
    <b-button pill variant="primary">Button</b-button>
    <b-button pill variant="outline-secondary">Button</b-button>
    <b-button pill variant="success">Button</b-button>
    <b-button pill variant="outline-danger">Button</b-button>
    <b-button pill variant="info">Button</b-button>
</div>`,

      html5: `<div>
    <b-button squared>Button</b-button>
    <b-button squared variant="primary">Button</b-button>
    <b-button squared variant="outline-secondary">Button</b-button>
    <b-button squared variant="success">Button</b-button>
    <b-button squared variant="outline-danger">Button</b-button>
    <b-button squared variant="info">Button</b-button>
</div>`,

      html6: `<div>
    <h5>Pressed and un-pressed state</h5>
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>

    <h5 class="mt-3">Toggleable Button</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p>Pressed State: <strong>{{ myToggle }}</strong></p>

    <h5>In a button group</h5>
    <b-button-group size="sm">
        <b-button
                v-for="(btn, idx) in buttons"
                :key="idx"
                :pressed.sync="btn.state"
                variant="primary"
        >
            {{ btn.caption }}
        </b-button>
    </b-button-group>
    <p>Pressed States: <strong>{{ btnStates }}</strong></p>
</div>`,
      js6: `export default {
    data() {
      return {
        myToggle: false,
        buttons: [
          { caption: 'Toggle 1', state: true },
          { caption: 'Toggle 2', state: false },
          { caption: 'Toggle 3', state: true },
          { caption: 'Toggle 4', state: false }
        ]
      }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
  }`,
      myToggle: false,
      buttons: [
        { caption: "Toggle 1", state: true },
        { caption: "Toggle 2", state: false },
        { caption: "Toggle 3", state: true },
        { caption: "Toggle 4", state: false }
      ]
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Buttons" }
    ]);
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state);
    }
  }
};
</script>
