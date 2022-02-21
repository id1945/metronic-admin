const code1 = `<el-badge :value="12" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">replies</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item class="clearfix">
        comments
        <el-badge class="mark" :value="12" />
      </el-dropdown-item>
      <el-dropdown-item class="clearfix">
        replies
        <el-badge class="mark" :value="3" />
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>`;

const code2 = `<el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>`;

const code3 = `<el-badge value="new" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>`;

const code4 = `<el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>`;

export { code1, code2, code3, code4 };
