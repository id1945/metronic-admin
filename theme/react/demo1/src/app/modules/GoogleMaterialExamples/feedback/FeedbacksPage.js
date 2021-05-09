import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../../../_metronic/layout";
import ProgressExamplesPage from "./ProgressExamplesPage";
import DialogsExamplesPage from "./DialogsExamplesPage";
import SnackbarsExamplesPage from "./SnackbarsExamplesPage";

export function FeedbackPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/google-material/feedback"
        to="/google-material/feedback/progress"
      />

      <ContentRoute
        path="/google-material/feedback/progress"
        component={ProgressExamplesPage}
      />
      <ContentRoute
        path="/google-material/feedback/dialogs"
        component={DialogsExamplesPage}
      />
      <ContentRoute
        path="/google-material/feedback/snackbars"
        component={SnackbarsExamplesPage}
      />
    </Switch>
  );
}
