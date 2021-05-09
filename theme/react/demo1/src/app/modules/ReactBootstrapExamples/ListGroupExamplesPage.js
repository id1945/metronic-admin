import React from "react";
import {ListGroup, Row, Col, Tab} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

function alertClicked() {
  alert("You clicked the third ListGroupItem");
}

export default class ListGroupExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            List groups are a flexible and powerful component for displaying a
            series of content. Modify and extend them to support just about any
            content within.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/list-group/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Disabled items">
              <span>
                Set the <code>disabled</code> prop to prevent actions on a{" "}
                <code>&lt;List.Item&gt;</code>. For elements that aren't
                naturally disable-able (like anchors) <code>onClick</code>{" "}
                handlers are added that call <code>preventDefault</code> to
                mimick disabled behavior.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ListGroup>
                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Flush">
              <span>
                Add the <code>flush</code> variant to remove outer borders and
                rounded corners to render list group items edge-to-edge in a
                parent container such as a Card.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </KTCodeExample>
            <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Tabbed Interfaces">
              <span>
                You can also use the Tab components to create ARIA compliant
                tabbable interfaces with the <code>&lt;ListGroup&gt;</code>{" "}
                component. Swap out the <code>&lt;Nav&gt;</code> component for
                the list group and you are good to go.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1"
              >
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      <ListGroup.Item action href="#link1">
                        Link 1
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Link 2
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="#link1"></Tab.Pane>
                      <Tab.Pane eventKey="#link2"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Active items">
              <span>
                Set the <code>active</code> prop to indicate the list groups
                current active selection.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Actionable items">
              <span>
                Toggle the <code>action</code> prop to create actionable list
                group items, with disabled, hover and active styles. List item
                actions will render a <code>&lt;button&gt;</code> or{" "}
                <code>&lt;a&gt;</code> (depending on the presence of an{" "}
                <code>href</code>) by default but can be overriden by setting
                the <code>as</code> prop as usual.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" disabled>
                  Link 2
                </ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                  This one is a button
                </ListGroup.Item>
              </ListGroup>
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode6}
              beforeCodeTitle="Contextual classes"
            >
              <span>
                Use contextual variants on <code>&lt;List.Item&gt;</code>s to
                style them with a stateful background and color.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  Secondary
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Success
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  Danger
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  Warning
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                  Info
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Light
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                  Dark
                </ListGroup.Item>
              </ListGroup>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`;
const jsCode2 = `
<ListGroup as="ul">
  <ListGroup.Item as="li" active>
    Cras justo odio
  </ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Morbi leo risus
  </ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`;

const jsCode3 = `
<ListGroup>
  <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`;
const jsCode4 = `
function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

render(
  <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      Link 1
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>
      This one is a button
    </ListGroup.Item>
  </ListGroup>,
);
`;
const jsCode5 = `
<ListGroup variant="flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
`;
const jsCode6 = `
<ListGroup>
  <ListGroup.Item>No style</ListGroup.Item>
  <ListGroup.Item variant="primary">Primary</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Secondary
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
    Success
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
    Danger
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
    Warning
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Info
  </ListGroup.Item>
  <ListGroup.Item action variant="light">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Dark
  </ListGroup.Item>
</ListGroup>
`;
const jsCode7 = `
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <Sonnet />
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <Sonnet />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
`;
