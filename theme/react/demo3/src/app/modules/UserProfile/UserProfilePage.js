import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";
import { ProfileCard } from "./components/ProfileCard";

export default function UserProfilePage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");

  return (
    <div className="d-flex flex-row">
      <ProfileCard></ProfileCard>
      <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/user-profile"
            exact={true}
            to="/user-profile/profile-overview"
          />
          <Route
            path="/user-profile/profile-overview"
            component={ProfileOverview}
          />
          <Route
            path="/user-profile/account-information"
            component={AccountInformation}
          />
          <Route
            path="/user-profile/change-password"
            component={ChangePassword}
          />
          <Route
            path="/user-profile/email-settings"
            component={EmailSettings}
          />
          <Route
            path="/user-profile/personal-information"
            component={PersonaInformation}
          />
        </Switch>
      </div>
    </div>
  );
}
