<template>
  <!--begin::Page title-->
  <div class="page-title d-flex flex-column me-3">
    <!--begin::Title-->
    <h1 class="d-flex text-white fw-bolder my-1 fs-3">
      {{ title }}
    </h1>
    <!--end::Title-->

    <!--begin::Breadcrumb-->
    <ul
      v-if="breadcrumbs"
      class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
    >
      <li class="breadcrumb-item text-white opacity-75">
        <router-link to="/dashboard" class="text-white"> Home </router-link>
      </li>
      <li class="breadcrumb-item text-white opacity-75">
        <span class="bullet bg-gray-200 w-5px h-2px"></span>
      </li>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <li class="breadcrumb-item text-white opacity-75">
          {{ item }}
        </li>
        <li class="breadcrumb-item text-white opacity-75">
          <span class="bullet bg-gray-200 w-5px h-2px"></span>
        </li>
      </template>
      <li class="breadcrumb-item text-white opacity-75">
        {{ title }}
      </li>
    </ul>
    <!--end::Breadcrumb-->
  </div>
  <!--end::Page title-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mobile-page-title",
  components: {},
  props: {
    breadcrumbs: Array,
    title: String,
  },
});
</script>
