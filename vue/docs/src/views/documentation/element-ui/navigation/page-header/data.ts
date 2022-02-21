const code1 = `<el-page-header @back="goBack" content="detail">
</el-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>`;

export { code1 };
