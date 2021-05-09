import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import BreadcrumbsExamplesPage from "./BreadcrumbsExamplesPage";
import DrawerExamplesPage from "./DrawerExamplesPage";
import LinksExamplesPage from "./LinksExamplesPage";
import MenusExamplesPage from "./MenusExamplesPage";
import SteppersExamplesPage from "./SteppersExamplesPage";
import TabsExamplesPage from "./TabsExamplesPage";
import BottomNavigationExamplesPage from "./BottomNavigationExamplesPage";

export function NavigationPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material/navigation"
        to="/google-material/navigation/bottom-navigation"
      />
      <ContentRoute
        path="/google-material/navigation/bottom-navigation"
        component={BottomNavigationExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/breadcrumbs"
        component={BreadcrumbsExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/drawer"
        component={DrawerExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/links"
        component={LinksExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/menus"
        component={MenusExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/steppers"
        component={SteppersExamplesPage}
      />
      <ContentRoute
        path="/google-material/navigation/tabs"
        component={TabsExamplesPage}
      />
    </Switch>
  );
}
