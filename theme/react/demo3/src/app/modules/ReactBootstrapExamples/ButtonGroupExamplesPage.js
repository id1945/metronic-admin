import React from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class ButtonGroupExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Group a series of buttons together on a single line with the button
            group.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/button-group/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic example">
              <span>
                Wrap a series of <code>&lt;Button&gt;</code>s in a{" "}
                <code>&lt;ButtonGroup&gt;</code>.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Button Toolbar">
              <span>
                Feel free to mix input groups with button groups in your
                toolbars. Similar to the example above, you’ll likely need some
                utilities though to space things properly.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <ButtonToolbar
                  className="mb-3"
                  aria-label="Toolbar with Button groups"
                >
                  <ButtonGroup className="mr-2" aria-label="First group">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                    <Button variant="secondary">4</Button>
                  </ButtonGroup>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      placeholder="Input group example"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                    />
                  </InputGroup>
                </ButtonToolbar>

                <ButtonToolbar
                  className="justify-content-between"
                  aria-label="Toolbar with Button groups"
                >
                  <ButtonGroup aria-label="First group">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                    <Button variant="secondary">4</Button>
                  </ButtonGroup>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      placeholder="Input group example"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon2"
                    />
                  </InputGroup>
                </ButtonToolbar>
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Nesting">
              <span>
                You can place other button types within the{" "}
                <code>&lt;ButtonGroup&gt;</code> like{" "}
                <code>&lt;DropdownButton&gt;</code>s.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-nested-dropdown"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Button toolbar">
              <span>
                Combine sets of <code>&lt;ButtonGroup&gt;</code>s into a{" "}
                <code>&lt;ButtonToolbar&gt;</code> for more complex components.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>

                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="Third group">
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Sizing">
              <span>
                Instead of applying button sizing props to every button in a
                group, just add <code>size</code> prop to the{" "}
                <code>&lt;ButtonGroup&gt;</code>.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>

                <ButtonGroup className="mt-3">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup size="sm" className="mt-3">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </div>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode6}
              beforeCodeTitle="Vertical variation"
            >
              <span>
                Make a set of buttons appear vertically stacked rather than
                horizontally, by adding <code>vertical</code> to the{" "}
                <code>&lt;ButtonGroup&gt;</code>. Split button dropdowns are not
                supported here.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-vertical-dropdown-1"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <Button>Button</Button>
                <Button>Button</Button>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-vertical-dropdown-2"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-vertical-dropdown-3"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
`;
const jsCode2 = `
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>

  <ButtonGroup className="mr-2" aria-label="Second group">
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>

  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
`;
const jsCode3 = `
<div>
  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup aria-label="First group">
      <Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>
</div>
`;
const jsCode4 = `
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>

  <ButtonGroup className="mt-3">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
  <ButtonGroup size="sm" className="mt-3">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
</div>
`;
const jsCode5 = `
<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;
const jsCode6 = `
<ButtonGroup vertical>
  <Button>Button</Button>
  <Button>Button</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <Button>Button</Button>
  <Button>Button</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;
