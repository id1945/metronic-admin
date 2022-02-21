<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#number-validate"></a>
      Number Validate
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="age"
          prop="age"
          :rules="[
            { required: true, message: 'age is required' },
            { type: 'number', message: 'age must be a number' },
          ]"
        >
          <el-input
            type="age"
            v-model.number="numberValidateForm.age"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')"
            >Submit</el-button
          >
          <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
        </el-form-item>
      </el-form>

      <CodeHighlighter :field-height="400" lang="html">{{
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data.ts";

export default defineComponent({
  name: "number-validate",
  data() {
    return {
      numberValidateForm: {
        age: "",
      },
    };
  },
  components: {
    CodeHighlighter,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
