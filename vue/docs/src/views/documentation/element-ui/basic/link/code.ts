const code1 = `<div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>`;

const code2 = `<div>
  <el-link disabled>default</el-link>
  <el-link type="primary" disabled>primary</el-link>
  <el-link type="success" disabled>success</el-link>
  <el-link type="warning" disabled>warning</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>`;

const code3 = `<div>
  <el-link :underline="false">Without Underline</el-link>
  <el-link>With Underline</el-link>
</div>`;

const code4 = `<div>
  <el-link icon="el-icon-edit">Edit</el-link>
  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
</div>`;

export { code1, code2, code3, code4 };
