/* eslint-disable no-func-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import {
  Button,
  Snackbar,
  IconButton,
  SnackbarContent,
  Fade,
  Slide,
  Grow,
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  Fab
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import {amber, green} from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

// Example 2
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles21 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper2(props) {
  const classes = useStyles21();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper2.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const useStyles22 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

// Example 4
const action4 = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const useStyles4 = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1)
  }
}));

// Example 7
function SlideTransition7(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition7(props) {
  return <Grow {...props} />;
}

// Example 8
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function SnackbarsExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [open1, setOpen1] = React.useState(false);

  function handleClick1() {
    setOpen1(true);
  }

  function handleClose1(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  }

  // Example 2
  const classes2 = useStyles22();
  const [open2, setOpen2] = React.useState(false);

  function handleClick2() {
    setOpen2(true);
  }

  function handleClose2(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  }

  // Example 3
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  function handleClose() {
    setState({ ...state, open: false });
  }

  // Example 4
  const classes4 = useStyles4();

  // Example 7
  const [state7, setState7] = React.useState({
    open7: false,
    Transition7: Fade
  });

  const handleClick7 = Transition => () => {
    setState7({
      open7: true,
      Transition7: Transition
    });
  };

  function handleClose7() {
    setState7({
      ...state7,
      open7: false
    });
  }

  // Example 8
  const [state8, setState8] = React.useState({
    open8: false
  });

  const handleClick8 = Transition => {
    return () => {
      setState8({ open8: true, Transition });
    };
  };

  const handleClose8 = () => {
    setState8({ open8: false });
  };

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Snackbars provide brief messages about app processes - typically at
          the bottom of the screen.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/snackbars/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple snackbars">
            <span>
              A basic snackbar that aims to reproduce Google Keep's snackbar
              behavior.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button onClick={handleClick1}>Open simple snackbar</Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={open1}
                autoHideDuration={6000}
                onClose={handleClose1}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">Note archived</span>}
                action={[
                  <Button
                    key="undo"
                    color="secondary"
                    size="small"
                    onClick={handleClose1}
                  >
                    UNDO
                  </Button>,
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes1.close}
                    onClick={handleClose1}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Positioned snackbars"
          >
            <span>
              There may be circumstances when the placement of the snackbar
              needs to be more flexible.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "center"
                })}
              >
                Top-Center
              </Button>
              <Button
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "right"
                })}
              >
                Top-Right
              </Button>
              <Button
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right"
                })}
              >
                Bottom-Right
              </Button>
              <Button
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "center"
                })}
              >
                Bottom-Center
              </Button>
              <Button
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "left"
                })}
              >
                Bottom-Left
              </Button>
              <Button
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "left"
                })}
              >
                Top-Left
              </Button>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={open}
                onClose={handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">I love snacks</span>}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Message Length">
            <span>Some snackbars with varying message length.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <SnackbarContent
                className={classes4.snackbar}
                message="I love snacks."
                action={action4}
              />
              <SnackbarContent
                className={classes4.snackbar}
                message={
                  "I love candy. I love cookies. I love cupcakes. \
                      I love cheesecake. I love chocolate."
                }
              />
              <SnackbarContent
                className={classes4.snackbar}
                message="I love candy. I love cookies. I love cupcakes."
                action={action4}
              />
              <SnackbarContent
                className={classes4.snackbar}
                message={
                  "I love candy. I love cookies. I love cupcakes. \
                      I love cheesecake. I love chocolate."
                }
                action={action4}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Change Transition">
            <span>
              Grow is the default transition but you can use a different one.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button onClick={handleClick7(GrowTransition7)}>
                Grow Transition
              </Button>
              <Button onClick={handleClick7(Fade)}>Fade Transition</Button>
              <Button onClick={handleClick7(SlideTransition7)}>
                Slide Transition
              </Button>
              <Snackbar
                open={state7.open7}
                onClose={handleClose7}
                TransitionComponent={state7.Transition7}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">I love snacks</span>}
              />
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Customized snackbars"
          >
            <span>Here are some examples of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                className={classes2.margin}
                onClick={handleClick2}
              >
                Open success snackbar
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={open2}
                autoHideDuration={6000}
                onClose={handleClose2}
              >
                <MySnackbarContentWrapper2
                  onClose={handleClose2}
                  variant="success"
                  message="This is a success message!"
                />
              </Snackbar>
              <MySnackbarContentWrapper2
                variant="error"
                className={classes2.margin}
                message="This is an error message!"
              />
              <MySnackbarContentWrapper2
                variant="warning"
                className={classes2.margin}
                message="This is a warning message!"
              />
              <MySnackbarContentWrapper2
                variant="info"
                className={classes2.margin}
                message="This is an information message!"
              />
              <MySnackbarContentWrapper2
                variant="success"
                className={classes2.margin}
                message="This is a success message!"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode8}
            beforeCodeTitle="Control Slide direction"
          >
            <span>You can change the direction of the Slide transition.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button onClick={handleClick8(TransitionLeft)}>Right</Button>
              <Button onClick={handleClick8(TransitionUp)}>Up</Button>
              <Button onClick={handleClick8(TransitionRight)}>Left</Button>
              <Button onClick={handleClick8(TransitionDown)}>Down</Button>
              <Snackbar
                open={state8.open8}
                onClose={handleClose8}
                TransitionComponent={state8.Transition}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">I love snacks</span>}
              />
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
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Note archived</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles2();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" className={classes.margin} onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="This is a success message!"
        />
      </Snackbar>
      <MySnackbarContentWrapper
        variant="error"
        className={classes.margin}
        message="This is an error message!"
      />
      <MySnackbarContentWrapper
        variant="warning"
        className={classes.margin}
        message="This is a warning message!"
      />
      <MySnackbarContentWrapper
        variant="info"
        className={classes.margin}
        message="This is an information message!"
      />
      <MySnackbarContentWrapper
        variant="success"
        className={classes.margin}
        message="This is a success message!"
      />
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  function handleClose() {
    setState({ ...state, open: false });
  }

  return (
    <div>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
        Bottom-Right
      </Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
        Bottom-Center
      </Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={\`\${vertical},\${horizontal}\`}
        open={open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">I love snacks</span>}
      />
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
  },
  snackbar: {
    margin: theme.spacing(1),
  },
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        className={classes.snackbar}
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = Transition => () => {
    setState({
      open: true,
      Transition,
    });
  };

  function handleClose() {
    setState({
      ...state,
      open: false,
    });
  }

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">I love snacks</span>}
      />
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class DirectionSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = Transition => () => {
    this.setState({ open: true, Transition });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick(TransitionLeft)}>Right</Button>
        <Button onClick={this.handleClick(TransitionUp)}>Up</Button>
        <Button onClick={this.handleClick(TransitionRight)}>Left</Button>
        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default DirectionSnackbar;
`;
