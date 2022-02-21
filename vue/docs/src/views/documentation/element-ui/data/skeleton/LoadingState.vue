<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#loading-state"></a>
      Loading state
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When Loading ends, we always need to show the real UI with data to our end
      users. with the attribtue loading we can control whether showing the DOM.
      You can also use slot default to structure the real DOM element.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space direction="vertical" alignment="flex-start">
        <div>
          <label style="margin-right: 16px">Switch Loading</label>
          <el-switch v-model="loading" />
        </div>
        <el-skeleton style="width: 240px" :loading="loading" animated>
          <template #template>
            <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px"
            />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                  margin-top: 16px;
                  height: 16px;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
          <template #default>
            <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px">
                <span>Delicious hamberger</span>
                <div class="bottom card-header">
                  <span class="time">{{ currentDate }}</span>
                  <el-button type="text" class="button"
                    >Operation button</el-button
                  >
                </div>
              </div>
            </el-card>
          </template>
        </el-skeleton>
      </el-space>

      <CodeHighlighter :field-height="400" lang="html">{{
        code5
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code5 } from "./data";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dayjs = require("dayjs");

export default defineComponent({
  name: "loading-state",
  data() {
    return {
      loading: true,
      currentDate: dayjs().format("YYYY-MM-DD"),
    };
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code5,
    };
  },
});
</script>
