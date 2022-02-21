const code1 = `<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>`;

const code2 = `<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>`;

export { code1, code2 };
