<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h2 class="anchor fw-bolder mb-5">
      <a href="#customizable"></a>
      Customizable
    </h2>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      You can customize list titles, button texts, render function for data
      items, checking status texts in list footer and list footer contents.
    </div>
    <!--end::Block-->

    <div class="rounded border p-10">
      <p style="text-align: center; margin: 0 0 20px">
        Customize data items using render-content
      </p>
      <div style="text-align: center">
        <el-transfer
          v-model="leftValue"
          style="text-align: left; display: inline-block"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['To left', 'To right']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}',
          }"
          :data="data"
          @change="handleChange"
        >
          <template #left-footer>
            <el-button class="transfer-footer" size="small"
              >Operation</el-button
            >
          </template>
          <template #right-footer>
            <el-button class="transfer-footer" size="small"
              >Operation</el-button
            >
          </template>
        </el-transfer>
        <p style="text-align: center; margin: 50px 0 20px">
          Customize data items using scoped slot
        </p>
        <div style="text-align: center">
          <el-transfer
            v-model="rightValue"
            style="text-align: left; display: inline-block"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['Source', 'Target']"
            :button-texts="['To left', 'To right']"
            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}',
            }"
            :data="data"
            @change="handleChange"
          >
            <template #default="{ option }">
              <span>{{ option.key }} - {{ option.label }}</span>
            </template>
            <template #left-footer>
              <el-button class="transfer-footer" size="small"
                >Operation</el-button
              >
            </template>
            <template #right-footer>
              <el-button class="transfer-footer" size="small"
                >Operation</el-button
              >
            </template>
          </el-transfer>
        </div>
      </div>

      <CodeHighlighter :field-height="400" lang="html">{{
        code1
      }}</CodeHighlighter>
    </div>
  </div>
</template>

<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>

<script>
import { defineComponent } from "vue";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { code1 } from "./data.ts";

export default defineComponent({
  name: "customizable",
  components: {
    CodeHighlighter,
  },
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      rightValue: [1],
      leftValue: [1],
      renderFunc(h, option) {
        return h("span", null, option.key, " - ", option.label);
      },
      code1,
    };
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
  },
});
</script>
