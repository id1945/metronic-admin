/* eslint-disable no-restricted-imports */
/* eslint-disable no-unused-vars */
import React from "react";
import {createMuiTheme, withStyles, makeStyles} from "@material-ui/core";
import {
  Button,
  Grid,
  ButtonGroup,
  Fab,
  Icon,
  IconButton
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {ThemeProvider} from "@material-ui/styles";
import {green, purple} from "@material-ui/core/colors";
import {ButtonBase, Typography} from "@material-ui/core";
import {MemoryRouter as Router} from "react-router";
import {Link} from "react-router-dom";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#007bff",
    borderColor: "#007bff",
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
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const CollisionLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/getting-started/installation/" {...props} />
));

const useStyles1 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const useStyles2 = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const useStyles3 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const useStyles4 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const useStyles5 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

const images = [
  {
    url: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    width: "40%"
  },
  {
    url: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Burgers",
    width: "30%"
  },
  {
    url: "https://material-ui.com/static/images/grid-list/camera.jpg",
    title: "Camera",
    width: "30%"
  }
];

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge"
];

export default function ButtonsExamplesPage() {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4();
  const classes5 = useStyles5();
  const classes = useStyles();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </span>{" "}
        <span>
          <code>Buttons</code> communicate actions that users can take.
        </span>
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/buttons/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-lg-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Contained Buttons" codeBlockHeight="400px">
            <div>
              <code>Contained</code> buttons are high-emphasis, distinguished by
              their use of elevation and fill. They contain actions that are
              primary to your app. The last example of this demo show how to use
              an upload button.
            </div>
            <div className="separator separator-dashed my-7" />

            <div>
              <Button variant="contained" className={classes1.button}>
                Default
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes1.button}
              >
                Primary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes1.button}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled
                className={classes1.button}
              >
                Disabled
              </Button>
              <Button
                variant="contained"
                href="#contained-buttons"
                className={classes1.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes1.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes1.button}
                >
                  Upload
                </Button>
              </label>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Outlined Buttons" codeBlockHeight="400px">
            <span>
              <code>Outlined buttons</code> are medium-emphasis buttons. They
              contain actions that are important, but aren’t the primary action
              in an app.
            </span>
            <div className="gutter-t">
              Outlined buttons are also a lower emphasis alternative to
              contained buttons, or a higher emphasis alternative to text
              buttons.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <Button variant="outlined" className={classes1.button}>
                Default
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes1.button}
              >
                Primary
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes1.button}
              >
                Secondary
              </Button>
              <Button variant="outlined" disabled className={classes1.button}>
                Disabled
              </Button>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                className={classes1.button}
              >
                Link
              </Button>
              <input
                accept="image/*"
                className={classes1.input}
                id="outlined-button-file"
                multiple
                type="file"
              />
              <label htmlFor="outlined-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  className={classes1.button}
                >
                  Upload
                </Button>
              </label>
              <Button
                variant="outlined"
                color="inherit"
                className={classes1.button}
              >
                Inherit
              </Button>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode12}
            beforeCodeTitle="Third-party routing library"
          >
            <span>
              One common use case is to use the button to trigger a navigation
              to a new page. The <code>ButtonBase</code> component provides a
              property to handle this use case: <code>component</code>. However
              for certain focus polyfills <code>ButtonBase</code> requires the
              DOM node of the provided component. This is achieved by attaching
              a ref to the component and expecting that the component forwards
              this ref to the underlying DOM node. Given that a lot of our
              interactive components rely on ButtonBase, you should be able to
              take advantage of it everywhere:
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Router>
              <Button color="primary" component={AdapterLink} to="/">
                Simple case
              </Button>
              <Button component={CollisionLink}>Avoids props collision</Button>
            </Router>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Sizes" codeBlockHeight="400px">
            <span>
              Fancy larger or smaller buttons? Use the <code>size</code>{" "}
              property.
            </span>
            <div className="separator separator-dashed my-7" />

            <div className="pb-3">
              <span className="pr-3">
                <Button size="small" className={classes2.margin}>
                  Small
                </Button>
              </span>
              <span className="pr-3">
                <Button size="medium" className={classes2.margin}>
                  Medium
                </Button>
              </span>
              <span className="pr-3">
                <Button size="large" className={classes2.margin}>
                  Large
                </Button>
              </span>
            </div>
            <div className="pb-3">
              <span className="pr-3">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes2.margin}
                >
                  Small
                </Button>
              </span>
              <span className="pr-3">
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes2.margin}
                >
                  Medium
                </Button>
              </span>
              <span className="pr-3">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  className={classes2.margin}
                >
                  Large
                </Button>
              </span>
            </div>
            <div className="pb-3">
              <span className="pr-3">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes2.margin}
                >
                  Small
                </Button>
              </span>
              <span className="pr-3">
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes2.margin}
                >
                  Medium
                </Button>
              </span>
              <span className="pr-3">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes2.margin}
                >
                  Large
                </Button>
              </span>
            </div>
            <div className="pb-3">
              <span className="pr-3">
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <AddIcon />
                </Fab>
              </span>
              <span className="pr-3">
                <Fab
                  size="medium"
                  color="secondary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <AddIcon />
                </Fab>
              </span>
              <span className="pr-3">
                <Fab
                  color="secondary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <AddIcon />
                </Fab>
              </span>
            </div>
            <div className="pb-3">
              <span className="pr-3">
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <NavigationIcon className={classes2.extendedIcon} />
                  Extended
                </Fab>
              </span>
              <span className="pr-3">
                <Fab
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <NavigationIcon className={classes2.extendedIcon} />
                  Extended
                </Fab>
              </span>
              <span className="pr-3">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Add"
                  className={classes2.margin}
                >
                  <NavigationIcon className={classes2.extendedIcon} />
                  Extended
                </Fab>
              </span>
            </div>
            <div>
              <span className="pr-3">
                <IconButton
                  aria-label="Delete"
                  className={classes2.margin}
                  size="small"
                >
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
              </span>
              <span className="pr-3">
                <IconButton aria-label="Delete" className={classes2.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </span>
              <span className="pr-3">
                <IconButton aria-label="Delete" className={classes2.margin}>
                  <DeleteIcon />
                </IconButton>
              </span>
              <span className="pr-3">
                <IconButton aria-label="Delete" className={classes2.margin}>
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </span>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode9} beforeCodeTitle="Icon Buttons">
            <span>
              Icon buttons are commonly found in app bars and toolbars.
            </span>
            <div className="pt-3">
              Icons are also appropriate for toggle buttons that allow a single
              choice to be selected or deselected, such as adding or removing a
              star to an item.
            </div>
            <div className="separator separator-dashed my-7" />
            <div>
              <IconButton className={classes1.button} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton
                className={classes1.button}
                aria-label="Delete"
                disabled
                color="primary"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="secondary"
                className={classes1.button}
                aria-label="Add an alarm"
              >
                <Icon>alarm</Icon>
              </IconButton>
              <IconButton
                color="primary"
                className={classes1.button}
                aria-label="Add to shopping cart"
              >
                <AddShoppingCartIcon />
              </IconButton>
              <input
                accept="image/*"
                className={classes1.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  className={classes1.button}
                  aria-label="Upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-lg-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Text Buttons" codeBlockHeight="400px">
            <span>
              <code>Text buttons</code> are typically used for less-pronounced
              actions. In cards, text buttons help maintain an emphasis on card
              content.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <Button className={classes1.button}>Default</Button>
              <Button color="primary" className={classes1.button}>
                Primary
              </Button>
              <Button color="secondary" className={classes1.button}>
                Secondary
              </Button>
              <Button disabled className={classes1.button}>
                Disabled
              </Button>
              <Button href="#text-buttons" className={classes1.button}>
                Link
              </Button>
              <input
                accept="image/*"
                className={classes1.input}
                id="text-button-file"
                multiple
                type="file"
              />
              <label htmlFor="text-button-file">
                <Button component="span" className={classes1.button}>
                  Upload
                </Button>
              </label>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Grouped Buttons" codeBlockHeight="400px">
            <span>
              The ButtonGroup component can be used to group outlined (the
              default) or contained buttons.
            </span>
            <div className="separator separator-dashed my-7" />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <ButtonGroup
                      size="small"
                      aria-label="Small outlined button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <ButtonGroup
                      color="primary"
                      aria-label="Outlined primary button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <ButtonGroup
                      color="secondary"
                      size="large"
                      aria-label="Large outlined secondary button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  alignItems="center"
                >
                  <Grid item>
                    <ButtonGroup
                      variant="contained"
                      size="small"
                      aria-label="Small contained button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="Full-width contained primary button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                  <Grid item>
                    <ButtonGroup
                      variant="contained"
                      color="secondary"
                      size="large"
                      aria-label="Large contained secondary button group"
                    >
                      <Button>One</Button>
                      <Button>Two</Button>
                      <Button>Three</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup
                  fullWidth
                  aria-label="Full width outlined button group"
                >
                  <Button>Full</Button>
                  <Button>width</Button>
                  <Button>ButtonGroup</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Floating Action Buttons"
            codeBlockHeight="400px"
          >
            <span>
              A floating action button (FAB) performs the primary, or most
              common, action on a screen. FABs come in two types: regular, and
              extended.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <Fab color="primary" aria-label="Add" className={classes2.fab}>
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="Edit" className={classes2.fab}>
                <Icon>edit_icon</Icon>
              </Fab>
              <Fab
                variant="extended"
                aria-label="Delete"
                className={classes2.fab}
              >
                <NavigationIcon className={classes2.extendedIcon} />
                Extended
              </Fab>
              <Fab disabled aria-label="Delete" className={classes2.fab}>
                <DeleteIcon />
              </Fab>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode8}
            beforeCodeTitle="Buttons with icons and label"
            codeBlockHeight="400px"
          >
            <span>
              Sometimes you might want to have icons for certain button to
              enhance the UX of the application as we recognize logos more
              easily than plain text. For example, if you have a delete button
              you can label it with a dustbin icon.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <Button
                variant="contained"
                color="secondary"
                className={classes3.button}
              >
                Delete
                <DeleteIcon className={classes3.rightIcon} />
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes3.button}
              >
                Send
                <Icon className={classes3.rightIcon}>send</Icon>
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes3.button}
              >
                Upload
                <CloudUploadIcon className={classes3.rightIcon} />
              </Button>
              <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes3.button}
              >
                <KeyboardVoiceIcon className={classes3.leftIcon} />
                Talk
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes3.button}
              >
                <SaveIcon
                  className={clsx(classes3.leftIcon, classes3.iconSmall)}
                />
                Save
              </Button>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode10} beforeCodeTitle="Customized buttons">
            <span>
              Here are some examples of customizing the component. You can learn
              more about this in the overrides documentation page.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <ColorButton
                variant="contained"
                color="primary"
                className={classes4.margin}
              >
                Custom CSS
              </ColorButton>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes4.margin}
                >
                  Theme Provider
                </Button>
              </ThemeProvider>
              <BootstrapButton
                variant="contained"
                color="primary"
                disableRipple
                className={classes4.margin}
              >
                Bootstrap
              </BootstrapButton>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode11} beforeCodeTitle="Complex Buttons" codeBlockHeight="400px">
            <span>
              The Text Buttons, Contained Buttons, Floating Action Buttons and
              Icon Buttons are built on top of the same component: the{" "}
              <code>ButtonBase</code>. You can take advantage of this lower
              level component to build custom interactions.
            </span>
            <div className="separator separator-dashed my-7" />
            <div className={classes5.root}>
              {images.map(image => (
                <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes5.image}
                  focusVisibleClassName={classes5.focusVisible}
                  style={{
                    width: image.width
                  }}
                >
                  <span
                    className={classes5.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`
                    }}
                  />
                  <span className={classes5.imageBackdrop} />
                  <span className={classes5.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes5.imageTitle}
                    >
                      {image.title}
                      <span className={classes5.imageMarked} />
                    </Typography>
                  </span>
                </ButtonBase>
              ))}
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

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
      <label htmlFor="text-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <Button variant="outlined" color="inherit" className={classes.button}>
        Inherit
      </Button>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function GroupedButtons() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup size="small" aria-label="Small outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup color="primary" aria-label="Outlined primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              color="secondary"
              size="large"
              aria-label="Large outlined secondary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="Full-width contained primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="secondary"
              size="large"
              aria-label="Large contained secondary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup fullWidth aria-label="Full width outlined button group">
          <Button>Full</Button>
          <Button>width</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
`;
const jsCode5 = `
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleClick() {
    alert(\`You clicked \${options[selectedIndex]}\`);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="Split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
      <div>
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Delete" className={classes.margin}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="default" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" className={classes.button}>
        <KeyboardVoiceIcon className={classes.leftIcon} />
        Talk
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  );
}
`;
const jsCode9 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
`;
const jsCode10 = `
import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
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
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Bootstrap
      </BootstrapButton>
    </div>
  );
}
`;
const jsCode11 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: \`\${theme.spacing(2)}px \${theme.spacing(4)}px \${theme.spacing(1) + 6}px\`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: \`url(\${image.url})\`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
`;
const jsCode12 = `
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const CollisionLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/getting-started/installation/" {...props} />
));

export default function ButtonRouter() {
  return (
    <KtContentRouter>
      <Button color="primary" component={AdapterLink} to="/">
        Simple case
      </Button>
      <Button component={CollisionLink}>Avoids props collision</Button>
    </Router>
  );
}
`;
