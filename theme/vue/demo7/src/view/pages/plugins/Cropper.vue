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
        <b>Cropper</b> provides JS cropping script which allows crop images.
        <a
          class="font-weight-bold"
          href="https://github.com/fengyuanchen/cropperjs"
          target="_blank"
        >
          See documentation.
        </a>
      </div>
    </b-alert>

    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
    />
    <div class="card card-custom content">
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <p>CrooperJS:</p>
            <div class="img-cropper">
              <vue-cropper
                ref="cropper"
                :src="imgSrc"
                preview=".preview"
                class="cropper-min-height"
              />
            </div>
            <div class="actions">
              <b-button-group vertical class="mr-3 mb-3">
                <b-button @click="zoom(0.2)">
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                </b-button>
                <b-button @click="zoom(-0.2)">
                  <i class="fa fa-search-minus" aria-hidden="true"></i>
                </b-button>
              </b-button-group>

              <b-button-group vertical class="mr-3 mb-3">
                <b-button @click="move(-10, 0)">
                  <i class="fa fa-caret-left" aria-hidden="true"></i>
                </b-button>
                <b-button @click="move(10, 0)">
                  <i class="fa fa-caret-right" aria-hidden="true"></i>
                </b-button>
              </b-button-group>

              <b-button-group vertical class="mr-3 mb-3">
                <b-button @click="move(0, -10)">
                  <i class="fa fa-caret-up" aria-hidden="true"></i>
                </b-button>
                <b-button @click="move(0, 10)">
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </b-button>
              </b-button-group>

              <b-button-group vertical class="mr-3 mb-3">
                <b-button @click="rotate(90)">
                  <i class="fa fa-share" aria-hidden="true"></i>
                </b-button>
                <b-button @click="rotate(-90)">
                  <i class="fa fa-reply" aria-hidden="true"></i>
                </b-button>
              </b-button-group>

              <b-button @click="cropImage" class="mr-3 mb-3">
                <i class="fa fa-crop" aria-hidden="true"></i>
              </b-button>
              <b-button @click="reset" class="mr-3 mb-3">
                <i class="fa fa-arrows-alt" aria-hidden="true"></i>
              </b-button>
              <b-button @click="showFileChooser" class="mr-3 mb-3">
                <i class="fa fa-upload" aria-hidden="true"></i>
              </b-button>
              <b-button @click="download" class="mr-3 mb-3">
                <i class="fa fa-download" aria-hidden="true"></i>
              </b-button>
            </div>
          </div>
          <div class="col-md-4">
            <div style="min-height:209px">
              <p>Preview</p>
              <div class="w-100 cropped-img mt-2 preview secondary" />
            </div>
            <div>
              <p>Cropped Image</p>
              <div class="cropped-image secondary">
                <img v-if="cropImg" :src="cropImg" alt="Cropped Image" />
                <div v-else class="crop-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "Cooper-1",
  components: {
    VueCropper
  },
  data() {
    return {
      imgSrc: "media/stock-600x400/img-9.jpg",
      cropImg: "",
      fileExtension: "png"
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Cropper" }]);
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },
    setImage(e) {
      const file = e.target.files[0];
      this.fileExtension = file.name.split(".").pop();
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    download() {
      if (this.cropImg) {
        var extention = this.fileExtension;
        var href = this.cropImg;
        var link = document.createElement("a");
        link.addEventListener(
          "click",
          function() {
            link.href = href;
            link.download = "cropper-img." + extention;
            // console.log(link.download);
          },
          false
        );
        link.click();
      } else {
        alert("Please, crop image before download it");
      }
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
input[type="file"] {
  display: none;
}

.content {
  display: flex;
  justify-content: space-between;
}

.actions {
  margin-top: 1rem;
}

.preview-area p:last-of-type {
  margin-top: 1rem;
}

.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}

.cropped-image img {
  max-width: 100%;
}

.cropper-bg {
  background-repeat: repeat;
}

.cropper-min-height {
  min-height: 400px;
}
</style>
