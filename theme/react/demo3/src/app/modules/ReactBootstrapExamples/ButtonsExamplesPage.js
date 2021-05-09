/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? "Loading…" : "Click to load"}
      </Button>
    );
  }
}

class ToggleButtonGroupControlled extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: [1, 3]
    };
  }

  handleChange(value, event) {
    this.setState({ value });
  }

  render() {
    return (
      <ToggleButtonGroup
        type="checkbox"
        onChange={this.handleChange}
        defaultValue={this.state.value}
        name="toggleButtonGroup"
      >
        <ToggleButton value={1} onChange={() => {}}>
          Option 1
        </ToggleButton>
        <ToggleButton value={2} onChange={() => {}}>
          Option 2
        </ToggleButton>
        <ToggleButton value={3} onChange={() => {}}>
          Option 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default class ButtonsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Custom button styles for actions in forms, dialogs, and more with
            support for multiple sizes, states, and more.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href=""
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Examples">
              <span>
                Use any of the available button style types to quickly create a
                styled button. Just modify the <code>variant</code> prop.
              </span>
              <div className="separator separator-dashed my-7" />
              <ButtonToolbar>
                <div className="mb-3">
                  <span className="pr-4">
                    <Button variant="primary">Primary</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="secondary">Secondary</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="success">Success</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="warning">Warning</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="danger">Danger</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="info">Info</Button>
                  </span>
                </div>
                <div>
                  <span className="pr-4">
                    <Button variant="light">Light</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="dark">Dark</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="link">Link</Button>
                  </span>
                </div>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Button tags">
              <span>
                Normally <code>&lt;Button&gt;</code> components will render a
                HTML <code>&lt;button&gt;</code> element. However you can render
                whatever you'd like, adding a <code>href</code> prop will
                automatically render an <code>&lt;a /&gt;</code> element. You
                can use the <code>as</code> prop to render whatever your heart
                desires. React Bootstrap will take care of the proper ARIA roles
                for you.
              </span>
              <div className="separator separator-dashed my-7" />
              <ButtonToolbar className="pb-2">
                <span className="pr-1">
                  <Button href="#">Link</Button>
                </span>
                <span className="pr-1">
                  <Button type="submit">Button</Button>
                </span>
                <span className="pr-1">
                  <Button
                    as="input"
                    type="button"
                    value="Input"
                    onChange={() => {}}
                  />
                </span>
              </ButtonToolbar>
              <ButtonToolbar>
                <span className="pr-1">
                  <Button
                    as="input"
                    type="submit"
                    value="Submit"
                    onChange={() => {}}
                  />
                </span>
                <span className="pr-1">
                  <Button
                    as="input"
                    type="reset"
                    value="Reset"
                    onChange={() => {}}
                  />
                </span>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Sizes">
              <span>
                Create block level buttons—those that span the full width of a
                parent—by adding block
              </span>
              <div className="separator separator-dashed my-7" />
              <div>
                <Button variant="primary" size="lg" block>
                  Block level button
                </Button>
                <Button variant="secondary" size="lg" block>
                  Block level button
                </Button>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Disabled state">
              <span>
                Make buttons look inactive by adding the <code>disabled</code>{" "}
                prop to.
              </span>
              <div className="separator separator-dashed my-7" />
              <ButtonToolbar>
                <span className="pr-4">
                  <Button variant="primary" size="lg" disabled>
                    Primary button
                  </Button>
                </span>
                <span className="pr-4">
                  <Button variant="secondary" size="lg" disabled>
                    Button
                  </Button>
                </span>
                <span className="pr-4">
                  <Button href="#" variant="secondary" size="lg" disabled>
                    Link
                  </Button>
                </span>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode9} beforeCodeTitle="Checkbox / Radio">
              <span>
                Button's can also be used to style <code>checkbox</code> and{" "}
                <code>radio</code> form elements. This is helpful when you want
                a toggle button that works neatly inside an HTML form.
              </span>
              <div className="separator separator-dashed my-7" />
              <div className="d-flex flex-column">
                <ButtonGroup toggle>
                  <ToggleButton type="checkbox" defaultChecked value="1">
                    Checked
                  </ToggleButton>
                </ButtonGroup>
                <ButtonGroup toggle className="mt-3">
                  <ToggleButton
                    type="radio"
                    name="radio"
                    defaultChecked
                    value="1"
                  >
                    Active
                  </ToggleButton>
                  <ToggleButton type="radio" name="radio" value="2">
                    Radio
                  </ToggleButton>
                  <ToggleButton type="radio" name="radio" value="3">
                    Radio
                  </ToggleButton>
                </ButtonGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode11} beforeCodeTitle="Controlled">
              <ToggleButtonGroupControlled />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Outline buttons">
              <span>
                For a lighter touch, Buttons also come in <code>outline-*</code>{" "}
                variants with no background color.
              </span>
              <div className="separator separator-dashed my-7" />
              <ButtonToolbar>
                <p>
                  <span className="pr-4">
                    <Button variant="outline-primary">Primary</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-secondary">Secondary</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-success">Success</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-warning">Warning</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-danger">Danger</Button>
                  </span>
                </p>
                <p>
                  <span className="pr-4">
                    <Button variant="outline-info">Info</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-dark">Dark</Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="outline-light">Light</Button>
                  </span>
                </p>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Sizes">
              <span>
                Fancy larger or smaller buttons? Add <code>size="lg"</code>,{" "}
                <code>size="sm"</code> for additional sizes.
              </span>
              <div className="separator separator-dashed my-7" />
              <div className="mb-3">
                <ButtonToolbar>
                  <span className="pr-4">
                    <Button variant="primary" size="lg">
                      Large button
                    </Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="secondary" size="lg">
                      Large button
                    </Button>
                  </span>
                </ButtonToolbar>
              </div>
              <div>
                <ButtonToolbar>
                  <span className="pr-4">
                    <Button variant="primary" size="sm">
                      Small button
                    </Button>
                  </span>
                  <span className="pr-4">
                    <Button variant="secondary" size="sm">
                      Small button
                    </Button>
                  </span>
                </ButtonToolbar>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Active state">
              <span>
                To set a buttons active state simply set the components{" "}
                <code>active</code> prop.
              </span>
              <div className="separator separator-dashed my-7" />
              <ButtonToolbar>
                <span className="pr-4">
                  <Button variant="primary" size="lg" active>
                    Primary button
                  </Button>
                </span>
                <span className="pr-4">
                  <Button variant="secondary" size="lg" active>
                    Button
                  </Button>
                </span>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode8}
              beforeCodeTitle="Button loading state"
            >
              <span>
                When activating an asynchronous action from a button it is a
                good UX pattern to give the user feedback as to the loading
                state, this can easily be done by updating your{" "}
                <code>&lt;Button /&gt;</code>s props from a state change like
                below.
              </span>
              <div className="separator separator-dashed my-7" />
              <LoadingButton />
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode10} beforeCodeTitle="Uncontrolled">
              <div className="mb-3">
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="checkbox"
                    defaultValue={[1, 3]}
                    name="Uncontrolled"
                  >
                    <ToggleButton value={1}>
                      Checkbox 1 (pre-checked)
                    </ToggleButton>
                    <ToggleButton value={2}>Checkbox 2</ToggleButton>
                    <ToggleButton value={3}>
                      Checkbox 3 (pre-checked)
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>
              <div>
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={1}
                  >
                    <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                    <ToggleButton value={2}>Radio 2</ToggleButton>
                    <ToggleButton value={3}>Radio 3</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<ButtonToolbar>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</ButtonToolbar>
