import React from "react";
import {Alert, Button} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}
class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={handleShow}>Show Alert</Button>;
  }
}

export default class AlertExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/alerts/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Examples">
              <span>
                Alerts are available for any length of text, as well as an
                optional dismiss button. For proper styling, use one of the
                eight <code>variant</code>s.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark"
                ].map((variant, idx) => (
                  <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                  </Alert>
                ))}
              </div>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode3}
              beforeCodeTitle="Additional content"
            >
              <span>
                Alerts can contain whatever content you like. Headers,
                paragraphs, dividers, go crazy.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <span className="pb-4">
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </span>
                <span>
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </span>
              </Alert>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Dismissing">
              <span>
                Add the <code>dismissible</code> prop to add a functioning
                dismiss button to the Alert.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <AlertDismissibleExample />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Links">
              <span>
                For links, use the <code>&lt;Alert.Link&gt;</code> component to
                provide matching colored links within any alert.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark"
                ].map((variant, idx) => (
                  <Alert key={idx} variant={variant}>
                    This is a {variant} alert with &nbsp;
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a
                    click if you like.
                  </Alert>
                ))}
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Dismissing">
              <span>
                You can also control the visual state directly which is great if
                you want to build more complicated alerts.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <AlertDismissible />
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));
`;
const jsCode2 = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));
`;
const jsCode3 = `
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
`;
const jsCode4 = `
class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={handleShow}>Show Alert</Button>;
  }
}

render(<AlertDismissibleExample />);
`;
const jsCode5 = `
class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </>
    );
  }
}

render(<AlertDismissible />);
`;
