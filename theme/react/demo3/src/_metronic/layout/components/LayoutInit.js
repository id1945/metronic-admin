import React, { useLayoutEffect } from "react";
import { KTUtil } from "../../_assets/js/components/util";
import KTLayoutAside from "../../_assets/js/layout/base/aside";
import KTLayoutAsideMenu from "../../_assets/js/layout/base/aside-menu";
import KTLayoutContent from "../../_assets/js/layout/base/content";
import KTLayoutFooter from "../../_assets/js/layout/base/footer";
import KTLayoutSubheader from "../../_assets/js/layout/base/subheader";
import KTLayoutScrolltop from "../../_assets/js/layout/extended/scrolltop";
import KTLayoutStickyCard from "../../_assets/js/layout/base/sticky-card";
import KTLayoutStretchedCard from "../../_assets/js/layout/base/stretched-card";
import KTLayoutQuickPanel from "../../_assets/js/layout/extended/quick-panel";
import KTLayoutQuickUser from "../../_assets/js/layout/extended/quick-user";
import KTLayoutHeaderMobile from "../../_assets/js/layout/base/header-mobile";
import KTLayoutAsideToggle from "../../_assets/js/layout/base/aside-toggle";
import KTLayoutQuickSearch from "../../_assets/js/layout/extended/quick-search";
import KTLayoutQuickNotifications from "../../_assets/js/layout/extended/quick-notifications";
import KTLayoutQuickActions from "../../_assets/js/layout/extended/quick-actions";

export function LayoutInit() {
  useLayoutEffect(() => {
    // Initialization
    KTUtil.ready(function() {
      ////////////////////////////////////////////////////
      // Layout Base Partials(mandatory for core layout)//
      ////////////////////////////////////////////////////

      // Init Mobile Header
      KTLayoutHeaderMobile.init("kt_header_mobile");

      // Init Aside
      KTLayoutAside.init("kt_aside");

      // Init Aside Toggle
      KTLayoutAsideToggle.init("kt_aside_toggle");

      // Init Aside Menu
      KTLayoutAsideMenu.init("kt_aside_menu");

      // Init Content
      KTLayoutContent.init("kt_content");

      // Init Footer
      KTLayoutFooter.init("kt_footer");

      //////////////////////////////////////////////
      // Layout Extended Partials(optional to use)//
      //////////////////////////////////////////////

      // Init subheader
      KTLayoutSubheader.init("kt_subheader");

      // Init Scrolltop
      KTLayoutScrolltop.init("kt_scrolltop");

      // Init Sticky Card
      KTLayoutStickyCard.init("kt_page_sticky_card");

      // Init Stretched Card
      KTLayoutStretchedCard.init("kt_page_stretched_card");

      // Init Quick Actions Offcanvas Panel
      KTLayoutQuickActions.init("kt_quick_actions");

      // Init Quick Offcanvas Panel
      KTLayoutQuickPanel.init("kt_quick_panel");

      // Init Quick User Panel
      KTLayoutQuickUser.init("kt_quick_user");

      // Init Quick Search Panel
      KTLayoutQuickSearch.init("kt_quick_search");

      // Init Quick Notifications Offcanvas Panel
      KTLayoutQuickNotifications.init("kt_quick_notifications");
    });
  }, []);
  return <></>;
}
