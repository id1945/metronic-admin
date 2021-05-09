/* eslint-disable no-script-url */
/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, Typography} from "@material-ui/core";
import {MemoryRouter as Router} from "react-router";
import {Link as RouterLink} from "react-router-dom";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1)
  }
}));

const dudUrl = "#";

// Example 2
// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => (
  <Router innerRef={ref} {...props} />
));

const CollisionLink = React.forwardRef((props, ref) => (
  <Router innerRef={ref} to="/getting-started/installation/" {...props} />
));

export default function LinksExamplesPage() {
  const classes1 = useStyles1();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          The Link component allows you to easily customize anchor elements with
          your theme colors and typography styles.
        </span>
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/links/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>
      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple links">
            <span>
              The Link component is built on top of the <code>Typography</code>{" "}
              component. You can leverage its properties.
            </span>
            <div className="separator separator-dashed my-7" />
            <Typography>
              <Link href={dudUrl} className={classes1.link}>
                Link
              </Link>
              <Link href={dudUrl} color="inherit" className={classes1.link}>
                {'color="inherit"'}
              </Link>
              <Link href={dudUrl} variant="body2" className={classes1.link}>
                {'variant="body2"'}
              </Link>
            </Typography>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Third-party routing library"
          >
            <span>
              One common use case is to perform the navigation on the client
              only, without doing a .html round-trip with the server. The{" "}
              <code>Link</code> component provides a property to handle this use
              case: <code>component</code>.
            </span>
            <div className="separator separator-dashed my-7" />
            <Router>
              <div>
                <Link component={RouterLink} to="/">
                  Simple case
                </Link>
                <br />
                <Link component={AdapterLink} to="/">
                  Ref forwarding
                </Link>
                <br />
                <Link component={CollisionLink}>Avoids props collision</Link>
              </div>
            </Router>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

// This resolves to nothing and doesn't affect browser history
const dudUrl = '#';

export default function Links() {
  const classes = useStyles();

  return (
    <Typography>
      <Link href={dudUrl} className={classes.link}>
        Link
      </Link>
      <Link href={dudUrl} color="inherit" className={classes.link}>
        {'color="inherit"'}
      </Link>
      <Link href={dudUrl} variant="body2" className={classes.link}>
        {'variant="body2"'}
      </Link>
    </Typography>
  );
}
`;
const jsCode2 = `
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => <KtContentRouterLink innerRef={ref} {...props} />);

const CollisionLink = React.forwardRef((props, ref) => (
  <KtContentRouterLink innerRef={ref} to="/getting-started/installation/" {...props} />
));

export default function LinkRouter() {
  return (
    <KtContentRouter>
      <div>
        <Link component={RouterLink} to="/">
          Simple case
        </Link>
        <br />
        <Link component={AdapterLink} to="/">
          Ref forwarding
        </Link>
        <br />
        <Link component={CollisionLink}>Avoids props collision</Link>
      </div>
    </Router>
  );
}
`;
