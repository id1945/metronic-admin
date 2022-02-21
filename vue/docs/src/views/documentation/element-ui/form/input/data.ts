const code1 = `<el-input placeholder="Please input" v-model="input"></el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>`;

const code2 = `<el-input
  placeholder="Please input"
  v-model="input"
  :disabled="true">
</el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>`;

const code3 = `<el-input
  placeholder="Please input"
  v-model="input"
  clearable>
</el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>`;

const code4 = `<el-input placeholder="Please input password" v-model="input" show-password></el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>`;

const code5 = `<div class="demo-input-suffix">
  <span class="demo-input-label">Using attributes</span>
  <el-input
    placeholder="Pick a date"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="Type something"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Using slots</span>
  <el-input
    placeholder="Pick a date"
    v-model="input3">
    <template #suffix>
      <i class="el-input__icon el-icon-date"></i>
    </template>
  </el-input>
  <el-input
    placeholder="Type something"
    v-model="input4">
    <template #prefix>
      <i class="el-input__icon el-icon-search"></i>
    </template>
  </el-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('')
    }
  }
})
</script>`;

const code6 = `<el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      textarea: ref('')
    }
  }
})
</script>`;

const code7 = `<el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea2">
</el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref('')
    }
  }
})
</script>`;

const code8 = `<div>
  <el-input placeholder="Please input" v-model="input1">
    <template #prepend>Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input2">
    <template #append>.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input3" class="input-with-select">
    <template #prepend>
      <el-select v-model="select" placeholder="Select">
        <el-option label="Restaurant" value="1"></el-option>
        <el-option label="Order No." value="2"></el-option>
        <el-option label="Tel" value="3"></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
</div>

<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref('')
    }
  }
})
</script>`;

const code9 = `<div class="demo-input-size">
  <el-input
    placeholder="Please Input"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="Please Input"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="Please Input"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="Please Input"
    v-model="input4">
  </el-input>
</div>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref('')
    }
  }
})
</script>`;

const code10 = `<el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const restaurants = ref([]);
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
        // call callback function to return suggestions
        cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      restaurants.value = loadAll();
    });
    return {
      restaurants,
      state1: ref(''),
      state2: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    };
  },
});
</script>`;

const code11 = `<el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect"
>
  <template #suffix>
    <i class="el-icon-edit el-input__icon" @click="handleIconClick"></i>
  </template>
  <template #default="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</el-autocomplete>

<style>
  .my-autocomplete li {
    line-height: normal;
    padding: 7px;
  }
  .my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
  }
  .my-autocomplete li .highlighted .addr {
    color: #ddd;
  }
</style>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([]);

    const querySearch = (queryString, cb) => {
      var results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      // call callback function to return suggestion objects
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };

    const handleIconClick = (ev) => {
      console.log(ev);
    };

    onMounted(() => {
      links.value = loadAll();
    });

    return {
      links,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
    };
  },
});
</script>`;

const code12 = `<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([]);
    const loadAll = () => {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    };
    let timeout;
    const querySearchAsync = (queryString, cb) => {
      var results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return {
      links,
      state: ref(''),
      querySearchAsync,
      createFilter,
      loadAll,
      handleSelect
    };
  },
});
</script>`;

const code13 = `<el-input
  type="text"
  placeholder="Please input"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  setup() {
    return {
      text: ref(''),
      textarea: ref('')
    }
  }
})
</script>`;

export {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10,
  code11,
  code12,
  code13,
};
