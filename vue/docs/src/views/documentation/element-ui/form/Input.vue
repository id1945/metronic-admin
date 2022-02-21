<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#input"></a>
      Input
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">A group of options for multiple choices.</div>
    <!--end::Block-->

    <div class="py-5">
      <div class="rounded py-5 px-5 bg-light-danger">
        <div class="my-5">
          Input is a controlled component, it
          <b>always shows Vue binding value.</b>
        </div>
        <div class="my-5">
          Under normal circumstances, <code>input</code> event should be
          handled. Its handler should update component's binding value (or use
          <code>v-model</code>). Otherwise, input box's value will not change.
        </div>
        <div class="my-5">Do not support <code>v-model</code> modifiers.</div>
      </div>
    </div>
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabled></EUIDisabled>
  <EUIClearable></EUIClearable>
  <EUIPasswordBox></EUIPasswordBox>
  <EUIInputWithIcon></EUIInputWithIcon>
  <EUITextarea></EUITextarea>
  <EUIAutosizeTextarea></EUIAutosizeTextarea>
  <EUIMixedInput></EUIMixedInput>
  <EUISizes></EUISizes>
  <EUIAutocomplete></EUIAutocomplete>
  <EUICustomTemplate></EUICustomTemplate>
  <EUIRemoteSearch></EUIRemoteSearch>
  <EUILimitLength></EUILimitLength>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import EUIBasicUsage from "@/views/documentation/element-ui/form/input/BasicUsage.vue";
import EUIDisabled from "@/views/documentation/element-ui/form/input/Disabled.vue";
import EUIClearable from "@/views/documentation/element-ui/form/input/Clearable.vue";
import EUIPasswordBox from "@/views/documentation/element-ui/form/input/PasswordBox.vue";
import EUIInputWithIcon from "@/views/documentation/element-ui/form/input/InputWithIcon.vue";
import EUITextarea from "@/views/documentation/element-ui/form/input/Textarea.vue";
import EUIAutosizeTextarea from "@/views/documentation/element-ui/form/input/AutosizeTextarea.vue";
import EUIMixedInput from "@/views/documentation/element-ui/form/input/MixedInput.vue";
import EUISizes from "@/views/documentation/element-ui/form/input/Sizes.vue";
import EUIAutocomplete from "@/views/documentation/element-ui/form/input/Autocomplete.vue";
import EUICustomTemplate from "@/views/documentation/element-ui/form/input/CustomTemplate.vue";
import EUIRemoteSearch from "@/views/documentation/element-ui/form/input/RemoteSearch.vue";
import EUILimitLength from "@/views/documentation/element-ui/form/input/LimitLength.vue";

export default defineComponent({
  name: "input",
  components: {
    EUIBasicUsage,
    EUIDisabled,
    EUIClearable,
    EUIPasswordBox,
    EUIInputWithIcon,
    EUITextarea,
    EUIAutosizeTextarea,
    EUIMixedInput,
    EUISizes,
    EUIAutocomplete,
    EUICustomTemplate,
    EUIRemoteSearch,
    EUILimitLength,
  },
  setup() {
    setCurrentPageBreadcrumbs("Input", ["Element UI", "Form"]);
  },
});
</script>
