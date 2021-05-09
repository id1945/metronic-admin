import React from "react";
import {Redirect, Switch} from "react-router-dom";
import AccordionExamplesPage from "./AccordionExamplesPage";
import AlertExamplesPage from "./AlertExamplesPage";
import BadgeExamplesPage from "./BadgeExamplesPage";
import BreadcrumbExamplesPage from "./BreadcrumbExamplesPage";
import ButtonsExamplesPage from "./ButtonsExamplesPage";
import ButtonGroupExamplesPage from "./ButtonGroupExamplesPage";
import CardsExamplesPage from "./CardsExamplesPage";
import CarouselExamplesPage from "./CarouselExamplesPage";
import DropdownsExamplesPage from "./DropdownsExamplesPage";
import FormsExamplesPage from "./FormsExamplesPage";
import InputGroupExamplesPage from "./InputGroupExamplesPage";
import ImagesExamplesPage from "./ImagesExamplesPage";
import FiguresExamplesPage from "./FiguresExamplesPage";
import JumbotronExamplesPage from "./JumbotronExamplesPage";
import ListGroupExamplesPage from "./ListGroupExamplesPage";
import ModalExamplesPage from "./ModalExamplesPage";
import NavsExamplesPage from "./NavsExamplesPage";
import NavbarExamplesPage from "./NavbarExamplesPage";
import OverlaysExamplesPage from "./OverlaysExamplesPage";
import PaginationExamplesPage from "./PaginationExamplesPage";
import PopoversExamplesPage from "./PopoversExamplesPage";
import ProgressExamplesPage from "./ProgressExamplesPage";
import SpinnersExamplesPage from "./SpinnersExamplesPage";
import TableExamplesPage from "./TableExamplesPage";
import TabsExamplesPage from "./TabsExamplesPage";
import TooltipsExamplesPage from "./TooltipsExamplesPage";
import ToastsExamplesPage from "./ToastsExamplesPage";
import {ContentRoute} from "../../../_metronic/layout";

export default function ReactBootstrapPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/react-bootstrap"
        to="/react-bootstrap/accordion"
      />

      <ContentRoute
        path="/react-bootstrap/accordion" 
        component={AccordionExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/alert" 
        component={AlertExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/badge" 
        component={BadgeExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/breadcrumb" 
        component={BreadcrumbExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/buttons" 
        component={ButtonsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/button-group" 
        component={ButtonGroupExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/cards" 
        component={CardsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/carousel" 
        component={CarouselExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/dropdowns" 
        component={DropdownsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/forms" 
        component={FormsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/input-group" 
        component={InputGroupExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/images" 
        component={ImagesExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/figures" 
        component={FiguresExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/jumbotron" 
        component={JumbotronExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/list-group" 
        component={ListGroupExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/modal" 
        component={ModalExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/navs" 
        component={NavsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/navbar" 
        component={NavbarExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/overlays" 
        component={OverlaysExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/pagination" 
        component={PaginationExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/popovers" 
        component={PopoversExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/progress" 
        component={ProgressExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/spinners" 
        component={SpinnersExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/table" 
        component={TableExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/tabs" 
        component={TabsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/tooltips" 
        component={TooltipsExamplesPage} 
      />
      <ContentRoute
        path="/react-bootstrap/toasts" 
        component={ToastsExamplesPage} 
      />

    </Switch>
  );
}
