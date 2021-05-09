<template>
  <div :dir="rtl ? 'rtl' : 'ltr'">
    <div>
      <treeselect
        name="demo"
        :multiple="multiple"
        :clearable="clearable"
        :searchable="searchable"
        :disabled="disabled"
        :open-on-click="openOnClick"
        :open-on-focus="openOnFocus"
        :clear-on-select="clearOnSelect"
        :close-on-select="closeOnSelect"
        :always-open="alwaysOpen"
        :append-to-body="appendToBody"
        :options="options"
        :limit="3"
        :max-height="200"
        v-model="value"
      />
      <div class="mt-5">
        Selected: <strong>{{ value }}</strong>
      </div>
    </div>
    <div class="mt-5">
      <div>
        <b-form-checkbox class="custom-control-inline" v-model="multiple"
          >Multi-select</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="clearable"
          >Clearable</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="searchable"
          >Searchable</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="disabled"
          >Disabled</b-form-checkbox
        >
      </div>
      <div>
        <b-form-checkbox class="custom-control-inline" v-model="openOnClick"
          >Open on click</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="openOnFocus"
          >Open on focus</b-form-checkbox
        >
      </div>
      <div>
        <b-form-checkbox class="custom-control-inline" v-model="clearOnSelect"
          >Clear on select</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="closeOnSelect"
          >Close on select</b-form-checkbox
        >
      </div>
      <div>
        <b-form-checkbox class="custom-control-inline" v-model="alwaysOpen"
          >Always open</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="appendToBody"
          >Append to body</b-form-checkbox
        >
        <b-form-checkbox class="custom-control-inline" v-model="rtl"
          >RTL mode</b-form-checkbox
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "treeselect-2",
  data: () => ({
    multiple: true,
    clearable: true,
    searchable: true,
    disabled: false,
    openOnClick: true,
    openOnFocus: false,
    clearOnSelect: true,
    closeOnSelect: false,
    alwaysOpen: false,
    appendToBody: false,
    rtl: false,
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
  }),

  watch: {
    multiple(newValue) {
      if (newValue) {
        this.value = this.value ? [this.value] : [];
      } else {
        this.value = this.value[0];
      }
    }
  }
};
</script>
