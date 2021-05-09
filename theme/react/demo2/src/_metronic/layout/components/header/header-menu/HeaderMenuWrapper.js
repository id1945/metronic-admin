import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import {HeaderMenu} from "./HeaderMenu";

export function HeaderMenuWrapper() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            config: uiService.config,
            ktMenuClasses: uiService.getClasses("header_menu", true),
            rootArrowEnabled: objectPath.get(
                uiService.config,
                "header.menu.self.root-arrow"
            ),
            menuDesktopToggle: objectPath.get(uiService.config, "header.menu.desktop.toggle"),
            headerMenuAttributes: uiService.getAttributes("header_menu"),
            headerSelfTheme: objectPath.get(uiService.config, "header.self.theme"),
            ulClasses: uiService.getClasses("header_menu_nav", true),
            disabledAsideSelfDisplay:
                objectPath.get(uiService.config, "aside.self.display") === false
        };
    }, [uiService]);

    return <>
        {/*begin::Header Menu Wrapper*/}
        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            {/*begin::Header Menu*/}
            <HeaderMenu layoutProps={layoutProps} />
            {/*end::Header Menu*/}
        </div>
        {/*Header Menu Wrapper*/}
    </>
}