`;
const jsCode2 = `
<ButtonToolbar>
  <Button variant="outline-primary">Primary</Button>
  <Button variant="outline-secondary">Secondary</Button>
  <Button variant="outline-success">Success</Button>
  <Button variant="outline-warning">Warning</Button>
  <Button variant="outline-danger">Danger</Button>
  <Button variant="outline-info">Info</Button>
  <Button variant="outline-light">Light</Button>
  <Button variant="outline-dark">Dark</Button>
</ButtonToolbar>
`;
const jsCode3 = `
<ButtonToolbar>
  <Button href="#">Link</Button>
  <Button type="submit">Button</Button>
  <Button as="input" type="button" value="Input" />
  <Button as="input" type="submit" value="Submit" />
  <Button as="input" type="reset" value="Reset" />
</ButtonToolbar>
`;
const jsCode4 = `
<div>
  <ButtonToolbar>
    <Button variant="primary" size="lg">
      Large button
    </Button>
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </ButtonToolbar>

  <ButtonToolbar>
    <Button variant="primary" size="sm">
      Small button
    </Button>
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </ButtonToolbar>
</div>
`;
const jsCode5 = `
<div>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</div>
`;
const jsCode6 = `
<ButtonToolbar>
  <Button variant="primary" size="lg" active>
    Primary button
  </Button>
  <Button variant="secondary" size="lg" active>
    Button
  </Button>
</ButtonToolbar>
`;
const jsCode7 = `
<ButtonToolbar>
  <Button variant="primary" size="lg" disabled>
    Primary button
  </Button>{' '}
  <Button variant="secondary" size="lg" disabled>
    Button
  </Button>{' '}
  <Button href="#" variant="secondary" size="lg" disabled>
    Link
  </Button>
</ButtonToolbar>
`;
const jsCode8 = `
function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
}

render(<LoadingButton />);
`;
const jsCode9 = `
<div className="d-flex flex-column">
  <ButtonGroup toggle>
    <ToggleButton type="checkbox" defaultChecked value="1">
      Checked
    </ToggleButton>
  </ButtonGroup>
  <ButtonGroup toggle className="mt-3">
    <ToggleButton type="radio" name="radio" defaultChecked value="1">
      Active
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="2">
      Radio
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="3">
      Radio
    </ToggleButton>
  </ButtonGroup>
</div>
`;
const jsCode10 = `
<>
  <ButtonToolbar>
    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
      <ToggleButton value={2}>Checkbox 2</ToggleButton>
      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>

  <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
      <ToggleButton value={2}>Radio 2</ToggleButton>
      <ToggleButton value={3}>Radio 3</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
</>
`;
const jsCode11 = `
class ToggleButtonGroupControlled extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: [1, 3],
    };
  }

  handleChange(value, event) {
    this.setState({ value });
  }

  render() {
    return (
      <ToggleButtonGroup
        type="checkbox"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <ToggleButton value={1}>Option 1</ToggleButton>
        <ToggleButton value={2}>Option 2</ToggleButton>
        <ToggleButton value={3}>Option 3</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

render(<ToggleButtonGroupControlled />);
`;
