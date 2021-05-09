<template>
  <div>
    <treeselect :options="options" :value="value" :multiple="multiple">
      <div slot="value-label" slot-scope="{ node }">
        {{ node.raw.customLabel }}
      </div>
    </treeselect>
    <p class="mt-5">
      <b-form-checkbox class="custom-control-inline" v-model="multiple"
        >Multi-select</b-form-checkbox
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "treeselect-13",
  data: () => ({
    multiple: true,
    value: null,
    options: [1, 2, 3].map(i => ({
      id: i,
      label: `Label ${i}`,
      customLabel: `Custom Label ${i}`
    }))
  })
};
</script>
