<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="hover-scroll-overlay-y my-5 my-lg-5"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-height="auto"
    data-kt-scroll-offset="0"
    data-kt-scroll-wrappers="#kt_aside_menu"
  >
    <!--begin::Menu-->
    <div
      id="#kt_header_menu"
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
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <div v-if="item.heading" class="menu-item">
          <div class="menu-content pt-8 pb-2">
            <span class="menu-section text-muted text-uppercase fs-8 ls-1">
              {{ translate(item.heading) }}
            </span>
          </div>
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
                  class="menu-link"
                  @click="navigate"
                >
                  <span
                    v-if="menuItem.svgIcon || menuItem.fontIcon"
                    class="menu-icon"
                  >
                    <i
                      v-if="asideMenuIcons === 'font'"
                      :class="menuItem.fontIcon"
                      class="bi fs-3"
                    ></i>
                    <span
                      v-else-if="asideMenuIcons === 'svg'"
                      class="svg-icon svg-icon-2"
                    >
                      <inline-svg :src="menuItem.svgIcon" />
                    </span>
                  </span>
                  <span class="menu-title">{{
                    translate(menuItem.heading)
                  }}</span>
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
            <span class="menu-link">
              <span
                v-if="menuItem.svgIcon || menuItem.fontIcon"
                class="menu-icon"
              >
                <i
                  v-if="asideMenuIcons === 'font'"
                  :class="menuItem.fontIcon"
                  class="bi fs-3"
                ></i>
                <span
                  v-else-if="asideMenuIcons === 'svg'"
                  class="svg-icon svg-icon-2"
                >
                  <inline-svg :src="menuItem.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{
                translate(menuItem.sectionTitle)
              }}</span>
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
                      class="menu-link"
                      @click="navigate"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        translate(item2.heading)
                      }}</span>
                    </a>
                  </router-link>
                </div>
                <div
                  v-if="item2.sectionTitle"
                  :class="{ show: hasActiveChildren(item2.route) }"
                  class="menu-item menu-accordion"
                  data-kt-menu-sub="accordion"
                  data-kt-menu-trigger="click"
                >
                  <span class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate(item2.sectionTitle)
                    }}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    :class="{ show: hasActiveChildren(item2.route) }"
                    class="menu-sub menu-sub-accordion"
                  >
                    <template v-for="(item3, k) in item2.sub" :key="k">
                      <div v-if="item3.heading" class="menu-item">
                        <router-link
                          v-slot="{ href, navigate, isActive, isExactActive }"
                          :to="item3.route"
                        >
                          <a
                            class="menu-link"
                            :class="[
                              isActive && 'active',
                              isExactActive && 'active',
                            ]"
                            :href="href"
                            @click="navigate"
                          >
                            <span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">{{
                              translate(item3.heading)
                            }}</span>
                          </a>
                        </router-link>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>
      <div class="menu-item">
        <div class="menu-content">
          <div class="separator mx-1 my-4"></div>
        </div>
      </div>
      <div class="menu-item">
        <a
          class="menu-link"
          href="https://preview.keenthemes.com/metronic8/vue/docs/#/changelog"
        >
          <span class="menu-icon">
            <i
              v-if="asideMenuIcons === 'font'"
              class="bi bi-card-text fs-3"
            ></i>
            <span
              v-else-if="asideMenuIcons === 'svg'"
              class="svg-icon svg-icon-2"
            >
              <inline-svg src="media/icons/duotune/general/gen005.svg" />
            </span>
          </span>
          <span class="menu-title"
            >{{ translate("changelog") }} v{{ version }}</span
          >
        </a>
      </div>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<style lang="scss">
.aside-menu .menu .menu-sub .menu-item a a.menu-link {
  padding-left: calc(0.75rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}

.aside-menu .menu .menu-sub .menu-sub .menu-item a a.menu-link {
  padding-left: calc(1.5rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { version } from "@/core/helpers/documentation";
import { asideMenuIcons } from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      ScrollComponent.reinitialization();
      MenuComponent.reinitialization();
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
    };
  },
});
</script>
