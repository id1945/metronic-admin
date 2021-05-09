/* eslint-disable no-restricted-imports */
import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import {makeStyles, withStyles, useTheme} from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  useMediaQuery,
  RadioGroup,
  Radio,
  Paper
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      {...other}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem button onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string
};

// Example 3
const Transition3 = React.forwardRef(function Transition5(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Example 5
const styles5 = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle5 = withStyles(styles5)(props => {
  const { children, classes, onClose } = props;
  return (
    <DialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const DialogContent5 = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(DialogContent);

const DialogActions5 = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(DialogActions);

// Example 6
const useStyles6 = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition6 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Example 7
const useStyles7 = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));

// Example 9
const options9 = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel"
];

function ConfirmationDialogRaw9(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  function handleEntering() {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  }

  function handleCancel() {
    onClose();
  }

  function handleOk() {
    onClose(value);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options9.map(option => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw9.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

const useStyles9 = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    width: "80%",
    maxHeight: 435
  }
}));

// Example 11
function PaperComponent11(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DialogsExamplesPage() {
  // Example 1
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  // Example 2
  const [open2, setOpen2] = React.useState(false);

  function handleClickOpen2() {
    setOpen2(true);
  }

  function handleClose2() {
    setOpen2(false);
  }

  // Example 3
  const [open3, setOpen3] = React.useState(false);

  function handleClickOpen3() {
    setOpen3(true);
  }

  function handleClose3() {
    setOpen3(false);
  }

  // Example 4
  const [open4, setOpen4] = React.useState(false);

  function handleClickOpen4() {
    setOpen4(true);
  }

  function handleClose4() {
    setOpen4(false);
  }

  // Example 5
  const [open5, setOpen5] = React.useState(false);

  function handleClickOpen5() {
    setOpen5(true);
  }

  function handleClose5() {
    setOpen5(false);
  }

  // Example 6
  const classes6 = useStyles6();
  const [open6, setOpen6] = React.useState(false);

  function handleClickOpen6() {
    setOpen6(true);
  }

  function handleClose6() {
    setOpen6(false);
  }

  // Example 7
  const classes7 = useStyles7();
  const [open7, setOpen7] = React.useState(false);
  const [fullWidth7, setFullWidth7] = React.useState(true);
  const [maxWidth7, setMaxWidth7] = React.useState("sm");

  function handleClickOpen7() {
    setOpen7(true);
  }

  function handleClose7() {
    setOpen7(false);
  }

  function handleMaxWidthChange7(event) {
    setMaxWidth7(event.target.value);
  }

  function handleFullWidthChange7(event) {
    setFullWidth7(event.target.checked);
  }

  // Example 8
  const [open8, setOpen8] = React.useState(false);
  const theme8 = useTheme();
  const fullScreen8 = useMediaQuery(theme8.breakpoints.down("sm"));

  function handleClickOpen8() {
    setOpen8(true);
  }

  function handleClose8() {
    setOpen8(false);
  }

  // Example 9
  const classes9 = useStyles9();
  const [open9, setOpen9] = React.useState(false);
  const [value9, setValue9] = React.useState("Dione");

  function handleClickListItem9() {
    setOpen9(true);
  }

  function handleClose9(newValue) {
    setOpen9(false);

    if (newValue) {
      setValue9(newValue);
    }
  }

  // Example 10
  const [open10, setOpen10] = React.useState(false);
  const [scroll10, setScroll10] = React.useState("paper");

  const handleClickOpen10 = scrollType => () => {
    setOpen10(true);
    setScroll10(scrollType);
  };

  function handleClose10() {
    setOpen10(false);
  }

  // Example 11
  const [open11, setOpen11] = React.useState(false);

  const handleClickOpen11 = () => {
    setOpen11(true);
  };

  const handleClose11 = () => {
    setOpen11(false);
  };

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Dialogs inform users about a task and can contain critical
          information, require decisions, or involve multiple tasks
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/dialogs/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Simple Dialogs"
            codeBlockHeight="400px"
          >
            <span>
              Simple dialogs can provide additional details or actions about a
              list item. For example, they can display avatars, icons,
              clarifying subtext, or orthogonal actions (such as adding an
              account).
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Typography variant="subtitle1">
                Selected: {selectedValue}
              </Typography>
              <br />
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Open simple dialog
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Transitions"
            codeBlockHeight="400px"
          >
            <span>
              You can also swap out the transition, the next example uses{" "}
              <code>Slide</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen3}
              >
                Slide in alert dialog
              </Button>
              <Dialog
                open={open3}
                TransitionComponent={Transition3}
                keepMounted
                onClose={handleClose3}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose3} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose3} color="primary">
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Customized dialogs"
            codeBlockHeight="400px"
          >
            <span>Here is an example of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen5}
              >
                Open dialog
              </Button>
              <Dialog
                onClose={handleClose5}
                aria-labelledby="customized-dialog-title"
                open={open5}
              >
                <DialogTitle5
                  id="customized-dialog-title"
                  onClose={handleClose5}
                >
                  Modal title
                </DialogTitle5>
                <DialogContent5 dividers>
                  <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </Typography>
                </DialogContent5>
                <DialogActions5>
                  <Button onClick={handleClose5} color="primary">
                    Save changes
                  </Button>
                </DialogActions5>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode7}
            beforeCodeTitle="Optional sizes"
            codeBlockHeight="400px"
          >
            <span>
              You can set a dialog maximum width by using the{" "}
              <code>maxWidth</code> enumerable in combination with the{" "}
              <code>fullWidth</code> boolean. When the <code>fullWidth</code>{" "}
              property is true, the dialog will adapt based on the{" "}
              <code>maxWidth</code> value.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <React.Fragment>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen7}
              >
                Open max-width dialog
              </Button>
              <Dialog
                fullWidth={fullWidth7}
                maxWidth={maxWidth7}
                open={open7}
                onClose={handleClose7}
                aria-labelledby="max-width-dialog-title"
              >
                <DialogTitle id="max-width-dialog-title">
                  Optional sizes
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    You can set my maximum width and whether to adapt or not.
                  </DialogContentText>
                  <form className={classes7.form} noValidate>
                    <FormControl className={classes7.formControl}>
                      <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                      <Select
                        value={maxWidth7}
                        onChange={handleMaxWidthChange7}
                        inputProps={{
                          name: "max-width",
                          id: "max-width"
                        }}
                      >
                        <MenuItem value={false}>false</MenuItem>
                        <MenuItem value="xs">xs</MenuItem>
                        <MenuItem value="sm">sm</MenuItem>
                        <MenuItem value="md">md</MenuItem>
                        <MenuItem value="lg">lg</MenuItem>
                        <MenuItem value="xl">xl</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControlLabel
                      className={classes7.formControlLabel}
                      control={
                        <Switch
                          checked={fullWidth7}
                          onChange={handleFullWidthChange7}
                          value="fullWidth"
                        />
                      }
                      label="Full width"
                    />
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose7} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode9}
            beforeCodeTitle="Confirmation dialogs"
            codeBlockHeight="400px"
          >
            <span>
              Confirmation dialogs require users to explicitly confirm their
              choice before an option is committed. For example, users can
              listen to multiple ringtones but only make a final selection upon
              touching “OK”.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes9.root}>
              <List component="div" role="list">
                <ListItem button divider disabled role="listitem">
                  <ListItemText primary="Interruptions" />
                </ListItem>
                <ListItem
                  button
                  divider
                  aria-haspopup="true"
                  aria-controls="ringtone-menu"
                  aria-label="Phone ringtone"
                  onClick={handleClickListItem9}
                  role="listitem"
                >
                  <ListItemText primary="Phone ringtone" secondary={value9} />
                </ListItem>
                <ListItem button divider disabled role="listitem">
                  <ListItemText
                    primary="Default notification ringtone"
                    secondary="Tethys"
                  />
                </ListItem>
                <ConfirmationDialogRaw9
                  classes={{
                    paper: classes9.paper
                  }}
                  id="ringtone-menu"
                  keepMounted
                  open={open9}
                  onClose={handleClose9}
                  value={value9}
                />
              </List>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Alerts"
            codeBlockHeight="400px"
          >
            <span>
              Alerts are urgent interruptions, requiring acknowledgement, that
              inform the user about a situation.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen2}
              >
                Open alert dialog
              </Button>
              <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose2} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Form dialogs"
            codeBlockHeight="400px"
          >
            <span>
              Form dialogs allow users to fill out form fields within a dialog.
              For example, if your site prompts for potential subscribers to
              fill in their email address, they can fill out the email field and
              touch 'Submit'.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen4}
              >
                Open form dialog
              </Button>
              <Dialog
                open={open4}
                onClose={handleClose4}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose4} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose4} color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Full-screen dialogs"
            codeBlockHeight="400px"
          >
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen6}
              >
                Open full-screen dialog
              </Button>
              <Dialog
                fullScreen
                open={open6}
                onClose={handleClose6}
                TransitionComponent={Transition6}
              >
                <AppBar className={classes6.appBar}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose6}
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes6.title}>
                      Sound
                    </Typography>
                    <Button color="inherit" onClick={handleClose6}>
                      save
                    </Button>
                  </Toolbar>
                </AppBar>
                <List>
                  <ListItem button>
                    <ListItemText
                      primary="Phone ringtone"
                      secondary="Titania"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemText
                      primary="Default notification ringtone"
                      secondary="Tethys"
                    />
                  </ListItem>
                </List>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode8}
            beforeCodeTitle="Responsive full-screen"
            codeBlockHeight="400px"
          >
            <span>
              You may make a dialog responsively full screen using{" "}
              <code>useMediaQuery</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen8}
              >
                Open responsive dialog
              </Button>
              <Dialog
                fullScreen={fullScreen8}
                open={open8}
                onClose={handleClose8}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose8} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose8} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode10}
            beforeCodeTitle="Scrolling long content"
            codeBlockHeight="400px"
          >
            <span>
              When dialogs become too long for the user’s viewport or device,
              they scroll.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button onClick={handleClickOpen10("paper")}>scroll=paper</Button>
              <Button onClick={handleClickOpen10("body")}>scroll=body</Button>
              <Dialog
                open={open10}
                onClose={handleClose10}
                scroll={scroll10}
                aria-labelledby="scroll-dialog-title"
              >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={scroll10 === "paper"}>
                  <DialogContentText>
                    {[...new Array(50)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                      )
                      .join("\n")}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose10} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose10} color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode11}
            beforeCodeTitle="Draggable dialog"
            codeBlockHeight="400px"
          >
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen11}
              >
                Open form dialog
              </Button>
              <Dialog
                open={open11}
                onClose={handleClose11}
                PaperComponent={PaperComponent11}
                aria-labelledby="draggable-dialog-title"
              >
                <DialogTitle
                  style={{ cursor: "move" }}
                  id="draggable-dialog-title"
                >
                  Subscribe
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose11} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose11} color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
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
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class CustomizedDialogs extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Modal title
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogs;
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleMaxWidthChange(event) {
    setMaxWidth(event.target.value);
  }

  function handleFullWidthChange(event) {
    setFullWidth(event.target.checked);
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} value="fullWidth" />
              }
              label="Full width"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;
const jsCode8 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
const jsCode9 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  function handleEntering() {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  }

  function handleCancel() {
    onClose();
  }

  function handleOk() {
    onClose(value);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));

export default function ConfirmationDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  function handleClickListItem() {
    setOpen(true);
  }

  function handleClose(newValue) {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  }

  return (
    <div className={classes.root}>
      <List component="div" role="list">
        <ListItem button divider disabled role="listitem">
          <ListItemText primary="Interruptions" />
        </ListItem>
        <ListItem
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="Phone ringtone"
          onClick={handleClickListItem}
          role="listitem"
        >
          <ListItemText primary="Phone ringtone" secondary={value} />
        </ListItem>
        <ListItem button divider disabled role="listitem">
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem>
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  );
}
`;
const jsCode10 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            {[...new Array(50)]
              .map(
                () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
const jsCode11 = `
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
