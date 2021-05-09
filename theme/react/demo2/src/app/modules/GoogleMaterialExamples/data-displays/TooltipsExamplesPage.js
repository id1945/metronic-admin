/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
  Tooltip,
  Fab,
  IconButton,
  Grid,
  Button,
  Typography,
  ClickAwayListener,
  Fade,
  Zoom
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

// Example 2
const useStyles2 = makeStyles({
  root: {
    width: 500
  }
});

// Example 3
function arrowGenerator3(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  };
}

const LightTooltip3 = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

const useStylesArrow3 = makeStyles(theme => ({
  arrow: {
    position: "absolute",
    fontSize: 6,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  },
  popper: arrowGenerator3(theme.palette.grey[700])
}));

function ArrowTooltip3(props) {
  const { arrow, ...classes } = useStylesArrow3();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef
            }
          }
        }
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

ArrowTooltip3.propTypes = {
  title: PropTypes.node
};

const useStylesBootstrap3 = makeStyles(theme => ({
  arrow: {
    position: "absolute",
    fontSize: 6,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  },
  popper: arrowGenerator3(theme.palette.common.black),
  tooltip: {
    backgroundColor: theme.palette.common.black
  },
  tooltipPlacementLeft: {
    margin: "0 8px"
  },
  tooltipPlacementRight: {
    margin: "0 8px"
  },
  tooltipPlacementTop: {
    margin: "8px 0"
  },
  tooltipPlacementBottom: {
    margin: "8px 0"
  }
}));

function BootstrapTooltip3(props) {
  const { arrow, ...classes } = useStylesBootstrap3();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef
            }
          }
        }
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

BootstrapTooltip3.propTypes = {
  title: PropTypes.node
};

const HtmlTooltip3 = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

// Example 6
const useStyles6 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  customWidth: {
    maxWidth: 500
  },
  noMaxWidth: {
    maxWidth: "none"
  }
}));

const longText6 = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

