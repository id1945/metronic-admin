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
        <b>Avatars</b> The v-avatar component is typically used to display
        circular user profile pictures. This component will allow you to
        dynamically size and add a border radius of responsive images, icons,
        and text. A tile variation is available for displaying an avatar without
        border radius.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/avatars"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Size'">
          <template v-slot:preview>
            <p>
              The <code>size</code> prop allows you to define the height and
              width of <code>v-avatar</code>. This prop scales both evenly with
              an aspect ratio of 1. <code>height</code> and
              <code>width</code> props will override this prop.
            </p>
            <v-row justify="space-around">
              <v-avatar color="indigo" size="36">
                <span class="white--text headline">36</span>
              </v-avatar>

              <v-avatar color="teal" size="48">
                <span class="white--text headline">48</span>
              </v-avatar>

              <v-avatar color="orange" size="62">
                <span class="white--text headline">62</span>
              </v-avatar>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Profile Card'">
          <template v-slot:preview>
            <p>
              Using the <code>tile</code> prop, we can create a sleek hard-lined
              profile card.
            </p>
            <v-card class="mx-auto" max-width="434" tile>
              <v-img height="100%" src="media/stock-600x400/img-32.jpg">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img src="media/users/300_21.jpg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                      <v-list-item-content>
                        <v-list-item-title class="title"
                          >Marcus Obrien</v-list-item-title
                        >
                        <v-list-item-subtitle
                          >Network Engineer</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Default slot'">
          <template v-slot:preview>
            <p>
              The <code>v-avatar</code> default slot will accept the
              <code>v-icon</code> component, an image, or text. Mix and match
              these with other props to create something unique.
            </p>
            <v-row justify="space-around">
              <v-avatar color="indigo">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>

              <v-avatar>
                <img src="media/users/100_4.jpg" alt="Sean" />
              </v-avatar>

              <v-avatar color="red">
                <span class="white--text headline">CJ</span>
              </v-avatar>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Advanced usage'">
          <template v-slot:preview>
            <p>
              Combining an avatar with other components allows you to build
              beautiful user interfaces right out of the box.
            </p>
            <v-container fluid>
              <v-row justify="center">
                <v-subheader>Today</v-subheader>

                <v-expansion-panels popout>
                  <v-expansion-panel
                    v-for="(message, i) in code4.messages"
                    :key="i"
                    hide-actions
                  >
                    <v-expansion-panel-header>
                      <v-row align="center" class="spacer" no-gutters>
                        <v-col cols="4" sm="2" md="1">
                          <v-avatar size="36px">
                            <img
                              v-if="message.avatar"
                              alt="Avatar"
                              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                            />
                            <v-icon
                              v-else
                              :color="message.color"
                              v-text="message.icon"
                            ></v-icon>
                          </v-avatar>
                        </v-col>

                        <v-col class="hidden-xs-only" sm="5" md="3">
                          <strong v-html="message.name"></strong>
                          <span v-if="message.total" class="grey--text">
                            &nbsp;({{ message.total }})
                          </span>
                        </v-col>

                        <v-col class="text-no-wrap" cols="5" sm="3">
                          <v-chip
                            v-if="message.new"
                            :color="`${message.color} lighten-4`"
                            class="ml-0 mr-2 black--text"
                            label
                            small
                          >
                            {{ message.new }} new
                          </v-chip>
                          <strong v-html="message.title"></strong>
                        </v-col>

                        <v-col
                          v-if="message.excerpt"
                          class="grey--text text-truncate hidden-sm-and-down"
                        >
                          &mdash;
                          {{ message.excerpt }}
                        </v-col>
                      </v-row>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <v-divider></v-divider>
                      <v-card-text v-text="code4.lorem"></v-card-text>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
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
        html: `<v-row justify="space-around">

  <v-avatar color="indigo" size="36">
    <span class="white--text headline">36</span>
  </v-avatar>

  <v-avatar color="teal" size="48">
    <span class="white--text headline">48</span>
  </v-avatar>

  <v-avatar color="orange" size="62">
    <span class="white--text headline">62</span>
  </v-avatar>

</v-row>`
      },

      code2: {
        html: `<v-row justify="space-around">

  <v-avatar color="indigo">
    <v-icon dark>mdi-account-circle</v-icon>
  </v-avatar>

  <v-avatar>
    <img
      src="media/users/100_4.jpg"
      alt="Sean"
    >
  </v-avatar>

  <v-avatar color="red">
    <span class="white--text headline">CJ</span>
  </v-avatar>

</v-row>`
      },

      code3: {
        html: `<v-card
  class="mx-auto"
  max-width="434"
  tile
>
  <v-img
    height="100%"
    src="media/stock-600x400/img-32.jpg"
  >
    <v-row
      align="end"
      class="fill-height"
    >
      <v-col
        align-self="start"
        class="pa-0"
        cols="12"
      >
        <v-avatar
          class="profile"
          color="grey"
          size="164"
          tile
        >
          <v-img src="media/users/300_21.jpg"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-0">
        <v-list-item
          color="rgba(0, 0, 0, .4)"
          dark
        >
          <v-list-item-content>
            <v-list-item-title class="title">Sarah Obrien</v-list-item-title>
            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-img>
</v-card>`
      },

      code4: {
        html: `<v-container fluid>
  <v-row justify="center">
    <v-subheader>Today</v-subheader>

    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(message, i) in messages"
        :key="i"
        hide-actions
      >
        <v-expansion-panel-header>
          <v-row
            align="center"
            class="spacer"
            no-gutters
          >
            <v-col
              cols="4"
              sm="2"
              md="1"
            >
              <v-avatar
                size="36px"
              >
                <img
                  v-if="message.avatar"
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                >
                <v-icon
                  v-else
                  :color="message.color"
                  v-text="message.icon"
                ></v-icon>
              </v-avatar>
            </v-col>

            <v-col
              class="hidden-xs-only"
              sm="5"
              md="3"
            >
              <strong v-html="message.name"></strong>
              <span
                v-if="message.total"
                class="grey--text"
              >
                &nbsp;({{ message.total }})
              </span>
            </v-col>

            <v-col
              class="text-no-wrap"
              cols="5"
              sm="3"
            >
              <v-chip
                v-if="message.new"
                :color="\`\${message.color} lighten-4\`"
                class="ml-0 mr-2 black--text"
                label
                small
              >
                {{ message.new }} new
              </v-chip>
              <strong v-html="message.title"></strong>
            </v-col>

            <v-col
              v-if="message.excerpt"
              class="grey--text text-truncate hidden-sm-and-down"
            >
              &mdash;
              {{ message.excerpt }}
            </v-col>
          </v-row>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-divider></v-divider>
          <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</v-container>`,
        js: `export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Sean Paul',
          title: 'Welcome to Vuetify.js!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'people',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'local_offer',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    }),
  }`,
        messages: [
          {
            avatar:
              "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
            name: "Sean Paul",
            title: "Welcome to Vuetify.js!",
            excerpt: "Thank you for joining our community..."
          },
          {
            color: "red",
            icon: "people",
            name: "Social",
            new: 1,
            total: 3,
            title: "Twitter"
          },
          {
            color: "teal",
            icon: "local_offer",
            name: "Promos",
            new: 2,
            total: 4,
            title: "Shop your way",
            exceprt: "New deals available, Join Today"
          }
        ],
        lorem:
          "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Avatars" }
    ]);
  }
};
</script>
