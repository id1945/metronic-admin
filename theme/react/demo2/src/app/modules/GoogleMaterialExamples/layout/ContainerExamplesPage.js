import React from "react";
import {Container, Typography} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const jsCode1 = `
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
`;
const jsCode2 = `
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
`;

export default function ContainerExamplesPage() {
  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          The container centers your content horizontally. It's the most basic
          layout element.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/container/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>
      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Fluid">
        <span>
          A fluid container width is bounded by that maxWidth property value.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          />
        </Container>
      </KTCodeExample>

      <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Fixed">
        <span>
          If you prefer to design for a fixed set of sizes instead of trying to
          accommodate a fully fluid viewport, you can set the fixed property.
          The max-width matches the min-width of the current breakpoint.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          />
        </Container>
      </KTCodeExample>
    </>
  );
}
