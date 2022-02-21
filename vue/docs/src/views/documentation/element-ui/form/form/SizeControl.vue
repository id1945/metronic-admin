<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#size-control"></a>
      Size control
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      All components in a Form inherit their <code>size</code> attribute from
      that Form. Similarly, FormItem also has a <code>size</code> attribute.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
        <el-form-item label="Activity name">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select
            v-model="sizeForm.region"
            placeholder="please select your zone"
          >
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="sizeForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="Pick a time"
              v-model="sizeForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="sizeForm.type">
            <el-checkbox-button
              label="Online activities"
              name="type"
            ></el-checkbox-button>
            <el-checkbox-button
              label="Promotion activities"
              name="type"
            ></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="sizeForm.resource" size="medium">
            <el-radio border label="Sponsor"></el-radio>
            <el-radio border label="Venue"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "size-control",
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
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
      code7,
    };
  },
});
</script>
