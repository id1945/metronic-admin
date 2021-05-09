/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import {
  TextField,
  MenuItem,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  InputBase,
  Paper,
  IconButton,
  Divider,
  InputAdornment,
  Grid
} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

// Example 2
const useStyles2 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

// Example 5
const useStyles5 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

// Example 6
const useStyles6 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

// Example 7
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const useStyles7 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme7 = createMuiTheme({
  palette: {
    primary: green
  }
});

// Example 8
const useStyles8 = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

// Example 9
const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

const useStyles9 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 200
  }
}));

// Example 10
const useStyles10 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

// Example 11
const useStyles11 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

// Example 12
const useStyles12 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

export default function TextFieldsExamplesPage() {
  // Example 1
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Example 2
  const classes2 = useStyles2();
  const [values2, setValues2] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange2 = name => event => {
    setValues2({ ...values2, [name]: event.target.value });
  };

  // Example 3
  const classes3 = useStyles3();
  const [values3, setValues3] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange3 = name => event => {
    setValues3({ ...values3, [name]: event.target.value });
  };

  // Example 4
  const [labelWidth4, setLabelWidth4] = React.useState(0);
  const [name4, setName4] = React.useState("Composed TextField");
  const labelRef4 = React.useRef(null);
  const classes4 = useStyles4();

  React.useEffect(() => {
    setLabelWidth4(labelRef4.current.offsetWidth);
  }, []);

  function handleChange4(event) {
    setName4(event.target.value);
  }

  // Example 5
  const classes5 = useStyles5();

  // Example 6
  const classes6 = useStyles6();

  // Example 7
  const classes7 = useStyles7();

  // Example 8
  const classes8 = useStyles8();

  // Example 9
  const classes9 = useStyles9();
  const [values9, setValues9] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange9 = prop => event => {
    setValues9({ ...values9, [prop]: event.target.value });
  };

  const handleClickShowPassword9 = () => {
    setValues9({ ...values9, showPassword: !values9.showPassword });
  };

  // Example 10
  const classes10 = useStyles10();

  // Example 11
  const classes11 = useStyles11();
  const [values11, setValues11] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange11 = prop => event => {
    setValues11({ ...values11, [prop]: event.target.value });
  };

  const handleClickShowPassword11 = () => {
    setValues11({ ...values11, showPassword: !values11.showPassword });
  };

  // Example 12
  const classes12 = useStyles12();
  const [values12, setValues12] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange12 = prop => event => {
    setValues12({ ...values12, [prop]: event.target.value });
  };

  const handleClickShowPassword12 = () => {
    setValues({ ...values12, showPassword: !values12.showPassword });
  };

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>Text fields let users enter and edit text.</span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/text-fields/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>
      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="TextField"
            codeBlockHeight="400px"
          >
            <span>
              The <code>TextField</code> wrapper component is a complete form
              control including a label, input and help text.
            </span>
            <div className="separator separator-dashed my-7" />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange("name")}
                margin="normal"
              />
              <TextField
                id="standard-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                error
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue="Hello World"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                className={classes.textField}
                margin="normal"
                InputProps={{
                  readOnly: true
                }}
              />
              <TextField
                id="standard-dense"
                label="Dense"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
              />
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={values.multiline}
                onChange={handleChange("multiline")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
              />
              <TextField
                id="standard-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-textarea"
                label="With placeholder multiline"
                placeholder="Placeholder"
                multiline
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Number"
                value={values.age}
                onChange={handleChange("age")}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange("currency")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-currency-native"
                select
                label="Native select"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange("currency")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
              >
                {currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="standard-bare"
                className={classes.textField}
                defaultValue="Bare"
                margin="normal"
                inputProps={{ "aria-label": "bare" }}
              />
            </form>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Filled"
            codeBlockHeight="400px"
          >
            <span>
              <code>TextField</code> supports filled styling.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <form className={classes3.container} noValidate autoComplete="off">
              <TextField
                id="filled-name"
                label="Name"
                className={classes3.textField}
                value={values3.name}
                onChange={handleChange("name")}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                error
                id="filled-error"
                label="Error"
                defaultValue="Hello World"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                disabled
                id="filled-disabled"
                label="Disabled"
                defaultValue="Hello World"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-email-input"
                label="Email"
                className={classes3.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Password"
                className={classes3.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                className={classes3.textField}
                margin="normal"
                InputProps={{
                  readOnly: true
                }}
                variant="filled"
              />
              <TextField
                id="filled-dense"
                label="Dense"
                className={clsx(classes3.textField, classes3.dense)}
                margin="dense"
                variant="filled"
              />
              <TextField
                id="filled-dense-multiline"
                label="Dense multiline"
                className={clsx(classes3.textField, classes3.dense)}
                margin="dense"
                variant="filled"
                multiline
                rowsMax="4"
              />
              <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={values3.multiline}
                onChange={handleChange3("multiline")}
                className={classes3.textField}
                margin="normal"
                helperText="hello"
                variant="filled"
              />
              <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                className={classes3.textField}
                helperText="Some important text"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-number"
                label="Number"
                value={values3.age}
                onChange={handleChange3("age")}
                type="number"
                className={classes3.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-search"
                label="Search field"
                type="search"
                className={classes3.textField}
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                className={classes3.textField}
                value={values3.currency}
                onChange={handleChange3("currency")}
                SelectProps={{
                  MenuProps: {
                    className: classes3.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="filled"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency-native"
                select
                label="Native select"
                className={classes3.textField}
                value={values3.currency}
                onChange={handleChange3("currency")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes3.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="filled"
              >
                {currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="filled-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="filled-bare"
                className={classes3.textField}
                defaultValue="Bare"
                margin="normal"
                variant="filled"
                inputProps={{ "aria-label": "bare" }}
              />
            </form>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Inputs"
            codeBlockHeight="400px"
          >
            <div className={classes5.container}>
              <Input
                defaultValue="Hello world"
                className={classes5.input}
                inputProps={{
                  "aria-label": "Description"
                }}
              />
              <Input
                placeholder="Placeholder"
                className={classes5.input}
                inputProps={{
                  "aria-label": "Description"
                }}
              />
              <Input
                value="Disabled"
                className={classes5.input}
                disabled
                inputProps={{
                  "aria-label": "Description"
                }}
              />
              <Input
                defaultValue="Error"
                className={classes5.input}
                error
                inputProps={{
                  "aria-label": "Description"
                }}
              />
            </div>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode7}
            beforeCodeTitle="Customized inputs"
            codeBlockHeight="400px"
          >
            <span>Here are some examples of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes7.root}>
              <CssTextField
                className={classes7.margin}
                id="custom-css-standard-input"
                label="Custom CSS"
              />
              <CssTextField
                className={classes7.margin}
                label="Custom CSS"
                variant="outlined"
                id="custom-css-outlined-input"
              />
              <ThemeProvider theme={theme7}>
                <TextField
                  className={classes7.margin}
                  label="ThemeProvider"
                  id="mui-theme-provider-standard-input"
                />
                <TextField
                  className={classes7.margin}
                  label="ThemeProvider"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                />
              </ThemeProvider>
              <FormControl className={classes7.margin}>
                <InputLabel shrink htmlFor="bootstrap-input">
                  Bootstrap
                </InputLabel>
                <BootstrapInput
                  defaultValue="react-bootstrap"
                  id="bootstrap-input"
                />
              </FormControl>
              <RedditTextField
                label="Reddit"
                className={classes7.margin}
                defaultValue="react-reddit"
                variant="filled"
                id="reddit-input"
              />
              <InputBase
                className={classes7.margin}
                defaultValue="Naked input"
                inputProps={{ "aria-label": "naked" }}
              />
            </div>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode9}
            beforeCodeTitle="Input Adornments"
            codeBlockHeight="400px"
          >
            <span>
              <code>Input</code> allows the provision of{" "}
              <code>InputAdornment</code>. These can be used to add a prefix, a
              suffix or an action to an input. For instance, you can use an icon
              button to hide or reveal the password.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes9.root}>
              <TextField
                label="With normal TextField"
                id="simple-start-adornment"
                className={clsx(classes9.margin, classes9.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              />
              <TextField
                select
                label="With Select"
                className={clsx(classes9.margin, classes9.textField)}
                value={values9.weightRange}
                onChange={handleChange9("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <FormControl fullWidth className={classes9.margin}>
                <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                <Input
                  id="adornment-amount"
                  value={values9.amount}
                  onChange={handleChange9("amount")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
              <FormControl
                className={clsx(
                  classes9.margin,
                  classes9.withoutLabel,
                  classes9.textField
                )}
              >
                <Input
                  id="adornment-weight"
                  value={values9.weight}
                  onChange={handleChange9("weight")}
                  endAdornment={
                    <InputAdornment position="end">Kg</InputAdornment>
                  }
                  aria-describedby="weight-helper-text"
                  inputProps={{
                    "aria-label": "Weight"
                  }}
                />
                <FormHelperText id="weight-helper-text">Weight</FormHelperText>
              </FormControl>
              <FormControl
                className={clsx(classes9.margin, classes9.textField)}
              >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={values9.showPassword ? "text" : "password"}
                  value={values9.password}
                  onChange={handleChange9("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword9}
                      >
                        {values9.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode11}
            beforeCodeTitle="Filled Input Adornments"
            codeBlockHeight="400px"
          >
            {" "}
            <div className={classes11.root}>
              <TextField
                id="filled-simple-start-adornment"
                className={clsx(classes11.margin, classes11.textField)}
                variant="filled"
                label="With filled TextField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              />
              <TextField
                select
                className={clsx(classes11.margin, classes11.textField)}
                variant="filled"
                label="With Select"
                value={values11.weightRange}
                onChange={handleChange11("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-adornment-amount"
                className={clsx(classes11.margin, classes11.textField)}
                variant="filled"
                label="Amount"
                value={values11.amount}
                onChange={handleChange11("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
              <TextField
                id="filled-adornment-weight"
                className={clsx(classes11.margin, classes11.textField)}
                variant="filled"
                label="Weight"
                value={values11.weight}
                onChange={handleChange11("weight")}
                helperText="Weight"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Kg</InputAdornment>
                  )
                }}
              />
              <TextField
                id="filled-adornment-password"
                className={clsx(classes11.margin, classes11.textField)}
                variant="filled"
                type={values11.showPassword ? "text" : "password"}
                label="Password"
                value={values11.password}
                onChange={handleChange11("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword11}
                      >
                        {values11.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Outlined"
            codeBlockHeight="400px"
          >
            <span>
              <code>TextField</code> supports outlined styling.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <form className={classes2.container} noValidate autoComplete="off">
              <TextField
                id="outlined-name"
                label="Name"
                className={classes2.textField}
                value={values2.name}
                onChange={handleChange2("name")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes2.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes2.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                className={classes2.textField}
                margin="normal"
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-dense"
                label="Dense"
                className={clsx(classes2.textField, classes2.dense)}
                margin="dense"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Dense multiline"
                className={clsx(classes2.textField, classes2.dense)}
                margin="dense"
                variant="outlined"
                multiline
                rowsMax="4"
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={values2.multiline}
                onChange={handleChange2("multiline")}
                className={classes2.textField}
                margin="normal"
                helperText="hello"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                className={classes2.textField}
                helperText="Some important text"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-number"
                label="Number"
                value={values2.age}
                onChange={handleChange2("age")}
                type="number"
                className={classes2.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                className={classes2.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                className={classes2.textField}
                value={values2.currency}
                onChange={handleChange2("currency")}
                SelectProps={{
                  MenuProps: {
                    className: classes2.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="outlined"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                className={classes2.textField}
                value={values2.currency}
                onChange={handleChange("currency")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes2.menu
                  }
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="outlined"
              >
                {currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="outlined-bare"
                className={classes2.textField}
                defaultValue="Bare"
                margin="normal"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
              />
            </form>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Components"
            codeBlockHeight="400px"
          >
            <span>
              <code>TextField</code> is composed of smaller components ({" "}
              <code>FormControl</code>, <code>Input</code>,{" "}
              <code>FilledInput</code>, <code>InputLabel</code>,{" "}
              <code>OutlinedInput</code>, and <code>FormHelperText</code> ) that
              you can leverage directly to significantly customize your form
              inputs.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.container}>
              <FormControl className={classes4.formControl}>
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input
                  id="component-simple"
                  value={name4}
                  onChange={handleChange4}
                />
              </FormControl>
              <FormControl className={classes4.formControl}>
                <InputLabel htmlFor="component-helper">Name</InputLabel>
                <Input
                  id="component-helper"
                  value={name4}
                  onChange={handleChange4}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text">
                  Some important helper text
                </FormHelperText>
              </FormControl>
              <FormControl className={classes4.formControl} disabled>
                <InputLabel htmlFor="component-disabled">Name</InputLabel>
                <Input
                  id="component-disabled"
                  value={name4}
                  onChange={handleChange4}
                />
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
              <FormControl className={classes4.formControl} error>
                <InputLabel htmlFor="component-error">Name</InputLabel>
                <Input
                  id="component-error"
                  value={name4}
                  onChange={handleChange4}
                  aria-describedby="component-error-text"
                />
                <FormHelperText id="component-error-text">Error</FormHelperText>
              </FormControl>
              <FormControl className={classes4.formControl} variant="outlined">
                <InputLabel ref={labelRef4} htmlFor="component-outlined">
                  Name
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={name4}
                  onChange={handleChange4}
                  labelWidth={labelWidth4}
                />
              </FormControl>
              <FormControl className={classes4.formControl} variant="filled">
                <InputLabel htmlFor="component-filled">Name</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={name4}
                  onChange={handleChange4}
                />
              </FormControl>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Layout"
            codeBlockHeight="400px"
          >
            <span>
              <code>TextField</code>, <code>FormControl</code> allow the
              specification of <code>margin</code> to alter the vertical spacing
              of inputs. Using <code>none</code> (default) will not apply
              margins to the <code>FormControl</code>, whereas{" "}
              <code>dense</code> and <code>normal</code> will as well as alter
              other styles to meet the specification.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes6.container}>
              <TextField
                label="None"
                id="margin-none"
                defaultValue="Default Value"
                className={classes6.textField}
                helperText="Some important text"
              />
              <TextField
                label="Dense"
                id="margin-dense"
                defaultValue="Default Value"
                className={classes6.textField}
                helperText="Some important text"
                margin="dense"
              />
              <TextField
                label="Normal"
                id="margin-normal"
                defaultValue="Default Value"
                className={classes6.textField}
                helperText="Some important text"
                margin="normal"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode8}
            beforeCodeTitle="Customized inputs using InputBase"
            codeBlockHeight="400px"
          >
            <span>
              Customization does not stop at CSS, you can use composition to
              build custom components and give your app a unique feel. Below is
              an example using the <code>InputBase</code> component, inspired by
              Google Maps.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Paper className={classes8.root}>
              <IconButton className={classes8.iconButton} aria-label="Menu">
                <i className="flaticon-layer"></i>
              </IconButton>
              <InputBase
                className={classes8.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "Search Google Maps" }}
              />
              <IconButton className={classes8.iconButton} aria-label="Search">
                <i className="flaticon-search"></i>
              </IconButton>
              <Divider className={classes8.divider} />
              <IconButton
                color="primary"
                className={classes8.iconButton}
                aria-label="Directions"
              >
                <i className="fa fa-chevron-circle-right"></i>
              </IconButton>
            </Paper>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode10}
            beforeCodeTitle="With icon"
            codeBlockHeight="400px"
          >
            <span>Icons can be specified as prepended or appended.</span>
            <div className="separator separator-dashed my-7"></div>
            <div>
              <FormControl className={classes10.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                className={classes10.margin}
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              />
              <div className={classes10.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="With a grid" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode12}
            beforeCodeTitle="Outlined Input Adornments"
            codeBlockHeight="400px"
          >
            <div className={classes12.root}>
              <TextField
                id="outlined-simple-start-adornment"
                className={clsx(classes12.margin, classes12.textField)}
                variant="outlined"
                label="With outlined TextField"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              />
              <TextField
                select
                className={clsx(classes12.margin, classes12.textField)}
                variant="outlined"
                label="With Select"
                value={values12.weightRange}
                onChange={handleChange12("weightRange")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  )
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-adornment-amount"
                className={clsx(classes12.margin, classes12.textField)}
                variant="outlined"
                label="Amount"
                value={values12.amount}
                onChange={handleChange12("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
              <TextField
                id="outlined-adornment-weight"
                className={clsx(classes12.margin, classes12.textField)}
                variant="outlined"
                label="Weight"
                value={values12.weight}
                onChange={handleChange12("weight")}
                helperText="Weight"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Kg</InputAdornment>
                  )
                }}
              />
              <TextField
                id="outlined-adornment-password"
                className={clsx(classes12.margin, classes12.textField)}
                variant="outlined"
                type={values12.showPassword ? "text" : "password"}
                label="Password"
                value={values12.password}
                onChange={handleChange12("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword12}
                      >
                        {values12.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="standard-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-select-currency-native"
        select
        label="Native select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        inputProps={{ 'aria-label': 'bare' }}
      />
    </form>
  );
}
`;
const jsCode2 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-dense-multiline"
        label="Dense multiline"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
        helperText="hello"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency-native"
        select
        label="Native select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
    </form>
  );
}
`;
const jsCode3 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function FilledTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="filled-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        error
        id="filled-error"
        label="Error"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        disabled
        id="filled-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
      />
      <TextField
        id="filled-dense-multiline"
        label="Dense multiline"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
        multiline
        rowsMax="4"
      />
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
        helperText="hello"
        variant="filled"
      />
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-number"
        label="Number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="filled"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="filled-select-currency-native"
        select
        label="Native select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="filled"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="filled-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="filled-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        variant="filled"
        inputProps={{ 'aria-label': 'bare' }}
      />
    </form>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function ComposedTextField() {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [name, setName] = React.useState('Composed TextField');
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" value={name} onChange={handleChange} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input
          id="component-error"
          value={name}
          onChange={handleChange}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
          Name
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" value={name} onChange={handleChange} />
      </FormControl>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        defaultValue="Hello world"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        value="Disabled"
        className={classes.input}
        disabled
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        defaultValue="Error"
        className={classes.input}
        error
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TextFieldMargins() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        label="None"
        id="margin-none"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
      />
      <TextField
        label="Dense"
        id="margin-dense"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="dense"
      />
      <TextField
        label="Normal"
        id="margin-normal"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
      />
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      boxShadow: \`\${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem\`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: \`\${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px\`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />
      <CssTextField
        className={classes.margin}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="ThemeProvider"
          id="mui-theme-provider-standard-input"
        />
        <TextField
          className={classes.margin}
          label="ThemeProvider"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
      <RedditTextField
        label="Reddit"
        className={classes.margin}
        defaultValue="react-reddit"
        variant="filled"
        id="reddit-input"
      />
      <InputBase
        className={classes.margin}
        defaultValue="Naked input"
        inputProps={{ 'aria-label': 'naked' }}
      />
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
`;
const jsCode9 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={classes.root}>
      <TextField
        label="With normal TextField"
        id="simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
      <TextField
        select
        label="With Select"
        className={clsx(classes.margin, classes.textField)}
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
        <Input
          id="adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
        <Input
          id="adornment-weight"
          value={values.weight}
          onChange={handleChange('weight')}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="weight-helper-text"
          inputProps={{
            'aria-label': 'Weight',
          }}
        />
        <FormHelperText id="weight-helper-text">Weight</FormHelperText>
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
`;
const jsCode10 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
`;
const jsCode11 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function FilledInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={classes.root}>
      <TextField
        id="filled-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="With filled TextField"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="With Select"
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="filled-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Amount"
        value={values.amount}
        onChange={handleChange('amount')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        id="filled-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Weight"
        value={values.weight}
        onChange={handleChange('weight')}
        helperText="Weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }}
      />
      <TextField
        id="filled-adornment-password"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
`;
const jsCode12 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function OutlinedInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="With outlined TextField"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="With Select"
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Amount"
        value={values.amount}
        onChange={handleChange('amount')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Weight"
        value={values.weight}
        onChange={handleChange('weight')}
        helperText="Weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-password"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
`;
