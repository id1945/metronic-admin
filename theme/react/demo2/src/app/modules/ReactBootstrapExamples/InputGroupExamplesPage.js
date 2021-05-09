import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class InputGroupExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://react-bootstrap.github.io/components/input-group/"
          >
            demos & documentation.
          </a>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample
              jsCode={jsCode1}
              beforeCodeTitle="Basic Example"
              codeBlockHeight="400px"
            >
              <span>
                Place one add-on or button on either side of an input. You may
                also place one on both sides of an input. Remember to place{" "}
                <code>&lt;label&gt;</code>s outside the input group.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">
                      @example.com
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                <label htmlFor="basic-url">Your vanity URL</label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      https://example.com/users/
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode3}
              beforeCodeTitle="Checkboxes and radios"
            >
              <span>
                Use the <code>InputGroup.Radio</code> or{" "}
                <code>InputGroup.Checkbox</code> to add options to an input
                group.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup.Prepend>
                  <FormControl aria-label="Text input with checkbox" />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                  </InputGroup.Prepend>
                  <FormControl aria-label="Text input with radio button" />
                </InputGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Multiple addons">
              <span>Multiple add-ons are supported and can be mixed</span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode7}
              beforeCodeTitle="Buttons with Dropdowns"
              codeBlockHeight="400px"
            >
              <>
                <InputGroup className="mb-3">
                  <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <FormControl aria-describedby="basic-addon1" />
                </InputGroup>

                <InputGroup>
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />

                  <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Sizing">
              <span>
                Add the relative form sizing classes to the{" "}
                <code>InputGroup</code> and contents within will automatically
                resize—no need for repeating the form control size classes on
                each element.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Small
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Default
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Large
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Multiple inputs">
              <span>
                While multiple inputss are supported visually, validation styles
                are only available for input groups with a single input.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>First and last name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <FormControl />
              </InputGroup>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode6}
              beforeCodeTitle="Button addons"
              codeBlockHeight="400px"
            >
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary">Button</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                  </InputGroup.Append>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary">Button</Button>
                    <Button variant="outline-secondary">Button</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" />
                </InputGroup>

                <InputGroup>
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                    <Button variant="outline-secondary">Button</Button>
                  </InputGroup.Append>
                </InputGroup>
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
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</div>
`;
const jsCode2 = `
<div>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
  <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
</div>
`;
const jsCode3 = `
<div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Radio aria-label="Radio button for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with radio button" />
  </InputGroup>
</div>
`;
const jsCode4 = `
<InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>First and last name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl />
  <FormControl />
</InputGroup>
`;
const jsCode5 = `
<div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Amount (to the nearest dollar)"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Amount (to the nearest dollar)"
    />
    <InputGroup.Append>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
</div>
`;
const jsCode6 = `
<div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Button</Button>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
</div>
`;
const jsCode7 = `
<>
  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</>
`;
