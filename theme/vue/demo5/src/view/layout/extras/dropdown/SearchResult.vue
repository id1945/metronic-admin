<template>
  <perfect-scrollbar
    class="quick-search-wrapper scroll"
    style="max-height: 40vh; position: relative;"
    v-bind:options="{ suppressScrollX: true }"
  >
    <div class="quick-search-result">
      <!--begin::Message-->
      <div v-if="!data" class="text-muted d-none">
        No record found
      </div>
      <!--end::Message-->

      <template v-for="(item, i) in data">
        <!--begin::Section-->
        <div
          v-if="item.type === 0"
          :key="i"
          class="font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
        >
          {{ item.text }}
        </div>
        <!--end::Section-->

        <div
          v-if="item.type === 1"
          :key="i"
          class="d-flex align-items-center flex-grow-1 mb-2"
        >
          <div v-if="item.icon" class="symbol symbol-30 flex-shrink-0">
            <div class="symbol-label">
              <i v-bind:class="item.icon"></i>
            </div>
          </div>

          <div v-if="item.img" class="symbol symbol-30 flex-shrink-0">
            <img class="symbol-label" :src="item.img" alt="" />
          </div>

          <div v-if="item.svg" class="symbol symbol-30 flex-shrink-0">
            <img :src="item.svg" alt="" />
          </div>

          <div class="d-flex flex-column ml-3 mt-2 mb-2">
            <a href="#" class="font-weight-bold text-dark text-hover-primary">
              {{ item.text }}
            </a>
            <div
              v-if="item.desc"
              class="font-size-sm font-weight-bold text-muted"
            >
              {{ item.desc }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </perfect-scrollbar>
</template>

<script>
export default {
  name: "KTSearchResult",
  props: {
    data: Array
  }
};
</script>
