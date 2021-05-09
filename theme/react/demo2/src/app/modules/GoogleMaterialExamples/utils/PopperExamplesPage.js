/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Button,
  Popper,
  Fade,
  Paper,
  Typography,
  Grid
} from "@material-ui/core";
import PopupState, {bindToggle, bindPopper} from "material-ui-popup-state";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

// Example 5
const useStyles5 = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

// Example 6
const useStyles6 = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function PopperExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  function handleClick1(event) {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  }

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popper" : undefined;

  // Example 2
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  function handleClick2(event) {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  }

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popper" : undefined;

  // Example 3
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [open3, setOpen3] = React.useState(false);
  const [placement3, setPlacement3] = React.useState();
  const classes3 = useStyles3();

  const handleClick3 = newPlacement => event => {
    setAnchorEl3(event.currentTarget);
    setOpen3(prev => placement3 !== newPlacement || !prev);
    setPlacement3(newPlacement);
  };

  // Example 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const classes4 = useStyles4();

  const handleClick4 = event => {
    setAnchorEl4(prev => (prev ? null : event.currentTarget));
  };

  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "no-transition-popper" : undefined;

  // Example 5
  const [open5, setOpen5] = React.useState(false);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const classes5 = useStyles5();

  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleMouseUp5 = () => {
    const selection = window.getSelection();

    // Resets when the selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handleClose5();
      return;
    }

    const getBoundingClientRect = () =>
      selection.getRangeAt(0).getBoundingClientRect();

    setOpen5(true);
    setAnchorEl5({
      clientWidth: getBoundingClientRect().width,
      clientHeight: getBoundingClientRect().height,
      getBoundingClientRect: getBoundingClientRect
    });
  };

  const id5 = open5 ? "faked-reference-popper" : undefined;

  // Example 6
  const classes6 = useStyles6();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          A Popper can be used to display some content on top of another. It's
          an alternative to react-popper
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/popper/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Popper">
            <div>
              <Button
                aria-describedby={id1}
                variant="contained"
                onClick={handleClick1}
              >
                Toggle Popper
              </Button>
              <Popper id={id1} open={open1} anchorEl={anchorEl1} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className={classes1.typography}>
                        The content of the Popper.
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Positioned Popper">
            <div className={classes3.root}>
              <Popper
                open={open3}
                anchorEl={anchorEl3}
                placement={placement3}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className={classes3.typography}>
                        The content of the Popper.
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
              <Grid container justify="center">
                <Grid item>
                  <Button onClick={handleClick3("top-start")}>top-start</Button>
                  <Button onClick={handleClick3("top")}>top</Button>
                  <Button onClick={handleClick3("top-end")}>top-end</Button>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Button onClick={handleClick3("left-start")}>
                    left-start
                  </Button>
                  <br />
                  <Button onClick={handleClick3("left")}>left</Button>
                  <br />
                  <Button onClick={handleClick3("left-end")}>left-end</Button>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  alignItems="flex-end"
                  direction="column"
                >
                  <Grid item>
                    <Button onClick={handleClick3("right-start")}>
                      right-start
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleClick3("right")}>right</Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleClick3("right-end")}>
                      right-end
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Button onClick={handleClick3("bottom-start")}>
                    bottom-start
                  </Button>
                  <Button onClick={handleClick3("bottom")}>bottom</Button>
                  <Button onClick={handleClick3("bottom-end")}>
                    bottom-end
                  </Button>
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Faked reference object"
          >
            <span className="pb-3">
              The <code>anchorEl</code> property can be a reference to a fake
              DOM element. You just need to create an object shaped like the{" "}
              <code>ReferenceObject</code>.
            </span>
            <div>Highlight part of the text to see the popper:</div>
            <div className="separator separator-dashed my-7"></div>
            <div onMouseLeave={handleClose5}>
              <Typography aria-describedby={id5} onMouseUp={handleMouseUp5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ipsum purus, bibendum sit amet vulputate eget, porta semper
                ligula. Donec bibendum vulputate erat, ac fringilla mi finibus
                nec. Donec ac dolor sed dolor porttitor blandit vel vel purus.
                Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus
                est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc
                lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
                amet facilisis neque enim sed neque. Quisque accumsan metus vel
                maximus consequat. Suspendisse lacinia tellus a libero volutpat
                maximus.
              </Typography>
              <Popper
                id={id5}
                open={open5}
                anchorEl={anchorEl5}
                transition
                placement="bottom-start"
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className={classes5.typography}>
                        The content of the Popper.
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Minimalist Popper">
            <span>You can use the component with zero extra dependencies.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <button
                aria-describedby={id2}
                type="button"
                onClick={handleClick2}
              >
                Toggle Popper
              </button>
              <Popper id={id2} open={open2} anchorEl={anchorEl2}>
                <div>The content of the Popper.</div>
              </Popper>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Without transition Popper"
          >
            <div>
              <Button
                aria-describedby={id4}
                variant="contained"
                onClick={handleClick4}
              >
                Toggle Popper
              </Button>
              <Popper id={id4} open={open4} anchorEl={anchorEl4}>
                <Paper>
                  <Typography className={classes4.typography}>
                    The content of the Popper.
                  </Typography>
                </Paper>
              </Popper>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode6} beforeCodeTitle="PopupState helper">
            <span>
              There is a 3rd party package <code>material-ui-popup-state</code>{" "}
              that takes care of popper state for you in most cases.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <PopupState variant="popper" popupId="demo-popup-popper">
                {popupState => (
                  <div>
                    <Button variant="contained" {...bindToggle(popupState)}>
                      Toggle Popper
                    </Button>
                    <Popper {...bindPopper(popupState)} transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper>
                            <Typography className={classes6.typography}>
                              The content of the Popper.
                            </Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
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
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import Popper from '@material-ui/core/Popper';

export default function MinimalPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div>The content of the Popper.</div>
      </Popper>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justify="center">
        <Grid item>
          <Button onClick={handleClick('top-start')}>top-start</Button>
          <Button onClick={handleClick('top')}>top</Button>
          <Button onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button onClick={handleClick('left')}>left</Button>
          <br />
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button onClick={handleClick('bottom')}>bottom</Button>
          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function NoTransitionPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'no-transition-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <Typography className={classes.typography}>The content of the Popper.</Typography>
        </Paper>
      </Popper>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function FakedReferencePopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();

    // Resets when the selection has a length of 0
    if (!selection || selection.anchorOffset === selection.focusOffset) {
      handleClose();
      return;
    }

    const getBoundingClientRect = () => selection.getRangeAt(0).getBoundingClientRect();

    setOpen(true);
    setAnchorEl({
      clientWidth: getBoundingClientRect().width,
      clientHeight: getBoundingClientRect().height,
      getBoundingClientRect,
    });
  };

  const id = open ? 'faked-reference-popper' : undefined;

  return (
    <div onMouseLeave={handleClose}>
      <Typography aria-describedby={id} onMouseUp={handleMouseUp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit
        amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi
        finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada
        ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis
        finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet
        facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse
        lacinia tellus a libero volutpat maximus.
      </Typography>
      <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-start">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PopperPopupState() {
  const classes = useStyles();

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {popupState => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}>The content of the Popper.</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
`;
