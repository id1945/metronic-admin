const code1 = `<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :shortcuts="shortcuts">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      :default-time="defaultTime">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Today',
          value: new Date(),
        }, {
          text: 'Yesterday',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date
          })(),
        }, {
          text: 'A week ago',
          value: (() => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date
          })(),
        }],
        value1: '',
        value2: '',
        value3: '',
        defaultTime: new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
      };
    }
  };
</script>`;

const code2 = `<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        shortcuts: [{
          text: 'Last week',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end]
          })()
        }, {
          text: 'Last month',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end]
          })()
        }, {
          text: 'Last 3 months',
          value: (() => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end]
          })()
        }],
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>`;

const code3 = `<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime1">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="defaultTime2">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        defaultTime1: [
          new Date(2000, 1, 1, 12, 0, 0),
        ], // '12:00:00'
        defaultTime2: [
          new Date(2000, 1, 1, 12, 0, 0),
          new Date(2000, 2, 1, 8, 0, 0)
        ] // '12:00:00', '08:00:00'
      };
    }
  };
</script>`;

export { code1, code2, code3 };
