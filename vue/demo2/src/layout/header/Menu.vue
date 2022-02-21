<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
  >
    <!--begin::Menu-->
    <div
      class="
        menu
        menu-lg-rounded
        menu-column
        menu-lg-row
        menu-state-bg
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-400
        fw-bold
        my-5 my-lg-0
        align-items-stretch
      "
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in MainMenuConfig" :key="i">
        <template v-if="!item.heading">
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <div
              v-if="menuItem.heading"
              class="menu-item menu-lg-down-accordion me-lg-1"
            >
              <router-link
                :to="menuItem.route"
                v-slot="{ href, navigate, isActive, isExactActive }"
              >
                <a
                  :href="href"
                  class="menu-link py-3"
                  @click="navigate"
                  :class="[isActive && 'active', isExactActive && 'active']"
                >
                  <span class="menu-title">{{
                    translate(menuItem.heading)
                  }}</span>
                </a>
              </router-link>
            </div>
          </template>
        </template>
        <div
          v-if="item.heading"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-start"
          class="menu-item menu-lg-down-accordion me-lg-1"
        >
          <span
            class="menu-link py-3"
            :class="{ active: hasActiveChildren(item.route) }"
          >
            <span class="menu-title">{{ translate(item.heading) }}</span>
            <span class="menu-arrow d-lg-none"></span>
          </span>
          <div
            class="
              menu-sub
              menu-sub-lg-down-accordion
              menu-sub-lg-dropdown
              menu-rounded-0
              py-lg-4
              w-lg-225px
            "
          >
            <template v-for="(menuItem, j) in item.pages" :key="j">
              <div
                v-if="menuItem.sectionTitle"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                data-kt-menu-placement="right-start"
                class="menu-item menu-lg-down-accordion"
              >
                <span
                  class="menu-link py-3"
                  :class="{ active: hasActiveChildren(menuItem.route) }"
                >
                  <span class="menu-icon">
                    <i
                      v-if="headerMenuIcons === 'font'"
                      :class="menuItem.fontIcon"
                      class="bi fs-3"
                    ></i>
                    <span
                      v-if="headerMenuIcons === 'svg'"
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
                  class="
                    menu-sub
                    menu-sub-lg-down-accordion
                    menu-sub-lg-dropdown
                    menu-active-bg
                    py-lg-4
                    w-lg-225px
                  "
                >
                  <template v-for="(menuItem1, k) in menuItem.sub" :key="k">
                    <div
                      v-if="menuItem1.sectionTitle"
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      class="menu-item menu-lg-down-accordion"
                    >
                      <span
                        class="menu-link py-3"
                        :class="{ active: hasActiveChildren(menuItem1.route) }"
                      >
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          translate(menuItem1.sectionTitle)
                        }}</span>
                        <span class="menu-arrow"></span>
                      </span>
                      <div
                        class="
                          menu-sub
                          menu-sub-lg-down-accordion
                          menu-sub-lg-dropdown
                          menu-active-bg
                          py-lg-4
                          w-lg-225px
                        "
                      >
                        <template
                          v-for="(menuItem2, l) in menuItem1.sub"
                          :key="l"
                        >
                          <div class="menu-item">
                            <router-link
                              class="menu-link py-3"
                              active-class="active"
                              :to="menuItem2.route"
                            >
                              <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                              </span>
                              <span class="menu-title">{{
                                translate(menuItem2.heading)
                              }}</span>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </div>
                    <div v-if="menuItem1.heading" class="menu-item">
                      <router-link class="menu-link py-3" :to="menuItem1.route">
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{
                          translate(menuItem1.heading)
                        }}</span>
                      </router-link>
                    </div>
                  </template>
                </div>
              </div>
              <div v-if="menuItem.heading" class="menu-item">
                <router-link class="menu-link py-3" :to="menuItem.route">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <inline-svg
                        src="media/icons/duotune/layouts/lay009.svg"
                      />
                    </span>
                  </span>
                  <span class="menu-title">{{
                    translate(menuItem.heading)
                  }}</span>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </template>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-title">{{ translate("resources") }}</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="
            menu-sub
            menu-sub-lg-down-accordion
            menu-sub-lg-dropdown
            menu-rounded-0
            py-lg-4
            w-lg-225px
          "
        >
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/#/utilities"
            >
              <span class="menu-icon">
                <i v-if="headerMenuIcons === 'font'" class="bi bi-box fs-3"></i>
                <span
                  v-if="headerMenuIcons === 'svg'"
                  class="svg-icon svg-icon-2"
                >
                  <inline-svg src="media/icons/duotune/general/gen002.svg" />
                </span>
              </span>
              <span class="menu-title">{{ translate("components") }}</span>
            </a>
          </div>
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/#/doc-overview"
            >
              <span class="menu-icon">
                <i
                  v-if="headerMenuIcons === 'font'"
                  class="bi bi-card-text fs-3"
                ></i>
                <span
                  v-else-if="headerMenuIcons === 'svg'"
                  class="svg-icon svg-icon-2"
                >
                  <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
                </span>
              </span>
              <span class="menu-title">{{ translate("documentation") }}</span>
            </a>
          </div>
          <div class="menu-item">
            <a
              class="menu-link py-3"
              href="https://preview.keenthemes.com/metronic8/vue/docs/#/changelog"
            >
              <span class="menu-icon">
                <i
                  v-if="headerMenuIcons === 'font'"
                  class="bi bi-journal-code fs-3"
                ></i>
                <span
                  v-else-if="headerMenuIcons === 'svg'"
                  class="svg-icon svg-icon-2"
                >
                  <inline-svg src="media/icons/duotune/coding/cod003.svg" />
                </span>
              </span>
              <span class="menu-title"
                >{{ translate("changelog") }} v{{ version }}</span
              >
            </a>
          </div>
        </div>
      </div>

      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-title">{{ translate("megaMenu") }}</span>
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="
            menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown
            w-100 w-lg-600px
            p-5 p-lg-5
          "
          style=""
        >
          <!--begin:Row-->
          <div class="row" data-kt-menu-dismiss="true">
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
            <!--begin:Col-->
            <div class="col-lg-4 border-left-lg-1">
              <div class="menu-inline menu-column menu-active-bg">
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a href="#" class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{
                      translate("exampleLink")
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--end:Col-->
          </div>
          <!--end:Row-->
        </div>
      </div>
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<style lang="scss" scoped>
.header-fixed:not([data-kt-sticky-header="on"])
  .menu-item
  > a
  > .menu-link.active {
  transition: color 0.2s ease, background-color 0.2s ease;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

body[data-kt-drawer-header-menu="on"] .menu-item > a > .menu-link.active {
  color: #5e6278;
}

.header-fixed:not([data-kt-sticky-header="on"]) .menu-item > a > .menu-link {
  color: #fff;
}

.drawer-on .menu-item > a > .menu-link {
  color: #5e6278 !important;
}

.menu-sub a.menu-link {
  color: #5e6278;
}

.menu-link {
  color: #5e6278;
}
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { MenuComponent } from "@/assets/ts/components";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";
import { version } from "@/core/helpers/documentation";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    onMounted(() => {
      MenuComponent.reinitialization();
    });

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      version,
    };
  },
});
</script>
