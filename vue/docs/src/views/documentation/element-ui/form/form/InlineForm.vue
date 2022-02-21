<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#inline-form"></a>
      Inline form
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When the vertical space is limited and the form is relatively simple, you
      can put it in one line.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Approved by">
          <el-input
            v-model="formInline.user"
            placeholder="Approved by"
          ></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formInline.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>

      <CodeHighlighter :field-height="400" lang="html">{{
        code2
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code2 } from "./data";

export default defineComponent({
  name: "inline-form",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  setup() {
    return {
      code2,
    };
  },
});
</script>
