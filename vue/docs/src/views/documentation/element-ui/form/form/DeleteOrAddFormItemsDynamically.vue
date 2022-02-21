<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#delete-or-add-form-items-dynamically"></a>
      Delete or add form items dynamically
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          label="Email"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'Domain' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
        >
          <el-input v-model="domain.value"></el-input
          ><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')"
            >Submit</el-button
          >
          <el-button @click="addDomain">New domain</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
        </el-form-item>
      </el-form>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data.ts";

export default defineComponent({
  name: "delete-or-add-form-items-dynamically",
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            key: 1,
            value: "",
          },
        ],
        email: "",
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
    removeDomain(item) {
      const index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        key: Date.now(),
        value: "",
      });
    },
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
