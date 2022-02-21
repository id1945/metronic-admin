<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="bg-colors">
          <a href="#bg-colors"></a>
          Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Easily set the background of an element to any contextual class as
          shown below:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.backgroundColors" :key="i">
              <p
                :class="`bg-${item} text-inverse-${item}`"
                class="p-3 fw-bold fw-6"
              >
                .bg-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-white"></div>
            <div class="bg-primary"></div>
            <div class="bg-light"></div>
            <div class="bg-secondary"></div>
            <div class="bg-success"></div>
            <div class="bg-info"></div>
            <div class="bg-warning"></div>
            <div class="bg-danger"></div>
            <div class="bg-dark"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="light-bg-colors">
          <a href="#light-bg-colors"></a>
          Light Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.bg-light-{color}</code> class to set an element's light
          background color defined with <code>$theme-light-colors</code> in
          <code>sass/_variables.scss</code>:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template
              v-for="(item, i) in colors.lightBackgroundColors"
              :key="i"
            >
              <p
                :class="`bg-light-${item} text-${item}`"
                class="p-3 fw-bold fw-6"
              >
                .bg-light-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-light-primary text-primary"></div>
            <div class="bg-light-success text-success"></div>
            <div class="bg-light-info text-info"></div>
            <div class="bg-light-warning text-warning"></div>
            <div class="bg-light-danger text-danger"></div>
            <div class="bg-light-dark text-dark"></div>
            `}}
          </CodeHighlighter>
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="hover-bg-colors">
          <a href="#hover-bg-colors"></a>
          Hover Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.bg-hover-{color}</code> class to set an element's hover
          background color:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.backgroundColors" :key="i">
              <p
                :class="`bg-hover-${item}`"
                class="text-gray-600 p-3 fw-bold fw-6"
              >
                .bg-hover-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-hover-white"></div>
            <div class="bg-hover-primary"></div>
            <div class="bg-hover-light"></div>
            <div class="bg-hover-secondary"></div>
            <div class="bg-hover-success"></div>
            <div class="bg-hover-info"></div>
            <div class="bg-hover-warning"></div>
            <div class="bg-hover-danger"></div>
            <div class="bg-hover-dark"></div>
            `}}
          </CodeHighlighter>
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="hover-light-bg-colors">
          <a href="#hover-light-bg-colors"></a>
          Hover Light Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.bg-hover-light-{color}</code> class to set an element's
          hover light background color:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template
              v-for="(item, i) in colors.lightBackgroundColors"
              :key="i"
            >
              <p
                :class="`bg-hover-light-${item}`"
                class="text-gray-600 p-3 fw-bold fw-6"
              >
                .bg-hover-light-{{ item }}
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-hover-light-primary"></div>
            <div class="bg-hover-light-success"></div>
            <div class="bg-hover-light-info"></div>
            <div class="bg-hover-light-warning"></div>
            <div class="bg-hover-light-danger"></div>
            <div class="bg-hover-light-dark"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="hoverable-bg-colors">
          <a href="#hoverable-bg-colors"></a>
          Hoverable Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.hoverable</code> with <code>.bg-{color}</code> class to set
          an element's background color with hover state:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.backgroundColors" :key="i">
              <p
                :class="`bg-${item}`"
                class="text-gray-600 hoverable p-3 fw-bold fw-6"
              >
                .bg-{{ item }} .hoverable
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-white hoverable"></div>
            <div class="bg-primary hoverable"></div>
            <div class="bg-light hoverable"></div>
            <div class="bg-secondary hoverable"></div>
            <div class="bg-success hoverable"></div>
            <div class="bg-info hoverable"></div>
            <div class="bg-warning hoverable"></div>
            <div class="bg-danger hoverable"></div>
            <div class="bg-dark hoverable"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-3" id="hoverable-bg-colors">
          <a href="#hoverable-bg-colors"></a>
          Hoverable Light Background Colors
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.hoverable</code> with <code>.bg-light-{color}</code> class
          to set an element's light background color with hover state:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <template v-for="(item, i) in colors.backgroundColors" :key="i">
              <p
                :class="`bg-light-${item}`"
                class="text-gray-600 hoverable p-3 fw-bold fw-6"
              >
                .bg-light-{{ item }} .hoverable
              </p>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-light-primary hoverable"></div>
            <div class="bg-light-success hoverable"></div>
            <div class="bg-light-info hoverable"></div>
            <div class="bg-light-warning hoverable"></div>
            <div class="bg-light-danger hoverable"></div>
            <div class="bg-light-dark hoverable"></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="opacity">
          <a href="#opacity"></a>
          Opacity
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Use <code>.bg-opacity-{0, 5, 10, 15, 20, 25, 50, 75, 100}</code> class
          with <code>.bg-{color}</code> and <code>.bg-light-{color}</code> to
          set an element's background color with opacity:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10 d-flex flex-wrap">
            <template v-for="(item, i) in colors.opacity" :key="i">
              <div class="d-flex flex-column me-5 mb-5">
                <div
                  :class="`opacity-${item}`"
                  class="w-90px h-90px bg-primary flex-grow-1"
                ></div>
                <div class="fw-bold py-2">bg-opacity-{{ item }}</div>
              </div>
            </template>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div class="bg-opacity-0 bg-primary"></div>
            <div class="bg-opacity-5 bg-primary"></div>
            <div class="bg-opacity-10 bg-primary"></div>
            <div class="bg-opacity-15 bg-primary"></div>
            <div class="bg-opacity-20 bg-primary"></div>
            <div class="bg-opacity-25 bg-primary"></div>
            <div class="bg-opacity-50 bg-primary"></div>
            <div class="bg-opacity-75 bg-primary"></div>
            <div class="bg-opacity-100 bg-primary"></div>
            ` }}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="bg-image-classes">
          <a href="#bg-image-classes"></a>
          Background Image Classes
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
          Assign background image style values to an element with shorthand
          classes with the format <code>bgi-{property}</code>.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          Where <code>property</code> is one of:
          <ul class="pt-3">
            <li class="py-2">
              <code>size-length</code> to set
              <code>background-size: length</code>
            </li>
            <li class="py-2">
              <code>size-cover</code> to set <code>background-size: cover</code>
            </li>
            <li class="py-2">
              <code>size-contain</code> to set
              <code>background-size: contain</code>
            </li>
            <li class="py-2">
              <code>no-repeat</code> to set
              <code>background-repeat: no-repeat</code>
            </li>
            <li class="py-2">
              <code>position-y-top</code> to set
              <code>background-position-y: top</code>
            </li>
            <li class="py-2">
              <code>position-y-bottom</code> to set
              <code>background-position-y: bottom</code>
            </li>
            <li class="py-2">
              <code>position-y-center</code> to set
              <code>background-position-y: center</code>
            </li>
            <li class="py-2">
              <code>position-x-left</code> to set
              <code>background-position-x: left</code>
            </li>
            <li class="py-2">
              <code>position-x-right</code> to set
              <code>background-position-x: right</code>
            </li>
            <li class="py-2">
              <code>position-x-center</code> to set
              <code>background-position-x: center</code>
            </li>
            <li class="py-2">
              <code>position-bottom</code> to set
              <code>background-position: 0 bottom</code>
            </li>
            <li class="py-2">
              <code>position-center</code> to set
              <code>background-position: center</code>
            </li>
          </ul>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <CodeHighlighter lang="html"
            >{{`
            <div
              style="background-image: url(image.png)"
              class="bgi-size-contain bgi-no-repeat bgi-position-center"
            ></div>
            `}}</CodeHighlighter
          >
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "background",
  components: {
    CodeHighlighter,
  },
  setup() {
    const colors = ref({
      backgroundColors: [
        "white",
        "primary",
        "light",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
      ],
      lightBackgroundColors: [
        "primary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
      ],
      opacity: [0, 5, 10, 15, 20, 25, 50, 75, 100],
    });

    onMounted(() => {
      setCurrentPageBreadcrumbs("Background", ["Base", "Helpers"]);
    });

    return {
      colors,
    };
  },
});
</script>
