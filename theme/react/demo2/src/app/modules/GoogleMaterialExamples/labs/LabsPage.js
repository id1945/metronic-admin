import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import SliderExamplesPage from "./SliderExamplesPage";
import SpeedDialExamplesPage from "./SpeedDialExamplesPage";
import ToggleButtonExamplesPage from "./ToggleButtonExamplesPage";

export function LabsPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material/labs"
        to="/google-material/labs/labs"
      />

      <ContentRoute
        path="/google-material/labs/slider"
        component={SliderExamplesPage}
      />
      <ContentRoute
        path="/google-material/labs/speed-dial"
        component={SpeedDialExamplesPage}
      />
      <ContentRoute
        path="/google-material/labs/toggle-button"
        component={ToggleButtonExamplesPage}
      />
    </Switch>
  );
}
