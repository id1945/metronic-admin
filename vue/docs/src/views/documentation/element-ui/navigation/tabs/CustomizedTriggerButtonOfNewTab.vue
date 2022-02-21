<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customized-trigger-button-of-new-tab"></a>
      Customized trigger button of new tab
    </h2>
    <!--end::Heading-->

    <div class="rounded border p-10">
      <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue)">
          add tab
        </el-button>
      </div>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>

      <CodeHighlighter :field-height="400" lang="html">{{
        code7
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code7 } from "./data";

export default defineComponent({
  name: "customized-trigger-button-of-new-tab",
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addTab(targetName) {
      const newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      const tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
  components: {
    CodeHighlighter,
  },
  setup() {
    return {
      code7,
    };
  },
});
</script>
