/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Popover, Button, Typography} from "@material-ui/core";
import PopupState, {bindTrigger, bindPopover} from "material-ui-popup-state";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

// Example 2
const useStyles2 = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2)
  }
}));

export default function PopoverExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  function handleClick1(event) {
    setAnchorEl1(event.currentTarget);
  }

  function handleClose1() {
    setAnchorEl1(null);
  }

  const open1 = Boolean(anchorEl1);
  const id = open1 ? "simple-popover" : undefined;

  // Example 2
  const classes2 = useStyles2();
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  function handlePopoverOpen2(event) {
    setAnchorEl2(event.currentTarget);
  }

  function handlePopoverClose2() {
    setAnchorEl2(null);
  }

  const open2 = Boolean(anchorEl2);

  // Example 3
  const classes3 = useStyles3();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          A Popover can be used to display some content on top of another
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/popover/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>
      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Popover">
            <div>
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick1}
              >
                Open Popover
              </Button>
              <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography className={classes1.typography}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Mouse over interaction"
          >
            <span>
              We demonstrate how to use the <code>Popover</code> component to
              implement a popover behavior based on the mouse over event.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Typography
                aria-owns={open2 ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen2}
                onMouseLeave={handlePopoverClose2}
              >
                Hover with a Popover.
              </Typography>
              <Popover
                id="mouse-over-popover"
                className={classes2.popover}
                classes={{
                  paper: classes2.paper
                }}
                open={open2}
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                onClose={handlePopoverClose2}
                disableRestoreFocus
              >
                <Typography>I use Popover.</Typography>
              </Popover>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="PopupState helper">
            <span>
              There is a 3rd party package <code>material-ui-popup-state</code>{" "}
              that takes care of popover state for you in most cases.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {popupState => (
                <div>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Open Popover
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <Typography className={classes3.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function MouseOverPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(2),
  },
}));

export default function PopoverPopupState() {
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
`;
