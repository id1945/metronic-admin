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
        <b>Selection controls</b> Selection control components allow a user to
        select options. These components <strong>must</strong> be used with the
        <code>v-model</code> prop as they do not maintain their own state.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/selection-controls"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Checkboxes - Boolean'">
          <template v-slot:preview>
            <v-container fluid>
              <v-checkbox
                v-model="code1.checkbox1"
                :label="`Checkbox 1: ${code1.checkbox1.toString()}`"
              ></v-checkbox>
              <v-checkbox
                v-model="code1.checkbox2"
                :label="`Checkbox 2: ${code1.checkbox2.toString()}`"
              ></v-checkbox>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Radios - Default'">
          <template v-slot:preview>
            <v-container fluid>
              <p>{{ code3.radios || "null" }}</p>
              <v-radio-group v-model="code3.radios" :mandatory="false">
                <v-radio label="Radio 1" value="radio-1"></v-radio>
                <v-radio label="Radio 2" value="radio-2"></v-radio>
              </v-radio-group>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Radios - Colors'">
          <template v-slot:preview>
            <p>
              Radios can be colored by using any of the builtin colors and
              contextual names using the <code>color</code> prop.
            </p>
            <v-card flat>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-radio-group v-model="code5.ex7" column>
                        <v-radio label="red" color="red" value="red"></v-radio>
                        <v-radio
                          label="red darken-3"
                          color="red darken-3"
                          value="red darken-3"
                        ></v-radio>
                        <v-radio
                          label="indigo"
                          color="indigo"
                          value="indigo"
                        ></v-radio>
                        <v-radio
                          label="indigo darken-3"
                          color="indigo darken-3"
                          value="indigo darken-3"
                        ></v-radio>
                        <v-radio
                          label="orange"
                          color="orange"
                          value="orange"
                        ></v-radio>
                        <v-radio
                          label="orange darken-3"
                          color="orange darken-3"
                          value="orange darken-3"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-radio-group v-model="code5.ex8" column>
                        <v-radio
                          label="primary"
                          color="primary"
                          value="primary"
                        ></v-radio>
                        <v-radio
                          label="secondary"
                          color="secondary"
                          value="secondary"
                        ></v-radio>
                        <v-radio
                          label="success"
                          color="success"
                          value="success"
                        ></v-radio>
                        <v-radio
                          label="info"
                          color="info"
                          value="info"
                        ></v-radio>
                        <v-radio
                          label="warning"
                          color="warning"
                          value="warning"
                        ></v-radio>
                        <v-radio
                          label="error"
                          color="error"
                          value="error"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Switches - Colors'">
          <template v-slot:preview>
            <p>
              Switches can be colored by using any of the builtin colors and
              contextual names using the <code>color</code> prop.
            </p>
            <v-card flat>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="red"
                        color="red"
                        value="red"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="red darken-3"
                        color="red darken-3"
                        value="red darken-3"
                        hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="indigo"
                        color="indigo"
                        value="indigo"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="indigo darken-3"
                        color="indigo darken-3"
                        value="indigo darken-3"
                        hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="orange"
                        color="orange"
                        value="orange"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="orange darken-3"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-switch>
                    </v-col>
                  </v-row>

                  <v-row class="mt-12">
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="primary"
                        color="primary"
                        value="primary"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="secondary"
                        color="secondary"
                        value="secondary"
                        hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="success"
                        color="success"
                        value="success"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="info"
                        color="info"
                        value="info"
                        hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                      <v-switch
                        v-model="code8.ex11"
                        label="warning"
                        color="warning"
                        value="warning"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="code8.ex11"
                        label="error"
                        color="error"
                        value="error"
                        hide-details
                      ></v-switch>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code8.html }}
          </template>
          <template v-slot:js>
            {{ code8.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Checkboxes - Array'">
          <template v-slot:preview>
            <v-container fluid>
              <p>{{ code2.selected }}</p>
              <v-checkbox
                v-model="code2.selected"
                label="John"
                value="John"
              ></v-checkbox>
              <v-checkbox
                v-model="code2.selected"
                label="Jacob"
                value="Jacob"
              ></v-checkbox>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Switches - Boolean'">
          <template v-slot:preview>
            <v-container fluid>
              <v-switch
                v-model="code4.switch1"
                :label="`Switch 1: ${code4.switch1.toString()}`"
              ></v-switch>
              <v-switch
                v-model="code4.switch2"
                :label="`Switch 2: ${code4.switch2.toString()}`"
              ></v-switch>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Switches - States'">
          <template v-slot:preview>
            <v-container fluid>
              <v-row class="dark--text">
                <v-col cols="6">on</v-col>
                <v-col cols="6">off</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-switch value input-value="true"></v-switch>
                </v-col>
                <v-col cols="6">
                  <v-switch></v-switch>
                </v-col>
              </v-row>
              <v-row class="dark--text">
                <v-col cols="6">on disabled</v-col>
                <v-col cols="6">off disabled</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-switch value input-value="true" disabled></v-switch>
                </v-col>
                <v-col cols="6">
                  <v-switch disabled></v-switch>
                </v-col>
              </v-row>
              <v-row class="dark--text">
                <v-col cols="6">on loading</v-col>
                <v-col cols="6">off loading</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-switch
                    loading="warning"
                    value
                    input-value="true"
                  ></v-switch>
                </v-col>
                <v-col cols="6">
                  <v-switch loading="warning"></v-switch>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Label slot'">
          <template v-slot:preview>
            <p>
              Selection controls' labels can be defined in
              <code>label</code> slot - that will allow to use HTML content
            </p>
            <v-container fluid>
              <v-checkbox v-model="code7.checkbox">
                <template v-slot:label>
                  <div>
                    I agree that
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="http://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Vuetify
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                    is awesome
                  </div>
                </template>
              </v-checkbox>

              <v-radio-group v-model="code7.radios">
                <template v-slot:label>
                  <div>Your favourite <strong>search engine</strong></div>
                </template>
                <v-radio value="Google">
                  <template v-slot:label>
                    <div>
                      Of course it's
                      <strong class="success--text">Google</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                  <template v-slot:label>
                    <div>
                      Definitely
                      <strong class="primary--text">Duckduckgo</strong>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>

              <v-switch v-model="code7.switchMe">
                <template v-slot:label>
                  Turn on the progress:
                  <v-progress-circular
                    :indeterminate="code7.switchMe"
                    :value="0"
                    size="24"
                    class="ml-2"
                  ></v-progress-circular>
                </template>
              </v-switch>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
          <template v-slot:js>
            {{ code7.js }}
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
        html: `<v-container fluid>
  <v-checkbox v-model="code1.checkbox1" :label="\`Checkbox 1: \${code1.checkbox1.toString()}\`"></v-checkbox>
  <v-checkbox v-model="code1.checkbox2" :label="\`Checkbox 2: \${code1.checkbox2.toString()}\`"></v-checkbox>
</v-container>`,
        js: `export default {
    data () {
      return {
        checkbox1: true,
        checkbox2: false,
      }
    },
  }`,
        checkbox1: true,
        checkbox2: false
      },

      code2: {
        html: `<v-container fluid>
  <p>{{ selected }}</p>
  <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
  <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
</v-container>`,
        js: `export default {
  data () {
    return {
      selected: ['John'],
    }
  },
}`,
        selected: ["John"]
      },

      code3: {
        html: `<v-container fluid>
  <p>{{ radios || 'null' }}</p>
  <v-radio-group v-model="radios" :mandatory="false">
    <v-radio label="Radio 1" value="radio-1"></v-radio>
    <v-radio label="Radio 2" value="radio-2"></v-radio>
  </v-radio-group>
</v-container>`,
        js: `export default {
    data () {
      return {
        radios: 'radio-1',
      }
    },
  }`,
        radios: "radio-1"
      },

      code4: {
        html: `<v-container fluid>
  <v-switch v-model="switch1" :label="\`Switch 1: \${switch1.toString()}\`"></v-switch>
  <v-switch v-model="switch2" :label="\`Switch 2: \${switch2.toString()}\`"></v-switch>
</v-container>`,
        js: `export default {
  data () {
    return {
      switch1: true,
      switch2: false,
    }
  },
}`,
        switch1: true,
        switch2: false
      },

      code5: {
        html: `<v-card flat>
  <v-card-text>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-radio-group v-model="ex7" column>
            <v-radio
              label="red"
              color="red"
              value="red"
            ></v-radio>
            <v-radio
              label="red darken-3"
              color="red darken-3"
              value="red darken-3"
            ></v-radio>
            <v-radio
              label="indigo"
              color="indigo"
              value="indigo"
            ></v-radio>
            <v-radio
              label="indigo darken-3"
              color="indigo darken-3"
              value="indigo darken-3"
            ></v-radio>
            <v-radio
              label="orange"
              color="orange"
              value="orange"
            ></v-radio>
            <v-radio
              label="orange darken-3"
              color="orange darken-3"
              value="orange darken-3"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-radio-group v-model="ex8" column>
            <v-radio
              label="primary"
              color="primary"
              value="primary"
            ></v-radio>
            <v-radio
              label="secondary"
              color="secondary"
              value="secondary"
            ></v-radio>
            <v-radio
              label="success"
              color="success"
              value="success"
            ></v-radio>
            <v-radio
              label="info"
              color="info"
              value="info"
            ></v-radio>
            <v-radio
              label="warning"
              color="warning"
              value="warning"
            ></v-radio>
            <v-radio
              label="error"
              color="error"
              value="error"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>`,
        js: `export default {
  data () {
    return {
      ex7: 'red',
      ex8: 'primary',
    }
  },
}`
      },

      code6: {
        html: `<v-container fluid>
  <v-row class="dark--text">
    <v-col cols="6">on</v-col>
    <v-col cols="6">off</v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-switch value input-value="true"></v-switch>
    </v-col>
    <v-col cols="6">
      <v-switch></v-switch>
    </v-col>
  </v-row>
  <v-row class="dark--text">
    <v-col cols="6">on disabled</v-col>
    <v-col cols="6">off disabled</v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-switch value input-value="true" disabled></v-switch>
    </v-col>
    <v-col cols="6">
      <v-switch disabled></v-switch>
    </v-col>
  </v-row>
  <v-row class="dark--text">
    <v-col cols="6">on loading</v-col>
    <v-col cols="6">off loading</v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-switch loading="warning" value input-value="true"></v-switch>
    </v-col>
    <v-col cols="6">
      <v-switch loading="warning"></v-switch>
    </v-col>
  </v-row>
</v-container>`
      },

      code7: {
        html: `<v-container fluid>
  <v-checkbox v-model="checkbox">
    <template v-slot:label>
      <div>
        I agree that
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <a
              target="_blank"
              href="http://vuetifyjs.com"
              @click.stop
              v-on="on"
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </template>
  </v-checkbox>

  <v-radio-group v-model="radios">
    <template v-slot:label>
      <div>Your favourite <strong>search engine</strong></div>
    </template>
    <v-radio value="Google">
      <template v-slot:label>
        <div>Of course it's <strong class="success--text">Google</strong></div>
      </template>
    </v-radio>
    <v-radio value="Duckduckgo">
      <template v-slot:label>
        <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
      </template>
    </v-radio>
  </v-radio-group>

  <v-switch v-model="switchMe">
    <template v-slot:label>
      Turn on the progress: <v-progress-circular :indeterminate="switchMe" :value="0" size="24" class="ml-2"></v-progress-circular>
    </template>
  </v-switch>
</v-container>`,
        js: `export default {
  data () {
    return {
      checkbox: false,
      radios: 'Duckduckgo',
      switchMe: false,
    }
  },
}`,
        checkbox: false,
        radios: "Duckduckgo",
        switchMe: false
      },

      code8: {
        html: `<v-card flat>
  <v-card-text>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="red darken-3"
            color="red darken-3"
            value="red darken-3"
            hide-details
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="indigo"
            color="indigo"
            value="indigo"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="indigo darken-3"
            color="indigo darken-3"
            value="indigo darken-3"
            hide-details
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="orange"
            color="orange"
            value="orange"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="orange darken-3"
            color="orange darken-3"
            value="orange darken-3"
            hide-details
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="primary"
            color="primary"
            value="primary"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="secondary"
            color="secondary"
            value="secondary"
            hide-details
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="success"
            color="success"
            value="success"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="info"
            color="info"
            value="info"
            hide-details
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-switch
            v-model="ex11"
            label="warning"
            color="warning"
            value="warning"
            hide-details
          ></v-switch>
          <v-switch
            v-model="ex11"
            label="error"
            color="error"
            value="error"
            hide-details
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</v-card>`,
        js: `export default {
  data () {
    return {
      ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
    }
  },
}`,
        ex11: [
          "red",
          "indigo",
          "orange",
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "error",
          "red darken-3",
          "indigo darken-3",
          "orange darken-3"
        ]
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
      { title: "Selection Controls" }
    ]);
  }
};
</script>
