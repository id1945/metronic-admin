<template>
  <treeselect
    :options="options"
    :value="value"
    :searchable="false"
    :show-count="true"
    :default-expand-level="1"
  >
    <label
      slot="option-label"
      slot-scope="{
        node,
        shouldShowCount,
        count,
        labelClassName,
        countClassName
      }"
      :class="labelClassName"
    >
      {{ node.isBranch ? "Branch" : "Leaf" }}: {{ node.label }}
      <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
    </label>
  </treeselect>
</template>

<script>
export default {
  name: "treeselect-12",
  data: () => ({
    value: null,
    options: [
      {
        id: "fruits",
        label: "Fruits",
        children: [
          {
            id: "apple",
            label: "Apple 🍎",
            isNew: true
          },
          {
            id: "grapes",
            label: "Grapes 🍇"
          },
          {
            id: "pear",
            label: "Pear 🍐"
          },
          {
            id: "strawberry",
            label: "Strawberry 🍓"
          },
          {
            id: "watermelon",
            label: "Watermelon 🍉"
          }
        ]
      },
      {
        id: "vegetables",
        label: "Vegetables",
        children: [
          {
            id: "corn",
            label: "Corn 🌽"
          },
          {
            id: "carrot",
            label: "Carrot 🥕"
          },
          {
            id: "eggplant",
            label: "Eggplant 🍆"
          },
          {
            id: "tomato",
            label: "Tomato 🍅"
          }
        ]
      }
    ]
  })
};
</script>
