const code1 = `<el-dropdown>
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item disabled>Action 4</el-dropdown-item>
      <el-dropdown-item divided>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>`;

const code2 = `<el-dropdown>
  <el-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
      <el-dropdown-item>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>
<el-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
      <el-dropdown-item>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<style>
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>`;

const code3 = `<el-row class="block-col-2">
  <el-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">click to trigger</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <el-dropdown trigger="contextmenu">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
</el-row>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>`;

const code4 = `<el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item disabled>Action 4</el-dropdown-item>
      <el-dropdown-item divided>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>`;

const code5 = `<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item command="a">Action 1</el-dropdown-item>
      <el-dropdown-item command="b">Action 2</el-dropdown-item>
      <el-dropdown-item command="c">Action 3</el-dropdown-item>
      <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
      <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>`;

const code6 = `<el-dropdown split-button type="primary">
  Default
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<el-dropdown size="medium" split-button type="primary">
  Medium
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>


<el-dropdown size="small" split-button type="primary">
  Small
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>

<el-dropdown size="mini" split-button type="primary">
  Mini
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>`;

export { code1, code2, code3, code4, code5, code6 };
