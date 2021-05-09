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
        <b>Images</b> Documentation and examples for opting images (via
        &lt;b-img&gt; component) into responsive behavior (so they never become
        larger than their parent elements), optionally adding lightweight styles
        to them &mdash; all via props.
        <a
          class="font-weight-bold"
          href="https://bootstrap-vue.js.org/docs/components/form-textarea"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Responsive images'">
          <template v-slot:preview>
            <p>
              Images in BootstrapVue can be made responsive with the
              <code>fluid</code> prop (which sets
              <code>max-width: 100%; height: auto;</code> via CSS classes) so
              that it scales with the parent element - up to the maximum native
              width of the image.
            </p>
            <div>
              <b-img
                src="https://picsum.photos/1024/400/?image=41"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
          </template>
          <template v-slot:html>
            {{ code1.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Fluid grow'">
          <template v-slot:preview>
            <p>
              To make a fluid image that will grow to fill the width of its
              container, use the <code>fluid-grow</code> prop. Note this may
              cause blurring on small bitmap images.
            </p>
            <div>
              <h5>Small image with <code>fluid</code>:</h5>
              <b-img
                src="https://picsum.photos/300/150/?image=41"
                fluid
                alt="Fluid image"
              ></b-img>

              <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
              <b-img
                src="https://picsum.photos/300/150/?image=41"
                fluid-grow
                alt="Fluid-grow image"
              ></b-img>
            </div>
          </template>
          <template v-slot:html>
            {{ code2.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Image thumbnails'">
          <template v-slot:preview>
            <p>
              You can use prop <code>thumbnail</code> to give an image a rounded
              light border appearance.
            </p>
            <b-container fluid class="p-4 bg-dark">
              <b-row>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=54"
                    alt="Image 1"
                  ></b-img>
                </b-col>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=58"
                    alt="Image 2"
                  ></b-img>
                </b-col>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=59"
                    alt="Image 3"
                  ></b-img>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-slot:html>
            {{ code3.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Aligning images'">
          <template v-slot:preview>
            <p>
              Align images with the boolean props <code>left</code> (floats
              left) <code>right</code> (floats right), and
              <code>center</code> (auto left+right margins). You can also center
              images by placing them in a container that has the class
              <code>text-center</code>.
            </p>
            <div class="clearfix">
              <b-img
                left
                src="https://picsum.photos/125/125/?image=58"
                alt="Left image"
              ></b-img>
              <b-img
                right
                src="https://picsum.photos/125/125/?image=58"
                alt="Right image"
              ></b-img>
            </div>
          </template>
          <template v-slot:html>
            {{ code4.html }}
          </template>
        </KTCodePreview>

        <KTCodePreview v-bind:title="'Lazy loaded images'">
          <template v-slot:preview>
            <p>
              Use our complementary <code>&lt;b-img-lazy&gt;</code> image
              component (based on <code> &lt;b-img&gt;</code>) to lazy load
              images as they are scrolled into view (or within
              <code>offset</code> pixels of the viewport).
            </p>
            <div>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(80)"
                alt="Image 1"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(82)"
                alt="Image 2"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(84)"
                alt="Image 3"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(85)"
                alt="Image 4"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(88)"
                alt="Image 5"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(90)"
                alt="Image 6"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(92)"
                alt="Image 7"
              ></b-img-lazy>
              <b-img-lazy
                v-bind="mainProps"
                :src="getImageUrl(94)"
                alt="Image 8"
              ></b-img-lazy>
            </div>
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
        html: `<div>
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
</div>`
      },

      code2: {
        html: `<div>
  <h5>Small image with <code>fluid</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>

  <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
  <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
</div>`
      },

      code3: {
        html: `<b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>`
      },

      code4: {
        html: `<div class="clearfix">
  <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
  <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image"></b-img>
</div>`
      },

      code5: {
        html: `<div>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(82)" alt="Image 2"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(84)" alt="Image 3"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(85)" alt="Image 4"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(88)" alt="Image 5"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(90)" alt="Image 6"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(92)" alt="Image 7"></b-img-lazy>
    <b-img-lazy v-bind="mainProps" :src="getImageUrl(94)" alt="Image 8"></b-img-lazy>
  </div>`,
        js:
          "export default {\n" +
          "    data() {\n" +
          "      return {\n" +
          "        mainProps: {\n" +
          "          center: true,\n" +
          "          fluidGrow: true,\n" +
          "          blank: true,\n" +
          "          blankColor: '#bbb',\n" +
          "          width: 600,\n" +
          "          height: 400,\n" +
          "          class: 'my-5'\n" +
          "        }\n" +
          "      }\n" +
          "    },\n" +
          "    methods: {\n" +
          "      getImageUrl(imageId) {\n" +
          "        const { width, height } = this.mainProps\n" +
          "        return `https://picsum.photos/${width}/${height}/?image=${imageId}`\n" +
          "      }\n" +
          "    }\n" +
          "  }"
      },
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-5"
      }
    };
  },
  components: {
    KTCodePreview
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.mainProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vue Bootstrap", route: "alert" },
      { title: "Images" }
    ]);
  }
};
</script>
