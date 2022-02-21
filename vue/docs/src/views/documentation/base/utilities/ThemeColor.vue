<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-3" id="text-colors">
      <a href="#text-colors"></a>
      Theme Colors
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      <b>{{ themeName }}</b> extends
      <a
        href="https://getbootstrap.com/docs/5.0/customize/color/"
        class="fw-bold"
        >Bootstrap Colors</a
      >&nbsp; system with extra variants to cover its own design system build on
      top of the Boostrap Standards. The extended theme color SASS variables are
      defined in <code>src/sass/_variables.scss</code>:
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <CodeHighlighter lang="scss" :fieldHeight="300">{{
      `// Theme colors
$theme-colors: (
    "white":      $white,  // custom color type
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark
) !default;

// Hover colors
$theme-active-colors: (
    "white":      $white-active,   // custom color type
    "primary":    $primary-active,
    "secondary":  $secondary-active,
    "success":    $success-active,
    "info":       $info-active,
    "warning":    $warning-active,
    "danger":     $danger-active,
    "light":      $light-active,
    "dark":       $dark-active
) !default;  // Custom variable

// Inverse colors
$theme-inverse-colors: (
    "white":      $white-inverse,
    "primary":    $primary-inverse,
    "secondary":  $secondary-inverse,
    "success":    $success-inverse,
    "info":       $info-inverse,
    "warning":    $warning-inverse,
    "danger":     $danger-inverse,
    "light":      $light-inverse,
    "dark":       $dark-inverse
) !default;  // Custom variable

// Light colors
$theme-light-colors: (
    "white":      $white-light,
    "primary":    $primary-light,
    "secondary":  $secondary-light,
    "success":    $success-light,
    "info":       $info-light,
    "warning":    $warning-light,
    "danger":     $danger-light,
    "light":      $light-light,
    "dark":       $dark-light
) !default;  // Custom variable

// Text colors
$theme-text-colors: (
    "white":      $white,
    "primary":    $primary,
    "secondary":  $dark,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark,
    "muted":      $text-muted,
    "gray-100":   $gray-100,
    "gray-200":   $gray-200,
    "gray-300":   $gray-300,
    "gray-400":   $gray-400,
    "gray-500":   $gray-500,
    "gray-600":   $gray-600,
    "gray-700":   $gray-700,
    "gray-800":   $gray-800,
    "gray-900":   $gray-900
) !default;  // Custom variable`
    }}</CodeHighlighter>
    <!--end::Code-->

    <!--begin::Info-->
    <Info
      >Custom variables that used to customize Bootstrap components are marked
      with <code>Custom variable</code> comment in
      <code>_variables.scss</code>&nbsp; file.</Info
    >
    <!--end::Info-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { themeName } from "@/core/helpers/documentation";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import Info from "@/components/sections/Info.vue";

export default defineComponent({
  name: "theme-color",
  components: {
    CodeHighlighter,
    Info,
  },
  setup() {
    return {
      themeName,
    };
  },
});
</script>
