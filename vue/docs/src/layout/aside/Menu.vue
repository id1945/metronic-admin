<template>
  <!--begin::Menu wrapper-->
  <div
    class="hover-scroll-overlay-y mt-5 mb-5 mt-lg-0 mb-lg-5 pe-lg-n2 me-lg-2"
    id="kt_docs_aside_menu_wrapper"
    ref="scrollElRef"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="#kt_docs_aside_logo"
    data-kt-scroll-wrappers="#kt_docs_aside_menu"
    data-kt-scroll-offset="10px"
  >
    <!--begin::Menu-->
    <div
      id="#kt_docs_aside_menu"
      class="
        menu
        menu-column
        menu-title-gray-800
        menu-state-title-primary
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-500
      "
      data-kt-menu="true"
    >
      <template v-for="(item, i) in DocMenuConfig" :key="i">
        <div v-if="item.heading" class="menu-item">
          <h4 class="menu-content text-muted mb-0 fs-7 text-uppercase">
            {{ item.heading }}
          </h4>
        </div>
        <template v-for="(menuItem, j) in item.pages" :key="j">
          <template v-if="menuItem.heading">
            <div class="menu-item">
              <router-link
                v-slot="{ href, navigate, isActive, isExactActive }"
                :to="menuItem.route"
              >
                <a
                  :class="[isActive && 'active', isExactActive && 'active']"
                  :href="href"
                  class="menu-link py-2"
                  @click="navigate"
                >
                  <span class="menu-title">{{ menuItem.heading }}</span>
                </a>
              </router-link>
            </div>
          </template>
          <div
            v-if="menuItem.sectionTitle"
            :class="{ show: hasActiveChildren(menuItem.route) }"
            class="menu-item menu-accordion"
            data-kt-menu-sub="accordion"
            data-kt-menu-trigger="click"
          >
            <span class="menu-link py-2">
              <span class="menu-title">{{ menuItem.sectionTitle }}</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              :class="{ show: hasActiveChildren(menuItem.route) }"
              class="menu-sub menu-sub-accordion"
            >
              <template v-for="(item2, k) in menuItem.sub" :key="k">
                <div v-if="item2.heading" class="menu-item">
                  <router-link
                    v-slot="{ href, navigate, isActive, isExactActive }"
                    :to="item2.route"
                  >
                    <a
                      :class="[isActive && 'active', isExactActive && 'active']"
                      :href="href"
                      class="menu-link py-2"
                      @click="navigate"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{ item2.heading }}</span>
                    </a>
                  </router-link>
                </div>
              </template>
            </div>
          </div>
        </template>
        <div class="menu-item">
          <div class="h-30px"></div>
        </div>
      </template>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { version } from "@/core/helpers/documentation";
import DocMenuConfig from "@/core/config/DocMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      ScrollComponent.reinitialization();
      MenuComponent.reinitialization();
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      DocMenuConfig,
      version,
    };
  },
});
</script>
