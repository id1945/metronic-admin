<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#rendering-a-list-of-data"></a>
      Rendering a list of data
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Most of the time, skeleton is used as indicators of rendering a list of
      data which haven't been fetched from server yet, then we need to create a
      list of skeleton out of no where to make it look like it is loading, with
      <code>count</code> attribute, you can control how many these templates you
      need to render to the browser.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <el-space direction="vertical" alignment="flex-start">
        <el-button @click="setLoading">Click me to reload</el-button>
        <el-skeleton
          style="width: 240px"
          :loading="loading"
          animated
          :count="3"
        >
          <template #template>
            <el-skeleton-item
              variant="image"
              style="width: 400px; height: 267px"
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
            <el-card
              :body-style="{ padding: '0px', marginBottom: '1px' }"
              v-for="(item, i) in lists"
              :key="i"
            >
              <img :src="item.imgUrl" class="image multi-content" />
              <div style="padding: 14px">
                <span>{{ item.name }}</span>
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
        code6
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.image.multi-content {
  width: 400px;
  height: 267px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom: none;
}

.el-card {
  margin-bottom: 5px;
}
</style>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code6 } from "./data.ts";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dayjs = require("dayjs");

export default defineComponent({
  name: "rendering-a-list-of-data",
  components: {
    CodeHighlighter,
  },
  data() {
    return {
      loading: true,
      currentDate: dayjs().format("YYYY-MM-DD"),
      lists: [],
    };
  },
  mounted() {
    this.loading = false;
    this.lists = [
      {
        imgUrl:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        name: "Deer",
      },
      {
        imgUrl:
          "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        name: "Horse",
      },
      {
        imgUrl:
          "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        name: "Mountain Lion",
      },
    ];
  },
  methods: {
    setLoading() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  setup() {
    return {
      code6,
    };
  },
});
</script>
