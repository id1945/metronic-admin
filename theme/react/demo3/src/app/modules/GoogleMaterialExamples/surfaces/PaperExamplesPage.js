/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperExamplesPage() {
  const classes = useStyles();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          In Material Design, the physical properties of paper are translated to
          the screen.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/paper/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Paper">
        <span>
          The background of an application resembles the flat, opaque texture of
          a sheet of paper, and an application’s behavior mimics paper’s ability
          to be re-sized, shuffled, and bound together in multiple sheets.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </div>
      </KTCodeExample>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}
`;
