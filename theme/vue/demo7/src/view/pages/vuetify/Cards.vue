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
        <b>Cards</b> The <code>v-card</code> component is a versatile component
        that can be used for anything from a panel to a static image. The card
        component has numerous helper components to make markup as easy as
        possible. Components that have no listed options use Vue's functional
        component option for faster rendering and serve as markup sugar to make
        building easier.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/cards"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Outlined cards'">
          <template v-slot:preview>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1"
                    >Headline 5</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Information card'">
          <template v-slot:preview>
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="display-1 text--primary">
                  be•nev•o•lent
                </p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br />
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Grids'">
          <template v-slot:preview>
            <v-card class="mx-auto" max-width="500">
              <v-system-bar color="indigo darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Discover</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container fluid>
                <v-row dense>
                  <v-col
                    v-for="card in code5.cards"
                    :key="card.title"
                    :cols="card.flex"
                  >
                    <v-card>
                      <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title v-text="card.title"></v-card-title>
                      </v-img>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Twitter card'">
          <template v-slot:preview>
            <p>
              The <code>v-card</code> component has multiple children components
              that help you build complex examples without having to worry about
              spacing. This example is comprised of the
              <code>v-card-title</code>, <code>v-card-text</code> and
              <code>v-card-actions</code> components.
            </p>
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large left>
                  mdi-twitter
                </v-icon>
                <span class="title font-weight-light">Twitter</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-heart</v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Intermediate'">
          <template v-slot:preview>
            <v-card class="d-inline-block mx-auto">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      height="200"
                      width="200"
                      src="media/stock-600x600/img-1.jpg"
                    ></v-img>
                  </v-col>

                  <v-col cols="auto" class="text-center pl-0">
                    <v-row
                      class="flex-column ma-0 fill-height"
                      justify="center"
                    >
                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Media with text'">
          <template v-slot:preview>
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="media/stock-600x600/img-18.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-btn color="orange" text>
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Horizontal Cards'">
          <template v-slot:preview>
            <p>
              Using <code>v-flex</code>, you can create customized horizontal
              cards. Use the <code>contain</code> property to shrink the
              <code>v-img</code> to fit inside the container, instead of
              covering.
            </p>
            <v-card max-width="400" class="mx-auto">
              <v-system-bar color="pink darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-app-bar dark color="pink">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My Music</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-app-bar>

              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="headline"
                        >Unlimited music now</v-card-title
                      >

                      <v-card-subtitle
                        >Listen to your favorite artists and albums whenever and
                        wherever, online and offline.</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col v-for="(item, i) in code6.items" :key="i" cols="12">
                    <v-card :color="item.color" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title
                            class="headline"
                            v-text="item.title"
                          ></v-card-title>

                          <v-card-subtitle
                            v-text="item.artist"
                          ></v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
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

