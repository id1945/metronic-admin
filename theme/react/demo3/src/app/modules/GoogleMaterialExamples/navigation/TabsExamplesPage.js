/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {useTheme} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {Tab, AppBar, Tabs, Typography, Paper} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

function TabContainer1(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer1.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles1 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 2
function TabContainer2(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer2.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles2 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 4
function TabContainer4({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer4.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles4 = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

// Example 5
const useStyles5 = makeStyles({
  root: {
    flexGrow: 1
  }
});

// Example 6
function TabContainer6(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer6.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles6 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 7
function TabContainer7(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer7.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles7 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 8
function TabContainer8(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer8.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles8 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 9
const AntTabs9 = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const AntTab9 = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const StyledTabs9 = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab9 = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles9 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  typography: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: "#2e1534"
  }
}));

// Example 10
function TabContainer10(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer10.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab10(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles10 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

// Example 11
const useStyles11 = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500
  }
});

export default function TabsExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [value1, setValue1] = React.useState(0);

  function handleChange1(event, newValue) {
    setValue1(newValue);
  }

  // Example 2
  const classes2 = useStyles2();
  const [value2, setValue2] = React.useState("one");

  function handleChange2(event, newValue) {
    setValue2(newValue);
  }

  // Example 3
  const [value3, setValue3] = React.useState(2);

  function handleChange3(event, newValue) {
    setValue3(newValue);
  }

  // Example 4
  const classes4 = useStyles4();
  const theme4 = useTheme();
  const [value4, setValue4] = React.useState(0);

  function handleChange4(event, newValue) {
    setValue4(newValue);
  }

  function handleChangeIndex4(index) {
    setValue4(index);
  }

  // Example 5
  const classes5 = useStyles5();
  const [value5, setValue5] = React.useState(0);

  function handleChange5(event, newValue) {
    setValue5(newValue);
  }

  // Example 6
  const classes6 = useStyles6();
  const [value6, setValue6] = React.useState(0);

  function handleChange6(event, newValue) {
    setValue6(newValue);
  }

  // Example 7
  const classes7 = useStyles7();
  const [value7, setValue7] = React.useState(0);

  function handleChange7(event, newValue) {
    setValue7(newValue);
  }

  // Example 8
  const classes8 = useStyles8();
  const [value8, setValue8] = React.useState(0);

  function handleChange8(event, newValue) {
    setValue8(newValue);
  }

  // Example 9
  const classes9 = useStyles9();
  const [value9, setValue9] = React.useState(0);

  function handleChange9(event, newValue) {
    setValue9(newValue);
  }

  // Example 10
  const classes10 = useStyles10();
  const [value10, setValue10] = React.useState(0);

  function handleChange10(event, newValue) {
    setValue10(newValue);
  }

  // Example 11
  const classes11 = useStyles11();
  const [value11, setValue11] = React.useState(0);

  function handleChange11(event, newValue) {
    setValue11(newValue);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Tabs make it easy to explore and switch between different views.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/tabs/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Simple Tabs"
            codeBlockHeight="400px"
          >
            <span>A simple example with no frills.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <AppBar position="static">
                <Tabs value={value1} onChange={handleChange1}>
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              {value1 === 0 && <TabContainer1>Item One</TabContainer1>}
              {value1 === 1 && <TabContainer1>Item Two</TabContainer1>}
              {value1 === 2 && <TabContainer1>Item Three</TabContainer1>}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Wrapped Labels"
            codeBlockHeight="400px"
          >
            <span>
              Long labels will automatically wrap on tabs. If the label is too
              long for the tab, it will overflow and the text will not be
              visible.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <AppBar position="static">
                <Tabs value={value2} onChange={handleChange2}>
                  <Tab
                    value="one"
                    label="New Arrivals in the Longest Text of Nonfiction"
                    wrapped
                  />
                  <Tab value="two" label="Item Two" />
                  <Tab value="three" label="Item Three" />
                </Tabs>
              </AppBar>
              {value2 === "one" && <TabContainer2>Item One</TabContainer2>}
              {value2 === "two" && <TabContainer2>Item Two</TabContainer2>}
              {value2 === "three" && <TabContainer2>Item Three</TabContainer2>}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Full width"
            codeBlockHeight="400px"
          >
            <span>
              The <code>variant="fullWidth"</code> property should be used for
              smaller views. This demo also uses react-swipeable-views to
              animate the Tab transition, and allowing tabs to be swiped on
              touch devices.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value4}
                  onChange={handleChange4}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme4.direction === "rtl" ? "x-reverse" : "x"}
                index={value4}
                onChangeIndex={handleChangeIndex4}
              >
                <TabContainer4 dir={theme4.direction}>Item One</TabContainer4>
                <TabContainer4 dir={theme4.direction}>Item Two</TabContainer4>
                <TabContainer4 dir={theme4.direction}>Item Three</TabContainer4>
              </SwipeableViews>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Automatic Scroll Buttons"
            codeBlockHeight="400px"
          >
            <span>
              Left and right scroll buttons will automatically be presented on
              desktop and hidden on mobile. (based on viewport width)
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes6.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value6}
                  onChange={handleChange6}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                  <Tab label="Item Four" />
                  <Tab label="Item Five" />
                  <Tab label="Item Six" />
                  <Tab label="Item Seven" />
                </Tabs>
              </AppBar>
              {value6 === 0 && <TabContainer6>Item One</TabContainer6>}
              {value6 === 1 && <TabContainer6>Item Two</TabContainer6>}
              {value6 === 2 && <TabContainer6>Item Three</TabContainer6>}
              {value6 === 3 && <TabContainer6>Item Four</TabContainer6>}
              {value6 === 4 && <TabContainer6>Item Five</TabContainer6>}
              {value6 === 5 && <TabContainer6>Item Six</TabContainer6>}
              {value6 === 6 && <TabContainer6>Item Seven</TabContainer6>}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode9}
            beforeCodeTitle="Customized tabs"
            codeBlockHeight="400px"
          >
            <span>Here is an example of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes9.root}>
              <div className={classes9.demo1}>
                <AntTabs9 value={value9} onChange={handleChange9}>
                  <AntTab9 label="Tab 1" />
                  <AntTab9 label="Tab 2" />
                  <AntTab9 label="Tab 3" />
                </AntTabs9>
                <Typography className={classes9.typography} />
              </div>
              <div className={classes9.demo2}>
                <StyledTabs9 value={value9} onChange={handleChange9}>
                  <StyledTab9 label="Workflows" />
                  <StyledTab9 label="Datasets" />
                  <StyledTab9 label="Connections" />
                </StyledTabs9>
                <Typography className={classes9.typography} />
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Disabled Tab"
            codeBlockHeight="400px"
          >
            <span>
              A Tab can be disabled by setting <code>disabled</code> property.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Paper square>
              <Tabs
                value={value3}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange3}
              >
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
              </Tabs>
            </Paper>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Centered"
            codeBlockHeight="400px"
          >
            <span>
              The <code>centered</code> property should be used for larger
              views.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Paper className={classes5.root}>
              <Tabs
                value={value5}
                onChange={handleChange5}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Paper>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode7}
            beforeCodeTitle="Forced Scroll Buttons"
            codeBlockHeight="400px"
          >
            <span>
              Left and right scroll buttons will be presented regardless of the
              viewport width.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes7.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value7}
                  onChange={handleChange7}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Item One" icon={<PhoneIcon />} />
                  <Tab label="Item Two" icon={<FavoriteIcon />} />
                  <Tab label="Item Three" icon={<PersonPinIcon />} />
                  <Tab label="Item Four" icon={<HelpIcon />} />
                  <Tab label="Item Five" icon={<ShoppingBasket />} />
                  <Tab label="Item Six" icon={<ThumbDown />} />
                  <Tab label="Item Seven" icon={<ThumbUp />} />
                </Tabs>
              </AppBar>
              {value7 === 0 && <TabContainer7>Item One</TabContainer7>}
              {value7 === 1 && <TabContainer7>Item Two</TabContainer7>}
              {value7 === 2 && <TabContainer7>Item Three</TabContainer7>}
              {value7 === 3 && <TabContainer7>Item Four</TabContainer7>}
              {value7 === 4 && <TabContainer7>Item Five</TabContainer7>}
              {value7 === 5 && <TabContainer7>Item Six</TabContainer7>}
              {value7 === 6 && <TabContainer7>Item Seven</TabContainer7>}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode10}
            beforeCodeTitle="Nav Tabs"
            codeBlockHeight="400px"
          >
            <span>
              By default tabs use a <code>button</code> element, but you can
              provide your own custom tag or component. Here's an example of
              implementing tabbed navigation:
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes10.root}>
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  value={value10}
                  onChange={handleChange10}
                >
                  <LinkTab10 label="Page One" href="/drafts" />
                  <LinkTab10 label="Page Two" href="/trash" />
                  <LinkTab10 label="Page Three" href="/spam" />
                </Tabs>
              </AppBar>
              {value10 === 0 && <TabContainer10>Page One</TabContainer10>}
              {value10 === 1 && <TabContainer10>Page Two</TabContainer10>}
              {value10 === 2 && <TabContainer10>Page Three</TabContainer10>}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode11}
            beforeCodeTitle="Icon Tabs"
            codeBlockHeight="400px"
          >
            <span>Tab labels may be either all icons or all text.</span>
            <div className="separator separator-dashed my-7"></div>
            <Paper square className={classes11.root}>
              <Tabs
                value={value11}
                onChange={handleChange11}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<PhoneIcon />} aria-label="Phone" />
                <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
                <Tab icon={<PersonPinIcon />} aria-label="Person" />
              </Tabs>
            </Paper>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode8}
            beforeCodeTitle="Prevent Scroll Buttons"
            codeBlockHeight="400px"
          >
            <span>
              Left and right scroll buttons will never be presented. All
              scrolling must be initiated through user agent scrolling
              mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes8.root}>
              <AppBar position="static">
                <Tabs
                  value={value8}
                  onChange={handleChange8}
                  variant="scrollable"
                  scrollButtons="off"
                >
                  <Tab icon={<PhoneIcon />} aria-label="Phone" />
                  <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
                  <Tab icon={<PersonPinIcon />} aria-label="Person" />
                  <Tab icon={<HelpIcon />} aria-label="Help" />
                  <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
                  <Tab icon={<ThumbDown />} aria-label="Up" />
                  <Tab icon={<ThumbUp />} aria-label="Down" />
                </Tabs>
              </AppBar>
              {value8 === 0 && <TabContainer8>Item One</TabContainer8>}
              {value8 === 1 && <TabContainer8>Item Two</TabContainer8>}
              {value8 === 2 && <TabContainer8>Item Three</TabContainer8>}
              {value8 === 3 && <TabContainer8>Item Four</TabContainer8>}
              {value8 === 4 && <TabContainer8>Item Five</TabContainer8>}
              {value8 === 5 && <TabContainer8>Item Six</TabContainer8>}
              {value8 === 6 && <TabContainer8>Item Seven</TabContainer8>}
            </div>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" wrapped />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 'one' && <TabContainer>Item One</TabContainer>}
      {value === 'two' && <TabContainer>Item Two</TabContainer>}
      {value === 'three' && <TabContainer>Item Three</TabContainer>}
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
    </Paper>
  );
}
`;
const jsCode4 = `
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>Item One</TabContainer>
        <TabContainer dir={theme.direction}>Item Two</TabContainer>
        <TabContainer dir={theme.direction}>Item Three</TabContainer>
      </SwipeableViews>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
