<template>
  <!--begin::Section-->
  <div class="pb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5" id="overview">
      <a href="#example5"></a>
      Select with custom options slot
    </h1>
    <!--end::Heading-->
    <!--begin::Block-->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example5.value }}
      </div>
      <Multiselect v-model="example5.value" v-bind="example5">
        <template v-slot:singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="character-label-icon" :src="value.icon" />
            {{ value.name }}
          </div>
        </template>

        <template v-slot:option="{ option }">
          <img class="character-option-icon" :src="option.icon" />
          {{ option.name }}
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

<style scoped>
.character-option-icon {
  margin: 0 6px 0 0;
  height: 22px;
}

.character-label-icon {
  margin: 0 6px 0 0;
  height: 26px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Multiselect from "@vueform/multiselect";
import CodeHighlighter2 from "@/components/highlighters/CodeHighlighter2.vue";

export default defineComponent({
  name: "example-5",
  components: {
    Multiselect,
    CodeHighlighter2,
  },
  setup() {
    const example5 = ref({
      value: null,
      placeholder: "Select your character",
      label: "name",
      options: [
        {
          value: "captainamerica",
          name: "Captain America",
          icon: "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png",
        },
        {
          value: "spiderman",
          name: "Spiderman",
          icon: "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png",
        },
        {
          value: "ironman",
          name: "Iron Man",
          icon: "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png",
        },
      ],
    });

    const htmlCode = `<Multiselect
          v-model="example5.value"
          v-bind="example5"
      >
        <template v-slot:singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="character-label-icon" :src="value.icon"> {{ value.name }}
          </div>
        </template>

        <template v-slot:option="{ option }">
          <img class="character-option-icon" :src="option.icon"> {{ option.name }}
        </template>
      </Multiselect>`;

    const jsCode = `const example5 = ref({
      value: null,
      placeholder: "Select your character",
      label: "name",
      options: [
        {
          value: "captainamerica",
          name: "Captain America",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        },
        {
          value: "spiderman",
          name: "Spiderman",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        },
        {
          value: "ironman",
          name: "Iron Man",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        }
      ]
    });`;

    return {
      example5,
      htmlCode,
      jsCode,
    };
  },
});
</script>
