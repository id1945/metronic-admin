import React from "react";
import {Jumbotron, Container, Button} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class JumbotronExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            A lightweight, flexible component that can optionally extend the
            entire viewport to showcase key content on your site.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/jumbotron/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>
        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Fluid">
              <Jumbotron fluid>
                <Container>
                  <h1>Fluid jumbotron</h1>
                  <p>
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                  </p>
                </Container>
              </Jumbotron>
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
`;
const jsCode2 = `
<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
`;
