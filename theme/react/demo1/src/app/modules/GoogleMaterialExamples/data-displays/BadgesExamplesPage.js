/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
  Badge,
  IconButton,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Divider,
  Switch
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  padding: {
    padding: theme.spacing(0, 2)
  }
}));

// Example 2
const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3)
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  divider: {
    width: "100%"
  },
  row: {
    marginTop: theme.spacing(2)
  }
}));

// Example 5
const StyledBadge = withStyles(theme => ({
  badge: {
    top: "50%",
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

export default function BadgesExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  // Example 2
  const classes2 = useStyles2();

  // Example 3
  const classes3 = useStyles3();

  // Example 4
  const classes4 = useStyles4();
  const [invisible4, setInvisible4] = React.useState(false);

  function handleBadgeVisibility4() {
    setInvisible4(!invisible4);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Badge generates a small badge to the top-right of its child(ren).
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/badges/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Badges">
            <span>
              Examples of badges containing text, using primary and secondary
              colors. The badge is applied to its children.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <div>
                <Badge
                  className={classes1.margin}
                  badgeContent={4}
                  color="primary"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes1.margin}
                  badgeContent={10}
                  color="secondary"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes1.margin}
                >
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </div>
              <AppBar position="static" className={classes1.margin}>
                <Tabs value={0}>
                  <Tab
                    label={
                      <Badge
                        className={classes1.padding}
                        color="secondary"
                        badgeContent={4}
                      >
                        Item One
                      </Badge>
                    }
                  />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              <Badge
                color="primary"
                badgeContent={4}
                className={classes1.margin}
              >
                <Typography className={classes1.padding}>Typography</Typography>
              </Badge>
              <Badge
                color="primary"
                badgeContent={4}
                className={classes1.margin}
              >
                <Button variant="contained">Button</Button>
              </Badge>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Dot Badge">
            <span>
              The <code>dot</code> property changes a badge into a small dot.
              This can be used as a notification that something has changed
              without giving a count.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <div>
                <Badge
                  className={classes3.margin}
                  color="primary"
                  variant="dot"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes3.margin}
                  color="secondary"
                  variant="dot"
                >
                  <MailIcon />
                </Badge>
              </div>
              <Badge color="primary" className={classes3.margin} variant="dot">
                <Typography>Typography</Typography>
              </Badge>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Customized badges">
            <span>Here is an example of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <IconButton aria-label="Cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Maximum Value">
            <span>
              You can use the <code>max</code> property to cap the value of the
              badge content.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <React.Fragment>
              <Badge
                className={classes2.margin}
                badgeContent={99}
                color="primary"
              >
                <MailIcon />
              </Badge>
              <Badge
                className={classes2.margin}
                badgeContent={100}
                color="primary"
              >
                <MailIcon />
              </Badge>
              <Badge
                className={classes2.margin}
                badgeContent={1000}
                max={999}
                color="primary"
              >
                <MailIcon />
              </Badge>
            </React.Fragment>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Badge visibility">
            <span className="pb-3">
              The visibility of badges can be controlled using the invisible
              property.
            </span>
            <div>
              The badge auto hides with badgeContent is zero. You can override
              this with the <code>showZero</code> property.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <div className={classes4.row}>
                <Badge
                  color="secondary"
                  badgeContent={4}
                  invisible={invisible4}
                  className={classes4.margin}
                >
                  <MailIcon />
                </Badge>
                <Badge
                  color="secondary"
                  variant="dot"
                  invisible={invisible4}
                  className={classes4.margin}
                >
                  <MailIcon />
                </Badge>
              </div>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={!invisible4}
                      onChange={handleBadgeVisibility4}
                    />
                  }
                  label="Show Badge"
                />
              </FormGroup>
              <Divider className={classes4.divider} />
              <div className={classes4.row}>
                <Badge
                  color="secondary"
                  badgeContent={0}
                  className={classes4.margin}
                >
                  <MailIcon />
                </Badge>
                <Badge
                  color="secondary"
                  badgeContent={0}
                  showZero
                  className={classes4.margin}
                >
                  <MailIcon />
                </Badge>
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
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

export default function SimpleBadge() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
}));

export default function BadgeMax() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Badge className={classes.margin} badgeContent={99} color="primary">
        <MailIcon />
      </Badge>
      <Badge className={classes.margin} badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge className={classes.margin} badgeContent={1000} max={999} color="primary">
        <MailIcon />
      </Badge>
    </React.Fragment>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function DotBadge() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Badge className={classes.margin} color="primary" variant="dot">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} color="secondary" variant="dot">
          <MailIcon />
        </Badge>
      </div>
      <Badge color="primary" className={classes.margin} variant="dot">
        <Typography>Typography</Typography>
      </Badge>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  divider: {
    width: '100%',
  },
  row: {
    marginTop: theme.spacing(2),
  },
}));

export default function BadgeVisibility() {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(false);

  function handleBadgeVisibility() {
    setInvisible(!invisible);
  }

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Badge color="secondary" badgeContent={4} invisible={invisible} className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" variant="dot" invisible={invisible} className={classes.margin}>
          <MailIcon />
        </Badge>
      </div>
      <FormGroup row>
        <FormControlLabel
          control={<Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </FormGroup>
      <Divider className={classes.divider} />
      <div className={classes.row}>
        <Badge color="secondary" badgeContent={0} className={classes.margin}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero className={classes.margin}>
          <MailIcon />
        </Badge>
      </div>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: \`2px solid \${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }\`,
  },
}))(Badge);

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="Cart">
      <StyledBadge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
`;
