import React from "react";
import {
  Button,
  Popover,
  OverlayTrigger,
  ButtonToolbar
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

const popover = (
  <Popover id="popover-basic" title="Popover right">
    And here's some <strong>amazing</strong> content. It's very engaging. right?
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

export default class PopoversExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>A popover component, like those found in iOS.</span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/overlays/#popovers"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
          <Example />
        </KTCodeExample>

        <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Placement">
          <span>You can control the placement of the Popover.</span>
          <div className="separator separator-dashed my-7"></div>
          <ButtonToolbar>
            {["top", "right", "bottom", "left"].map(placement => (
              <span key={`sp ${placement}`}>
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover
                      id={`popover-positioned-${placement}`}
                      title={`Popover ${placement}`}
                    >
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover>
                  }
                >
                  <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
                <span>&nbsp;</span>
              </span>
            ))}
          </ButtonToolbar>
        </KTCodeExample>
      </>
    );
  }
}

const jsCode1 = `
const popover = (
  <Popover id="popover-basic" title="Popover right">
    And here's some <strong>amazing</strong> content. It's very engaging. right?
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);
`;
const jsCode2 = `
<ButtonToolbar>
  {['top', 'right', 'bottom', 'left'].map(placement => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover
          id={\`popover-positioned-\${placement}\`}
          title={\`Popover \${placement}\`}
        >
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      }
    >
      <Button variant="secondary">Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>
`;
