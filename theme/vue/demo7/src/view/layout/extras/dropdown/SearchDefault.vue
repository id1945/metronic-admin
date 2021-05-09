<template>
  <div
    v-bind:class="{ 'quick-search-has-result': hasResult() }"
    class="quick-search quick-search-dropdown quick-search-result-compact"
    id="kt_quick_search_dropdown"
  >
    <form method="get" class="quick-search-form">
      <div
        class="input-group spinner-input spinner-sm spinner-brand spinner-right"
        v-bind:class="{ spinner: loading }"
      >
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="flaticon2-search-1"></i>
          </span>
        </div>
        <input
          v-on:keyup="onSearch"
          type="text"
          class="form-control quick-search-input"
          placeholder="Search..."
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i
              class="quick-search-close"
              v-on:click="reset"
              v-bind:style="{ display: hasResult() ? 'flex' : '' }"
            ></i>
          </span>
        </div>
      </div>
    </form>

    <KTSearchResult v-bind:data="data"></KTSearchResult>
  </div>
</template>

<script>
import KTSearchResult from "@/view/layout/extras/dropdown/SearchResult.vue";

export default {
  name: "KTSearchDefault",
  components: { KTSearchResult },
  data() {
    return {
      data: [],
      loading: false,
      // dummy search result data
      result: [
        {
          text: "Documents",
          type: 0
        },
        {
          svg: process.env.BASE_URL + "media/svg/files/doc.svg",
          text: "AirPlus Requirements",
          desc: "by Grog John",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "media/svg/files/pdf.svg",
          text: "TechNav Documentation",
          desc: "by Mary Broun",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "media/svg/files/zip.svg",
          text: "All Framework Docs",
          desc: "by Nick Stone",
          type: 1
        },
        {
          svg: process.env.BASE_URL + "media/svg/files/xml.svg",
          text: "AirPlus Requirements",
          desc: "by Tim Hardy",
          type: 1
        },
        {
          text: "Customers",
          type: 0
        },
        {
          img: process.env.BASE_URL + "media/users/300_12.jpg",
          text: "Jimmy Curry",
          desc: "Software Developer",
          type: 1
        },
        {
          img: process.env.BASE_URL + "media/users/300_13.jpg",
          text: "Milena Gibson",
          desc: "UI Designer",
          type: 1
        },
        {
          img: process.env.BASE_URL + "media/users/300_14.jpg",
          text: "Stefan JohnStefan",
          desc: "Marketing Manager",
          type: 1
        },
        {
          img: process.env.BASE_URL + "media/users/300_15.jpg",
          text: "Anna Strong",
          desc: "Software Developer",
          type: 1
        },
        {
          text: "Files",
          type: 0
        },
        {
          icon: "flaticon2-box text-danger",
          text: "2 New items submitted",
          desc: "Marketing Manager",
          type: 1
        },
        {
          icon: "flaticon-psd text-brand",
          text: "79 PSD files generated",
          desc: "by Grog John",
          type: 1
        },
        {
          icon: "flaticon2-supermarket text-warning",
          text: "$2900 worth products sold",
          desc: "Total 234 items",
          type: 1
        },
        {
          icon: "flaticon-safe-shield-protection text-info",
          text: "4 New items submitted",
          desc: "Marketing Manager",
          type: 1
        }
      ]
    };
  },
  methods: {
    onSearch(event) {
      if (event.target.value.length > 2) {
        this.loading = true;
        // simulate getting search result
        setTimeout(() => {
          this.data = this.result;
          this.loading = false;
        }, 2000);
      }
    },
    /**
     * Check if the data has result
     * @returns {boolean}
     */
    hasResult() {
      return this.data.length || false;
    },
    /**
     * Reset search data
     */
    reset() {
      this.data = [];
    }
  }
};
</script>
