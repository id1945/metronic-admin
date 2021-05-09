<template>
  <div>
    <treeselect
      :multiple="true"
      :options="options"
      :value-consists-of="valueConsistsOf"
      v-model="value"
    />
    <div class="mt-5">
      Selected: <strong>{{ value }}</strong>
    </div>
    <p class="mt-5">Value consists of:</p>
    <p class="options">
      <b-form-radio
        class="custom-control-inline"
        value="ALL"
        v-model="valueConsistsOf"
        >All</b-form-radio
      >
      <b-form-radio
        class="custom-control-inline"
        value="BRANCH_PRIORITY"
        v-model="valueConsistsOf"
        >Branch priority</b-form-radio
      >
      <b-form-radio
        class="custom-control-inline"
        value="LEAF_PRIORITY"
        v-model="valueConsistsOf"
        >Leaf priority</b-form-radio
      >
      <b-form-radio
        class="custom-control-inline"
        value="ALL_WITH_INDETERMINATE"
        v-model="valueConsistsOf"
        >All with indeterminate</b-form-radio
      >
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "treeselect-6",
    value: ["team-i"],
    valueConsistsOf: "BRANCH_PRIORITY",
    options: [
      {
        id: "company",
        label: "Company 🏢",
        children: [
          {
            id: "team-i",
            label: "Team I 👥",
            children: [
              {
                id: "person-a",
                label: "Person A 👱"
              },
              {
                id: "person-b",
                label: "Person B 🧔"
              }
            ]
          },
          {
            id: "team-ii",
            label: "Team II 👥",
            children: [
              {
                id: "person-c",
                label: "Person C 👳"
              },
              {
                id: "person-d",
                label: "Person D 👧"
              }
            ]
          },
          {
            id: "person-e",
            label: "Person E 👩"
          }
        ]
      }
    ]
  })
};
</script>