export default {
  data() {
    return {
      code1: {
        html: `<v-card
  class="mx-auto"
  max-width="344"
  outlined
>
  <v-list-item three-line>
    <v-list-item-content>
      <div class="overline mb-4">OVERLINE</div>
      <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
      <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-avatar
      tile
      size="80"
      color="grey"
    ></v-list-item-avatar>
  </v-list-item>

  <v-card-actions>
    <v-btn text>Button</v-btn>
    <v-btn text>Button</v-btn>
  </v-card-actions>
</v-card>`
      },

      code2: {
        html: `<v-card class="d-inline-block mx-auto">
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-img
          height="200"
          width="200"
          src="media/stock-600x600/img-1.jpg"
        ></v-img>
      </v-col>

      <v-col
        cols="auto"
        class="text-center pl-0"
      >
        <v-row
          class="flex-column ma-0 fill-height"
          justify="center"
        >
          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>

          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
          </v-col>

          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</v-card>`
      },

      code3: {
        html: `<v-card
  class="mx-auto"
  max-width="344"
>
  <v-card-text>
    <div>Word of the Day</div>
    <p class="display-1 text--primary">
      be•nev•o•lent
    </p>
    <p>adjective</p>
    <div class="text--primary">
      well meaning and kindly.<br>
      "a benevolent smile"
    </div>
  </v-card-text>
  <v-card-actions>
    <v-btn
      text
      color="deep-purple accent-4"
    >
      Learn More
    </v-btn>
  </v-card-actions>
</v-card>`
      },

      code4: {
        html: `<v-card
  class="mx-auto"
  max-width="400"
>
  <v-img
    class="white--text align-end"
    height="200px"
    src="media/stock-600x600/img-1.jpg"
  >
    <v-card-title>Top 10 Australian beaches</v-card-title>
  </v-img>

  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

  <v-card-text class="text--primary">
    <div>Whitehaven Beach</div>

    <div>Whitsunday Island, Whitsunday Islands</div>
  </v-card-text>

  <v-card-actions>
    <v-btn
      color="orange"
      text
    >
      Share
    </v-btn>

    <v-btn
      color="orange"
      text
    >
      Explore
    </v-btn>
  </v-card-actions>
</v-card>`
      },

      code5: {
        html: `<v-card
  class="mx-auto"
  max-width="500"
>
  <v-system-bar
    color="indigo darken-2"
    dark
  >
    <v-spacer></v-spacer>

    <v-icon>mdi-window-minimize</v-icon>

    <v-icon>mdi-window-maximize</v-icon>

    <v-icon>mdi-close</v-icon>
  </v-system-bar>

  <v-toolbar
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Discover</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>

  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>`,
        js: `export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "media/stock-600x600/img-15.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "media/stock-600x600/img-2.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "media/stock-600x600/img-3.jpg",
        flex: 6
      }
    ]
  }),
}`,
        cards: [
          {
            title: "Pre-fab homes",
            src: "media/stock-600x600/img-15.jpg",
            flex: 12
          },
          {
            title: "Favorite road trips",
            src: "media/stock-600x600/img-2.jpg",
            flex: 6
          },
          {
            title: "Best airlines",
            src: "media/stock-600x600/img-3.jpg",
            flex: 6
          }
        ]
      },

      code6: {
        html: `<v-card
  max-width="400"
  class="mx-auto"
>
  <v-system-bar
    color="pink darken-2"
    dark
  >
    <v-spacer></v-spacer>

    <v-icon>mdi-window-minimize</v-icon>

    <v-icon>mdi-window-maximize</v-icon>

    <v-icon>mdi-close</v-icon>
  </v-system-bar>

  <v-app-bar
    dark
    color="pink"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>My Music</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="#385F73"
          dark
        >
          <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
      >
        <v-card
          :color="item.color"
          dark
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="item.title"
              ></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>`,
        js: ` export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'media/stock-600x600/img-16.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'media/stock-600x600/img-17.jpg',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}`,
        items: [
          {
            color: "#1F7087",
            src: "media/stock-600x600/img-16.jpg",
            title: "Supermodel",
            artist: "Foster the People"
          },
          {
            color: "#952175",
            src: "media/stock-600x600/img-17.jpg",
            title: "Halcyon Days",
            artist: "Ellie Goulding"
          }
        ]
      },

      code7: {
        html: ` <v-card
  class="mx-auto"
  color="#26c6da"
  dark
  max-width="400"
>
  <v-card-title>
    <v-icon
      large
      left
    >
      mdi-twitter
    </v-icon>
    <span class="title font-weight-light">Twitter</span>
  </v-card-title>

  <v-card-text class="headline font-weight-bold">
    "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
  </v-card-text>

  <v-card-actions>
    <v-list-item class="grow">
      <v-list-item-avatar color="grey darken-3">
        <v-img
          class="elevation-6"
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Evan You</v-list-item-title>
      </v-list-item-content>

      <v-row
        align="center"
        justify="end"
      >
        <v-icon class="mr-1">mdi-heart</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">mdi-share-variant</v-icon>
        <span class="subheading">45</span>
      </v-row>
    </v-list-item>
  </v-card-actions>
</v-card>`
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Cards" }
    ]);
  }
};
</script>
