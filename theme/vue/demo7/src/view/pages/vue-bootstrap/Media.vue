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
        <b>Media</b> The media object helps build complex and repetitive
        components where some media is positioned alongside content that doesn't
        wrap around said media. Plus, it does this with only two required
        classes thanks to flexbox.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/media"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Media'">
          <template v-slot:preview>
            <div>
              <b-card>
                <b-media>
                  <template v-slot:aside>
                    <b-img
                      blank
                      blank-color="#ccc"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <h5 class="mt-0">Media Title</h5>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                  <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                  </p>

                  <b-media>
                    <template v-slot:aside>
                      <b-img
                        blank
                        blank-color="#ccc"
                        width="64"
                        alt="placeholder"
                      ></b-img>
                    </template>

                    <h5 class="mt-0">Nested Media</h5>
                    <p class="mb-0">
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </b-media>
                </b-media>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'No body (with sub-components)'">
          <template v-slot:preview>
            <div>
              <b-card>
                <b-media no-body>
                  <b-media-aside vertical-align="center">
                    <b-img
                      blank
                      blank-color="#ccc"
                      width="128"
                      height="256"
                      alt="placeholder"
                    ></b-img>
                  </b-media-aside>

                  <b-media-body class="ml-3">
                    <h5 class="mt-0">Media Title</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                    <p class="mb-0">
                      Donec sed odio dui. Nullam quis risus eget urna mollis
                      ornare vel eu leo. Cum sociis natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <b-media>
                      <template v-slot:aside>
                        <b-img
                          blank
                          blank-color="#ccc"
                          width="64"
                          alt="placeholder"
                        ></b-img>
                      </template>
                      <h5 class="mt-0">Nested Media</h5>
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </b-media>
                  </b-media-body>
                </b-media>
              </b-card>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>
      </div>
      <div class="col-md-6">
        <KTCodePreview v-bind:title="'Order'">
          <template v-slot:preview>
            <div>
              <b-media right-align vertical-align="center">
                <template v-slot:aside>
                  <b-img
                    blank
                    blank-color="#ccc"
                    width="80"
                    alt="placeholder"
                  ></b-img>
                </template>
                <h5 class="mt-0 mb-1">Media object</h5>
                <p class="mb-0">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
              </b-media>
            </div>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Media list'">
          <template v-slot:preview>
            <div>
              <ul class="list-unstyled">
                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img
                      blank
                      blank-color="#abc"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </b-media>

                <b-media tag="li" class="my-4">
                  <template v-slot:aside>
                    <b-img
                      blank
                      blank-color="#cba"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </b-media>

                <b-media tag="li">
                  <template v-slot:aside>
                    <b-img
                      blank
                      blank-color="#bac"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <h5 class="mt-0 mb-1">List-based media object</h5>
                  <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </p>
                </b-media>
              </ul>
            </div>
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
        html: `<div>
  <b-card>
    <b-media>
      <template v-slot:aside>
        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0">Media Title</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <b-media>
        <template v-slot:aside>
          <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">Nested Media</h5>
        <p class="mb-0">
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </p>
      </b-media>
    </b-media>
  </b-card>
</div>`
      },

      code2: {
        html: `<div>
  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="center">
        <b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
      </b-media-aside>

      <b-media-body class="ml-3">
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <b-media>
          <template v-slot:aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0">Nested Media</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </b-media>
      </b-media-body>
    </b-media>
  </b-card>
</div>`
      },

      code3: {
        html: `<div>
  <b-media right-align vertical-align="center">
    <template v-slot:aside>
      <b-img blank blank-color="#ccc" width="80" alt="placeholder"></b-img>
    </template>
    <h5 class="mt-0 mb-1">Media object</h5>
    <p class="mb-0">
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
      Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
      nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </p>
  </b-media>
</div>`
      },

      code4: {
        html: `<div>
  <ul class="list-unstyled">
    <b-media tag="li">
      <template v-slot:aside>
        <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
      </template>
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>

    <b-media tag="li" class="my-4">
      <template v-slot:aside>
       <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>

    <b-media tag="li">
      <template v-slot:aside>
        <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
      </template>

      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>
  </ul>
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
      { title: "Media" }
    ]);
  }
};
</script>
