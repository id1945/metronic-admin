<template>
  <div class="py-5">
    <div class="highlight">
      <button
        class="highlight-copy btn"
        data-bs-toggle="tooltip"
        title=""
        data-bs-original-title="Copy code"
      >
        copy
      </button>
      <div class="highlight-code">
        <pre
          :class="`language-${lang}`"
          :style="{ height: getHeightInPixesls }"
        ><code :class="`language-${lang}`">
          <slot></slot>
        </code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useCopyClipboard } from "@/core/helpers/documentation";
import Prism from "prismjs";

export default defineComponent({
  name: "CodeHighlighter",
  props: {
    lang: String,
    fieldHeight: Number,
  },
  setup(props) {
    const height = ref(props.fieldHeight);

    const { init } = useCopyClipboard();

    const getHeightInPixesls = computed(() => {
      return height.value + "px";
    });

    onMounted(() => {
      Prism.highlightAll();
      init();
    });

    return {
      getHeightInPixesls,
    };
  },
  components: {},
});
</script>
