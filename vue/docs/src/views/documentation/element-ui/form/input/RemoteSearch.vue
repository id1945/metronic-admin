<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#remote-search"></a>
      Remote search
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Search data from server-side.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      ></el-autocomplete>

      <CodeHighlighter :field-height="400" lang="html">{{
        code12
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code12 } from "./data.ts";

export default defineComponent({
  name: "remote-search",
  components: {
    CodeHighlighter,
  },
  setup() {
    const links = ref([]);
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" },
      ];
    };
    let timeout;
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const querySearchAsync = (queryString, cb) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return {
      links,
      state: ref(""),
      querySearchAsync,
      createFilter,
      loadAll,
      handleSelect,
      code12,
    };
  },
});
</script>
