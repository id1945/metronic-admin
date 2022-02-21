<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pb-10">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>
          Updating &nbsp;{{ themeName }}
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-4">
          Like all HTML templates, you will need to manually handle all updates
          that we provide after purchase for free. The best practice is to
          always keep
          {{ themeName }}'s source folder on an entire separate folder within
          your project and then use {{ themeName }} as a development companion
          or support.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-4">
          Each update should be used independently without mixing it with the
          previous versions. This is because new updates may not have a 100%
          backward compatibility for elements within previous versions.
          Therefore, each update is considered as a new and better version of
          the theme.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="pt-4">
          Here's our recommended steps needed to update
          {{ themeName }} effectively:

          <ol class="py-3">
            <li class="py-2">
              Backup all your files (your project folder and {{ themeName }}'s's
              older version).
            </li>
            <li class="py-2">
              Review {{ themeName }}s changelog to have a quick preview on what
              has been updated.
            </li>
            <li class="py-2">
              Unzip the latest version of {{ themeName }} and then browse
              through the elements (layout, widgets, plugins, etc) that you have
              used on your project.
            </li>
            <li class="py-2">
              Get the latest version use it instead the previous version.
            </li>
            <li class="py-2">
              Run <code>yarn install</code> task to update 3rd party plugins
              with their latest versions.
            </li>
            <li class="py-2">
              Compare your project's code vs the latest version of
              {{ themeName }}s code for the used elements.
            </li>
            <li class="py-2">
              Manually replace the element HTML, CSS or JS where necessary.
            </li>
            <li class="py-2">
              Save and test your project files with {{ themeName }}'s updated
              elements.
            </li>
          </ol>

          If something goes wrong, you can revert your updates by reusing your
          backup files.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { themeName } from "@/core/helpers/documentation";

export default defineComponent({
  name: "updates",
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Updates", ["Getting Started"]);
    });

    return {
      themeName,
    };
  },
});
</script>
