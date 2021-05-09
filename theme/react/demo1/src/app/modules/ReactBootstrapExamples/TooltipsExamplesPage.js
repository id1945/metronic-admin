import React from "react";
import {
  Button,
  Overlay,
  Tooltip,
  OverlayTrigger,
  ButtonToolbar
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class Example extends React.Component {
  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = { show: false };
  }

  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Click me!
        </Button>
        <Overlay target={target} show={show} placement="right">
          {props => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
}

export default class TooltipsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            A tooltip component for a more stylish alternative to that anchor
            tag <code>title</code> attribute.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/overlays/#tooltips"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <span>
                You can pass the <code>Overlay</code> injected props directly to
                the Tooltip component.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Trigger">
              <span>
                Or pass a Tooltip element to <code>OverlayTrigger</code>{" "}
                instead.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ButtonToolbar>
                {["top", "right", "bottom", "left"].map(placement => (
                  <span key={placement}>
                    <OverlayTrigger
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant="secondary">
                        Tooltip on {placement}
                      </Button>
                    </OverlayTrigger>
                    <span>&nbsp;</span>
                  </span>
                ))}
              </ButtonToolbar>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
class Example extends React.Component {
  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = { show: false };
  }

  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Click me!
        </Button>
        <Overlay target={target} show={show} placement="right">
          {props => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
}

render(<Example />);
`;
const jsCode2 = `
<ButtonToolbar>
  {['top', 'right', 'bottom', 'left'].map(placement => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={\`tooltip-\${placement}\`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="secondary">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</ButtonToolbar>
`;
