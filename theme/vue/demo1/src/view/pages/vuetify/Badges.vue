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
        <b>Badges</b> The <code>v-badge</code> component superscripts or
        subscripts an avatar-like icon or text onto content to highlight
        information to a user or to just draw attention to a specific element.
        Content within the badge usually contains numbers or icons.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/badges"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Tabs'">
          <template v-slot:preview>
            <p>
              Badges help convey information to the user in a variety of ways.
            </p>
            <v-toolbar>
              <v-tabs dark background-color="primary" grow>
                <v-tab>
                  <v-badge color="pink" dot>
                    Item One
                  </v-badge>
                </v-tab>

                <v-tab>
                  <v-badge color="green" content="6">
                    Item Two
                  </v-badge>
                </v-tab>

                <v-tab>
                  <v-badge color="deep-purple accent-4" icon="mdi-vuetify">
                    Item Three
                  </v-badge>
                </v-tab>
              </v-tabs>
            </v-toolbar>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Dynamic notifications'">
          <template v-slot:preview>
            <p>
              You can incorporate badges with dynamic content to make things
              such as a notification system.
            </p>
            <v-container>
              <v-row justify="space-around">
                <div>
                  <v-btn class="mx-1" color="primary" @click="code3.messages++">
                    Send Message
                  </v-btn>

                  <v-btn class="mx-1" color="error" @click="code3.messages = 0">
                    Clear Notifications
                  </v-btn>
                </div>

                <v-badge
                  :content="code3.messages"
                  :value="code3.messages"
                  color="green"
                  overlap
                >
                  <v-icon large>mdi-email</v-icon>
                </v-badge>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Show-on-hover'">
          <template v-slot:preview>
            <p>
              You can do many things with visibility control, for example, show
              badge on hover.
            </p>
            <div class="text-center">
              <v-badge
                :value="code2.hover"
                color="deep-purple accent-4"
                content="9999+"
                left
                transition="slide-x-transition"
              >
                <v-hover v-model="code2.hover">
                  <v-icon color="grey lighten-1" large>
                    mdi-account-circle
                  </v-icon>
                </v-hover>
              </v-badge>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Customization options'">
          <template v-slot:preview>
            <p>
              The <code>v-badge</code> component is flexible and can be used in
              a variety of use-cases over numerous elements. Options to tweak
              the location are also available through the offset-x and offset-y
              props.
            </p>
            <v-container>
              <v-row align="center" justify="center">
                <v-badge bordered color="error" icon="mdi-lock" overlap>
                  <v-btn class="white--text" color="error" depressed>
                    Lock Account
                  </v-btn>
                </v-badge>

                <div class="mx-3"></div>

                <v-badge
                  bordered
                  bottom
                  color="deep-purple accent-4"
                  dot
                  offset-x="10"
                  offset-y="10"
                >
                  <v-avatar size="40">
                    <v-img src="media/users/300_2.jpg"></v-img>
                  </v-avatar>
                </v-badge>

                <div class="mx-3"></div>

                <v-badge avatar bordered overlap>
                  <template v-slot:badge>
                    <v-avatar>
                      <v-img src="media/project-logos/7.png"></v-img>
                    </v-avatar>
                  </template>

                  <v-avatar size="40">
                    <v-img src="media/users/100_3.jpg"></v-img>
                  </v-avatar>
                </v-badge>
              </v-row>
            </v-container>
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
        html: `<v-toolbar>
  <v-tabs
    dark
    background-color="primary"
    grow
  >
    <v-tab>
      <v-badge
        color="pink"
        dot
      >
        Item One
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        color="green"
        content="6"
      >
        Item Two
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        color="deep-purple accent-4"
        icon="mdi-vuetify"
      >
        Item Three
      </v-badge>
    </v-tab>
  </v-tabs>
</v-toolbar>`
      },

      code2: {
        html: `<div class="text-center">
  <v-badge
    :value="hover"
    color="deep-purple accent-4"
    content="9999+"
    left
    transition="slide-x-transition"
  >
    <v-hover v-model="hover">
      <v-icon
        color="grey lighten-1"
        large
      >
        mdi-account-circle
      </v-icon>
    </v-hover>
  </v-badge>
</div>`,
        js: `export default {
    data: () => ({
      hover: false,
    }),
  }`,
        hover: false
      },

      code3: {
        html: ` <v-container>
  <v-row justify="space-around">
    <div>
      <v-btn
        class="mx-1"
        color="primary"
        @click="messages++"
      >
        Send Message
      </v-btn>

      <v-btn
        class="mx-1"
        color="error"
        @click="messages = 0"
      >
        Clear Notifications
      </v-btn>
    </div>

    <v-badge
      :content="messages"
      :value="messages"
      color="green"
      overlap
    >
      <v-icon large>mdi-email</v-icon>
    </v-badge>
  </v-row>
</v-container>`,
        js: `export default {
    data () {
      return {
        messages: 0
      }
    },
  }`,
        messages: 0
      },

      code4: {
        html: `<v-container>
  <v-row
    align="center"
    justify="center"
  >
    <v-badge
      bordered
      color="error"
      icon="mdi-lock"
      overlap
    >
      <v-btn
        class="white--text"
        color="error"
        depressed
      >
        Lock Account
      </v-btn>
    </v-badge>

    <div class="mx-3"></div>

    <v-badge
      bordered
      bottom
      color="deep-purple accent-4"
      dot
      offset-x="10"
      offset-y="10"
    >
      <v-avatar size="40">
        <v-img src="media/users/300_2.jpg"></v-img>
      </v-avatar>
    </v-badge>

    <div class="mx-3"></div>

    <v-badge
      avatar
      bordered
      overlap
    >
      <template v-slot:badge>
        <v-avatar>
          <v-img src="media/project-logos/7.png"></v-img>
        </v-avatar>
      </template>

      <v-avatar size="40">
        <v-img src="media/users/100_3.jpg"></v-img>
      </v-avatar>
    </v-badge>
  </v-row>
</v-container>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Badges" }
    ]);
  }
};
</script>
