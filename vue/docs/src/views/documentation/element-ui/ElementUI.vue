<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <router-view></router-view>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
i {
  font-size: unset;
  color: unset;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "element-ui",
  components: {},
});
</script>
