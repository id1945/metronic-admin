<template>
  <div class="py-5">
    <div class="highlight">
      <button
        class="highlight-copy btn"
        data-bs-toggle="tooltip"
        title="Copy code"
      >
        copy
      </button>
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            :href="`#kt_highlight_${htmlId}`"
            role="tab"
            aria-selected="true"
            >HTML</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            :href="`#kt_highlight_${jsId}`"
            role="tab"
            aria-selected="false"
            >JAVASCRIPT</a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane fade active show"
          :id="`kt_highlight_${htmlId}`"
          role="tabpanel"
        >
          <div class="highlight-code">
            <pre
              class="language-html"
            ><code class="language-html"><slot name="html"></slot></code></pre>
          </div>
        </div>
        <div class="tab-pane fade" :id="`kt_highlight_${jsId}`" role="tabpanel">
          <div class="highlight-code">
            <pre
              class="language-js"
            ><code class="language-js"><slot name="js"></slot></code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import Prism from "prismjs";
import { useCopyClipboard } from "@/core/helpers/documentation";

export default defineComponent({
  name: "CodeHighlighter",
  props: {
    fieldHeight: Number,
  },
  components: {},
  setup(props) {
    const height = ref(props.fieldHeight);

    const getHeightInPixesls = computed(() => {
      return height.value + "px";
    });

    const { init } = useCopyClipboard();

    onMounted(() => {
      Prism.highlightAll();
      init();
    });

    const id = () => {
      return Math.random().toString(36).substr(2, 9);
    };

    const htmlId = id();
    const jsId = id();

    return {
      getHeightInPixesls,
      htmlId,
      jsId,
    };
  },
});
</script>
