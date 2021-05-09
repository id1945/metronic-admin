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
        <b>Tabs</b> The <code>v-tabs</code> component is used for hiding content
        behind a selectable item. This can also be used as a pseudo-navigation
        for a page, where the tabs are links and the tab-items are the content.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/tabs"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Vertical Tabs'">
          <template v-slot:preview>
            <p>
              Tabs can be toggled to stack its <code>v-tab</code> components
              vertically.
            </p>
            <v-card>
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title>User Profile</v-toolbar-title>
              </v-toolbar>
              <v-tabs vertical>
                <v-tab>
                  <v-icon left>mdi-account</v-icon>
                  Option 1
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-lock</v-icon>
                  Option 2
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-access-point</v-icon>
                  Option 3
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate
                        arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed
                        a libero.
                      </p>

                      <p>
                        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                        vel, lacus. Aenean tellus metus, bibendum sed, posuere
                        ac, mattis non, nunc. Aliquam lobortis. Aliquam
                        lobortis. Suspendisse non nisl sit amet velit hendrerit
                        rutrum.
                      </p>

                      <p class="mb-0">
                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                        arcu. Pellentesque libero tortor, tincidunt et,
                        tincidunt eget, semper nec, quam. Phasellus blandit leo
                        ut odio.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Morbi nec metus. Suspendisse faucibus, nunc et
                        pellentesque egestas, lacus ante convallis tellus, vitae
                        iaculis lacus elit id tortor. Sed mollis, eros et
                        ultrices tempus, mauris ipsum aliquam libero, non
                        adipiscing dolor urna a orci. Curabitur ligula sapien,
                        tincidunt non, euismod vitae, posuere imperdiet, leo.
                        Nunc sed turpis.
                      </p>

                      <p>
                        Suspendisse feugiat. Suspendisse faucibus, nunc et
                        pellentesque egestas, lacus ante convallis tellus, vitae
                        iaculis lacus elit id tortor. Proin viverra, ligula sit
                        amet ultrices semper, ligula arcu tristique sapien, a
                        accumsan nisi mauris ac eros. In hac habitasse platea
                        dictumst. Fusce ac felis sit amet ligula pharetra
                        condimentum.
                      </p>

                      <p>
                        Sed consequat, leo eget bibendum sodales, augue velit
                        cursus nunc, quis gravida magna mi a libero. Nam commodo
                        suscipit quam. In consectetuer turpis ut velit. Sed
                        cursus turpis vitae tortor. Aliquam eu nunc.
                      </p>

                      <p>
                        Etiam ut purus mattis mauris sodales aliquam. Ut varius
                        tincidunt libero. Aenean viverra rhoncus pede. Duis leo.
                        Fusce fermentum odio nec arcu.
                      </p>

                      <p class="mb-0">
                        Donec venenatis vulputate lorem. Aenean viverra rhoncus
                        pede. In dui magna, posuere eget, vestibulum et, tempor
                        auctor, justo. Fusce commodo aliquam arcu. Suspendisse
                        enim turpis, dictum sed, iaculis a, condimentum nec,
                        nisi.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Fusce a quam. Phasellus nec sem in justo pellentesque
                        facilisis. Nam eget dui. Proin viverra, ligula sit amet
                        ultrices semper, ligula arcu tristique sapien, a
                        accumsan nisi mauris ac eros. In dui magna, posuere
                        eget, vestibulum et, tempor auctor, justo.
                      </p>

                      <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque
                        facilisis. Proin sapien ipsum, porta a, auctor quis,
                        euismod ut, mi. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nam at tortor in
                        tellus interdum sagittis.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Right aligned tabs'">
          <template v-slot:preview>
            <p>The <strong>right</strong> prop aligns the tabs to the right.</p>
            <v-card>
              <v-tabs
                background-color="white"
                color="deep-purple accent-4"
                right
              >
                <v-tab>Landscape</v-tab>
                <v-tab>City</v-tab>
                <v-tab>Abstract</v-tab>

                <v-tab-item v-for="n in 3" :key="n">
                  <v-container fluid>
                    <v-row>
                      <v-col v-for="i in 6" :key="i" cols="12" md="4">
                        <v-img
                          :src="
                            `https://picsum.photos/500/300?image=${i * n * 5 +
                              10}`
                          "
                          :lazy-src="
                            `https://picsum.photos/10/6?image=${i * n * 5 + 10}`
                          "
                          aspect-ratio="1"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'With menu'">
          <template v-slot:preview>
            <p>
              You can use a menu to hold additional tabs, swapping them out on
              the fly.
            </p>
            <v-card>
              <v-toolbar color="deep-purple accent-4" dark flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Page title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                  <v-tabs v-model="currentItem" fixed-tabs slider-color="white">
                    <v-tab
                      v-for="item in items"
                      :key="item"
                      :href="'#tab-' + item"
                    >
                      {{ item }}
                    </v-tab>

                    <v-menu v-if="more.length" bottom left>
                      <template v-slot:activator="{ on }">
                        <v-btn text class="align-self-center mr-4" v-on="on">
                          more
                          <v-icon right>mdi-menu-down</v-icon>
                        </v-btn>
                      </template>

                      <v-list class="grey lighten-3">
                        <v-list-item
                          v-for="item in more"
                          :key="item"
                          @click="addItem(item)"
                        >
                          {{ item }}
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-tabs>
                </template>
              </v-toolbar>

              <v-tabs-items v-model="currentItem">
                <v-tab-item
                  v-for="item in items.concat(more)"
                  :key="item"
                  :value="'tab-' + item"
                >
                  <v-card flat>
                    <v-card-text>
                      <h2>{{ item }}</h2>
                      {{ text }}
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
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

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Icons and text'">
          <template v-slot:preview>
            <p>
              <code>v-tab</code>'s can contain icons as well as text. This
              increases the <code>v-tabs</code> height to 72px.
            </p>
            <v-card>
              <v-tabs
                v-model="code2.tab"
                background-color="deep-purple accent-4"
                centered
                dark
                icons-and-text
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1">
                  Recents
                  <v-icon>mdi-phone</v-icon>
                </v-tab>

                <v-tab href="#tab-2">
                  Favorites
                  <v-icon>mdi-heart</v-icon>
                </v-tab>

                <v-tab href="#tab-3">
                  Nearby
                  <v-icon>mdi-account-box</v-icon>
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="code2.tab">
                <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                  <v-card flat>
                    <v-card-text>{{ code2.text }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Content'">
          <template v-slot:preview>
            <p>
              It is common to put <code>v-tabs</code> inside the
              <strong>extension</strong> slot of <code>v-toolbar</code>. Using
              <code>v-toolbar</code>'s <strong>tabs</strong> prop auto adjusts
              its height to 48px to match <code>v-tabs</code>.
            </p>
            <v-card>
              <v-toolbar color="cyan" dark flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Page title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                  <v-tabs v-model="code4.model" centered slider-color="yellow">
                    <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">
                      Item {{ i }}
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>

              <v-tabs-items v-model="code4.model">
                <v-tab-item v-for="i in 3" :key="i" :value="`tab-${i}`">
                  <v-card flat>
                    <v-card-text v-text="code4.text"></v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'With search'">
          <template v-slot:preview>
            <p>
              When changing your <code>v-tab-item</code>, the content area will
              smoothly scale to the new size.
            </p>
            <v-card>
              <v-toolbar color="purple" dark flat prominent>
                <v-text-field
                  append-icon="mic"
                  class="mx-4"
                  flat
                  hide-details
                  label="Search"
                  prepend-inner-icon="search"
                  solo-inverted
                ></v-text-field>

                <template v-slot:extension>
                  <v-tabs v-model="code4.tabs" centered>
                    <v-tab v-for="n in 3" :key="n"> Item {{ n }} </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>

              <v-tabs-items v-model="code4.tabs">
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-title class="headline"
                      >An awesome title</v-card-title
                    >
                    <v-card-text>
                      <p>
                        Duis lobortis massa imperdiet quam. Donec vitae orci sed
                        dolor rutrum auctor. Vestibulum facilisis, purus nec
                        pulvinar iaculis, ligula mi congue nunc, vitae euismod
                        ligula urna in dolor. Praesent congue erat at massa.
                      </p>

                      <p>
                        Aenean posuere, tortor sed cursus feugiat, nunc augue
                        blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                        Pellentesque egestas, neque sit amet convallis pulvinar,
                        justo nulla eleifend augue, ac auctor orci leo non est.
                        Etiam sit amet orci eget eros faucibus tincidunt. Donec
                        sodales sagittis magna.
                      </p>

                      <p class="mb-0">
                        Ut leo. Suspendisse potenti. Duis vel nibh at velit
                        scelerisque suscipit. Fusce pharetra convallis urna.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-title class="headline"
                      >An even better title</v-card-title
                    >
                    <v-card-text>
                      <p>
                        Maecenas ullamcorper, dui et placerat feugiat, eros pede
                        varius nisi, condimentum viverra felis nunc et lorem.
                        Sed hendrerit. Maecenas malesuada. Vestibulum
                        ullamcorper mauris at ligula. Proin faucibus arcu quis
                        ante.
                      </p>

                      <p class="mb-0">
                        Etiam vitae tortor. Curabitur ullamcorper ultricies
                        nisi. Sed magna purus, fermentum eu, tincidunt eu,
                        varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
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
        html: `<v-card>
  <v-toolbar flat color="primary" dark>
    <v-toolbar-title>User Profile</v-toolbar-title>
  </v-toolbar>
  <v-tabs vertical>
    <v-tab>
      <v-icon left>mdi-account</v-icon>
      Option 1
    </v-tab>
    <v-tab>
      <v-icon left>mdi-lock</v-icon>
      Option 2
    </v-tab>
    <v-tab>
      <v-icon left>mdi-access-point</v-icon>
      Option 3
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p>
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
          </p>

          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
          </p>

          <p>
            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</v-card>`
      },

      code2: {
        html: `<v-card>
  <v-tabs
    v-model="tab"
    background-color="deep-purple accent-4"
    centered
    dark
    icons-and-text
  >
    <v-tabs-slider></v-tabs-slider>

    <v-tab href="#tab-1">
      Recents
      <v-icon>mdi-phone</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Favorites
      <v-icon>mdi-heart</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Nearby
      <v-icon>mdi-account-box</v-icon>
    </v-tab>
  </v-tabs>

  <v-tabs-items v-model="tab">
    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="'tab-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
</v-card>`,
        js: `export default {
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }`,
        tab: null,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },

      code3: {
        html: `<v-card>
  <v-tabs
    background-color="white"
    color="deep-purple accent-4"
    right
  >
    <v-tab>Landscape</v-tab>
    <v-tab>City</v-tab>
    <v-tab>Abstract</v-tab>

    <v-tab-item
      v-for="n in 3"
      :key="n"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="i in 6"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img
              :src="\`https://picsum.photos/500/300?image=\${i * n * 5 + 10}\`"
              :lazy-src="\`https://picsum.photos/10/6?image=\${i * n * 5 + 10}\`"
              aspect-ratio="1"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>
  </v-tabs>
</v-card>`
      },

      code4: {
        html: `<v-card>
  <v-toolbar
    color="cyan"
    dark
    flat
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs
        v-model="model"
        centered
        slider-color="yellow"
      >
        <v-tab
          v-for="i in 3"
          :key="i"
          :href="\`#tab-\${i}\`"
        >
          Item {{ i }}
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>

  <v-tabs-items v-model="model">
    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      <v-card flat>
        <v-card-text v-text="text"></v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
</v-card>`,
        js: `export default {
  data () {
    return {
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}`,
        model: "tab-2",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },

      code5: {
        html: `<v-card>
  <v-toolbar
    color="purple"
    dark
    flat
    prominent
  >
    <v-text-field
      append-icon="mic"
      class="mx-4"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="search"
      solo-inverted
    ></v-text-field>

    <template v-slot:extension>
      <v-tabs
        v-model="tabs"
        centered
      >
        <v-tab
          v-for="n in 3"
          :key="n"
        >
          Item {{ n }}
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>

  <v-tabs-items v-model="tabs">
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-title class="headline">An awesome title</v-card-title>
        <v-card-text>
          <p>
            Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
          </p>

          <p>
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
          </p>

          <p class="mb-0">
            Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-title class="headline">An even better title</v-card-title>
        <v-card-text>
          <p>
            Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
          </p>

          <p class="mb-0">
            Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
</v-card>`,
        js: `export default {
  data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}`,
        tabs: null,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },

      code6: {
        html: `<v-card>
  <v-toolbar
    color="deep-purple accent-4"
    dark
    flat
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs
        v-model="currentItem"
        fixed-tabs
        slider-color="white"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          :href="'#tab-' + item"
        >
          {{ item }}
        </v-tab>

        <v-menu
          v-if="more.length"
          bottom
          left
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              class="align-self-center mr-4"
              v-on="on"
            >
              more
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item
              v-for="item in more"
              :key="item"
              @click="addItem(item)"
            >
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </template>
  </v-toolbar>

  <v-tabs-items v-model="currentItem">
    <v-tab-item
      v-for="item in items.concat(more)"
      :key="item"
      :value="'tab-' + item"
    >
      <v-card flat>
        <v-card-text>
          <h2>{{ item }}</h2>
          {{ text }}
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
</v-card>`,
        js: `export default {
  data: () => ({
    currentItem: 'tab-Web',
    items: [
      'Web', 'Shopping', 'Videos', 'Images',
    ],
    more: [
      'News', 'Maps', 'Books', 'Flights', 'Apps',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),

  methods: {
    addItem (item) {
      const removed = this.items.splice(0, 1)
      this.items.push(
        ...this.more.splice(this.more.indexOf(item), 1)
      )
      this.more.push(...removed)
      this.$nextTick(() => { this.currentItem = 'tab-' + item })
    },
  },
}`
      },
      currentItem: "tab-Web",
      items: ["Web", "Shopping", "Videos", "Images"],
      more: ["News", "Maps", "Books", "Flights", "Apps"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Tabs" }
    ]);
  },

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    }
  }
};
</script>
