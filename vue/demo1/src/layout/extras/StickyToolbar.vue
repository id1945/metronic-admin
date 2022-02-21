<template>
  <div>
    <!-- begin::Sticky Toolbar -->
    <ul class="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
      <li class="nav-item mb-2">
        <router-link
          href="#"
          :to="{ name: 'builder' }"
          class="
            btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary
          "
        >
          <i class="flaticon2-gear"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <a
          href="https://keenthemes.com/metronic/?page=docs"
          class="
            btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-warning
          "
          target="_blank"
        >
          <i class="flaticon2-telegram-logo"></i>
        </a>
      </li>
    </ul>
    <!-- end::Sticky Toolbar -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KTStickyToolbar",
});
</script>
