/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  Grid,
  Chip,
  Button
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    marginRight: theme.spacing(1)
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));

export default function DividersExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  // Example 2
  const classes2 = useStyles2();

  // Example 3
  const classes3 = useStyles3();

  // Example 4
  const classes4 = useStyles4();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          A divider is a thin line that groups content in lists and layouts.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/dividers/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="List Dividers">
            <span>
              The divider renders as a <code>&lt;hr&gt;</code> by default. You
              can save rendering this DOM element by using the{" "}
              <code>divider</code> property on the <code>ListItem</code>{" "}
              component.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <List
              component="nav"
              className={classes1.root}
              aria-label="Mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Subheader Dividers">
            <List className={classes3.root}>
              <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider component="li" />
              <li>
                <Typography
                  className={classes3.dividerFullWidth}
                  color="textSecondary"
                  display="block"
                  variant="caption"
                >
                  Divider
                </Typography>
              </li>
              <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider component="li" variant="inset" />
              <li>
                <Typography
                  className={classes3.dividerInset}
                  color="textSecondary"
                  display="block"
                  variant="caption"
                >
                  Leisure
                </Typography>
              </li>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Inset Dividers">
            <List className={classes2.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Middle Dividers">
            <div className={classes4.root}>
              <div className={classes4.section1}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h4">
                      Toothbrush
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6">
                      $4.50
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                  Pinstriped cornflower blue cotton blouse takes you on a walk
                  to the park or just down the hall.
                </Typography>
              </div>
              <Divider variant="middle" />
              <div className={classes4.section2}>
                <Typography gutterBottom variant="body1">
                  Select type
                </Typography>
                <div>
                  <Chip className={classes4.chip} label="Extra Soft" />
                  <Chip
                    className={classes4.chip}
                    color="primary"
                    label="Soft"
                  />
                  <Chip className={classes4.chip} label="Medium" />
                  <Chip className={classes4.chip} label="Hard" />
                </div>
              </div>
              <div className={classes4.section3}>
                <Button color="primary">Add to cart</Button>
              </div>
            </div>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="Mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: \`5px 0 0 \${theme.spacing(2)}px\`,
  },
  dividerInset: {
    margin: \`5px 0 0 \${theme.spacing(9)}px\`,
  },
}));

export default function SubheaderDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          className={classes.dividerInset}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Leisure
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <div>
          <Chip className={classes.chip} label="Extra Soft" />
          <Chip className={classes.chip} color="primary" label="Soft" />
          <Chip className={classes.chip} label="Medium" />
          <Chip className={classes.chip} label="Hard" />
        </div>
      </div>
      <div className={classes.section3}>
        <Button color="primary">Add to cart</Button>
      </div>
    </div>
  );
}
`;
