import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import ClickAwayListenerExamplesPage from "./ClickAwayListenerExamplesPage";
import ModalExamplesPage from "./ModalExamplesPage";
import NoSSRExamplesPage from "./NoSSRExamplesPage";
import PopoverExamplesPage from "./PopoverExamplesPage";
import PopperExamplesPage from "./PopperExamplesPage";
import PortalExamplesPage from "./PortalExamplesPage";
import TransitionsExamplesPage from "./TransitionsExamplesPage";
import UseMediaQueryExamplesPage from "./UseMediaQueryExamplesPage";

export function UtilsPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material/utils"
        to="/google-material/utils/click-away-listener"
      />
      <ContentRoute
        path="/google-material/utils/click-away-listener"
        component={ClickAwayListenerExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/modal"
        component={ModalExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/no-ssr"
        component={NoSSRExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/popover"
        component={PopoverExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/popper"
        component={PopperExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/portal"
        component={PortalExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/transitions"
        component={TransitionsExamplesPage}
      />
      <ContentRoute
        path="/google-material/utils/use-media-query"
        component={UseMediaQueryExamplesPage}
      />
    </Switch>
  );
}
