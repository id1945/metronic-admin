const code1 = `<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        }, {
          text: 'A week ago',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        }],
        value1: '',
        value2: '',
      };
    }
  };
</script>`;

const code2 = `<div class="container">
  <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="[Week] ww"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Month</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Year</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Pick one or more dates">
    </el-date-picker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>`;

const code3 = `<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          })(),
        }, {
          text: 'Last month',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          })(),
        }, {
          text: 'Last 3 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>`;

const code4 = `<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
      :shortcuts="shortcuts"
    >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'This month',
          value: [new Date(), new Date()],
        }, {
          text: 'This year',
          value: (() => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          })(),
        }, {
          text: 'Last 6 months',
          value: (() => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          })(),
        }],
        value1: '',
        value2: ''
      };
    }
  };
</script>`;

const code5 = `<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a date"
      :default-value="new Date(2010, 9, 1)">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>`;

const code6 = `<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a Date"
      format="YYYY/MM/DD">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
      };
    }
  };
</script>`;

const code7 = `<template>
  <div class="block">
    <p>Component value：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="defaultTime"
    ></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        defaultTime: [
          new Date(2000, 1, 1, 0, 0, 0),
          new Date(2000, 2, 1, 23, 59, 59)
        ] // '00:00:00', '23:59:59'
      };
    }
  };
</script>`;

export { code1, code2, code3, code4, code5, code6, code7 };
