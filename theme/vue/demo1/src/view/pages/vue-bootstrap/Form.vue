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
        <b>Form</b> BootstrapVue form component and helper components that
        optionally support inline form styles and validation states. Pair them
        up with other BootstrapVue form control components for an easy
        customized, and responsive, layout with a consistent look and feel.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Introduction to forms and controls'">
          <template v-slot:preview>
            <p>
              Be sure to use an appropriate <code>type</code> on all inputs
              (e.g., email for email address or number for numerical
              information) to take advantage of newer input controls like
              <code>email</code> verification, <code>number</code> selection,
              and more.
            </p>
            <div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Food:"
                  label-for="input-3"
                >
                  <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                  ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-4">
                  <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                  >
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">
                      Check that out
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button class="ml-2" type="reset" variant="danger">
                  Reset
                </b-button>
              </b-form>
              <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ html1 }}
          </template>
          <template v-slot:js>
            {{ js1 }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Inline form'">
          <template v-slot:preview>
            <p>
              Use the <code>inline</code> prop on <code>&lt;b-form&gt;</code> to
              display a series of labels, form controls, and buttons on a single
              horizontal row. Form controls within inline forms vary slightly
              from their default states.
            </p>
            <div>
              <b-form inline>
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Jane Doe"
                ></b-input>

                <label class="sr-only" for="inline-form-input-username"
                  >Username</label
                >
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input
                    id="inline-form-input-username"
                    placeholder="Username"
                  ></b-input>
                </b-input-group>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                  >Remember me
                </b-form-checkbox>

                <b-button variant="primary">Save</b-button>
              </b-form>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html2 }}
            </highlight-code>
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom form controls and selects'">
          <template v-slot:preview>
            <div>
              <b-form inline>
                <label class="mr-sm-2" for="inline-form-custom-select-pref">
                  Preference
                </label>
                <b-form-select
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :value="null"
                  :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                  id="inline-form-custom-select-pref"
                >
                  <template v-slot:first>
                    <option :value="null">Choose...</option>
                  </template>
                </b-form-select>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
                  Remember my preference
                </b-form-checkbox>

                <b-button variant="primary">Save</b-button>
              </b-form>
            </div>
          </template>
          <template v-slot:code>
            <highlight-code lang="html">
              {{ html3 }}
            </highlight-code>
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
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>`,
      js1: `
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }`,
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,

      html2: `<div>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></b-input>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Username"></b-input>
    </b-input-group>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

    <b-button variant="primary">Save</b-button>
  </b-form>
</div>`,

      html3: `<div>
  <b-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref">Preference</label>
    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
      id="inline-form-custom-select-pref"
    >
      <template v-slot:first>
        <option :value="null">Choose...</option>
      </template>
    </b-form-select>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>

    <b-button variant="primary">Save</b-button>
  </b-form>
</div>`
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Form" }
    ]);
  }
};
</script>
