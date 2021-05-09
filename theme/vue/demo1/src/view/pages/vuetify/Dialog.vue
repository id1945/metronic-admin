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
        <b>Dialog</b> The <code>v-dialog</code> component inform users about a
        specific task and may contain critical information, require decisions,
        or involve multiple tasks. Use dialogs sparingly because they are
        interruptive.
        <a
          class="font-weight-bold"
          href="https://vuetifyjs.com/en/components/alerts"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Without activator'">
          <template v-slot:preview>
            <v-row justify="center">
              <v-btn color="primary" dark @click.stop="code1.dialog = true">
                Open Dialog
              </v-btn>

              <v-dialog v-model="code1.dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline"
                    >Use Google's location service?</v-card-title
                  >

                  <v-card-text>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="code1.dialog = false"
                    >
                      Disagree
                    </v-btn>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="code1.dialog = false"
                    >
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
          <template v-slot:js>
            {{ code1.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Scrollable'">
          <template v-slot:preview>
            <v-row justify="center">
              <v-dialog v-model="code3.dialog" width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Use Google's location service?</span>
                  </v-card-title>
                  <v-card-text
                    >Lorem ipsum dolor sit amet, semper quis, sapien id natoque
                    elit. Nostra urna at, magna at neque sed sed ante imperdiet,
                    dolor mauris cursus velit, velit non, sem nec. Volutpat sem
                    ridiculus placerat leo, augue in, duis erat proin
                    condimentum in a eget, sed fermentum sed vestibulum varius
                    ac, vestibulum volutpat orci ut elit eget tortor. Ultrices
                    nascetur nulla gravida ante arcu. Pharetra rhoncus morbi
                    ipsum, nunc tempor debitis, ipsum pellentesque, vitae id
                    quam ut mauris dui tempor, aptent non. Quisque turpis.
                    Phasellus quis lectus luctus orci eget rhoncus. Amet donec
                    vestibulum mattis commodo, nulla aliquet, nibh praesent,
                    elementum nulla. Sit lacus pharetra tempus magna neque
                    pellentesque, nulla vel erat. Justo ex quisque nulla
                    accusamus venenatis, sed quis. Nibh phasellus gravida metus
                    in, fusce aenean ut erat commodo eros. Ut turpis, dui
                    integer, nonummy pede placeat nec in sit leo. Faucibus
                    porttitor illo taciti odio, amet viverra scelerisque quis
                    quis et tortor, curabitur morbi a. Enim tempor at, rutrum
                    elit condimentum, amet rutrum vitae tempor torquent nunc.
                    Praesent vestibulum integer maxime felis. Neque aenean quia
                    vitae nostra, tempus elit enim id dui, at egestas pulvinar.
                    Integer libero vestibulum, quis blandit scelerisque mattis
                    fermentum nulla, tortor donec vestibulum dolor amet eget,
                    elit nullam. Aliquam leo phasellus aliquam curabitur metus
                    a, nulla justo mattis duis interdum vel, mollis vitae et id,
                    vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
                    convallis, et nulla wisi, amet vestibulum risus, quam ac
                    egestas. Et vitae, nulla gravida erat scelerisque nullam
                    nunc pellentesque, a dictumst cras augue, purus imperdiet
                    non. Varius montes cursus varius vel tortor, nec leo a qui,
                    magni cras, velit vel consectetuer lobortis vel. Nibh erat
                    et wisi felis leo porttitor, sapien nibh sapien pede mi, sed
                    eget porttitor, repellendus arcu ac quis. Luctus vulputate
                    aut est sem magna, placerat accumsan nunc vestibulum ipsum
                    ac auctor, maecenas lorem in ut nec mauris tortor, doloribus
                    varius sem tortor vestibulum mollis, eleifend tortor felis
                    tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris
                    nec nunc euismod, tortor porta ridiculus potenti, massa
                    tristique nam magna, et wisi placerat et erat ante. Eget
                    pede erat in facilisis, fermentum venenatis sodales. Ac
                    tortor sociis et non animi tristique, rhoncus malesuada, ut
                    arcu volutpat scelerisque sollicitudin, elit curabitur dui
                    pede purus dolor, integer aenean risus taciti nulla eleifend
                    accumsan. At pulvinar diam parturient, interdum mi velit
                    aliquet et a. Arcu at ac placerat eget justo semper, purus
                    sociis curabitur mi ipsum consequat ut, mollis vestibulum,
                    est ante ornare lacus sem. Neque magna mauris, commodo
                    quisque, praesent semper suscipit lobortis nam. Justo
                    malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis
                    nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
                    aliquam, sed vestibulum nullam arcu sit risus arcu, id
                    luctus vitae lorem nibh, integer nec nullam class cursus mi,
                    purus arcu lectus. Vel ante suscipit volutpat potenti mattis
                    sed, wisi eu placerat aliquam erat, lectus morbi lobortis at
                    assumenda. Consequat neque purus ipsum voluptas odio, netus
                    vestibulum ut nec, suspendisse pellentesque nec enim in.
                    Wisi dictum sed semper a, ipsum erat tellus habitasse est,
                    erat sem ornare, vitae quisque ultricies. Dui sed blandit.
                    Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc
                    nibh pede, ipsum vestibulum aenean leo ante ultricies, nam
                    cras quis sed penatibus amet. In mauris a. Integer metus
                    mauris tortor, et rutrum vestibulum ultricies, ut phasellus
                    in ullamcorper ut mollit, eu justo. Cursus pretium
                    venenatis. Cras pellentesque vel sodales accumsan aenean.
                    Feugiat metus sit nec in aliquet amet, porttitor pretium
                    vulputate massa. Consequat ipsum luctus quisque adipiscing
                    libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem
                    natoque vestibulum et, aliquet faucibus at morbi nibh, vel
                    condimentum. Massa unde orci sed id sed, odio donec congue
                    nec praesent amet. Hymenaeos velit lacus, quis vivamus
                    libero tempus duis, eu nisi eu, ipsum at accumsan pede justo
                    morbi donec, massa et libero sit risus neque tortor. Ut sed
                    sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                    Fringilla tempor felis augue magna. Cum arcu a, id vitae.
                    Pellentesque pharetra in cras sociis adipiscing est. Nibh
                    nec mattis at maecenas, nisl orci aliquam nulla justo
                    egestas venenatis, elementum duis vel porta eros, massa
                    vitae, eligendi imperdiet amet. Nec neque luctus suscipit,
                    justo sem praesent, ut nisl quisque, volutpat torquent wisi
                    tellus aliquam reprehenderit, curabitur cras at quis massa
                    porttitor mauris. Eros sed ultrices. Amet dignissim justo
                    urna feugiat mauris litora, etiam accumsan, lobortis a orci
                    suspendisse. Semper ac mauris, varius bibendum pretium, orci
                    urna nunc ullamcorper auctor, saepe sem integer quam, at
                    feugiat egestas duis. Urna ligula ante. Leo elementum
                    nonummy. Sagittis mauris est in ipsum, nulla amet non justo,
                    proin id potenti platea posuere sit ut, nunc sit erat
                    bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere
                    morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam
                    fermentum, ut mauris integer, orci tellus tempus diam ut in
                    pellentesque. Wisi faucibus tempor et odio leo diam,
                    eleifend quis integer curabitur sit scelerisque ac, mauris
                    consequat luctus quam penatibus fringilla dis, vitae lacus
                    in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed
                    blandit id sed. Tellus integer, dignissim id pede sodales
                    quis, felis dolorem id mauris orci, orci tempus ut. Nullam
                    hymenaeos. Curabitur in a, tortor ut praesent placerat
                    tincidunt interdum, ac dignissim metus nonummy hendrerit
                    wisi, etiam ut. Semper praesent integer fusce, tortor
                    suspendisse, augue ligula orci ante asperiores ullamcorper.
                    In sit per mi sed sed, mi vestibulum mus nam, morbi mauris
                    neque vitae aliquam proin senectus. Ac amet arcu mollis ante
                    congue elementum, inceptos eget optio quam pellentesque quis
                    lobortis, sollicitudin sed vestibulum sollicitudin, lectus
                    parturient nullam, leo orci ligula ultrices. At tincidunt
                    enim, suspendisse est sit sem ac. Amet tellus molestie est
                    purus magna augue, non etiam et in wisi id. Non commodo,
                    metus lorem facilisi lobortis ac velit, montes neque sed
                    risus consectetuer fringilla dolor. Quam justo et integer
                    aliquam, cursus nulla enim orci, nam cursus adipiscing,
                    integer torquent non, fringilla per maecenas. Libero ipsum
                    sed tellus purus et. Duis molestie placerat erat donec ut.
                    Dolor enim erat massa faucibus ultrices in, ante ultricies
                    orci lacus, libero consectetuer mauris magna feugiat neque
                    dapibus, donec pretium et. Aptent dui, aliquam et et amet
                    nostra ligula. Augue curabitur duis dui volutpat, tempus sed
                    ut pede donec. Interdum luctus, lectus nulla aenean elit, id
                    sit magna, vulputate ultrices pellentesque vel id fermentum
                    morbi. Tortor et. Adipiscing augue lorem cum non lacus,
                    rutrum sodales laoreet duis tortor, modi placerat facilisis
                    et malesuada eros ipsum, vehicula tempus. Ac vivamus amet
                    non aliquam venenatis lectus, sociosqu adipiscing consequat
                    nec arcu odio. Blandit orci nec nec, posuere in pretium,
                    enim ut, consectetuer nullam urna, risus vel. Nullam odio
                    vehicula massa sed, etiam sociis mauris, lacus ullamcorper,
                    libero imperdiet non sodales placerat justo vehicula. Nec
                    morbi imperdiet. Fermentum sem libero iaculis bibendum et
                    eros, eget maecenas non nunc, ad pellentesque. Ut nec diam
                    elementum interdum. Elementum vitae tellus lacus vitae,
                    ipsum phasellus, corporis vehicula in ac sed massa vivamus,
                    rutrum elit, ultricies metus volutpat. Semper wisi et,
                    sollicitudin nunc vestibulum, cursus accumsan nunc pede
                    tempus mi ipsum, ligula sed. Non condimentum ac dolor sit.
                    Mollis eu aliquam, vel mattis mollis massa ut dolor ante,
                    tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,
                    iaculis ut congue ac vivamus. Nam libero orci, pulvinar
                    nulla, enim pellentesque consectetuer leo, feugiat rhoncus
                    rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper
                    viverra. Ultricies quis orci lorem, suspendisse ut
                    vestibulum integer, purus sed lorem pulvinar habitasse
                    turpis. +</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="code3.dialog = false"
                      >Disagree</v-btn
                    >
                    <v-btn
                      color="green darken-1"
                      text
                      @click="code3.dialog = false"
                      >Agree</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
          <template v-slot:js>
            {{ code3.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Loader'">
          <template v-slot:preview>
            <p>
              The <code>v-dialog</code> component makes it easy to create a
              customized loading experience for your application.
            </p>
            <div class="text-center">
              <v-btn
                :disabled="code5Dialog"
                :loading="code5Dialog"
                class="white--text"
                color="purple darken-2"
                @click="code5Dialog = true"
              >
                Start loading
              </v-btn>
              <v-dialog
                v-model="code5Dialog"
                hide-overlay
                persistent
                width="300"
              >
                <v-card color="primary" dark>
                  <v-card-text>
                    Please stand by
                    <v-progress-linear
                      indeterminate
                      color="white"
                      class="mb-0"
                    ></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </template>
          <template v-slot:html>
            {{ code5.html }}
          </template>
          <template v-slot:js>
            {{ code5.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Nested dialogs'">
          <template v-slot:preview>
            <p>Dialogs can be nested: you can open one dialog from another.</p>
            <div>
              <v-row justify="center">
                <v-btn
                  color="primary"
                  class="ma-2"
                  dark
                  @click="code7.dialog = true"
                >
                  Open Dialog 1
                </v-btn>
                <v-btn
                  color="primary"
                  class="ma-2"
                  dark
                  @click="code7.dialog2 = true"
                >
                  Open Dialog 2
                </v-btn>
                <v-btn
                  color="primary"
                  class="ma-2"
                  dark
                  @click="code7.dialog3 = true"
                >
                  Open Dialog 3
                </v-btn>
                <v-menu bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" v-on="on">A Menu</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in code7.items"
                      :key="i"
                      @click="() => {}"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-dialog
                  v-model="code7.dialog"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                  scrollable
                >
                  <v-card tile>
                    <v-toolbar flat dark color="primary">
                      <v-btn icon dark @click="code7.dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title>Settings</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn dark text @click="code7.dialog = false">
                          Save
                        </v-btn>
                      </v-toolbar-items>
                      <v-menu bottom right offset-y>
                        <template v-slot:activator="{ on }">
                          <v-btn dark icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(item, i) in code7.items"
                            :key="i"
                            @click="() => {}"
                          >
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-toolbar>
                    <v-card-text>
                      <v-btn
                        color="primary"
                        dark
                        class="ma-2"
                        @click="code7.dialog2 = !code7.dialog2"
                      >
                        Open Dialog 2
                      </v-btn>
                      <v-tooltip right>
                        <template v-slot:activator="{ on }">
                          <v-btn class="ma-2" v-on="on"
                            >Tool Tip Activator</v-btn
                          >
                        </template>
                        Tool Tip
                      </v-tooltip>
                      <v-list three-line subheader>
                        <v-subheader>User Controls</v-subheader>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Content filtering</v-list-item-title
                            >
                            <v-list-item-subtitle
                              >Set the content filtering level to restrict apps
                              that can be downloaded</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Password</v-list-item-title>
                            <v-list-item-subtitle
                              >Require password for purchase or use password to
                              restrict purchase</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                      <v-divider></v-divider>
                      <v-list three-line subheader>
                        <v-subheader>General</v-subheader>
                        <v-list-item>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="code7.notifications"
                            ></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle
                              >Notify me about updates to apps or games that I
                              downloaded</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-action>
                            <v-checkbox v-model="code7.sound"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle
                              >Auto-update apps at any time. Data charges may
                              apply</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-action>
                            <v-checkbox v-model="code7.widgets"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title
                              >Auto-add widgets</v-list-item-title
                            >
                            <v-list-item-subtitle
                              >Automatically add home screen
                              widgets</v-list-item-subtitle
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>

                    <div style="flex: 1 1 auto;"></div>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="code7.dialog2" max-width="500px">
                  <v-card>
                    <v-card-title>
                      Dialog 2
                    </v-card-title>
                    <v-card-text>
                      <v-btn
                        color="primary"
                        dark
                        @click="code7.dialog3 = !code7.dialog3"
                      >
                        Open Dialog 3
                      </v-btn>
                      <v-select
                        :items="code7.select"
                        label="A Select List"
                        item-value="text"
                      ></v-select>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="primary"
                        text
                        @click="code7.dialog2 = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="code7.dialog3" max-width="500px">
                  <v-card>
                    <v-card-title>
                      <span>Dialog 3</span>
                      <v-spacer></v-spacer>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(item, i) in code7.items"
                            :key="i"
                            @click="() => {}"
                          >
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn
                        color="primary"
                        text
                        @click="code7.dialog3 = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>
          </template>
          <template v-slot:html>
            {{ code7.html }}
          </template>
          <template v-slot:js>
            {{ code7.js }}
          </template>
        </KTCodePreview>
      </div>

      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Scrollable'">
          <template v-slot:preview>
            <p>Example of a dialog with scrollable content.</p>
            <v-row justify="center">
              <v-dialog v-model="code2.dialog" scrollable max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-card-title>Select Country</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text style="height: 300px;">
                    <v-radio-group v-model="code2.dialogm1" column>
                      <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                      <v-radio label="Bahrain" value="bahrain"></v-radio>
                      <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                      <v-radio label="Barbados" value="barbados"></v-radio>
                      <v-radio label="Belarus" value="belarus"></v-radio>
                      <v-radio label="Belgium" value="belgium"></v-radio>
                      <v-radio label="Belize" value="belize"></v-radio>
                      <v-radio label="Benin" value="benin"></v-radio>
                      <v-radio label="Bhutan" value="bhutan"></v-radio>
                      <v-radio label="Bolivia" value="bolivia"></v-radio>
                      <v-radio
                        label="Bosnia and Herzegovina"
                        value="bosnia"
                      ></v-radio>
                      <v-radio label="Botswana" value="botswana"></v-radio>
                      <v-radio label="Brazil" value="brazil"></v-radio>
                      <v-radio label="Brunei" value="brunei"></v-radio>
                      <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                      <v-radio label="Burkina Faso" value="burkina"></v-radio>
                      <v-radio label="Burma" value="burma"></v-radio>
                      <v-radio label="Burundi" value="burundi"></v-radio>
                    </v-radio-group>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="code2.dialog = false"
                      >Close</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="code2.dialog = false"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
          <template v-slot:js>
            {{ code2.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Form'">
          <template v-slot:preview>
            <p>Just a simple example of a form in a dialog.</p>
            <v-row justify="center">
              <v-dialog v-model="code4.dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal first name*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Password*"
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="[
                              'Skiing',
                              'Ice hockey',
                              'Soccer',
                              'Basketball',
                              'Hockey',
                              'Reading',
                              'Writing',
                              'Coding',
                              'Basejump'
                            ]"
                            label="Interests"
                            multiple
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="code4.dialog = false"
                      >Close</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="code4.dialog = false"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
          <template v-slot:js>
            {{ code4.js }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fullscreen'">
          <template v-slot:preview>
            <p>
              Due to limited space, full-screen dialogs may be more appropriate
              for mobile devices than dialogs used on devices with larger
              screens.
            </p>
            <v-row justify="center">
              <v-dialog
                v-model="code6.dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon dark @click="code6.dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark text @click="code6.dialog = false"
                        >Save</v-btn
                      >
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-list three-line subheader>
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Content filtering</v-list-item-title>
                        <v-list-item-subtitle
                          >Set the content filtering level to restrict apps that
                          can be downloaded</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Password</v-list-item-title>
                        <v-list-item-subtitle
                          >Require password for purchase or use password to
                          restrict purchase</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox v-model="code6.notifications"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle
                          >Notify me about updates to apps or games that I
                          downloaded</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox v-model="code6.sound"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle
                          >Auto-update apps at any time. Data charges may
                          apply</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox v-model="code6.widgets"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle
                          >Automatically add home screen
                          widgets</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-dialog>
            </v-row>
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
        html: ` <v-row justify="center">
  <v-btn
    color="primary"
    dark
    @click.stop="dialog = true"
  >
    Open Dialog
  </v-btn>

  <v-dialog
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Disagree
        </v-btn>

        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>`,
        js: `export default {
  data () {
    return {
      dialog: false,
    }
  },
}`,
        dialog: false
      },

      code2: {
        html: `<v-row justify="center">
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-radio-group v-model="dialogm1" column>
          <v-radio label="Bahamas, The" value="bahamas"></v-radio>
          <v-radio label="Bahrain" value="bahrain"></v-radio>
          <v-radio label="Bangladesh" value="bangladesh"></v-radio>
          <v-radio label="Barbados" value="barbados"></v-radio>
          <v-radio label="Belarus" value="belarus"></v-radio>
          <v-radio label="Belgium" value="belgium"></v-radio>
          <v-radio label="Belize" value="belize"></v-radio>
          <v-radio label="Benin" value="benin"></v-radio>
          <v-radio label="Bhutan" value="bhutan"></v-radio>
          <v-radio label="Bolivia" value="bolivia"></v-radio>
          <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
          <v-radio label="Botswana" value="botswana"></v-radio>
          <v-radio label="Brazil" value="brazil"></v-radio>
          <v-radio label="Brunei" value="brunei"></v-radio>
          <v-radio label="Bulgaria" value="bulgaria"></v-radio>
          <v-radio label="Burkina Faso" value="burkina"></v-radio>
          <v-radio label="Burma" value="burma"></v-radio>
          <v-radio label="Burundi" value="burundi"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>`,
        js: `export default {
  data () {
    return {
      dialogm1: '',
      dialog: false,
    }
  },
}`,
        dialogm1: "",
        dialog: false
      },

      code3: {
        html: `<v-row justify="center">
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Use Google's location service?</span>
      </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, semper quis, sapien id natoque
          elit. Nostra urna at, magna at neque sed sed ante imperdiet,
          dolor mauris cursus velit, velit non, sem nec. Volutpat sem
          ridiculus placerat leo, augue in, duis erat proin
          condimentum in a eget, sed fermentum sed vestibulum varius
          ac, vestibulum volutpat orci ut elit eget tortor. Ultrices
          nascetur nulla gravida ante arcu. Pharetra rhoncus morbi
          ipsum, nunc tempor debitis, ipsum pellentesque, vitae id
          quam ut mauris dui tempor, aptent non. Quisque turpis.
          Phasellus quis lectus luctus orci eget rhoncus. Amet donec
          vestibulum mattis commodo, nulla aliquet, nibh praesent,
          elementum nulla. Sit lacus pharetra tempus magna neque
          pellentesque, nulla vel erat. Justo ex quisque nulla
          accusamus venenatis, sed quis. Nibh phasellus gravida metus
          in, fusce aenean ut erat commodo eros. Ut turpis, dui
          integer, nonummy pede placeat nec in sit leo. Faucibus
          porttitor illo taciti odio, amet viverra scelerisque quis
          quis et tortor, curabitur morbi a. Enim tempor at, rutrum
          elit condimentum, amet rutrum vitae tempor torquent nunc.
          Praesent vestibulum integer maxime felis. Neque aenean quia
          vitae nostra, tempus elit enim id dui, at egestas pulvinar.
          Integer libero vestibulum, quis blandit scelerisque mattis
          fermentum nulla, tortor donec vestibulum dolor amet eget,
          elit nullam. Aliquam leo phasellus aliquam curabitur metus
          a, nulla justo mattis duis interdum vel, mollis vitae et id,
          vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
          convallis, et nulla wisi, amet vestibulum risus, quam ac
          egestas. Et vitae, nulla gravida erat scelerisque nullam
          nunc pellentesque, a dictumst cras augue, purus imperdiet
          non. Varius montes cursus varius vel tortor, nec leo a qui,
          magni cras, velit vel consectetuer lobortis vel. Nibh erat
          et wisi felis leo porttitor, sapien nibh sapien pede mi, sed
          eget porttitor, repellendus arcu ac quis. Luctus vulputate
          aut est sem magna, placerat accumsan nunc vestibulum ipsum
          ac auctor, maecenas lorem in ut nec mauris tortor, doloribus
          varius sem tortor vestibulum mollis, eleifend tortor felis
          tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris
          nec nunc euismod, tortor porta ridiculus potenti, massa
          tristique nam magna, et wisi placerat et erat ante. Eget
          pede erat in facilisis, fermentum venenatis sodales. Ac
          tortor sociis et non animi tristique, rhoncus malesuada, ut
          arcu volutpat scelerisque sollicitudin, elit curabitur dui
          pede purus dolor, integer aenean risus taciti nulla eleifend
          accumsan. At pulvinar diam parturient, interdum mi velit
          aliquet et a. Arcu at ac placerat eget justo semper, purus
          sociis curabitur mi ipsum consequat ut, mollis vestibulum,
          est ante ornare lacus sem. Neque magna mauris, commodo
          quisque, praesent semper suscipit lobortis nam. Justo
          malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis
          nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
          aliquam, sed vestibulum nullam arcu sit risus arcu, id
          luctus vitae lorem nibh, integer nec nullam class cursus mi,
          purus arcu lectus. Vel ante suscipit volutpat potenti mattis
          sed, wisi eu placerat aliquam erat, lectus morbi lobortis at
          assumenda. Consequat neque purus ipsum voluptas odio, netus
          vestibulum ut nec, suspendisse pellentesque nec enim in.
          Wisi dictum sed semper a, ipsum erat tellus habitasse est,
          erat sem ornare, vitae quisque ultricies. Dui sed blandit.
          Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc
          nibh pede, ipsum vestibulum aenean leo ante ultricies, nam
          cras quis sed penatibus amet. In mauris a. Integer metus
          mauris tortor, et rutrum vestibulum ultricies, ut phasellus
          in ullamcorper ut mollit, eu justo. Cursus pretium
          venenatis. Cras pellentesque vel sodales accumsan aenean.
          Feugiat metus sit nec in aliquet amet, porttitor pretium
          vulputate massa. Consequat ipsum luctus quisque adipiscing
          libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem
          natoque vestibulum et, aliquet faucibus at morbi nibh, vel
          condimentum. Massa unde orci sed id sed, odio donec congue
          nec praesent amet. Hymenaeos velit lacus, quis vivamus
          libero tempus duis, eu nisi eu, ipsum at accumsan pede justo
          morbi donec, massa et libero sit risus neque tortor. Ut sed
          sed etiam hendrerit dapibus, quis metus suspendisse nibh.
          Fringilla tempor felis augue magna. Cum arcu a, id vitae.
          Pellentesque pharetra in cras sociis adipiscing est. Nibh
          nec mattis at maecenas, nisl orci aliquam nulla justo
          egestas venenatis, elementum duis vel porta eros, massa
          vitae, eligendi imperdiet amet. Nec neque luctus suscipit,
          justo sem praesent, ut nisl quisque, volutpat torquent wisi
          tellus aliquam reprehenderit, curabitur cras at quis massa
          porttitor mauris. Eros sed ultrices. Amet dignissim justo
          urna feugiat mauris litora, etiam accumsan, lobortis a orci
          suspendisse. Semper ac mauris, varius bibendum pretium, orci
          urna nunc ullamcorper auctor, saepe sem integer quam, at
          feugiat egestas duis. Urna ligula ante. Leo elementum
          nonummy. Sagittis mauris est in ipsum, nulla amet non justo,
          proin id potenti platea posuere sit ut, nunc sit erat
          bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere
          morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam
          fermentum, ut mauris integer, orci tellus tempus diam ut in
          pellentesque. Wisi faucibus tempor et odio leo diam,
          eleifend quis integer curabitur sit scelerisque ac, mauris
          consequat luctus quam penatibus fringilla dis, vitae lacus
          in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed
          blandit id sed. Tellus integer, dignissim id pede sodales
          quis, felis dolorem id mauris orci, orci tempus ut. Nullam
          hymenaeos. Curabitur in a, tortor ut praesent placerat
          tincidunt interdum, ac dignissim metus nonummy hendrerit
          wisi, etiam ut. Semper praesent integer fusce, tortor
          suspendisse, augue ligula orci ante asperiores ullamcorper.
          In sit per mi sed sed, mi vestibulum mus nam, morbi mauris
          neque vitae aliquam proin senectus. Ac amet arcu mollis ante
          congue elementum, inceptos eget optio quam pellentesque quis
          lobortis, sollicitudin sed vestibulum sollicitudin, lectus
          parturient nullam, leo orci ligula ultrices. At tincidunt
          enim, suspendisse est sit sem ac. Amet tellus molestie est
          purus magna augue, non etiam et in wisi id. Non commodo,
          metus lorem facilisi lobortis ac velit, montes neque sed
          risus consectetuer fringilla dolor. Quam justo et integer
          aliquam, cursus nulla enim orci, nam cursus adipiscing,
          integer torquent non, fringilla per maecenas. Libero ipsum
          sed tellus purus et. Duis molestie placerat erat donec ut.
          Dolor enim erat massa faucibus ultrices in, ante ultricies
          orci lacus, libero consectetuer mauris magna feugiat neque
          dapibus, donec pretium et. Aptent dui, aliquam et et amet
          nostra ligula. Augue curabitur duis dui volutpat, tempus sed
          ut pede donec. Interdum luctus, lectus nulla aenean elit, id
          sit magna, vulputate ultrices pellentesque vel id fermentum
          morbi. Tortor et. Adipiscing augue lorem cum non lacus,
          rutrum sodales laoreet duis tortor, modi placerat facilisis
          et malesuada eros ipsum, vehicula tempus. Ac vivamus amet
          non aliquam venenatis lectus, sociosqu adipiscing consequat
          nec arcu odio. Blandit orci nec nec, posuere in pretium,
          enim ut, consectetuer nullam urna, risus vel. Nullam odio
          vehicula massa sed, etiam sociis mauris, lacus ullamcorper,
          libero imperdiet non sodales placerat justo vehicula. Nec
          morbi imperdiet. Fermentum sem libero iaculis bibendum et
          eros, eget maecenas non nunc, ad pellentesque. Ut nec diam
          elementum interdum. Elementum vitae tellus lacus vitae,
          ipsum phasellus, corporis vehicula in ac sed massa vivamus,
          rutrum elit, ultricies metus volutpat. Semper wisi et,
          sollicitudin nunc vestibulum, cursus accumsan nunc pede
          tempus mi ipsum, ligula sed. Non condimentum ac dolor sit.
          Mollis eu aliquam, vel mattis mollis massa ut dolor ante,
          tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,
          iaculis ut congue ac vivamus. Nam libero orci, pulvinar
          nulla, enim pellentesque consectetuer leo, feugiat rhoncus
          rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper
          viverra. Ultricies quis orci lorem, suspendisse ut
          vestibulum integer, purus sed lorem pulvinar habitasse
          turpis. +</v-card-text
        >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>`,
        js: `export default {
  data () {
    return {
      dialog: false,
    }
  },
}`,
        dialog: false
      },

      code4: {
        html: `<v-row justify="center">
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal first name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>`,
        js: `export default {
  data: () => ({
    dialog: false,
  }),
}`,
        dialog: false
      },

      code5: {
        html: `<div class="text-center">
  <v-btn
    :disabled="dialog"
    :loading="dialog"
    class="white--text"
    color="purple darken-2"
    @click="dialog = true"
  >
    Start loading
  </v-btn>
  <v-dialog
    v-model="dialog"
    hide-overlay
    persistent
    width="300"
  >
    <v-card
      color="primary"
      dark
    >
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>`,
        js: `export default {
  data () {
    return {
      dialog: false,
    }
  },

  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
}`
      },
      code5Dialog: false,

      code6: {
        html: `<v-row justify="center">
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>User Controls</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Content filtering</v-list-item-title>
            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="sound"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="widgets"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</v-row>`,
        js: `export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}`,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      },

      code7: {
        html: `<div>
  <v-row
    justify="center"
  >
    <v-btn
      color="primary"
      class="ma-2"
      dark
      @click="dialog = true"
    >
      Open Dialog 1
    </v-btn>
    <v-btn
      color="primary"
      class="ma-2"
      dark
      @click="dialog2 = true"
    >
      Open Dialog 2
    </v-btn>
    <v-btn
      color="primary"
      class="ma-2"
      dark
      @click="dialog3 = true"
    >
      Open Dialog 3
    </v-btn>
    <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="ma-2"
          v-on="on"
        >A Menu</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="() => {}"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar
          flat
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
          <v-menu
            bottom
            right
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="() => {}"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-card-text>
          <v-btn
            color="primary"
            dark
            class="ma-2"
            @click="dialog2 = !dialog2"
          >
            Open Dialog 2
          </v-btn>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ma-2"
                v-on="on"
              >Tool Tip Activator</v-btn>
            </template>
            Tool Tip
          </v-tooltip>
          <v-list
            three-line
            subheader
          >
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list
            three-line
            subheader
          >
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          Dialog 2
        </v-card-title>
        <v-card-text>
          <v-btn
            color="primary"
            dark
            @click="dialog3 = !dialog3"
          >
            Open Dialog 3
          </v-btn>
          <v-select
            :items="select"
            label="A Select List"
            item-value="text"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog3"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span>Dialog 3</span>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="() => {}"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialog3 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</div>`,
        js: `export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me',
        },
        {
          title: 'Click Me 2',
        },
      ],
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' },
      ],
    }
  },
}`,
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: "Click Me"
          },
          {
            title: "Click Me"
          },
          {
            title: "Click Me"
          },
          {
            title: "Click Me 2"
          }
        ],
        select: [
          { text: "State 1" },
          { text: "State 2" },
          { text: "State 3" },
          { text: "State 4" },
          { text: "State 5" },
          { text: "State 6" },
          { text: "State 7" }
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
      { title: "Dialog" }
    ]);
  },

  watch: {
    code5Dialog(val) {
      if (!val) return;

      setTimeout(() => (this.code5Dialog = false), 4000);
    }
  }
};
</script>
