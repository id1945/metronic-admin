<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#button-style"></a>
      Button style
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">Radio with button styles.</div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio2" size="medium">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio3" size="small">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington" disabled></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" disabled size="mini">
          <el-radio-button label="New York"></el-radio-button>
          <el-radio-button label="Washington"></el-radio-button>
          <el-radio-button label="Los Angeles"></el-radio-button>
          <el-radio-button label="Chicago"></el-radio-button>
        </el-radio-group>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code4
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code4 } from "./data";

export default defineComponent({
  name: "button-style",
  data() {
    return {
      radio1: "New York",
      radio2: "New York",
      radio3: "New York",
      radio4: "New York",
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code4,
    };
  },
});
</script>
