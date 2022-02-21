<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#custom-template"></a>
      Custom template
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Customize how suggestions are displayed.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="Please input"
        @select="handleSelect"
      >
        <template #suffix>
          <i class="el-icon-edit el-input__icon" @click="handleIconClick"></i>
        </template>
        <template #default="{ item }">
          <div class="value">{{ item.value }}</div>
          <span class="link">{{ item.link }}</span>
        </template>
      </el-autocomplete>

      <CodeHighlighter :field-height="400" lang="html">{{
        code11
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>

<script>
import { defineComponent, ref, onMounted } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code11 } from "./data.ts";

export default defineComponent({
  name: "custom-template",
  components: {
    CodeHighlighter,
  },
  setup() {
    const links = ref([]);
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const querySearch = (queryString, cb) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      // call callback function to return suggestion objects
      cb(results);
    };
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
    const handleSelect = (item) => {
      console.log(item);
    };

    const handleIconClick = (ev) => {
      console.log(ev);
    };

    onMounted(() => {
      links.value = loadAll();
    });

    return {
      links,
      state: ref(""),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
      code11,
    };
  },
});
</script>
