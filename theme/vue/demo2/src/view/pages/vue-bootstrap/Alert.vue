<template>
  <div>
    <!--begin::Notice-->
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
        <b>Alerts</b> Provide contextual feedback messages for typical user
        actions with the handful of available and flexible alert messages.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/alert"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>
    <!--end::Notice-->

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Alerts'">
          <template v-slot:preview>
            <p>
              Alerts are available for any length of text, as well as an
              optional dismiss button (and optional auto-dismissing).
            </p>
            <div>
              <b-alert show>Default Alert</b-alert>

              <b-alert variant="success" show>Success Alert</b-alert>

              <b-alert
                v-model="code1.showDismissibleAlert"
                variant="danger"
                dismissible
              >
                Dismissible Alert!
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-alert>

              <b-alert
                :show="code1.dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="code1.dismissCountDown = 0"
                @dismiss-count-down="countDownChanged1"
              >
                <p>
                  This alert will dismiss after
                  {{ code1.dismissCountDown }} seconds...
                </p>
                <b-progress
                  variant="success"
                  :max="code1.dismissSecs"
                  :value="code1.dismissCountDown"
                  height="4px"
                ></b-progress>
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-alert>

              <b-button @click="showAlert1" variant="info" class="m-1">
                Show alert with count-down timer
              </b-button>
              <b-button
                @click="code1.showDismissibleAlert = true"
                variant="info"
                class="m-1"
              >
                Show dismissible alert ({{
                  code1.showDismissibleAlert ? "visible" : "hidden"
                }})
              </b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fading alerts'">
          <template v-slot:preview>
            <p>
              Use the <code>fade</code> prop to enable animation. By default
              alerts are not animated.
            </p>
            <div>
              <b-alert show dismissible fade>
                Dismissible Alert!
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-alert>

              <b-alert
                variant="danger"
                dismissible
                fade
                :show="code2.showDismissibleAlert"
                @dismissed="code2.showDismissibleAlert = false"
              >
                Dismissible Alert!
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-alert>

              <b-alert
                :show="code2.dismissCountDown"
                dismissible
                fade
                variant="warning"
                @dismiss-count-down="countDownChanged2"
              >
                This alert will dismiss after
                {{ code2.dismissCountDown }} seconds...
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-alert>

              <b-button @click="showAlert2" variant="info" class="m-1">
                Show alert with count-down timer
              </b-button>
              <b-button
                @click="code2.showDismissibleAlert = true"
                variant="info"
                class="m-1"
              >
                Show dismissible alert ({{
                  code2.showDismissibleAlert ? "visible" : "hidden"
                }})
                <template v-slot:dismiss>
                  <div class="alert-close">
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </div>
                </template>
              </b-button>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Contextual variants'">
          <template v-slot:preview>
            <p>
              For proper styling of &lt;b-alert&gt;, use one of the four
              required contextual variants by setting the variant prop to one of
              the following: <code>info</code>, <code>success</code>,
              <code>warning</code> or <code>danger</code>. The default is
              <code>info</code>.
            </p>
            <div>
              <b-alert show variant="primary">Primary Alert</b-alert>
              <b-alert show variant="secondary">Secondary Alert</b-alert>
              <b-alert show variant="success">Success Alert</b-alert>
              <b-alert show variant="danger">Danger Alert</b-alert>
              <b-alert show variant="warning">Warning Alert</b-alert>
              <b-alert show variant="info">Info Alert</b-alert>
              <b-alert show variant="light">Light Alert</b-alert>
              <b-alert show variant="dark">Dark Alert</b-alert>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
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
    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>`,
        js: `export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }`,
        showDismissibleAlert: false,
        dismissSecs: 10,
        dismissCountDown: 0
      },

      code2: {
        html: `<div>
    <b-alert show dismissible fade>Dismissible Alert!</b-alert>

    <b-alert
      variant="danger"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false"
    >
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>`,
        showDismissibleAlert: false,
        dismissSecs: 10,
        dismissCountDown: 0
      },

      code3: {
        html: `<div>
  <b-alert show variant="primary">Primary Alert</b-alert>
  <b-alert show variant="secondary">Secondary Alert</b-alert>
  <b-alert show variant="success">Success Alert</b-alert>
  <b-alert show variant="danger">Danger Alert</b-alert>
  <b-alert show variant="warning">Warning Alert</b-alert>
  <b-alert show variant="info">Info Alert</b-alert>
  <b-alert show variant="light">Light Alert</b-alert>
  <b-alert show variant="dark">Dark Alert</b-alert>
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
      { title: "Alert" }
    ]);
  },
  methods: {
    countDownChanged1(dismissCountDown) {
      this.code1.dismissCountDown = dismissCountDown;
    },
    countDownChanged2(dismissCountDown) {
      this.code2.dismissCountDown = dismissCountDown;
    },
    showAlert1() {
      this.code1.dismissCountDown = this.code1.dismissSecs;
    },
    showAlert2() {
      this.code2.dismissCountDown = this.code2.dismissSecs;
    }
  }
};
</script>
