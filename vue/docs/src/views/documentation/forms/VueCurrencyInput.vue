<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <!--begin::Section-->
      <div class="pt-0">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="overview">
          <a href="#overview"></a>
          Overview
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          <a href="https://dm4t2.github.io/vue-currency-input/"
            >Vue Currency Input</a
          >
          allows an easy input of currency formatted numbers. Powered by the
          <a href="https://v3.vuejs.org/guide/composition-api-introduction.html"
            >Vue Composition API</a
          >, it provides a Vue composable for decorating input components with
          currency format capabilities.
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-20">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="simple_html_input_el">
          <a href="#ovesimple_html_input_el"></a>
          Simple HTML input element
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          <CurrencyInput v-model="value1" :options="{ currency: 'EUR' }" />
          <p class="my-5">
            Number value: <code>{{ value1 }}</code>
          </p>
          <CodeHighlighter lang="js" :field-height="300">
            {{`<template>
              <el-input ref="inputRef" :modelValue="formattedValue" />
            </template>

            <script>
              import useCurrencyInput from "vue-currency-input";

              export default {
                name: "ElCurrencyInput",
                props: {
                  modelValue: Number,
                  options: Object,
                },
                setup(props) {
                  const { inputRef, formattedValue } = useCurrencyInput(
                    props.options
                  );

                  return { inputRef, formattedValue };
                },
              };
            </script>
            `}}
          </CodeHighlighter>
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="pt-20">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="usage_with_element_plus">
          <a href="#usage_with_element_plus"></a>
          Usage with Element Plus
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="pt-4">
          <div>
            <ElCurrencyInput
              v-model="value2"
              :options="{ currency: 'CNY', locale: 'zh' }"
            />
            <p class="my-5">
              Number value: <code>{{ value2 }}</code>
            </p>
          </div>
          <CodeHighlighter lang="js" :field-height="300">
            {{`<template>
              <input
                class="form-control form-control-solid"
                ref="inputRef"
                :value="formattedValue"
              />
            </template>

            <script>
              import useCurrencyInput from "vue-currency-input";

              export default {
                name: "CurrencyInput",
                props: {
                  modelValue: Number,
                  options: Object,
                },
                setup(props) {
                  const { formattedValue, inputRef } = useCurrencyInput(
                    props.options
                  );

                  return { inputRef, formattedValue };
                },
              };
            </script>
            `}}
          </CodeHighlighter>
        </div>
        <!--end::Block-->
      </div>
      <!--end::Section-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import CurrencyInput from "@/views/documentation/forms/vue-currency-input/CurrencyInput.vue";
import ElCurrencyInput from "@/views/documentation/forms/vue-currency-input/ElCurrencyInput.vue";

export default defineComponent({
  name: "rtl",
  components: {
    CodeHighlighter,
    CurrencyInput,
    ElCurrencyInput,
  },
  setup() {
    const value1 = ref(0);
    const value2 = ref(0);

    onMounted(() => {
      setCurrentPageBreadcrumbs("Vue Currency Input", ["Forms"]);
    });

    return { value1, value2 };
  },
});
</script>
