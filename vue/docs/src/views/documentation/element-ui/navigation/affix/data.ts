const code1 = `<el-affix :offset="120">
  <el-button type="primary">Offset top 120px</el-button>
</el-affix>`;

const code2 = `<div class="affix-container">
  <el-affix target=".affix-container" :offset="80">
    <el-button type="primary">Target container</el-button>
  </el-affix>
</div>`;

const code3 = `<el-affix position="bottom" :offset="20">
  <el-button type="primary">Offset bottom 20px</el-button>
</el-affix>`;

export { code1, code2, code3 };
