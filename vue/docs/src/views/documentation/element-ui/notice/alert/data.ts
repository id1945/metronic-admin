const code1 = `<template>
  <el-alert
    title="success alert"
    type="success">
  </el-alert>
  <el-alert
    title="info alert"
    type="info">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning">
  </el-alert>
  <el-alert
    title="error alert"
    type="error">
  </el-alert>
</template>`;

const code2 = `<template>
  <el-alert
    title="success alert"
    type="success"
    effect="dark">
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    effect="dark">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    effect="dark">
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    effect="dark">
  </el-alert>
</template>
`;

const code3 = `<template>
  <el-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="alert with callback"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const hello = () => {
        alert('Hello World!');
      }
      return {
        hello
      }
    }
  })
</script>`;

const code4 = `<template>
  <el-alert
    title="success alert"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    show-icon>
  </el-alert>
</template>`;

const code5 = `<template>
  <el-alert
    title="success alert"
    type="success"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    center
    show-icon>
  </el-alert>
</template>`;

const code6 = `<template>
  <el-alert
    title="with description"
    type="success"
    description="This is a description.">
  </el-alert>
</template>`;

const code7 = `<template>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </el-alert>`;

export { code1, code2, code3, code4, code5, code6, code7 };
