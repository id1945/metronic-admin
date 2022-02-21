const code1 = `<template>
  <el-space wrap>
    <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>`;

const code2 = `<template>
  <el-space direction="vertical">
    <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>`;

const code3 = `<template>
  <el-space direction="vertical" alignment="start" :size="30">
  <el-radio-group v-model="size">
    <el-radio :label="'mini'">mini</el-radio>
    <el-radio :label="'small'">small</el-radio>
    <el-radio :label="'medium'">medium</el-radio>
    <el-radio :label="'large'">large</el-radio>
  </el-radio-group>

  <el-space wrap :size="size">
    <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
  </el-space>
</template>

<script>

export default {

  data() {
    return {
      size: 'mini',
    }
  }
}
</script>`;

const code4 = `<template>
  <el-slider v-model="size" />
  <el-space wrap :size="size">
    <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>

<script>
export default {

  data() {
    return {
      size: 20,
    }
  }
}
</script>`;

const code5 = `<el-space wrap>
  <div v-for="i in 20" :key="i">
    <el-button type="text">
      Text button
    </el-button>
  </div>
</el-space>`;

const literalCode6 = `<template>
 <el-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <el-button>
        button {{ i }}
      </el-button>
    </div>
  </el-space>
</template>

<script>

export default {
  data() {
    return {
      size: 10,
    }
  },
}
</script>`;

const spacerCode6 = `<template>
 <el-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <el-button>
        button {{ i }}
      </el-button>
    </div>
  </el-space>
</template>

<script>
import { h, resolveComponent } from 'vue'
import { ElDivider } from 'element-plus'
export default {
  data() {
    return {
      size: 10,
      spacer: h(ElDivider, { direction: 'vertical' }),
    }
  },
}
</script>`;

const code7 = `<template>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space>
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space alignment="flex-start">
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <el-space alignment="flex-end">
      string
      <el-button>
        button
      </el-button>
      <el-card>
        <template #header>
          header
        </template>
        body
      </el-card>
    </el-space>
  </div>
</template>`;

export { code1, code2, code3, code4, code5, literalCode6, spacerCode6, code7 };
