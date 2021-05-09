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
        <b>Forms</b> When it comes to form validation, Vuetify has a multitude
        of integrations and baked in functionality.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/forms"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Validation with submit & clear'">
          <template v-slot:preview>
            <p>
              The <code>v-form</code> component has
              <strong>three</strong> functions that can be accessed by setting a
              <em>ref</em> on the component. A ref allows us to access internal
              methods on a component, for example,
              <code>&lt;v-form ref="form"&gt;</code>.
              <strong>this.$refs.form.validate()</strong> will validate all
              inputs and return if they are all valid or not.
              <strong>this.$refs.form.reset()</strong> will clear all inputs and
              reset their validation errors.
              <strong>this.$refs.form.resetValidation()</strong> will only reset
              input validation and not alter their state.
            </p>
            <v-form ref="form" v-model="code1.valid" lazy-validation>
              <v-text-field
                v-model="code1.name"
                :counter="10"
                :rules="code1.nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="code1.email"
                :rules="code1.emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-select
                v-model="code1.select"
                :items="code1.items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="code1.checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-btn
                :disabled="!code1.valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validate
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="warning" @click="resetValidation">
                Reset Validation
              </v-btn>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
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
        html: `<v-form
  ref="form"
  v-model="valid"
  lazy-validation
>
  <v-text-field
    v-model="name"
    :counter="10"
    :rules="nameRules"
    label="Name"
    required
  ></v-text-field>

  <v-text-field
    v-model="email"
    :rules="emailRules"
    label="E-mail"
    required
  ></v-text-field>

  <v-select
    v-model="select"
    :items="items"
    :rules="[v => !!v || 'Item is required']"
    label="Item"
    required
  ></v-select>

  <v-checkbox
    v-model="checkbox"
    :rules="[v => !!v || 'You must agree to continue!']"
    label="Do you agree?"
    required
  ></v-checkbox>

  <v-btn
    :disabled="!valid"
    color="success"
    class="mr-4"
    @click="validate"
  >
    Validate
  </v-btn>

  <v-btn
    color="error"
    class="mr-4"
    @click="reset"
  >
    Reset Form
  </v-btn>

  <v-btn
    color="warning"
    @click="resetValidation"
  >
    Reset Validation
  </v-btn>
</v-form>`,
        js: ` export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}`,
        valid: true,
        name: "",
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
  },

  methods: {
    // code 1
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
