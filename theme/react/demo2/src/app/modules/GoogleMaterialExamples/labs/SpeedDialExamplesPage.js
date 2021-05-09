/* eslint-disable no-restricted-imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {withStyles} from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  FormLabel
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {capitalize} from "@material-ui/core/utils";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const styles = theme => ({
  root: {
    width: "100%"
  },
  controls: {
    margin: theme.spacing(3)
  },
  exampleWrapper: {
    position: "relative",
    height: 380
  },
  radioGroup: {
    margin: theme.spacing(1, 0)
  },
  speedDial: {
    position: "absolute",
    "&$directionUp, &$directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(3)
    },
    "&$directionDown, &$directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(3)
    }
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {}
});

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <DeleteIcon />, name: "Delete" }
];

function SpeedDialExamplesPage(props) {
  // Example 1
  const state = {
    direction1: "up",
    open1: false,
    hidden: false
  };

  const handleClick = () => {
    this.setState(state => ({
      open1: !state.open1
    }));
  };

  const handleDirectionChange1 = (event, value) => {
    this.setState({
      direction1: value
    });
  };

  const handleHiddenChange1 = (event, hidden) => {
    this.setState(state => ({
      hidden: hidden,
      // hidden implies !open
      open1: hidden ? false : state.open1
    }));
  };

  const handleClose = () => {
    this.setState({ open1: false });
  };

  const handleOpen = () => {
    this.setState({ open1: true });
  };

  const { classes } = props;
  const { direction1, hidden, open1 } = state;

  const speedDialClassName1 = clsx(
    classes.speedDial,
    classes[`direction${capitalize(direction1)}`]
  );

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>When pressed, a floating action button can display three to six related
        actions in the form of a speed dial.</span>{" "}
        For more info please check the components's official{" "}
        <a
          target="_blank"
          className="font-weight-bold"
          rel="noopener noreferrer"
          href=""
        >
          demos & documentation
        </a>
      </Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Speed Dial">
        <div className="section">
          <span className="section-sub">
            The floating action button can display related actions.
          </span>
          <div className="separator separator-dashed my-7"></div>
          <div className="section-content">
            <div className={classes.root}>
              <div className={classes.controls}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={hidden}
                      onChange={handleHiddenChange1}
                      value="hidden"
                      color="primary"
                    />
                  }
                  label="Hidden"
                />
                <FormLabel component="legend">Direction</FormLabel>
                <RadioGroup
                  aria-label="Direction"
                  name="direction"
                  className={classes.radioGroup}
                  value={direction1}
                  onChange={handleDirectionChange1}
                  row
                >
                  <FormControlLabel value="up" control={<Radio />} label="Up" />
                  <FormControlLabel
                    value="right"
                    control={<Radio />}
                    label="Right"
                  />
                  <FormControlLabel
                    value="down"
                    control={<Radio />}
                    label="Down"
                  />
                  <FormControlLabel
                    value="left"
                    control={<Radio />}
                    label="Left"
                  />
                </RadioGroup>
              </div>
              <div className={classes.exampleWrapper}>
                <SpeedDial
                  ariaLabel="SpeedDial example"
                  className={speedDialClassName1}
                  hidden={hidden}
                  icon={<SpeedDialIcon />}
                  onBlur={handleClose}
                  onClick={handleClick}
                  onClose={handleClose}
                  onFocus={handleOpen}
                  onMouseEnter={handleOpen}
                  onMouseLeave={handleClose}
                  open={open1}
                  direction={direction1}
                >
                  {actions.map(action => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      onClick={handleClick}
                    />
                  ))}
                </SpeedDial>
              </div>
            </div>
          </div>
        </div>
      </KTCodeExample>

      <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Custom close icon">
        <div className="section">
          <span className="section-sub">
            You can provide an alternate icon for the closed and open states
            using the <code>icon</code> and <code>openIcon</code> props of the{" "}
            <code>SpeedDialIcon</code> component.
          </span>
        </div>
        <div className="section"></div>
      </KTCodeExample>

      <KTCodeExample
        jsCode={jsCode3}
        beforeCodeTitle="Persistent action tooltips"
      >
        <div className="section">
          <span className="section-sub">
            The SpeedDialActions tooltips can be be displayed persistently so
            that users don't have to long-press in order to see the tooltip on
            touch devices.
          </span>
          <p className="section-sub">
            It is enabled here across all devices for demo purposes, but in
            production it could use the <code>isTouch</code> logic to
            conditionally set the property.
          </p>
        </div>
        <div className="section"></div>
      </KTCodeExample>
    </>
  );
}

SpeedDialExamplesPage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SpeedDialExamplesPage);

const jsCode1 = `
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
  },
  controls: {
    margin: theme.spacing(3),
  },
  exampleWrapper: {
    position: 'relative',
    height: 380,
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&$directionUp, &$directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    '&$directionDown, &$directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(3),
    },
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDials extends React.Component {
  state = {
    direction: 'up',
    open: false,
    hidden: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleDirectionChange = (event, value) => {
    this.setState({
      direction: value,
    });
  };

  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { direction, hidden, open } = this.state;

    const speedDialClassName = clsx(
      classes.speedDial,
      classes[\`direction\${capitalize(direction)}\`],
    );

    return (
      <div className={classes.root}>
        <div className={classes.controls}>
          <FormControlLabel
            control={
              <Switch
                checked={hidden}
                onChange={this.handleHiddenChange}
                value="hidden"
                color="primary"
              />
            }
            label="Hidden"
          />
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup
            aria-label="Direction"
            name="direction"
            className={classes.radioGroup}
            value={direction}
            onChange={this.handleDirectionChange}
            row
          >
            <FormControlLabel value="up" control={<Radio />} label="Up" />
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="down" control={<Radio />} label="Down" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </div>
        <div className={classes.exampleWrapper}>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={speedDialClassName}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
            direction={direction}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={this.handleClick}
              />
            ))}
          </SpeedDial>
        </div>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDials);
`;
const jsCode2 = `
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  root: {
    height: 380,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class OpenIconSpeedDial extends React.Component {
  state = {
    open: false,
    hidden: false,
  };

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    return (
      <div className={classes.root}>
        <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

OpenIconSpeedDial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenIconSpeedDial);
`;
const jsCode3 = `
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    height: 380,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDialTooltipOpen extends React.Component {
  state = {
    open: false,
    hidden: false,
  };

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    return (
      <div className={classes.root}>
        <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

SpeedDialTooltipOpen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDialTooltipOpen);
`;
