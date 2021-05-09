import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { InputsPage } from "./inputs/InputsPage";
import { DataDisplaysPage } from "./data-displays/DataDisplaysPage";
import { FeedbackPage } from "./feedback/FeedbacksPage";
import { LabsPage } from "./labs/LabsPage";
import { NavigationPage } from "./navigation/NavigationPage";
import { LayoutPage } from "./layout/LayoutPage";
import { SurfacesPage } from "./surfaces/SurfacesPage";
import { UtilsPage } from "./utils/UtilsPage";
import { ContentRoute } from "../../../_metronic/layout";

export default function GoogleMaterialPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material"
        to="/google-material/inputs/autocomplete"
      />
      {/* Surfaces */}
      <ContentRoute from="/google-material/surfaces" component={SurfacesPage} />

      {/* Layout */}
      <ContentRoute from="/google-material/layout" component={LayoutPage} />

      {/* Inputs */}
      <ContentRoute from="/google-material/inputs" component={InputsPage} />
      {/* Data Display */}
      <ContentRoute
        from="/google-material/data-displays"
        component={DataDisplaysPage}
      />

      {/* Navigation */}
      <ContentRoute
        from="/google-material/navigation"
        component={NavigationPage}
      />

      {/* Feedback */}
      <ContentRoute from="/google-material/feedback" component={FeedbackPage} />

      {/* Utils */}
      <ContentRoute from="/google-material/utils" component={UtilsPage} />

      {/* Lab */}
      <ContentRoute from="/google-material/labs" component={LabsPage} />
    </Switch>
  );
}
