<template>
  <div
    id="kt_docs_header"
    class="docs-header align-items-stretch mb-2 mb-lg-10"
  >
    <div class="container-xxl">
      <div
        class="d-flex align-items-stretch justify-content-between py-3 h-75px"
      >
        <div
          class="d-flex align-items-center d-lg-none me-3"
          title="Show aside menu"
        >
          <div
            class="btn btn-icon btn-flex btn-active-color-primary"
            id="kt_docs_aside_toggle"
          >
            <span class="svg-icon svg-icon-2tx mt-1">
              <inline-svg src="media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>

        <div
          class="
            d-flex d-lg-none
            align-items-center
            flex-grow-1 flex-lg-grow-0
            me-lg-15
          "
        >
          <a href="#">
            <img alt="Logo" src="media/logos/logo-1.svg" class="h-25px" />
          </a>
        </div>

        <div
          class="
            d-flex
            align-items-center
            justify-content-between
            flex-lg-grow-1
          "
        >
          <div class="d-flex align-items-center" id="kt_docs_header_title">
            <div
              class="
                docs-page-title
                d-flex
                flex-column flex-lg-row
                align-items-lg-center
                py-5
                mb-lg-0
              "
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_docs_content_container', 'lg': '#kt_docs_header_title'}"
            >
              <h1 class="d-flex align-items-center text-dark my-1 fs-4">
                Documentation
                <router-link
                  to="/documentation/changelog"
                  class="
                    badge badge-light-danger
                    bg-hover-danger
                    text-hover-white
                    fw-bold
                    fs-9
                    px-2
                    ms-2
                  "
                  >v{{ version }}</router-link
                >
              </h1>

              <span class="h-20px border-gray-200 border-start mx-4"></span>
              <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-6 my-1">
                <template v-for="(item, index) in breadcrumbs" :key="index">
                  <li class="breadcrumb-item text-muted">
                    {{ item }}
                  </li>
                  <li class="breadcrumb-item">
                    <span class="bullet bg-gray-200 w-5px h-2px"></span>
                  </li>
                </template>
                <li class="breadcrumb-item text-dark">
                  {{ title }}
                </li>
              </ul>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <a
              class="
                btn btn-bg-white btn-color-gray-700 btn-active-primary
                fw-bolder
                me-4
              "
              href="https://preview.keenthemes.com/metronic8"
              target="_blank"
              >Preview</a
            >
            <a
              class="btn btn-primary fw-bolder"
              href="https://1.envato.market/EA4JP"
              target="_blank"
              >Purchase</a
            >
          </div>
        </div>
      </div>
      <div class="border-gray-300 border-bottom border-bottom-dashed"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { version } from "@/core/helpers/documentation";

export default defineComponent({
  name: "KTHeader",
  props: {
    title: String,
    breadcrumbs: String,
  },
  setup() {
    return {
      version,
    };
  },
});
</script>
