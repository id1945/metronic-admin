<template>
  <div class="topbar-item mr-3">
    <a
      href="#"
      class="btn btn-icon btn-clean btn-lg mb-1 position-relative"
      id="kt_quick_search_toggle"
    >
      <span class="svg-icon svg-icon-xl">
        <!--begin::Svg Icon-->
        <inline-svg src="media/svg/icons/General/Search.svg" />
        <!--end::Svg Icon-->
      </span>
    </a>

    <div
      id="kt_quick_search"
      ref="kt_quick_search"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between mb-5"
      >
        <h3 class="font-weight-bold m-0">
          Search
          <small class="text-muted font-size-sm ml-2"
            >files, reports, members</small
          >
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_search_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->
      <!--begin::Content-->
      <div class="offcanvas-content">
        <!--begin::Container-->
        <div
          class="quick-search quick-search-offcanvas quick-search-has-result"
          id="kt_quick_search_offcanvas"
        >
          <!--begin::Form-->
          <form method="get" class="quick-search-form border-bottom pt-5 pb-1">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <span class="svg-icon svg-icon-lg">
                    <!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
                    <inline-svg src="media/svg/icons/General/Search.svg" />
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Search..." />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i
                    class="quick-search-close ki ki-close icon-sm text-muted"
                  ></i>
                </span>
              </div>
            </div>
          </form>
          <!--end::Form-->
          <!--begin::Wrapper-->
          <div class="quick-search-wrapper pt-5">
            <div class="quick-search-result">
              <!--begin::Message-->
              <div class="text-muted d-none">No record found</div>
              <!--end::Message-->
              <!--begin::Section-->
              <div
                class="font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
              >
                Documents
              </div>
              <div class="mb-10">
                <!--begin::Item-->
                <template v-for="(item, i) in list1">
                  <div
                    class="d-flex align-items-center flex-grow-1 mb-2"
                    v-bind:key="i"
                  >
                    <div class="symbol symbol-30 bg-transparent flex-shrink-0">
                      <img :src="item.svg" alt="" />
                    </div>
                    <div class="d-flex flex-column ml-3 mt-2 mb-2">
                      <a
                        href="#"
                        class="font-weight-bold text-dark text-hover-primary"
                        >{{ item.title }}</a
                      >
                      <span class="font-size-sm font-weight-bold text-muted">{{
                        item.desc
                      }}</span>
                    </div>
                  </div>
                </template>
                <!--end::Item-->
              </div>
              <!--end::Section-->
              <!--begin::Section-->
              <div
                class="font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
              >
                Members
              </div>
              <div class="mb-10">
                <!--begin::Item-->
                <template v-for="(item, i) in list2">
                  <div
                    class="d-flex align-items-center flex-grow-1 mb-2"
                    v-bind:key="i"
                  >
                    <div class="symbol symbol-30 bg-transparent flex-shrink-0">
                      <img :src="item.svg" alt="" />
                    </div>
                    <div class="d-flex flex-column ml-3 mt-2 mb-2">
                      <a
                        href="#"
                        class="font-weight-bold text-dark text-hover-primary"
                        >{{ item.title }}</a
                      >
                      <span class="font-size-sm font-weight-bold text-muted">{{
                        item.desc
                      }}</span>
                    </div>
                  </div>
                </template>
                <!--end::Item-->
              </div>
              <!--end::Section-->
              <!--begin::Section-->
              <div
                class="font-size-sm text-primary font-weight-bolder text-uppercase mb-2"
              >
                Files
              </div>
              <div class="mb-10">
                <!--begin::Item-->
                <template v-for="(item, i) in list3">
                  <div
                    class="d-flex align-items-center flex-grow-1 mb-2"
                    v-bind:key="i"
                  >
                    <div class="symbol symbol-30 flex-shrink-0">
                      <div class="symbol-label">
                        <i v-bind:class="`${item.class}`"></i>
                      </div>
                    </div>
                    <div class="d-flex flex-column ml-3 mt-2 mb-2">
                      <a
                        href="#"
                        class="font-weight-bold text-dark text-hover-primary"
                        >{{ item.title }}</a
                      >
                      <span class="font-size-sm font-weight-bold text-muted">{{
                        item.desc
                      }}</span>
                    </div>
                  </div>
                </template>
                <!--end::Item-->
              </div>
              <!--end::Section-->
            </div>
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickSearch from "@/assets/js/layout/extended/quick-search.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";

export default {
  name: "KTQuickSearch",
  data() {
    return {
      list1: [
        {
          title: "AirPlus Requirements",
          desc: "by Grog John",
          svg: "media/svg/files/doc.svg"
        },
        {
          title: "TechNav Documentation",
          desc: "by Mary Broun",
          svg: "media/svg/files/pdf.svg"
        },
        {
          title: "All Framework Docs",
          desc: "by Nick Stone",
          svg: "media/svg/files/xml.svg"
        },
        {
          title: "Finance & Accounting Reports",
          desc: "by Jhon Larson",
          svg: "media/svg/files/csv.svg"
        }
      ],
      list2: [
        {
          title: "Milena Gibson",
          desc: "UI Designer",
          svg: "media/users/300_20.jpg"
        },
        {
          title: "Stefan JohnStefan",
          desc: "Marketing Manager",
          svg: "media/users/300_15.jpg"
        },
        {
          title: "Anna Strong",
          desc: "Software Developer",
          svg: "media/users/300_16.jpg"
        },
        {
          title: "Nick Bold",
          desc: "Active Customer",
          svg: "media/users/300_12.jpg"
        }
      ],
      list3: [
        {
          title: "79 PSD files generated",
          desc: "by Grog John",
          class: "flaticon-psd text-primary"
        },
        {
          title: "$2900 worth products sold",
          desc: "Total 234 items",
          class: "flaticon2-supermarket text-warning"
        },
        {
          title: "4 New items submitted",
          desc: "Marketing Manager",
          class: "flaticon-safe-shield-protection text-primary"
        },
        {
          title: "4 New items submitted",
          desc: "Marketing Manager",
          class: "flaticon-safe-shield-protection text-warning"
        }
      ]
    };
  },
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickSearch.init(this.$refs["kt_quick_search"]);
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickSearch.getElement()).hide();
    }
  },
  computed: {
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  }
};
</script>