`;
const jsCode6 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      {value === 5 && <TabContainer>Item Six</TabContainer>}
      {value === 6 && <TabContainer>Item Seven</TabContainer>}
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Item One" icon={<PhoneIcon />} />
          <Tab label="Item Two" icon={<FavoriteIcon />} />
          <Tab label="Item Three" icon={<PersonPinIcon />} />
          <Tab label="Item Four" icon={<HelpIcon />} />
          <Tab label="Item Five" icon={<ShoppingBasket />} />
          <Tab label="Item Six" icon={<ThumbDown />} />
          <Tab label="Item Seven" icon={<ThumbUp />} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      {value === 5 && <TabContainer>Item Six</TabContainer>}
      {value === 6 && <TabContainer>Item Seven</TabContainer>}
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
          <Tab icon={<PhoneIcon />} aria-label="Phone" />
          <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
          <Tab icon={<PersonPinIcon />} aria-label="Person" />
          <Tab icon={<HelpIcon />} aria-label="Help" />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
          <Tab icon={<ThumbDown />} aria-label="Up" />
          <Tab icon={<ThumbUp />} aria-label="Down" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
      {value === 3 && <TabContainer>Item Four</TabContainer>}
      {value === 4 && <TabContainer>Item Five</TabContainer>}
      {value === 5 && <TabContainer>Item Six</TabContainer>}
      {value === 6 && <TabContainer>Item Seven</TabContainer>}
    </div>
  );
}
`;
const jsCode9 = `
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));
`;
const jsCode10 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Page One</TabContainer>}
      {value === 1 && <TabContainer>Page Two</TabContainer>}
      {value === 2 && <TabContainer>Page Three</TabContainer>}
    </div>
  );
}
`;
const jsCode11 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<PhoneIcon />} aria-label="Phone" />
        <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
        <Tab icon={<PersonPinIcon />} aria-label="Person" />
      </Tabs>
    </Paper>
  );
}
`;
