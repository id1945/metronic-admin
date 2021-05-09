import React, { useMemo } from "react";
import objectPath from "object-path";
import SVG from "react-inlinesvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { SearchDropdown } from "../extras/dropdowns/search/SearchDropdown";
import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";
import { QuickActionsDropdown } from "../extras/dropdowns/QuickActionsDropdown";
import { MyCartDropdown } from "../extras/dropdowns/MyCartDropdown";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { QuickUserToggler } from "../extras/QuiclUserToggler";

export function Topbar() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      viewCartDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="topbar">
      {layoutProps.viewSearchDisplay && <SearchDropdown />}

      {layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown />}

      {layoutProps.viewQuickActionsDisplay && <QuickActionsDropdown />}

      {layoutProps.viewCartDisplay && <MyCartDropdown />}

      {layoutProps.viewQuickPanelDisplay && (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="quick-panel-tooltip">Quick panel</Tooltip>}
        >
          <div
            className="topbar-item"
            data-toggle="tooltip"
            title="Quick panel"
            data-placement="right"
          >
            <div
              className="btn btn-icon btn-hover-transparent-white btn-lg mr-1"
              id="kt_quick_panel_toggle"
            >
              <span className="svg-icon svg-icon-xl">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Layout/Layout-4-blocks.svg"
                  )}
                />
              </span>
            </div>
          </div>
        </OverlayTrigger>
      )}

      {layoutProps.viewLanguagesDisplay && <LanguageSelectorDropdown />}

      {layoutProps.viewUserDisplay && <QuickUserToggler />}
    </div>
  );
}
