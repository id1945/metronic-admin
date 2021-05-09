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
        <b>Text fields</b> Text fields components are used for collecting user
        provided information.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/text-fields"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Single line'">
          <template v-slot:preview>
            <p>
              Single line text fields do not float their label on focus or with
              data.
            </p>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Regular" single-line></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field label="Solo" single-line solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Filled"
                      single-line
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Outlined"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Character counter'">
          <template v-slot:preview>
            <p>
              Use a <code>counter</code> prop to inform a user of the character
              limit. The counter does not perform any validation by itself. You
              will need to pair it with either the internal validation system,
              or a 3rd party library. You can use it on regular, box or outlined
              text fields.
            </p>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code3.title"
                      :rules="code3.rules"
                      counter="25"
                      hint="This field uses counter prop"
                      label="Regular"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code3.description"
                      :rules="code3.rules"
                      counter
                      maxlength="25"
                      hint="This field uses maxlength attribute"
                      label="Limit exceeded"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code3.title"
                      :rules="code3.rules"
                      counter="25"
                      filled
                      label="Filled"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code3.title"
                      :rules="code3.rules"
                      counter="25"
                      label="Outlined"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Password input'">
          <template v-slot:preview>
            <p>
              A password input can be used with an appended icon and callback to
              control the visibility.
            </p>
            <v-form>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code5.password"
                      :append-icon="code5.show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[code5.rules.required, code5.rules.min]"
                      :type="code5.show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="code5.show1 = !code5.show1"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      :append-icon="code5.show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[code5.rules.required, code5.rules.min]"
                      :type="code5.show2 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Visible"
                      hint="At least 8 characters"
                      value="wqfasds"
                      class="input-group--focused"
                      @click:append="code5.show2 = !code5.show2"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      :append-icon="code5.show3 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[code5.rules.required, code5.rules.min]"
                      :type="code5.show3 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Not visible"
                      hint="At least 8 characters"
                      value="wqfasds"
                      class="input-group--focused"
                      @click:append="code5.show3 = !code5.show3"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      :append-icon="code5.show4 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[code5.rules.required, code5.rules.emailMatch]"
                      :type="code5.show4 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Error"
                      hint="At least 8 characters"
                      value="Pa"
                      error
                      @click:append="code5.show4 = !code5.show4"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Clearable'">
          <template v-slot:preview>
            <p>
              When <code>clearable</code>, you can customize the clear icon with
              <code>clear-icon</code>.
            </p>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code2.message1"
                      label="Regular"
                      clearable
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code2.message2"
                      solo
                      label="Solo"
                      clearable
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code2.message3"
                      filled
                      label="Filled"
                      clearable
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="code2.message4"
                      label="Outlined"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Auto hiding details'">
          <template v-slot:preview>
            <p>
              When <code>hide-details</code> is set to
              <code>auto</code> messages will be rendered only if there's a
              message (hint, error message, counter value etc) to display.
            </p>
            <div>
              <v-text-field
                label="Main input"
                :rules="code4.rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field label="Another input"></v-text-field>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Custom colors'">
          <template v-slot:preview>
            <p>
              You can optionally change a text field into any color in the
              Material design palette. Below is an example implementation of a
              custom form with validation.
            </p>
            <v-card flat>
              <v-snackbar
                v-model="code6.snackbar"
                absolute
                top
                right
                color="success"
              >
                <span>Registration successful!</span>
                <v-icon dark>mdi-checkbox-marked-circle</v-icon>
              </v-snackbar>
              <v-form ref="form" @submit.prevent="submit">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="code6.form.first"
                        :rules="code6.rules.name"
                        color="purple darken-2"
                        label="First name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="code6.form.last"
                        :rules="code6.rules.name"
                        color="blue darken-2"
                        label="Last name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea v-model="code6.form.bio" color="teal">
                        <template v-slot:label>
                          <div>Bio <small>(optional)</small></div>
                        </template>
                      </v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="code6.form.favoriteAnimal"
                        :items="code6.animals"
                        :rules="code6.rules.animal"
                        color="pink"
                        label="Favorite animal"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-slider
                        v-model="code6.form.age"
                        :rules="code6.rules.age"
                        color="orange"
                        label="Age"
                        hint="Be honest"
                        min="1"
                        max="100"
                        thumb-label
                      ></v-slider>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox v-model="code6.form.terms" color="green">
                        <template v-slot:label>
                          <div @click.stop="">
                            Do you accept the
                            <a
                              href="javascript:;"
                              @click.stop="code6.terms = true"
                              >terms</a
                            >
                            and
                            <a
                              href="javascript:;"
                              @click.stop="code6.conditions = true"
                              >conditions?</a
                            >
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-btn text @click="resetForm">Cancel</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="!formIsValid"
                    text
                    color="primary"
                    type="submit"
                    >Register</v-btn
                  >
                </v-card-actions>
              </v-form>
              <v-dialog v-model="code6.terms" width="70%">
                <v-card>
                  <v-card-title class="title">Terms</v-card-title>
                  <v-card-text v-for="n in 5" :key="n">
                    {{ code6.content }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="purple" @click="code6.terms = false"
                      >Ok</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="code6.conditions" width="70%">
                <v-card>
                  <v-card-title class="title">Conditions</v-card-title>
                  <v-card-text v-for="n in 5" :key="n">
                    {{ code6.content }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="purple" @click="code6.conditions = false"
                      >Ok</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
          <template v-slot:js>
            {{ code6.js }}
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

// code6
const defaultForm = Object.freeze({
  first: "",
  last: "",
  bio: "",
  favoriteAnimal: "",
  age: null,
  terms: false
});

export default {
  data() {
    return {
      code1: {
        html: `<v-form>
  <v-container>
    <v-row>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Regular"
          single-line
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Solo"
          single-line
          solo
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Filled"
          single-line
          filled
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          label="Outlined"
          single-line
          outlined
        ></v-text-field>
      </v-col>

    </v-row>
  </v-container>
</v-form>`
      },

      code2: {
        html: `<v-form>
  <v-container>
    <v-row>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="message1"
          label="Regular"
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="message2"
          solo
          label="Solo"
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="message3"
          filled
          label="Filled"
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="message4"
          label="Outlined"
          outlined
          clearable
        ></v-text-field>
      </v-col>

    </v-row>
  </v-container>
</v-form>`,
        js: `export default {
  data () {
    return {
      message1: 'Hey!',
      message2: 'Hey!',
      message3: 'Hey!',
      message4: 'Hey!',
    }
  },
}`,
        message1: "Hey!",
        message2: "Hey!",
        message3: "Hey!",
        message4: "Hey!"
      },

      code3: {
        html: `<v-form>
  <v-container>
    <v-row>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="title"
          :rules="rules"
          counter="25"
          hint="This field uses counter prop"
          label="Regular"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="description"
          :rules="rules"
          counter
          maxlength="25"
          hint="This field uses maxlength attribute"
          label="Limit exceeded"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="title"
          :rules="rules"
          counter="25"
          filled
          label="Filled"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="title"
          :rules="rules"
          counter="25"
          label="Outlined"
          outlined
        ></v-text-field>
      </v-col>

    </v-row>
  </v-container>
</v-form>`,
        js: `export default {
  data () {
    return {
      title: 'Preliminary report',
      description: 'California is a state in the western United States',
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
  },
}`,
        title: "Preliminary report",
        description: "California is a state in the western United States",
        rules: [v => v.length <= 25 || "Max 25 characters"]
      },

      code4: {
        html: `<div>
  <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
  <v-text-field label="Another input"></v-text-field>
</div>`,
        js: `export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
}`,
        rules: [
          value => !!value || "Required.",
          value => (value && value.length >= 3) || "Min 3 characters"
        ]
      },

      code5: {
        html: `<v-form>
  <v-container fluid>
    <v-row>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Normal with hint text"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          name="input-10-2"
          label="Visible"
          hint="At least 8 characters"
          value="wqfasds"
          class="input-group--focused"
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          label="Not visible"
          hint="At least 8 characters"
          value="wqfasds"
          class="input-group--focused"
          @click:append="show3 = !show3"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.emailMatch]"
          :type="show4 ? 'text' : 'password'"
          name="input-10-2"
          label="Error"
          hint="At least 8 characters"
          value="Pa"
          error
          @click:append="show4 = !show4"
        ></v-text-field>
      </v-col>

    </v-row>
  </v-container>
</v-form>`,
        js: `export default {
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\\'t match'),
      },
    }
  },
}`,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: "Password",
        rules: {
          required: value => !!value || "Required.",
          min: v => v.length >= 8 || "Min 8 characters",
          emailMatch: () => "The email and password you entered don't match"
        }
      },

      code6: {
        html: `<v-card flat>
  <v-snackbar
    v-model="snackbar"
    absolute
    top
    right
    color="success"
  >
    <span>Registration successful!</span>
    <v-icon dark>mdi-checkbox-marked-circle</v-icon>
  </v-snackbar>
  <v-form ref="form" @submit.prevent="submit">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.first"
            :rules="rules.name"
            color="purple darken-2"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.last"
            :rules="rules.name"
            color="blue darken-2"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="form.bio"
            color="teal"
          >
            <template v-slot:label>
              <div>
                Bio <small>(optional)</small>
              </div>
            </template>
          </v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="form.favoriteAnimal"
            :items="animals"
            :rules="rules.animal"
            color="pink"
            label="Favorite animal"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-slider
            v-model="form.age"
            :rules="rules.age"
            color="orange"
            label="Age"
            hint="Be honest"
            min="1"
            max="100"
            thumb-label
          ></v-slider>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="form.terms"
            color="green"
          >
            <template v-slot:label>
              <div @click.stop="">
                Do you accept the
                <a href="javascript:;" @click.stop="terms = true">terms</a>
                and
                <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
              </div>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn text @click="resetForm">Cancel</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!formIsValid"
        text
        color="primary"
        type="submit"
      >Register</v-btn>
    </v-card-actions>
  </v-form>
  <v-dialog v-model="terms" width="70%">
    <v-card>
      <v-card-title class="title">Terms</v-card-title>
      <v-card-text v-for="n in 5" :key="n">
        {{ content }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="purple"
          @click="terms = false"
        >Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="conditions" width="70%">
    <v-card>
      <v-card-title class="title">Conditions</v-card-title>
      <v-card-text v-for="n in 5" :key="n">
        {{ content }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="purple"
          @click="conditions = false"
        >Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-card>`,
        js: `export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      bio: '',
      favoriteAnimal: '',
      age: null,
      terms: false,
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [
          val => val < 10 || \`I don't believe you!\`,
        ],
        animal: [val => (val || '').length > 0 || 'This field is required'],
        name: [val => (val || '').length > 0 || 'This field is required'],
      },
      animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
      conditions: false,
      content: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.\`,
      snackbar: false,
      terms: false,
      defaultForm,
    }
  },

  computed: {
    formIsValid () {
      return (
        this.form.first &&
        this.form.last &&
        this.form.favoriteAnimal &&
        this.form.terms
      )
    },
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    },
  },
}`,
        form: Object.assign({}, defaultForm),
        rules: {
          age: [val => val < 10 || `I don't believe you!`],
          animal: [val => (val || "").length > 0 || "This field is required"],
          name: [val => (val || "").length > 0 || "This field is required"]
        },
        animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        snackbar: false,
        terms: false,
        defaultForm
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
      { title: "Text Fields" }
    ]);
  },

  computed: {
    // code6
    formIsValid() {
      return (
        this.code6.form.first &&
        this.code6.form.last &&
        this.code6.form.favoriteAnimal &&
        this.code6.form.terms
      );
    }
  },

  methods: {
    // code6
    resetForm() {
      this.code6.form = Object.assign({}, this.code6.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.code6.snackbar = true;
      this.resetForm();
    }
  }
};
</script>
