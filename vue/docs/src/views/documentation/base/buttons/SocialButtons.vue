<template>
  <!--begin::Section-->
  <div class="pt-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="social">
      <a href="#social"></a>
      Social Buttons
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use <code>.btn-{social}</code> and
      <code>.btn-light-{social}</code> classes with
      <a href="https://fontawesome.com" class="fw-bold" target="_blank"
        >Font Awesome</a
      >&nbsp; or
      <a href="https://icons.getbootstrap.com" class="fw-bold" target="_blank"
        >Bootstrap Icons</a
      >&nbsp; social icons for supporting buttons with social brand logos and
      colors.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      Where <code>social</code> is one the below options defined with
      <code>$social-colors</code> custom variable in
      <code>src/sass/_variables.scss</code>.
      <ul class="py-3">
        <li class="py-2"><code>facebook</code></li>
        <li class="py-2"><code>google</code></li>
        <li class="py-2"><code>twitter</code></li>
        <li class="py-2"><code>instagram</code></li>
        <li class="py-2"><code>youtube</code></li>
        <li class="py-2"><code>linkedin</code></li>
      </ul>

      Other social colors can be added by referring to
      <a href="https://brandcolors.net/" class="fw-bold">brandcolors.net</a>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
      <div class="rounded border p-10">
        <a href="#" class="btn btn-icon btn-facebook me-5"
          ><i class="fab fa-facebook-f fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-google me-5"
          ><i class="fab fa-google fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-twitter me-5"
          ><i class="fab fa-twitter fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-instagram me-5"
          ><i class="fab fa-instagram fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-youtube me-5"
          ><i class="fab fa-youtube fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-linkedin me-5"
          ><i class="fab fa-linkedin fs-4"></i
        ></a>

        <div class="separator my-10"></div>

        <a href="#" class="btn btn-icon btn-light-facebook me-5"
          ><i class="fab fa-facebook-f fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-google me-5"
          ><i class="fab fa-google fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-twitter me-5"
          ><i class="fab fa-twitter fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-instagram me-5"
          ><i class="fab fa-instagram fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-youtube me-5"
          ><i class="fab fa-youtube fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-linkedin me-5"
          ><i class="fab fa-linkedin fs-4"></i
        ></a>
      </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5">
      <CodeHighlighter lang="html"
        >{{`<a href="#" class="btn btn-icon btn-facebook me-5"
          ><i class="fab fa-facebook-f fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-google me-5"
          ><i class="fab fa-google fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-twitter me-5"
          ><i class="fab fa-twitter fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-instagram me-5"
          ><i class="fab fa-instagram fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-youtube me-5"
          ><i class="fab fa-youtube fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-linkedin me-5"
          ><i class="fab fa-linkedin fs-4"></i
        ></a>

        <a href="#" class="btn btn-icon btn-light-facebook me-5"
          ><i class="fab fa-facebook-f fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-google me-5"
          ><i class="fab fa-google fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-twitter me-5"
          ><i class="fab fa-twitter fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-instagram me-5"
          ><i class="fab fa-instagram fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-youtube me-5"
          ><i class="fab fa-youtube fs-4"></i
        ></a>
        <a href="#" class="btn btn-icon btn-light-linkedin me-5"
          ><i class="fab fa-linkedin fs-4"></i></a
        >`}}</CodeHighlighter
      >
    </div>
    <!--end::Code-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "overview",
  components: {
    CodeHighlighter,
  },
});
</script>
