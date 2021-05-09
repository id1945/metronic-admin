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
        <b>Timelines</b> The <code>v-timeline</code> is useful for stylistically
        displaying chronological information.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/timelines"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Small dots'">
          <template v-slot:preview>
            <p>
              The <code>small</code> prop allows alternate styles to provide a
              unique design.
            </p>
            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="purple lighten-2" fill-dot right>
                <v-card>
                  <v-card-title class="purple lighten-2">
                    <v-icon dark size="42" class="mr-4">
                      mdi-magnify
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Title 1
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire
                        principes at. Est et nobis iisque percipit.
                      </v-col>
                      <v-col class="hidden-sm-and-down text-right" md="2">
                        <v-icon size="64">mdi-calendar-text</v-icon>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="amber lighten-1" fill-dot left small>
                <v-card>
                  <v-card-title class="amber lighten-1 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Title 2
                    </h2>
                    <v-icon dark size="42">mdi-home-outline</v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8">
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire
                        principes at. Est et nobis iisque percipit.
                      </v-col>
                      <v-col cols="12" md="4">
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="cyan lighten-1" fill-dot right>
                <v-card>
                  <v-card-title class="cyan lighten-1">
                    <v-icon class="mr-4" dark size="42">
                      mdi-email-outline
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Title 3
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col v-for="n in 3" :key="n" cols="12" md="4">
                        Lorem ipsum dolor sit amet, no nam oblique veritus no
                        nam oblique.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="red lighten-1" fill-dot left small>
                <v-card>
                  <v-card-title class="red lighten-1 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                      Title 4
                    </h2>
                    <v-icon dark size="42">
                      mdi-account-multiple-outline
                    </v-icon>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col class="hidden-sm-and-down" md="2">
                        <v-icon size="64">mdi-server-network</v-icon>
                      </v-col>
                      <v-col cols="12" md="10">
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire
                        principes at. Est et nobis iisque percipit, an vim zril
                        disputando voluptatibus.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>

              <v-timeline-item color="green lighten-1" fill-dot right>
                <v-card>
                  <v-card-title class="green lighten-1">
                    <v-icon class="mr-4" dark size="42">
                      mdi-phone-in-talk
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                      Title 5
                    </h2>
                  </v-card-title>
                  <v-container>
                    <v-row>
                      <v-col>
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire
                        principes at. Est et nobis iisque percipit, an vim zril
                        disputando voluptatibus, vix an salutandi sententiae.
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Icon dots'">
          <template v-slot:preview>
            <p>
              Conditionally use icons within the <code>v-timeline-item</code>'s
              dot to provide additional context.
            </p>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item
                v-for="(item, i) in code2.items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card :color="item.color" dark>
                  <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                  <v-card-text class="white text--primary">
                    <p>
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                      Commune scaevola imperdiet nec ut, sed euismod convenire
                      principes at. Est et nobis iisque percipit, an vim zril
                      disputando voluptatibus, vix an salutandi sententiae.
                    </p>
                    <v-btn :color="item.color" class="mx-0" outlined>
                      Button
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Avatar dots'">
          <template v-slot:preview>
            <p>
              Insert avatars into dots with use of the <code>icon</code> slot
              and <code>v-avatar</code>.
            </p>
            <v-timeline>
              <v-timeline-item v-for="n in 4" :key="n" large>
                <template v-slot:icon>
                  <v-avatar>
                    <img src="http://i.pravatar.cc/64" />
                  </v-avatar>
                </template>
                <template v-slot:opposite>
                  <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2">
                  <v-card-title class="headline">Lorem ipsum</v-card-title>
                  <v-card-text
                    >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.</v-card-text
                  >
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Advanced'">
          <template v-slot:preview>
            <p>
              Modular components allow you to create highly customized solutions
              that just work.
            </p>
            <v-container style="max-width: 600px;">
              <v-timeline dense clipped>
                <v-timeline-item
                  fill-dot
                  class="white--text mb-12"
                  color="orange"
                  large
                >
                  <template v-slot:icon>
                    <span>JL</span>
                  </template>
                  <v-text-field
                    v-model="input"
                    hide-details
                    flat
                    label="Leave a comment..."
                    solo
                    @keydown.enter="comment"
                  >
                    <template v-slot:append>
                      <v-btn class="mx-0" depressed @click="comment">
                        Post
                      </v-btn>
                    </template>
                  </v-text-field>
                </v-timeline-item>

                <v-slide-x-transition group>
                  <v-timeline-item
                    v-for="event in timeline"
                    :key="event.id"
                    class="mb-4"
                    color="pink"
                    small
                  >
                    <v-row justify="space-between">
                      <v-col cols="7" v-text="event.text"></v-col>
                      <v-col
                        class="text-right"
                        cols="5"
                        v-text="event.time"
                      ></v-col>
                    </v-row>
                  </v-timeline-item>
                </v-slide-x-transition>

                <v-timeline-item class="mb-6" hide-dot>
                  <span>TODAY</span>
                </v-timeline-item>

                <v-timeline-item
                  class="mb-4"
                  color="grey"
                  icon-color="grey lighten-2"
                  small
                >
                  <v-row justify="space-between">
                    <v-col cols="7">This order was archived.</v-col>
                    <v-col class="text-right" cols="5">15:26 EDT</v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item class="mb-4" small>
                  <v-row justify="space-between">
                    <v-col cols="7">
                      <v-chip
                        class="white--text ml-0"
                        color="purple"
                        label
                        small
                      >
                        APP
                      </v-chip>
                      Digital Downloads fulfilled 1 item.
                    </v-col>
                    <v-col class="text-right" cols="5">15:25 EDT</v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item class="mb-4" color="grey" small>
                  <v-row justify="space-between">
                    <v-col cols="7">
                      Order confirmation email was sent to Sean Paul
                      (support@keenthemes.com).
                    </v-col>
                    <v-col class="text-right" cols="5">15:25 EDT</v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item class="mb-4" hide-dot>
                  <v-btn class="mx-0" color="white">
                    Resend Email
                  </v-btn>
                </v-timeline-item>

                <v-timeline-item class="mb-4" color="grey" small>
                  <v-row justify="space-between">
                    <v-col cols="7">
                      A $15.00 USD payment was processed on PayPal Express
                      Checkout
                    </v-col>
                    <v-col class="text-right" cols="5">15:25 EDT</v-col>
                  </v-row>
                </v-timeline-item>

                <v-timeline-item color="grey" small>
                  <v-row justify="space-between">
                    <v-col cols="7">
                      Sean Paul placed this order on Online Store (checkout
                      #1937432132572).
                    </v-col>
                    <v-col class="text-right" cols="5">15:25 EDT</v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-container>
          </template>
          <template v-slot:html>
            {{ code6.html }}
          </template>
          <template v-slot:js>
            {{ code6.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="row">
        <div class="col-md-6">
          <KTCodePreview v-bind:title="'Colored dots'">
            <template v-slot:preview>
              <p>
                Colored dots create visual breakpoints that make your timelines
                easier to read.
              </p>
              <v-card class="mx-auto" max-width="400">
                <v-card dark flat>
                  <v-btn absolute bottom color="pink" right fab>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <v-card-title class="pa-2 purple lighten-3">
                    <v-btn icon>
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <h3 class="title font-weight-light text-center grow">
                      Timeline
                    </h3>
                    <v-avatar>
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-avatar>
                  </v-card-title>
                  <v-img
                    src="media/stock-600x600/img-10.jpg"
                    gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                  >
                    <v-container class="fill-height">
                      <v-row align="center">
                        <strong class="display-4 font-weight-regular mr-6">
                          8
                        </strong>
                        <v-row justify="end">
                          <div class="headline font-weight-light">Monday</div>
                          <div class="text-uppercase font-weight-light">
                            February 2015
                          </div>
                        </v-row>
                      </v-row>
                    </v-container>
                  </v-img>
                </v-card>
                <v-card-text class="py-0">
                  <v-timeline align-top dense>
                    <v-timeline-item color="pink" small>
                      <v-row class="pt-1">
                        <v-col cols="3">
                          <strong>5pm</strong>
                        </v-col>
                        <v-col>
                          <strong>New Icon</strong>
                          <div class="caption">Mobile App</div>
                        </v-col>
                      </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                      <v-row class="pt-1">
                        <v-col cols="3">
                          <strong>3-4pm</strong>
                        </v-col>
                        <v-col>
                          <strong>Design Stand Up</strong>
                          <div class="caption mb-2">Hangouts</div>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                            ></v-img>
                          </v-avatar>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                            ></v-img>
                          </v-avatar>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="pink" small>
                      <v-row class="pt-1">
                        <v-col cols="3">
                          <strong>12pm</strong>
                        </v-col>
                        <v-col>
                          <strong>Lunch break</strong>
                        </v-col>
                      </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                      <v-row class="pt-1">
                        <v-col cols="3">
                          <strong>9-11am</strong>
                        </v-col>
                        <v-col>
                          <strong>Finish Home Screen</strong>
                          <div class="caption">Web App</div>
                        </v-col>
                      </v-row>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </template>
            <template v-slot:html>
              {{ code4.html }}
            </template>
          </KTCodePreview>
        </div>

        <div class="col-md-6">
          <KTCodePreview v-bind:title="'Dense alert'">
            <template v-slot:preview>
              <p>
                <code>dense</code> timelines position all content to the right.
                In this example, <code>v-alert</code> replaces the card to
                provide a different design.
              </p>
              <v-card max-width="600">
                <v-card-title class="blue-grey white--text">
                  <span class="title">Logs</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    :outlined="interval == null"
                    :color="interval == null ? 'white' : 'primary'"
                    dark
                    depressed
                    @click="interval == null ? start() : stop()"
                  >
                    Realtime Logging
                  </v-btn>
                </v-card-title>
                <v-card-text class="py-0">
                  <v-timeline dense>
                    <v-slide-x-reverse-transition group hide-on-leave>
                      <v-timeline-item
                        v-for="item in items"
                        :key="item.id"
                        :color="item.color"
                        small
                        fill-dot
                      >
                        <v-alert
                          :value="true"
                          :color="item.color"
                          :icon="item.icon"
                          class="white--text"
                        >
                          Lorem ipsum dolor sit amet, no nam oblique veritus.
                          Commune scaevola imperdiet nec ut, sed euismod
                          convenire principes at. Est et nobis iisque percipit,
                          an vim zril disputando voluptatibus, vix an salutandi
                          sententiae.
                        </v-alert>
                      </v-timeline-item>
                    </v-slide-x-reverse-transition>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </template>
            <template v-slot:html>
              {{ code3.html }}
            </template>
            <template v-slot:js>
              {{ code3.js }}
            </template>
          </KTCodePreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

const COLORS = ["info", "warning", "error", "success"];
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};

export default {
  data() {
    return {
      code1: {
        html: `<v-timeline :dense="$vuetify.breakpoint.smAndDown">
  <v-timeline-item
    color="purple lighten-2"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="purple lighten-2">
        <v-icon
          dark
          size="42"
          class="mr-4"
        >
          mdi-magnify
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">Title 1</h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="10">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
          </v-col>
          <v-col
            class="hidden-sm-and-down text-right"
            md="2"
          >
            <v-icon size="64">mdi-calendar-text</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="amber lighten-1"
    fill-dot
    left
    small
  >
    <v-card>
      <v-card-title class="amber lighten-1 justify-end">
        <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
        <v-icon
          dark
          size="42"
        >mdi-home-outline</v-icon>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
          </v-col>
          <v-col cols="12" md="4">
            Lorem ipsum dolor sit amet, no nam oblique veritus.
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="cyan lighten-1"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="cyan lighten-1">
        <v-icon
          class="mr-4"
          dark
          size="42"
        >
          mdi-email-outline
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">Title 3</h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            md="4"
          >
            Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="red lighten-1"
    fill-dot
    left
    small
  >
    <v-card>
      <v-card-title class="red lighten-1 justify-end">
        <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
        <v-icon
          dark
          size="42"
        >
          mdi-account-multiple-outline
        </v-icon>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col class="hidden-sm-and-down" md="2">
            <v-icon size="64">mdi-server-network</v-icon>
          </v-col>
          <v-col cols="12" md="10">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="green lighten-1"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="green lighten-1">
        <v-icon
          class="mr-4"
          dark
          size="42"
        >
          mdi-phone-in-talk
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">Title 5</h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
</v-timeline>`
      },

      code2: {
        html: `<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
  <v-timeline-item
    v-for="(item, i) in items"
    :key="i"
    :color="item.color"
    :icon="item.icon"
    fill-dot
  >
    <v-card
      :color="item.color"
      dark
    >
      <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
      <v-card-text class="white text--primary">
        <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
        <v-btn
          :color="item.color"
          class="mx-0"
          outlined
        >
          Button
        </v-btn>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</v-timeline>`,
        js: `export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),
}`,
        items: [
          {
            color: "red lighten-2",
            icon: "mdi-star"
          },
          {
            color: "purple darken-1",
            icon: "mdi-book-variant"
          },
          {
            color: "green lighten-1",
            icon: "mdi-airballoon"
          },
          {
            color: "indigo",
            icon: "mdi-buffer"
          }
        ]
      },

      code3: {
        html: `<v-card
  class="mx-auto"
  max-width="600"
>
  <v-card-title
    class="blue-grey white--text"
  >
    <span class="title">Logs</span>
    <v-spacer></v-spacer>
    <v-btn
      :outlined="interval == null"
      :color="interval == null ? 'white' : 'primary'"
      dark
      depressed
      @click="interval == null ? start() : stop()"
    >
      Realtime Logging
    </v-btn>
  </v-card-title>
  <v-card-text class="py-0">
    <v-timeline dense>
      <v-slide-x-reverse-transition
        group
        hide-on-leave
      >
        <v-timeline-item
          v-for="item in items"
          :key="item.id"
          :color="item.color"
          small
          fill-dot
        >
          <v-alert
            :value="true"
            :color="item.color"
            :icon="item.icon"
            class="white--text"
          >
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-alert>
        </v-timeline-item>
      </v-slide-x-reverse-transition>
    </v-timeline>
  </v-card-text>
</v-card>`,
        js: `const COLORS = [
  'info',
  'warning',
  'error',
  'success',
]
const ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle',
}

export default {
  data: () => ({
    interval: null,
    items: [
      {
        id: 1,
        color: 'info',
        icon: ICONS['info'],
      },
    ],
    nonce: 2,
  }),

  beforeDestroy () {
    this.stop()
  },

  methods: {
    addEvent () {
      let { color, icon } = this.genAlert()

      const previousColor = this.items[0].color

      while (previousColor === color) {
        color = this.genColor()
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon,
      })

      if (this.nonce > 6) {
        this.items.pop()
      }
    },
    genAlert () {
      const color = this.genColor()

      return {
        color,
        icon: this.genIcon(color),
      }
    },
    genColor () {
      return COLORS[Math.floor(Math.random() * 3)]
    },
    genIcon (color) {
      return ICONS[color]
    },
    start () {
      this.interval = setInterval(this.addEvent, 3000)
    },
    stop () {
      clearInterval(this.interval)
      this.interval = null
    },
  },
}`
      },
      interval: null,
      items: [
        {
          id: 1,
          color: "info",
          icon: ICONS["info"]
        }
      ],
      nonce: 2,

      code4: {
        html: `<v-card
  class="mx-auto"
  max-width="400"
>
  <v-card
    dark
    flat
  >
    <v-btn
      absolute
      bottom
      color="pink"
      right
      fab
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-card-title class="pa-2 purple lighten-3">
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <h3 class="title font-weight-light text-center grow">Timeline</h3>
      <v-avatar>
        <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
      </v-avatar>
    </v-card-title>
    <v-img
      src="media/stock-600x600/img-10.jpg"
      gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
    >
      <v-container class="fill-height">
        <v-row align="center">
          <strong class="display-4 font-weight-regular mr-6">8</strong>
          <v-row justify="end">
            <div class="headline font-weight-light">Monday</div>
            <div class="text-uppercase font-weight-light">February 2015</div>
          </v-row>
        </v-row>
      </v-container>
    </v-img>
  </v-card>
  <v-card-text class="py-0">
    <v-timeline
      align-top
      dense
    >
      <v-timeline-item
        color="pink"
        small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>5pm</strong>
          </v-col>
          <v-col>
            <strong>New Icon</strong>
            <div class="caption">Mobile App</div>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="teal lighten-3"
        small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>3-4pm</strong>
          </v-col>
          <v-col>
            <strong>Design Stand Up</strong>
            <div class="caption mb-2">Hangouts</div>
            <v-avatar>
              <v-img
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
              ></v-img>
            </v-avatar>
            <v-avatar>

              <v-img
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
              ></v-img>
            </v-avatar>
            <v-avatar>
              <v-img
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="pink"
        small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>12pm</strong>
          </v-col>
          <v-col>
            <strong>Lunch break</strong>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="teal lighten-3"
        small
      >
        <v-row class="pt-1">
          <v-col cols="3">
            <strong>9-11am</strong>
          </v-col>
          <v-col>
            <strong>Finish Home Screen</strong>
            <div class="caption">Web App</div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-card-text>
</v-card>`
      },

      code5: {
        html: `<v-timeline>
<v-timeline-item
v-for="n in 4"
:key="n"
large
>
<template v-slot:icon>
  <v-avatar>
    <img src="http://i.pravatar.cc/64">
  </v-avatar>
</template>
<template v-slot:opposite>
  <span>Tus eu perfecto</span>
</template>
<v-card class="elevation-2">
  <v-card-title class="headline">Lorem ipsum</v-card-title>
  <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
</v-card>
</v-timeline-item>
</v-timeline>`
      },

      code6: {
        html: `<v-container style="max-width: 600px;">
  <v-timeline dense clipped>
    <v-timeline-item
      fill-dot
      class="white--text mb-12"
      color="orange"
      large
    >
      <template v-slot:icon>
        <span>JL</span>
      </template>
      <v-text-field
        v-model="input"
        hide-details
        flat
        label="Leave a comment..."
        solo
        @keydown.enter="comment"
      >
        <template v-slot:append>
          <v-btn
            class="mx-0"
            depressed
            @click="comment"
          >
            Post
          </v-btn>
        </template>
      </v-text-field>
    </v-timeline-item>

    <v-slide-x-transition
      group
    >
      <v-timeline-item
        v-for="event in timeline"
        :key="event.id"
        class="mb-4"
        color="pink"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7" v-text="event.text"></v-col>
          <v-col class="text-right" cols="5" v-text="event.time"></v-col>
        </v-row>
      </v-timeline-item>
    </v-slide-x-transition>

    <v-timeline-item
      class="mb-6"
      hide-dot
    >
      <span>TODAY</span>
    </v-timeline-item>

    <v-timeline-item
      class="mb-4"
      color="grey"
      icon-color="grey lighten-2"
      small
    >
      <v-row justify="space-between">
        <v-col cols="7">This order was archived.</v-col>
        <v-col class="text-right" cols="5">15:26 EDT</v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item
      class="mb-4"
      small
    >
      <v-row justify="space-between">
        <v-col cols="7">
          <v-chip
            class="white--text ml-0"
            color="purple"
            label
            small
          >
            APP
          </v-chip>
          Digital Downloads fulfilled 1 item.
        </v-col>
        <v-col class="text-right" cols="5">15:25 EDT</v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item
      class="mb-4"
      color="grey"
      small
    >
      <v-row justify="space-between">
        <v-col cols="7">
          Order confirmation email was sent to Sean (support@keenthemes.com).
        </v-col>
        <v-col class="text-right" cols="5">15:25 EDT</v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item
      class="mb-4"
      hide-dot
    >
      <v-btn
        class="mx-0"
        color="white"
      >
        Resend Email
      </v-btn>
    </v-timeline-item>

    <v-timeline-item
      class="mb-4"
      color="grey"
      small
    >
      <v-row justify="space-between">
        <v-col cols="7">
          A $15.00 USD payment was processed on PayPal Express Checkout
        </v-col>
        <v-col class="text-right" cols="5">15:25 EDT</v-col>
      </v-row>
    </v-timeline-item>

    <v-timeline-item
      color="grey"
      small
    >
      <v-row justify="space-between">
        <v-col cols="7">
          Sean Paul placed this order on Online Store (checkout #1937432132572).
        </v-col>
        <v-col class="text-right" cols="5">15:25 EDT</v-col>
      </v-row>
    </v-timeline-item>
  </v-timeline>
</v-container>`,
        js: `export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
  }),

  computed: {
    timeline () {
      return this.events.slice().reverse()
    },
  },

  methods: {
    comment () {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\\d{2}\\sGMT-\\d{4}\\s\\((.*)\\)/, (match, contents, offset) => {
          return \` \${contents.split(' ').map(v => v.charAt(0)).join('')}\`
        }),
      })

      this.input = null
    },
  },
}`
      },
      events: [],
      input: null
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Timelines" }
    ]);
  },

  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },

  beforeDestroy() {
    this.stop();
  },

  methods: {
    addEvent() {
      let { color, icon } = this.genAlert();

      const previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();

      return {
        color,
        icon: this.genIcon(color)
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    },

    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
          return ` ${contents
            .split(" ")
            .map(v => v.charAt(0))
            .join("")}`;
        })
      });

      this.input = null;
    }
  }
};
</script>
