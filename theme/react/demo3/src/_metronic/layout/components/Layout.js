import React, { useMemo } from "react";
import objectPath from "object-path";
// LayoutContext
import { useHtmlClassService } from "../_core/MetronicLayout";
// Import Layout components
import { HeaderMobile } from "./header-mobile/HeaderMobile";
import { Aside } from "./aside/Aside";
import { Footer } from "./footer/Footer";
import { LayoutInit } from "./LayoutInit";
import { SubHeader } from "./subheader/SubHeader";
import { QuickPanel } from "./extras/offcanvas/QuickPanel";
import { QuickUser } from "./extras/offcanvas/QuickUser";
import { QuickSearch } from "./extras/offcanvas/QuickSearch";
import { QuickNotification } from "./extras/offcanvas/QuickNotification";
import { QuickActions } from "./extras/offcanvas/QuickActions";
import { ScrollTop } from "./extras/ScrollTop";
import { StickyToolbar } from "./extras/StickyToolbar";
import { AnimateLoading } from "../../_partials/controls";

export function Layout({ children }) {
  const uiService = useHtmlClassService();
  // Layout settings (cssClasses/cssAttributes)
  const layoutProps = useMemo(() => {
    return {
      selfLayout: objectPath.get(uiService.config, "self.layout"),
      subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
      contentCssClasses: uiService.getClasses("content", true),
      contentContainerClasses: uiService.getClasses("content_container", true),
      contentExtended: objectPath.get(uiService.config, "content.extended"),
    };
  }, [uiService]);

  return layoutProps.selfLayout !== "blank" ? (
    <>
      {/*begin::Main*/}
      <HeaderMobile />

      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          <Aside />

          {/*begin::Wrapper*/}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            {/*begin::Content*/}
            <div
              id="kt_content"
              className={`content ${layoutProps.contentCssClasses} d-flex flex-column flex-column-fluid`}
            >
              <AnimateLoading />
              {layoutProps.subheaderDisplay && <SubHeader />}

              {/*begin::Entry*/}
              {layoutProps.contentExtended && <>{children}</>}

              {!layoutProps.contentExtended && (
                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className={layoutProps.contentContainerClasses}>
                    {children}
                  </div>
                  {/*end::Container*/}
                </div>
              )}

              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
            <Footer />
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      <QuickUser />
      <QuickPanel />
      <QuickNotification />
      <ScrollTop />
      <QuickSearch />
      <QuickActions />
      <StickyToolbar />
      {/*end::Main*/}
      <LayoutInit />
    </>
  ) : (
    // BLANK LAYOUT
    <div className="d-flex flex-column flex-root">{children}</div>
  );
}
