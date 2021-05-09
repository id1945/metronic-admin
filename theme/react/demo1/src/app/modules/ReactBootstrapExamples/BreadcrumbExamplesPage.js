import React from "react";
import {Breadcrumb} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class BreadcrumbExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Indicate the current page’s location within a navigational hierarchy
            that automatically adds separators via CSS. Add <code>active</code>{" "}
            prop to active <code>Breadcrumb.Item</code>.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/breadcrumb/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Example">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </KTCodeExample>
      </>
    );
  }
}

const jsCode1 = `
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
`;
