<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#autocomplete"></a>
      Autocomplete
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can get some recommended tips based on the current input.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-row class="demo-autocomplete">
        <el-col :span="12">
          <div class="sub-title">list suggestions when activated</div>
          <el-autocomplete
            style="margin-top: 15px"
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
        <el-col :span="12">
          <div class="sub-title">list suggestions on input</div>
          <el-autocomplete
            style="margin-top: 15px"
            class="inline-input"
            v-model="state2"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>

      <CodeHighlighter :field-height="400" lang="html">{{
        code10
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code10 } from "./data.ts";

export default defineComponent({
  name: "autocomplete",
  components: {
    CodeHighlighter,
  },
  setup() {
    const restaurants = ref([]);
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
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // call callback function to return suggestions
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
    onMounted(() => {
      restaurants.value = loadAll();
    });
    return {
      restaurants,
      state1: ref(""),
      state2: ref(""),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      code10,
    };
  },
});
</script>
