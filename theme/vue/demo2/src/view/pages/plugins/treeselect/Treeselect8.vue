<template>
  <treeselect
    :options="options"
    :multiple="true"
    :flatten-search-results="true"
    placeholder="Select..."
  />
</template>

<script>
export default {
  name: "treeselect-8",
  data: () => ({
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
