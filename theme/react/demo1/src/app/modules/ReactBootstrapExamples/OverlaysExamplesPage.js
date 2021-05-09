/* eslint-disable no-unused-vars */
import React from "react";
import {
  Button,
  Overlay,
  Popover,
  OverlayTrigger,
  ButtonToolbar,
  Tooltip
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class Example extends React.Component {
  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = {
      show: false
    };
  }

  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button
          variant="danger"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Click me to see
        </Button>
        <Overlay target={target} show={show} placement="right">
          {({
            placement,
            scheduleUpdate,
            arrowProps,
            outOfBoundaries,
            show: _show,
            ...props
          }) => (
            <div
              {...props}
              style={{
                backgroundColor: "rgba(255, 100, 100, 0.85)",
                padding: "2px 10px",
                color: "white",
                borderRadius: 3,
                ...props.style
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>
      </>
    );
  }
}

const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      padding: "2px 10px",
      color: "white",
      borderRadius: 3,
      ...props.style
    }}
  >
    Simple tooltip
  </div>
);

const Example1 = () => (
  <OverlayTrigger
    placement="right-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);

class Example4 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.handleClick}>Holy guacamole!</Button>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

class UpdatingPopover extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      console.log("updating!");
      this.props.scheduleUpdate();
    }
  }

  render() {
    return <Popover {...this.props} />;
  }
}

const longContent = `
  Very long
  Multiline content
  that is engaging and what-not
`;
const shortContent = "Short and sweet!";

class Example5 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { content: shortContent };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        content: state.content === shortContent ? longContent : shortContent
      }));
    }, 3000);
  }

  render() {
    const { content } = this.state;

    return (
      <OverlayTrigger
        trigger="click"
        overlay={
          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
      >
        <Button onClick={this.handleClick}>Holy guacamole!</Button>
      </OverlayTrigger>
    );
  }
}

export default class OverlaysExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            A set of components for positioning beautiful overlays, tooltips,
            popovers, and anything else you need.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/overlays/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample
              jsCode={jsCode1}
              beforeCodeTitle="Creating an Overlay"
            >
              <span>
                Overlays consist of at least two elements, the "overlay", the
                element to be positioned, as well as a "target", the element the
                overlay is positioned in relation to. You can also also have an
                "arrow" element, like the tooltips and popovers, but that is
                optional.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example />
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Disabled elements">
              <span>
                Elements with the <code>disabled</code> attribute aren’t
                interactive, meaning users cannot hover or click them to trigger
                a popover (or tooltip).
              </span>
              <div className="separator separator-dashed my-7"></div>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
              >
                <span className="d-inline-block">
                  <Button disabled style={{ pointerEvents: "none" }}>
                    Disabled button
                  </Button>
                </span>
              </OverlayTrigger>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode7}
              beforeCodeTitle="Updating position dynamically"
            >
              <span>
                Since we can't know every time your overlay changes size, to
                reposition it, you need to take manual action if you want to
                update the position of an Overlay in response to a change.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example5 />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="OverlayTrigger">
              <span>
                Since the above pattern is pretty common, but verbose, we've
                included <code>&lt;OverlayTrigger&gt;</code> component to help
                with common use-cases. It even has functionality to delayed show
                or hides, and a few different "trigger" events you can mix and
                match.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example1 />
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode6}
              beforeCodeTitle="Changing containers"
            >
              <span>
                You can specify a <code>container</code> to control the DOM
                element the overlay is appended to. This is especially useful
                when styles conflict with your Overlay's.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example4 />
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
    this.state = {
      show: false,
    };
  }

  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button
          variant="danger"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Click me to see
        </Button>
        <Overlay target={target} show={show} placement="right">
          {({
            placement,
            scheduleUpdate,
            arrowProps,
            outOfBoundaries,
            show: _show,
            ...props
          }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>
      </>
    );
  }
}

render(<Example />);
`;
const jsCode2 = `
const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      padding: '2px 10px',
      color: 'white',
      borderRadius: 3,
      ...props.style,
    }}
  >
    Simple tooltip
  </div>
);

const Example = () => (
  <OverlayTrigger
    placement="right-start"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);

render(<Example />);
`;
const jsCode3 = `
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
const jsCode4 = `
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
const jsCode5 = `
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button>
  </span>
</OverlayTrigger>
`;
const jsCode6 = `
class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.handleClick}>Holy guacamole!</Button>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

render(<Example />);
`;
const jsCode7 = `
class UpdatingPopover extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      console.log('updating!');
      this.props.scheduleUpdate();
    }
  }

  render() {
    return <Popover {...this.props} />;
  }
}

const longContent = \`
  Very long
  Multiline content
  that is engaging and what-not
\`;
const shortContent = 'Short and sweet!';

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { content: shortContent };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        content: state.content === shortContent ? longContent : shortContent,
      }));
    }, 3000);
  }

  render() {
    const { content } = this.state;

    return (
      <OverlayTrigger
        trigger="click"
        overlay={
          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
      >
        <Button onClick={this.handleClick}>Holy guacamole!</Button>
      </OverlayTrigger>
    );
  }
}

render(<Example />);
`;
