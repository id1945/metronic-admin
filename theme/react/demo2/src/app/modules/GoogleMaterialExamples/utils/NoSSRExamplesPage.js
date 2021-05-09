/* eslint-disable no-restricted-imports */
import React from "react";
import PropTypes from "prop-types";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {NoSsr, Button} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const styles = theme => ({
  button: {
    display: "block",
    margin: theme.spacing(2)
  }
});

// Example 2
const useStyles = makeStyles({
  container: {
    maxWidth: 300,
    wordBreak: "break-all"
  }
});

function LargeTree() {
  return Array.from(new Array(3000)).map((_, index) => (
    <span key={index}>.</span>
  ));
}

function NoSSRExamplesPage(props) {
  // Example 1
  const { classes } = props;

  // Example 2
  const classes2 = useStyles();
  const [state, setState] = React.useState({ open: false, defer: false });

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          NoSsr purposely removes components from the subject of Server Side
          Rendering (SSR).
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/no-ssr/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Client side deferring">
        <span>
          In it's core, the NoSsr component purpose is to defer rendering. You
          can use it to defer the rendering from the server to the client.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Server & Client
          </Button>
          <NoSsr>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Client only
            </Button>
          </NoSsr>
        </div>
      </KTCodeExample>

      <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Frame deferring">
        <span>
          You can also use it to defer the rendering within the client itself.
          You can wait a screen frame with the <code>defer</code> property to
          render the children. React does 2 commits instead of 1.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div>
          <button
            type="button"
            className="btn btn-primary mr-3"
            onClick={() =>
              setState({
                open: !state.open,
                defer: false
              })
            }
          >
            {'Render NoSsr defer="false"'}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              setState({
                open: !state.open,
                defer: true
              })
            }
          >
            {'Render NoSsr defer="true"'}
          </button>
          {state.open ? (
            <div className={classes2.container}>
              <span>Outside NoSsr</span>
              <NoSsr defer={state.defer}>
                ....Inside NoSsr
                <LargeTree />
              </NoSsr>
            </div>
          ) : null}
        </div>
      </KTCodeExample>
    </>
  );
}

NoSSRExamplesPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoSSRExamplesPage);

const jsCode1 = `
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    margin: theme.spacing(2),
  },
});

function SimpleNoSsr(props) {
  const { classes } = props;

  return (
    <div>
      <Button className={classes.button} variant="contained" color="primary">
        Server & Client
      </Button>
      <NoSsr>
        <Button className={classes.button} variant="contained" color="secondary">
          Client only
        </Button>
      </NoSsr>
    </div>
  );
}

SimpleNoSsr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleNoSsr);
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';

const useStyles = makeStyles({
  container: {
    maxWidth: 300,
    wordBreak: 'break-all',
  },
});

function LargeTree() {
  return Array.from(new Array(3000)).map((_, index) => <span key={index}>.</span>);
}

function FrameDeferring() {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false, defer: false });

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setState({
            open: !state.open,
            defer: false,
          })
        }
      >
        {'Render NoSsr defer="false"'}
      </button>
      <button
        type="button"
        onClick={() =>
          setState({
            open: !state.open,
            defer: true,
          })
        }
      >
        {'Render NoSsr defer="true"'}
      </button>
      {state.open ? (
        <div className={classes.container}>
          <span>Outside NoSsr</span>
          <NoSsr defer={state.defer}>
            ....Inside NoSsr
            <LargeTree />
          </NoSsr>
        </div>
      ) : null}
    </div>
  );
}

export default FrameDeferring;
`;
