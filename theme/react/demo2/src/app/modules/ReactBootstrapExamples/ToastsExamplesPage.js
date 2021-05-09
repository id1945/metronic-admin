import React from "react";
import {Button, Toast, Col, Row} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showA: true,
      showB: true
    };
  }

  render() {
    const { showA, showB } = this.state;
    const toggleShowA = () => this.setState({ showA: !showA });
    const toggleShowB = () => this.setState({ showB: !showB });
    return (
      <Row>
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
        <Col xs={6} className="my-1">
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowB}>
            Toggle Toast <strong>without</strong> Animation
          </Button>
        </Col>
      </Row>
    );
  }
}

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const { show } = this.state;
    const handleShow = () => this.setState({ show: true });
    const handleClose = () => this.setState({ show: false });
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={handleClose} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={handleShow}>Show Toast</Button>
        </Col>
      </Row>
    );
  }
}

export default class ToastsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Push notifications to your visitors with a toast, a lightweight and
            easily customizable alert message.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/toasts/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic">
              <div className="section">
                <span className="section-sub">
                  To encourage extensible and predictable toasts, we recommend a
                  header and body. Toast headers use display: flex, allowing
                  easy alignment of content thanks to our margin and flexbox
                  utilities.
                </span>
                <p className="section-sub">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
                <div className="separator separator-dashed my-7"></div>
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded mr-2"
                      alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Stacking">
              <span>
                When you have multiple toasts, we default to vertically stacking
                them in a readable manner.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <>
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded mr-2"
                      alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>just now</small>
                  </Toast.Header>
                  <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded mr-2"
                      alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>2 seconds ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Heads up, toasts will stack automatically
                  </Toast.Body>
                </Toast>
              </>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode5}
              beforeCodeTitle="Autohide"
              codeBlockHeight="400px"
            >
              <span>
                A Toast can also automatically hide after X milliseconds. For
                that, use the <code>autohide</code> prop in combination with{" "}
                <code>delay</code> the prop to sepecify the delay. But be aware,
                that it will only trigger the <code>onClose</code> function, you
                have to set manually the show property.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Example1 />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample
              jsCode={jsCode2}
              beforeCodeTitle="Dismissible"
              codeBlockHeight="400px"
            >
              <Example />
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode4}
              beforeCodeTitle="Placement"
              codeBlockHeight="400px"
            >
              <span>
                Place toasts with custom CSS as you need them. The top right is
                often used for notifications, as is the top middle.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                  position: "relative",
                  minHeight: "200px"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0
                  }}
                >
                  <Toast>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                      />
                      <strong className="mr-auto">Bootstrap</strong>
                      <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                      />
                      <strong className="mr-auto">Bootstrap</strong>
                      <small>2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Heads up, toasts will stack automatically
                    </Toast.Body>
                  </Toast>
                </div>
              </div>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<Toast>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
`;
const jsCode2 = `
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showA: true,
      showB: true,
    };
  }

  render() {
    const { showA, showB } = this.state;
    const toggleShowA = () => this.setState({ showA: !showA });
    const toggleShowB = () => this.setState({ showB: !showB });
    return (
      <Row>
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
        <Col xs={6} className="my-1">
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowB}>
            Toggle Toast <strong>without</strong> Animation
          </Button>
        </Col>
      </Row>
    );
  }
}

render(<Example />);
`;
const jsCode3 = `
<>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Bootstrap</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Bootstrap</strong>
      <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
  </Toast>
</>
`;
const jsCode4 = `
<div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '200px',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
  >
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
    </Toast>
  </div>
</div>
`;
const jsCode5 = `
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { show } = this.state;
    const handleShow = () => this.setState({ show: true });
    const handleClose = () => this.setState({ show: false });
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={handleClose} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={handleShow}>Show Toast</Button>
        </Col>
      </Row>
    );
  }
}

render(<Example />);
`;
