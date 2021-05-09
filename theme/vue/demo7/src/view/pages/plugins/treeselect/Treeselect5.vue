<template>
  <div>
    <treeselect
      :multiple="true"
      :options="options"
      :flat="true"
      :sort-value-by="sortValueBy"
      :default-expand-level="1"
      placeholder="Try selecting some options."
      v-model="value"
    />
    <div class="mt-5">
      Selected: <strong>{{ value }}</strong>
    </div>
    <p class="mt-5">Sort value by:</p>
    <p class="options">
      <b-form-radio
        class="custom-control-inline"
        value="ORDER_SELECTED"
        v-model="sortValueBy"
        >Order selected</b-form-radio
      >
      <b-form-radio
        class="custom-control-inline"
        value="LEVEL"
        v-model="sortValueBy"
        >Level</b-form-radio
      >
      <b-form-radio
        class="custom-control-inline"
        value="INDEX"
        v-model="sortValueBy"
        >Index</b-form-radio
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "treeselect-5",
  data() {
    return {
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
      ],
      sortValueBy: "ORDER_SELECTED"
    };
  }
};
</script>
