import React from "react";
import {Button, Form, InputGroup, Col, Row} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

class FormExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
}

export default class FormsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://react-bootstrap.github.io/components/forms/"
          >
            demos & documentation
          </a>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <span>
                The <code>&lt;FormControl&gt;</code> component renders a form
                control with Bootstrap styling. The{" "}
                <code>&lt;FormGroup&gt;</code> component wraps a form control
                with proper spacing, along with support for a label, help text,
                and validation state. To ensure accessibility, set controlId on{" "}
                <code>&lt;FormGroup&gt;</code>, and use{" "}
                <code>&lt;FormLabel&gt;</code> for the label.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Sizing">
              <span>
                Use <code>size</code> on <code>&lt;FormControl&gt;</code> to
                change the size of inputs.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
              </>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Default (stacked)">
              <span>
                By default, any number of checkboxes and radios that are
                immediate sibling will be vertically stacked and appropriately
                spaced with FormCheck.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />

                    <Form.Check
                      disabled
                      type={type}
                      label={`disabled ${type}`}
                      id={`disabled-default-${type}`}
                    />
                  </div>
                ))}
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Without labels">
              <span>
                When you render a FormCheck without a label (no{" "}
                <code>children</code>) some additional styling is applied to
                keep the inputs from collapsing.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <>
                <Form.Check aria-label="option 1" />
                <Form.Check type="radio" aria-label="radio 1" />
              </>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode9} beforeCodeTitle="Form group">
              <span className="mb-3">
                The <code>FormGroup</code> component is the easiest way to add
                some structure to forms. It provides a flexible container for
                grouping of labels, controls, optional help text, and form
                validation messaging.
              </span>
              <div>
                You also add the <code>controlId</code> prop to accessibly wire
                the nested label and input together via the <code>id</code>.
              </div>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode11}
              beforeCodeTitle="Form row"
              codeBlockHeight="400px"
            >
              <span>
                You may also swap <code>&lt;Row&gt;</code> for{" "}
                <code>&lt;Form.Row&gt;</code>, a variation of the standard grid
                row that overrides the default column gutters for tighter and
                more compact layouts.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode13}
              beforeCodeTitle="Native HTML5 form validation"
              codeBlockHeight="400px"
            >
              <span>
                For native HTML form validation–available in all our supported
                browsers, the <code>:valid</code> and <code>:invalid</code>{" "}
                pseudo selectors are used to apply validation styles as well as
                display feedback messages.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <FormExample />
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Form controls">
              <span>
                For textual form controls—like <code>input</code>s,{" "}
                <code>select</code>s, and <code>textarea</code>s—use the
                FormControl component. FormControl adds some additional styles
                for general appearance, focus state, sizing, and more.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Plaintext">
              <span>
                If you want to have elements in your form styled as plain text,
                use the <code>plaintext</code> prop on FormControls to remove
                the default form field styling and preserve the correct margin
                and padding.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Inline">
              <span>
                Group checkboxes or radios on the same horizontal row by adding
                the <code>inline</code> prop.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode8}
              beforeCodeTitle="Customizing FormCheck rendering"
            >
              <span className="mb-3">
                When you need tighter control, or want to customize how the{" "}
                <code>FormCheck</code> component renders, it may better to use
                it's constituent parts directly.
              </span>
              <div>
                By provided <code>children</code> to the <code>FormCheck</code>{" "}
                you can forgo the default rendering and handle it yourself.
              </div>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                      <Form.Control.Feedback type="valid">
                        You did it!
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode10} beforeCodeTitle="Form grid">
              <span>
                More complex forms can be built using the grid components. Use
                these for form layouts that require multiple columns, varied
                widths, and additional alignment options.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode12}
              beforeCodeTitle="Horizontal forms"
              codeBlockHeight="400px"
            >
              <span>
                You may also swap <code>&lt;Row&gt;</code> for{" "}
                <code>&lt;Form.Row&gt;</code>, a variation of the standard grid
                row that overrides the default column gutters for tighter and
                more compact layouts.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Radios
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                  </Col>
                </Form.Group>
              </Form>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode16} beforeCodeTitle="Inline">
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="1"
                      type={type}
                      id={`custom-inline-${type}-1`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="2"
                      type={type}
                      id={`custom-inline-${type}-2`}
                    />
                    <Form.Check
                      custom
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`custom-inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode15}
              beforeCodeTitle="Checkboxes and radios"
            >
              <span>
                Custom checkbox and radio styles are achieved with a resourceful
                use of the <code>:checked</code> selector and{" "}
                <code>:after</code> psuedo elements, but are Structurally
                similar to the default <code>FormCheck</code>.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={`custom-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      type={type}
                      id={`custom-${type}`}
                      label={`Check this custom ${type}`}
                    />

                    <Form.Check
                      custom
                      disabled
                      type={type}
                      label={`disabled ${type}`}
                      id={`disabled-custom-${type}`}
                    />
                  </div>
                ))}
              </Form>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;
const jsCode2 = `
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
`;
const jsCode3 = `
<>
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</>
`;
const jsCode4 = `
<Form>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
`;
const jsCode5 = `
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={\`default-\${type}\`} className="mb-3">
      <Form.Check 
        type={type}
        id={\`default-\${type}\`}
        label={\`default \${type}\`}
      />

      <Form.Check
        disabled
        type={type}
        label={\`disabled \${type}\`}
        id={\`disabled-default-\${type}\`}
      />
    </div>
  ))}
</Form>
`;
const jsCode6 = `
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={\`inline-\${type}\`} className="mb-3">
      <Form.Check inline label="1" type={type} id={\`inline-\${type}-1\`} />
      <Form.Check inline label="2" type={type} id={\`inline-\${type}-2\`} />
      <Form.Check
        inline
        disabled
        label="3 (disabled)"
        type={type}
        id={\`inline-\${type}-3\`}
      />
    </div>
  ))}
</Form>
`;
const jsCode7 = `
<>
  <Form.Check aria-label="option 1" />
  <Form.Check type="radio" aria-label="radio 1" />
</>
`;
const jsCode8 = `
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={type} className="mb-3">
      <Form.Check type={type} id={\`check-api-\${type}\`}>
        <Form.Check.Input type={type} isValid />
        <Form.Check.Label>{\`Custom api \${type}\`}</Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>
    </div>
  ))}
</Form>
`;
const jsCode9 = `
<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
`;
const jsCode10 = `
<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
`;
const jsCode11 = `
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;
const jsCode12 = `
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
`;
const jsCode13 = `
class FormExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
}

render(<FormExample />);
`;

const jsCode15 = `
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={\`custom-\${type}\`} className="mb-3">
      <Form.Check 
        custom
        type={type}
        id={\`custom-\${type}\`}
        label={\`Check this custom \${type}\`}
      />

      <Form.Check
        custom
        disabled
        type={type}
        label={\`disabled \${type}\`}
        id={\`disabled-custom-\${type}\`}
      />
    </div>
  ))}
</Form>
`;
const jsCode16 = `
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={\`custom-inline-\${type}\`} className="mb-3">
      <Form.Check
        custom
        inline
        label="1"
        type={type}
        id={\`custom-inline-\${type}-1\`}
      />
      <Form.Check
        custom
        inline
        label="2"
        type={type}
        id={\`custom-inline-\${type}-2\`}
      />
      <Form.Check
        custom
        inline
        disabled
        label="3 (disabled)"
        type={type}
        id={\`custom-inline-\${type}-3\`}
      />
    </div>
  ))}
</Form>
`;
