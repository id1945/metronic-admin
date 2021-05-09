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
        <b>Form group</b> The &lt;b-form-group&gt; component is the easiest way
        to add some structure to forms. Its purpose is to pair form controls
        with a legend or label, and to provide help text and invalid/valid
        feedback text, as well as visual (color) contextual state feedback.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-group"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Form group'">
          <template v-slot:preview>
            <div>
              <b-form-group
                id="fieldset-1"
                description="Let us know your name."
                label="Enter your name"
                label-for="input-1"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                :state="state"
              >
                <b-form-input
                  id="input-1"
                  v-model="name"
                  :state="state"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
          <template v-slot:js>
            {{ js1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Horizontal layout'">
          <template v-slot:preview>
            <p>
              By default, the label appears above the input element(s), but you
              may optionally render horizontal (label to the left of the input)
              at the various standard Bootstrap breakpoints.
            </p>
            <div>
              <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                description="Let us know your name."
                label="Enter your name"
                label-for="input-horizontal"
              >
                <b-form-input id="input-horizontal"></b-form-input>
              </b-form-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html2 }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Label size'">
          <template v-slot:preview>
            <p>
              You can control the label text size match the size of your form
              input(s) via the optional <code>label-size</code> prop. Values can
              be '<code>sm</code>' or '<code>lg</code>' for small or large
              label, respectively. Sizes work for both horizontal and
              non-horizontal form groups.
            </p>
            <div>
              <b-form-group
                label-cols="4"
                label-cols-lg="2"
                label-size="sm"
                label="Small"
                label-for="input-sm"
              >
                <b-form-input id="input-sm" size="sm"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols="4"
                label-cols-lg="2"
                label="Default"
                label-for="input-default"
              >
                <b-form-input id="input-default"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols="4"
                label-cols-lg="2"
                label-size="lg"
                label="Large"
                label-for="input-lg"
              >
                <b-form-input id="input-lg" size="lg"></b-form-input>
              </b-form-group>
            </div>
          </template>
          <template v-slot:html>
            {{ html3 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Nested form groups'">
          <template v-slot:preview>
            <p>
              Feel free to nest <code>&lt;b-form-group&gt;</code> components to
              produce advanced form layouts and semantic grouping of related
              form controls:
            </p>
            <div>
              <b-card bg-variant="light">
                <b-form-group
                  label-cols-lg="3"
                  label="Shipping Address"
                  label-size="lg"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                  <b-form-group
                    label-cols-sm="3"
                    label="Street:"
                    label-align-sm="right"
                    label-for="nested-street"
                  >
                    <b-form-input id="nested-street"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="City:"
                    label-align-sm="right"
                    label-for="nested-city"
                  >
                    <b-form-input id="nested-city"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="State:"
                    label-align-sm="right"
                    label-for="nested-state"
                  >
                    <b-form-input id="nested-state"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="Country:"
                    label-align-sm="right"
                    label-for="nested-country"
                  >
                    <b-form-input id="nested-country"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="3"
                    label="Ship via:"
                    label-align-sm="right"
                    class="mb-0"
                  >
                    <b-form-radio-group
                      class="pt-2"
                      :options="['Air', 'Courier', 'Mail']"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-form-group>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ html4 }}
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
    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
  </div>`,
      js1: `export default {
    computed: {
      state() {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback() {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }`,
      name: "",

      html2: `<div>
    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-horizontal"
    >
      <b-form-input id="input-horizontal"></b-form-input>
    </b-form-group>
  </div>`,

      html3: `<div>
  <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label="Small" label-for="input-sm">
    <b-form-input id="input-sm" size="sm"></b-form-input>
  </b-form-group>

  <b-form-group label-cols="4" label-cols-lg="2" label="Default" label-for="input-default">
    <b-form-input id="input-default"></b-form-input>
  </b-form-group>

  <b-form-group label-cols="4" label-cols-lg="2" label-size="lg" label="Large" label-for="input-lg">
    <b-form-input id="input-lg" size="lg"></b-form-input>
  </b-form-group>
</div>`,

      html4: `<div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Street:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="City:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="State:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Country:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Ship via:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 4) {
        return "";
      } else if (this.name.length > 0) {
        return "Enter at least 4 characters";
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return this.state === true ? "Thank you" : "";
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form Group" }
    ]);
  }
};
</script>
