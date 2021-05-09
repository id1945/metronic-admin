import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import AvatarsExamplesPage from "./AvatarsExamplesPage";
import BadgesExamplesPage from "./BadgesExamplesPage";
import ChipsExamplesPage from "./ChipsExamplesPage";
import DividersExamplesPage from "./DividersExamplesPage";
import IconsExamplesPage from "./IconsExamplesPage";
import ListsExamplesPage from "./ListsExamplesPage";
import TablesExamplesPage from "./TablesExamplesPage";
import TooltipsExamplesPage from "./TooltipsExamplesPage";
import TypographyExamplesPage from "./TypographyExamplesPage";

export function DataDisplaysPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material"
        to="/google-material/data-displays/avatars"
      />
      <ContentRoute
        path="/google-material/data-displays/avatars"
        component={AvatarsExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/badges"
        component={BadgesExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/chips"
        component={ChipsExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/dividers"
        component={DividersExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/icons"
        component={IconsExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/lists"
        component={ListsExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/tables"
        component={TablesExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/tooltips"
        component={TooltipsExamplesPage}
      />
      <ContentRoute
        path="/google-material/data-displays/typography"
        component={TypographyExamplesPage}
      />
    </Switch>
  );
}
