import React from "react";
import {Badge, Button} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class BadgeExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/badge/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <div>
                <h1>
                  Example heading <Badge variant="secondary">New</Badge>
                </h1>
                <h2>
                  Example heading <Badge variant="secondary">New</Badge>
                </h2>
                <h3>
                  Example heading <Badge variant="secondary">New</Badge>
                </h3>
                <h4>
                  Example heading <Badge variant="secondary">New</Badge>
                </h4>
                <h5>
                  Example heading <Badge variant="secondary">New</Badge>
                </h5>
                <h6>
                  Example heading <Badge variant="secondary">New</Badge>
                </h6>
              </div>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode3}
              beforeCodeTitle="Contextual variations"
            >
              <span>
                Add any of the below mentioned modifier classes to change the
                appearance of a badge.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <Badge variant="primary" className="mr-1">
                  Primary
                </Badge>
                <Badge variant="secondary" className="mr-1">
                  Secondary
                </Badge>
                <Badge variant="success" className="mr-1">
                  Success
                </Badge>
                <Badge variant="danger" className="mr-1">
                  Danger
                </Badge>
                <Badge variant="warning" className="mr-1">
                  Warning
                </Badge>
                <Badge variant="info" className="mr-1">
                  Info
                </Badge>
                <Badge variant="light" className="mr-1">
                  Light
                </Badge>
                <Badge variant="dark">Dark</Badge>
              </div>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Button">
              <span>
                Badges can be used as part of links or buttons to provide a
                counter.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Button variant="primary">
                Profile <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Pill">
              <span>
                badges Use the <code>pill</code> modifier class to make badges
                more rounded (with a larger border-radius and additional
                horizontal <code>padding</code>). Useful if you miss the badges
                from v3.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <Badge pill variant="primary" className="mr-1">
                  Primary
                </Badge>
                <Badge pill variant="secondary" className="mr-1">
                  Secondary
                </Badge>
                <Badge pill variant="success" className="mr-1">
                  Success
                </Badge>
                <Badge pill variant="danger" className="mr-1">
                  Danger
                </Badge>
                <Badge pill variant="warning" className="mr-1">
                  Warning
                </Badge>
                <Badge pill variant="info" className="mr-1">
                  Info
                </Badge>
                <Badge pill variant="light" className="mr-1">
                  Light
                </Badge>
                <Badge pill variant="dark">
                  Dark
                </Badge>
              </div>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<div>
  <h1>
    Example heading <Badge variant="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge variant="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge variant="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge variant="secondary">New</Badge>
  </h6>
</div>
`;
const jsCode2 = `
<Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
`;
const jsCode3 = `
<div>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="light">Light</Badge>
  <Badge variant="dark">Dark</Badge>
</div>
`;
const jsCode4 = `
<div>
  <Badge pill variant="primary">
    Primary
  </Badge>
  <Badge pill variant="secondary">
    Secondary
  </Badge>
  <Badge pill variant="success">
    Success
  </Badge>
  <Badge pill variant="danger">
    Danger
  </Badge>
  <Badge pill variant="warning">
    Warning
  </Badge>
  <Badge pill variant="info">
    Info
  </Badge>
  <Badge pill variant="light">
    Light
  </Badge>
  <Badge pill variant="dark">
    Dark
  </Badge>
</div>
`;
