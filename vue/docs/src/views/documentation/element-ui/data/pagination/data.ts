const code1 = `<div class="block">
  <span class="demonstration">When you have few pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">When you have more than 7 pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>`;

const code2 = `<el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>`;

const code3 = `<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>`;

const code4 = `<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>`;

const code5 =
  `<template>
  <div class="block">
    <span class="demonstration">Total item count</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-model:currentPage="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(\`` +
  String.fromCharCode(0x24) +
  `{val} items per page\`);
      },
      handleCurrentChange(val) {
        console.log(\`current page: ` +
  String.fromCharCode(0x24) +
  `{val}\`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>`;

const code6 = `<div>
 <el-switch v-model="value">
 </el-switch>
 <el-pagination
  :hide-on-single-page="value"
  :total="5"
  layout="prev, pager, next">
</el-pagination>
</div>

<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>`;

export { code1, code2, code3, code4, code5, code6 };
