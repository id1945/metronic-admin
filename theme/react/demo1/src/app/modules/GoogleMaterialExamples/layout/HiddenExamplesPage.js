import React from "react";
import {makeStyles} from "@material-ui/core";
import {Hidden, Paper, Typography, Grid} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const jsCode1 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointUp(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsUp>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointUp.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(BreakpointUp);
`;
const jsCode2 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointDown(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointDown.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(BreakpointDown);
`;
const jsCode3 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointOnly(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden only="lg">
          <Paper className={classes.paper}>Hidden on lg</Paper>
        </Hidden>
        <Hidden only="sm">
          <Paper className={classes.paper}>Hidden on sm</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
          <Paper className={classes.paper}>Hidden on sm and lg</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointOnly.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(BreakpointOnly);
`;
const jsCode4 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function GridIntegration(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        Current width: {width}
      </Typography>
      <Grid container spacing={3}>
        <Hidden xsUp>
          <Grid item xs>
            <Paper className={classes.paper}>xsUp</Paper>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs>
            <Paper className={classes.paper}>smUp</Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs>
            <Paper className={classes.paper}>mdUp</Paper>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs>
            <Paper className={classes.paper}>lgUp</Paper>
          </Grid>
        </Hidden>
        <Hidden xlUp>
          <Grid item xs>
            <Paper className={classes.paper}>xlUp</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

GridIntegration.propTypes = {
  width: PropTypes.string,
};

export default withWidth()(GridIntegration);
`;

const useStyles1 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1)
  }
}));
const useStyles2 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function HiddenExamplesPage(props) {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const { width } = props;

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Quickly and responsively toggle the visibility value of components and
          more with our hidden utilities.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/hidden/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Breakpoint up">
            <span>
              Using any breakpoint <code>up</code> property, the given children
              will be hidden at or above the breakpoint.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <Typography variant="subtitle1">
                Current width: {width}
              </Typography>
              <div className={classes1.container}>
                <Hidden xsUp>
                  <Paper className={classes1.paper}>xsUp</Paper>
                </Hidden>
                <Hidden smUp>
                  <Paper className={classes1.paper}>smUp</Paper>
                </Hidden>
                <Hidden mdUp>
                  <Paper className={classes1.paper}>mdUp</Paper>
                </Hidden>
                <Hidden lgUp>
                  <Paper className={classes1.paper}>lgUp</Paper>
                </Hidden>
                <Hidden xlUp>
                  <Paper className={classes1.paper}>xlUp</Paper>
                </Hidden>
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Breakpoint only">
            <span>
              Using the breakpoint <code>only</code> property, the given
              children will be hidden at the specified breakpoint(s).
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <Typography variant="subtitle1">
                Current width: {width}
              </Typography>
              <div className={classes1.container}>
                <Hidden only="lg">
                  <Paper className={classes1.paper}>Hidden on lg</Paper>
                </Hidden>
                <Hidden only="sm">
                  <Paper className={classes1.paper}>Hidden on sm</Paper>
                </Hidden>
                <Hidden only={["sm", "lg"]}>
                  <Paper className={classes1.paper}>Hidden on sm and lg</Paper>
                </Hidden>
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Breakpoint down">
            <span>
              Using any breakpoint <code>down</code> property, the given
              children will be hidden at or below the breakpoint.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <Typography variant="subtitle1">
                Current width: {width}
              </Typography>
              <div className={classes1.container}>
                <Hidden xsDown>
                  <Paper className={classes1.paper}>xsDown</Paper>
                </Hidden>
                <Hidden smDown>
                  <Paper className={classes1.paper}>smDown</Paper>
                </Hidden>
                <Hidden mdDown>
                  <Paper className={classes1.paper}>mdDown</Paper>
                </Hidden>
                <Hidden lgDown>
                  <Paper className={classes1.paper}>lgDown</Paper>
                </Hidden>
                <Hidden xlDown>
                  <Paper className={classes1.paper}>xlDown</Paper>
                </Hidden>
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Integration with Grid"
          >
            <span>
              It is quite common to alter <code>Grid</code> at different
              responsive breakpoints, and in many cases, you want to hide some
              of those elements.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <Typography variant="subtitle1" gutterBottom>
                Current width: {width}
              </Typography>
              <Grid container spacing={3}>
                <Hidden xsUp>
                  <Grid item xs>
                    <Paper className={classes2.paper}>xsUp</Paper>
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid item xs>
                    <Paper className={classes2.paper}>smUp</Paper>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item xs>
                    <Paper className={classes2.paper}>mdUp</Paper>
                  </Grid>
                </Hidden>
                <Hidden lgUp>
                  <Grid item xs>
                    <Paper className={classes2.paper}>lgUp</Paper>
                  </Grid>
                </Hidden>
                <Hidden xlUp>
                  <Grid item xs>
                    <Paper className={classes2.paper}>xlUp</Paper>
                  </Grid>
                </Hidden>
              </Grid>
            </div>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}