// Example 7
const useStyles7 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function TooltipsExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  // Example 2
  const classes2 = useStyles2();

  // Example 4
  const [open4, setOpen4] = React.useState(false);

  function handleTooltipClose4() {
    setOpen4(false);
  }

  function handleTooltipOpen4() {
    setOpen4(true);
  }

  // Example 5
  const [open5, setOpen5] = React.useState(false);

  function handleTooltipClose5() {
    setOpen5(false);
  }

  function handleTooltipOpen5() {
    setOpen5(true);
  }

  // Example 6
  const classes6 = useStyles6();

  // Example 7
  const classes7 = useStyles7();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Tooltips display informative text when users hover over, focus on, or
          tap an element.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/tooltips/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Tooltips">
            <div>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add" aria-label="Add">
                <Fab color="primary" className={classes1.fab}>
                  <AddIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Add" aria-label="Add">
                <Fab color="secondary" className={classes1.fab}>
                  <AddIcon />
                </Fab>
              </Tooltip>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Customized tooltips">
            <span>
              Here are some examples of customizing the component. You can learn
              more about this in the overrides documentation page.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <LightTooltip3 title="Add">
                <Button>Light</Button>
              </LightTooltip3>
              <ArrowTooltip3 title="Add">
                <Button>Arrow</Button>
              </ArrowTooltip3>
              <BootstrapTooltip3 title="Add">
                <Button>Bootstrap</Button>
              </BootstrapTooltip3>
              <HtmlTooltip3
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                    <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }
              >
                <Button>HTML</Button>
              </HtmlTooltip3>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Controlled Tooltips">
            <span>
              You can use the <code>open</code>, <code>onOpen</code> and{" "}
              <code>onClose</code> properties to control the behavior of the
              tooltip.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Tooltip
              onClose={handleTooltipClose5}
              onOpen={handleTooltipOpen5}
              open={open5}
              title="Add"
            >
              <Button>Controlled</Button>
            </Tooltip>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Interactive">
            <span>
              A tooltip can be interactive. It won't close when the user hovers
              over the tooltip before the <code>leaveDelay</code> is expired.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Tooltip title="Add" interactive>
                <Button className={classes7.button}>Interactive</Button>
              </Tooltip>
              <Tooltip title="Add">
                <Button className={classes7.button}>Non Interactive</Button>
              </Tooltip>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode9} beforeCodeTitle="Transitions">
            <span>Use a different transition.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Tooltip title="Add">
                <Button>Grow</Button>
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Add"
              >
                <Button>Fade</Button>
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="Add">
                <Button>Zoom</Button>
              </Tooltip>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Positioned Tooltips">
            <span>
              The <code>Tooltip</code> has 12 placements choice. They don’t have
              directional arrows; instead, they rely on motion emanating from
              the source to convey direction.
            </span>
            <div className="separator separator-dashed my-7" />
            <div className={classes2.root}>
              <Grid container justify="center">
                <Grid item>
                  <Tooltip title="Add" placement="top-start">
                    <Button>top-start</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="top">
                    <Button>top</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="top-end">
                    <Button>top-end</Button>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Tooltip title="Add" placement="left-start">
                    <Button>left-start</Button>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left">
                    <Button>left</Button>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left-end">
                    <Button>left-end</Button>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  alignItems="flex-end"
                  direction="column"
                >
                  <Grid item>
                    <Tooltip title="Add" placement="right-start">
                      <Button>right-start</Button>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Add" placement="right">
                      <Button>right</Button>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Add" placement="right-end">
                      <Button>right-end</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Tooltip title="Add" placement="bottom-start">
                    <Button>bottom-start</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom">
                    <Button>bottom</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom-end">
                    <Button>bottom-end</Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Triggers">
            <span>
              You can define the types of events that cause a tooltip to show.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Grid container justify="center">
                <Grid item>
                  <Tooltip disableFocusListener title="Add">
                    <Button>Hover or touch</Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip disableHoverListener title="Add">
                    <Button>Focus or touch</Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title="Add"
                  >
                    <Button>Hover</Button>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <ClickAwayListener onClickAway={handleTooltipClose4}>
                    <div>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true
                        }}
                        onClose={handleTooltipClose4}
                        open={open4}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Add"
                      >
                        <Button onClick={handleTooltipOpen4}>Click</Button>
                      </Tooltip>
                    </div>
                  </ClickAwayListener>
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Variable Width">
            <span>
              The <code>Tooltip</code> wraps long text by default to make it
              readable.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Tooltip title={longText6}>
                <Button className={classes6.button}>
                  Default Width [300px]
                </Button>
              </Tooltip>
              <Tooltip
                title={longText6}
                classes={{ tooltip: classes6.customWidth }}
              >
                <Button className={classes6.button}>
                  Custom Width [500px]
                </Button>
              </Tooltip>
              <Tooltip
                title={longText6}
                classes={{ tooltip: classes6.noMaxWidth }}
              >
                <Button className={classes6.button}>No wrapping</Button>
              </Tooltip>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode8} beforeCodeTitle="Disabled Elements">
            <span>
              By default disabled elements like <code>&lt;button&gt;</code> do
              not trigger user interactions so a <code>Tooltip</code> will not
              activate on normal events like hover. To accommodate disabled
              elements, add a simple wrapper element like a <code>span</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Tooltip title="You don't have permission to do this">
              <span>
                <Button disabled>A Disabled Button</Button>
              </span>
            </Tooltip>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode10} beforeCodeTitle="Showing and hiding">
            <span>
              The tooltip is normally shown immediately when the user's mouse
              hovers over the element, and hides immediately when the user's
              mouse leaves. A delay in showing or hiding the tooltip can be
              added through the properties <code>enterDelay</code> and{" "}
              <code>leaveDelay</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>

            <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
              <Button>[500ms, 200ms]</Button>
            </Tooltip>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function PositionedTooltips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: \`transparent transparent \${color} transparent\`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: \`\${color} transparent transparent transparent\`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: \`transparent \${color} transparent transparent\`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: \`transparent transparent transparent \${color}\`,
      },
    },
  };
}

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStylesArrow = makeStyles(theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator(theme.palette.grey[700]),
}));

function ArrowTooltip(props) {
  const { arrow, ...classes } = useStylesArrow();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

ArrowTooltip.propTypes = {
  title: PropTypes.node,
};

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator(theme.palette.common.black),
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
  tooltipPlacementLeft: {
    margin: '0 8px',
  },
  tooltipPlacementRight: {
    margin: '0 8px',
  },
  tooltipPlacementTop: {
    margin: '8px 0',
  },
  tooltipPlacementBottom: {
    margin: '8px 0',
  },
}));

function BootstrapTooltip(props) {
  const { arrow, ...classes } = useStylesBootstrap();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

BootstrapTooltip.propTypes = {
  title: PropTypes.node,
};

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function CustomizedTooltips() {
  return (
    <div>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <ArrowTooltip title="Add">
        <Button>Arrow</Button>
      </ArrowTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <Tooltip disableFocusListener title="Add">
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <Button>Focus or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <Button>Hover</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Add"
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <Tooltip onClose={handleTooltipClose} onOpen={handleTooltipOpen} open={open} title="Add">
      <Button>Controlled</Button>
    </Tooltip>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

const longText = \`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
\`;

export default function VariableWidth() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title={longText}>
        <Button className={classes.button}>Default Width [300px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button className={classes.button}>No wrapping</Button>
      </Tooltip>
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function InteractiveTooltips() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Add" interactive>
        <Button className={classes.button}>Interactive</Button>
      </Tooltip>
      <Tooltip title="Add">
        <Button className={classes.button}>Non Interactive</Button>
      </Tooltip>
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}
`;
const jsCode9 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}
`;
const jsCode10 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function DelayTooltips() {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>
  );
}
`;
