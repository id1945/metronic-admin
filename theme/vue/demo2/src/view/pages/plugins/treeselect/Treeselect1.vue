<template>
  <div>
    <treeselect
      :multiple="true"
      :options="options"
      placeholder="Select your favourite(s)..."
      v-model="value"
    />
    <div class="mt-5 ml-1">
      Selected: <strong>{{ value }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "treeselect-1",
  data: () => ({
    value: [],
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
