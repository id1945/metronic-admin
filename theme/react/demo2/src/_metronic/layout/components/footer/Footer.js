import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { FooterCompact } from "./FooterCompact";
import { FooterExtended } from "./FooterExtended";

export function Footer() {
  const today = new Date().getFullYear();
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      footerLayout: objectPath.get(uiService.config, "footer.layout"),
      footerClasses: uiService.getClasses("footer", true),
      footerContainerClasses: uiService.getClasses("footer_container", true),
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.footerLayout === "compact" && (
        <FooterCompact
          today={today}
          footerClasses={layoutProps.footerClasses}
          footerContainerClasses={layoutProps.footerContainerClasses}
        />
      )}
      {layoutProps.footerLayout === "extended" && (
        <FooterExtended
          today={today}
          footerClasses={layoutProps.footerClasses}
          footerContainerClasses={layoutProps.footerContainerClasses}
        />
      )}
    </>
  );
}
