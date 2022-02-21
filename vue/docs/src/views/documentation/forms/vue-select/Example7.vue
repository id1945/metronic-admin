<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example-7"></a>
      Tags with custom tags slot
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example7.value }}
      </div>
      <Multiselect v-model="example7.value" v-bind="example7">
        <template v-slot:tag="{ option, handleTagRemove, disabled }">
          <div class="multiselect-tag is-user">
            <img :src="option.image" />
            {{ option.name }}
            <i
              v-if="!disabled"
              @click.prevent
              @mousedown.prevent.stop="handleTagRemove(option, $event)"
            ></i>
          </div>
        </template>

        <template v-slot:option="{ option }">
          <img class="user-image" :src="option.image" /> {{ option.name }}
        </template>
      </Multiselect>
      <CodeHighlighter2>
        <template v-slot:html>{{ htmlCode }}</template>
        <template v-slot:js>{{ jsCode }}</template>
      </CodeHighlighter2>
    </div>
    <!--end::Block-->
  </div>
  <!--end::Card-->
</template>

<style>
.multiselect-tag.is-user {
  padding: 5px 8px;
  border-radius: 22px;
  background: #35495e;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
  width: 18px;
  border-radius: 50%;
  height: 18px;
  margin-right: 8px;
  border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i:before {
  color: #ffffff;
  border-radius: 50%;
}

.user-image {
  margin: 0 6px 0 0;
  border-radius: 50%;
  height: 22px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Multiselect from "@vueform/multiselect";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "example-7",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example7 = ref({
      mode: "tags",
      value: [],
      placeholder: "Select employees",
      search: true,
      trackBy: "name",
      label: "name",
      options: [
        {
          value: "judy",
          name: "Judy",
          image: "https://randomuser.me/api/portraits/med/women/1.jpg",
        },
        {
          value: "jane",
          name: "Jane",
          image: "https://randomuser.me/api/portraits/med/women/2.jpg",
        },
        {
          value: "john",
          name: "John",
          image: "https://randomuser.me/api/portraits/med/men/1.jpg",
        },
        {
          value: "joe",
          name: "Joe",
          image: "https://randomuser.me/api/portraits/med/men/2.jpg",
        },
      ],
    });

    const htmlCode = `<Multiselect
      v-model="example7.value"
      v-bind="example7"
    >
      <template v-slot:tag="{ option, handleTagRemove, disabled }">
        <div class="multiselect-tag is-user">
          <img :src="option.image">
          {{ option.name }}
          <i
            v-if="!disabled"
            @click.prevent
            @mousedown.prevent.stop="handleTagRemove(option, $event)"
          ></i>
        </div>
      </template>

      <template v-slot:option="{ option }">
        <img class="user-image" :src="option.image"> {{ option.name }}
      </template>
    </Multiselect>`;

    const jsCode = `const example7 = ref({
      mode: "tags",
      value: [],
      placeholder: "Select employees",
      search: true,
      trackBy: "name",
      label: "name",
      options: [
        {
          value: "judy",
          name: "Judy",
          image: "https://randomuser.me/api/portraits/med/women/1.jpg"
        },
        {
          value: "jane",
          name: "Jane",
          image: "https://randomuser.me/api/portraits/med/women/2.jpg"
        },
        {
          value: "john",
          name: "John",
          image: "https://randomuser.me/api/portraits/med/men/1.jpg"
        },
        {
          value: "joe",
          name: "Joe",
          image: "https://randomuser.me/api/portraits/med/men/2.jpg"
        }
      ]
    });`;

    return {
      example7,
      htmlCode,
      jsCode,
    };
  },
});
</script>
