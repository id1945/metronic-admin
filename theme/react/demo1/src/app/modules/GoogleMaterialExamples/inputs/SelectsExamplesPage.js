/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import {makeStyles, withStyles, useTheme} from "@material-ui/core/styles";
import {
  Input,
  OutlinedInput,
  FilledInput,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
  InputBase,
  Checkbox,
  ListItemText,
  Chip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

// Example 3
const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
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
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles3 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

// Example 5
const useStyles5 = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

// Example 6
const useStyles6 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function SelectsExamplesPage() {
  // Example 1
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  // Example 2
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  const handleChange2 = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  // Example 3
  const classes3 = useStyles3();
  const [age, setAge] = React.useState("");
  const handleChange3 = event => {
    setAge(event.target.value);
  };

  // Exmaple 4
  const classes4 = useStyles4();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  function handleChange4(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  // Example 5
  const classes5 = useStyles();
  const [age2, setAge2] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleChange5(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  // Example 6
  const classes6 = useStyles6();
  const [state6, setState6] = React.useState({
    open: false,
    age: ""
  });

  const handleChange6 = name => event => {
    setState6({ ...state6, [name]: Number(event.target.value) });
  };

  function handleClickOpen6() {
    setState6({ ...state6, open: true });
  }

  function handleClose6() {
    setState6({ ...state6, open: false });
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Select components are used for collecting user provided information
          from a list of options.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/selects/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Simple Select"
            codeBlockHeight="400px"
          >
            <span>
              Menus are positioned over their emitting elements such that the
              currently selected menu item appears on top of the emitting
              element.
            </span>
            <div className="separator separator-dashed my-7"></div>

            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-simple"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-helper">Age</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  input={<Input name="age" id="age-helper" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  displayEmpty
                  name="age"
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  Age
                </InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  input={<Input name="age" id="age-label-placeholder" />}
                  displayEmpty
                  name="age"
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Label + placeholder</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="name-disabled">Name</InputLabel>
                <Select
                  value={values.name}
                  onChange={handleChange}
                  input={<Input name="name" id="name-disabled" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="hai">Hai</MenuItem>
                  <MenuItem value="olivier">Olivier</MenuItem>
                  <MenuItem value="kevin">Kevin</MenuItem>
                </Select>
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} error>
                <InputLabel htmlFor="name-error">Name</InputLabel>
                <Select
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  renderValue={value => `! - ${value}`}
                  input={<Input id="name-error" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="hai">Hai</MenuItem>
                  <MenuItem value="olivier">Olivier</MenuItem>
                  <MenuItem value="kevin">Kevin</MenuItem>
                </Select>
                <FormHelperText>Error</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name-readonly">Name</InputLabel>
                <Select
                  value={values.name}
                  onChange={handleChange}
                  input={<Input name="name" id="name-readonly" readOnly />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="hai">Hai</MenuItem>
                  <MenuItem value="olivier">Olivier</MenuItem>
                  <MenuItem value="kevin">Kevin</MenuItem>
                </Select>
                <FormHelperText>Read only</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-auto-width">Age</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  input={<Input name="age" id="age-auto-width" />}
                  autoWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Auto width</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  name="age"
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="" disabled>
                    Placeholder
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Placeholder</FormHelperText>
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="age-required">Age</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  name="age"
                  inputProps={{
                    id: "age-required"
                  }}
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Age
                </InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  input={<FilledInput name="age" id="filled-age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </form>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Customized selects"
            codeBlockHeight="400px"
          >
            <div className="section">
              <span className="section-sub">
                The first step is to style the <code>InputBase</code> component.
                Once it's styled, you can either use it directly as a text field
                or provide it to the select <code>input</code> property to have
                a <code>select</code> field.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div className="section-content">
                <form className={classes3.root} autoComplete="off">
                  <div className="d-flex justify-content-center width-full">
                    <div>
                      <FormControl className={classes3.margin}>
                        <InputLabel htmlFor="age-customized-input">
                          Age
                        </InputLabel>
                        <BootstrapInput id="age-customized-input" />
                      </FormControl>
                      <FormControl className={classes3.margin}>
                        <InputLabel htmlFor="age-customized-select">
                          Age
                        </InputLabel>
                        <Select
                          value={age}
                          onChange={handleChange3}
                          input={
                            <BootstrapInput
                              name="age"
                              id="age-customized-select"
                              className="select_input-h"
                            />
                          }
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className={classes3.margin}>
                        <InputLabel htmlFor="age-customized-native-simple">
                          Age
                        </InputLabel>
                        <NativeSelect
                          value={age}
                          onChange={handleChange3}
                          input={
                            <BootstrapInput
                              name="age"
                              id="age-customized-native-simple"
                            />
                          }
                        >
                          <option value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </NativeSelect>
                      </FormControl>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Controlled Open Select"
            codeBlockHeight="400px"
          >
            <form autoComplete="off">
              <Button className={classes5.button} onClick={handleOpen}>
                Open the select
              </Button>
              <div className="d-flex justify-content-center width-full">
                <div>
                  <FormControl className={classes5.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">
                      Age
                    </InputLabel>
                    <Select
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={age}
                      onChange={handleChange5}
                      inputProps={{
                        name: "age",
                        id: "demo-controlled-open-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </form>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Native Select"
            codeBlockHeight="400px"
          >
            <span>
              As the user experience can be improved on mobile using the native
              select of the platform, we allow such pattern.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes.root}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange2("age")}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple"
                  }}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange2("age")}
                  input={<Input name="age" id="age-native-helper" />}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange2("age")}
                  name="age"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="">None</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>With visually hidden label</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Age
                </InputLabel>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange2("age")}
                  input={<Input name="age" id="age-native-label-placeholder" />}
                >
                  <option value="">None</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Label + placeholder</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} disabled>
                <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
                <NativeSelect
                  value={state.name}
                  onChange={handleChange2("name")}
                  input={<Input name="name" id="name-native-disabled" />}
                >
                  <option value="" />
                  <optgroup label="Author">
                    <option value="hai">Hai</option>
                  </optgroup>
                  <optgroup label="Contributors">
                    <option value="olivier">Olivier</option>
                    <option value="kevin">Kevin</option>
                  </optgroup>
                </NativeSelect>
                <FormHelperText>Disabled</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl} error>
                <InputLabel htmlFor="name-native-error">Name</InputLabel>
                <NativeSelect
                  value={state.name}
                  onChange={handleChange2("name")}
                  name="name"
                  input={<Input id="name-native-error" />}
                >
                  <option value="" />
                  <optgroup label="Author">
                    <option value="hai">Hai</option>
                  </optgroup>
                  <optgroup label="Contributors">
                    <option value="olivier">Olivier</option>
                    <option value="kevin">Kevin</option>
                  </optgroup>
                </NativeSelect>
                <FormHelperText>Error</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
                <NativeSelect
                  defaultValue={30}
                  input={<Input name="name" id="uncontrolled-native" />}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
              </FormControl>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  className={classes.selectEmpty}
                  value={state.age}
                  name="age"
                  onChange={handleChange2("age")}
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="" disabled>
                    Placeholder
                  </option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Placeholder</FormHelperText>
              </FormControl>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="age-native-required">Age</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange2("age")}
                  name="age"
                  inputProps={{
                    id: "age-native-required"
                  }}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange2("age")}
                  input={
                    <OutlinedInput
                      name="age"
                      labelWidth={labelWidth}
                      id="outlined-age-native-simple"
                    />
                  }
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange2("age")}
                  input={
                    <FilledInput name="age" id="filled-age-native-simple" />
                  }
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Multiple Select"
            codeBlockHeight="400px"
          >
            <span className="pb-3">
              The <code>Select</code> component can handle multiple selections.
              It's enabled with the <code>multiple</code> property.
            </span>
            <div>
              Like with the single selection, you can pull out the new value by
              accessing <code>event.target.value</code> in the{" "}
              <code>onChange</code> callback. It's always an array.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <div className="d-flex justify-content-center width-full">
                <div>
                  <FormControl className={classes4.formControl}>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <Select
                      multiple
                      value={personName}
                      onChange={handleChange4}
                      input={<Input id="select-multiple" />}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes4.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                      Tag
                    </InputLabel>
                    <Select
                      multiple
                      value={personName}
                      onChange={handleChange4}
                      input={<Input id="select-multiple-checkbox" />}
                      renderValue={selected => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes4.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
                    <Select
                      multiple
                      value={personName}
                      onChange={handleChange4}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes4.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes4.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl
                    className={clsx(classes4.formControl, classes4.noLabel)}
                  >
                    <Select
                      multiple
                      displayEmpty
                      value={personName}
                      onChange={handleChange4}
                      input={<Input id="select-multiple-placeholder" />}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return <em>Placeholder</em>;
                        }

                        return selected.join(", ");
                      }}
                      MenuProps={MenuProps}
                    >
                      <MenuItem disabled value="">
                        <em>Placeholder</em>
                      </MenuItem>
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes4.formControl}>
                    <InputLabel shrink htmlFor="select-multiple-native">
                      Native
                    </InputLabel>
                    <Select
                      multiple
                      native
                      value={personName}
                      onChange={handleChangeMultiple}
                      inputProps={{
                        id: "select-multiple-native"
                      }}
                    >
                      {names.map(name => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="With a Dialog"
            codeBlockHeight="400px"
          >
            <span>
              While it's discouraged by the Material Design specification, you
              can use a select inside a dialog.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className="d-flex justify-content-center width-full">
              <div>
                <Button onClick={handleClickOpen6}>Open select dialog</Button>
                <Dialog
                  disableBackdropClick
                  disableEscapeKeyDown
                  open={state6.open}
                  onClose={handleClose6}
                >
                  <DialogTitle>Fill the form</DialogTitle>
                  <DialogContent>
                    <form className={classes6.container}>
                      <FormControl className={classes6.formControl}>
                        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                        <Select
                          native
                          value={state6.age}
                          onChange={handleChange6("age")}
                          input={<Input id="age-native-simple" />}
                        >
                          <option value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                      <FormControl className={classes6.formControl}>
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                          value={state6.age}
                          onChange={handleChange6("age")}
                          input={<Input id="age-simple" />}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose6} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose6} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
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
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-helper">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-helper" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={values.age}
          onChange={handleChange}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-label-placeholder">
          Age
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-disabled">Name</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="name-disabled" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="hai">Hai</MenuItem>
          <MenuItem value="olivier">Olivier</MenuItem>
          <MenuItem value="kevin">Kevin</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel htmlFor="name-error">Name</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          name="name"
          renderValue={value => \`⚠️  - \${value}\`}
          input={<Input id="name-error" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="hai">Hai</MenuItem>
          <MenuItem value="olivier">Olivier</MenuItem>
          <MenuItem value="kevin">Kevin</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-readonly">Name</InputLabel>
        <Select
          value={values.name}
          onChange={handleChange}
          input={<Input name="name" id="name-readonly" readOnly />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="hai">Hai</MenuItem>
          <MenuItem value="olivier">Olivier</MenuItem>
          <MenuItem value="kevin">Kevin</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-auto-width">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<Input name="age" id="age-auto-width" />}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={values.age}
          onChange={handleChange}
          name="age"
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-required">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          name="age"
          inputProps={{
            id: 'age-required',
          }}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Age
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<FilledInput name="age" id="filled-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          input={<Input name="age" id="age-native-helper" />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Age
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          input={<Input name="age" id="age-native-label-placeholder" />}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange('name')}
          input={<Input name="name" id="name-native-disabled" />}
        >
          <option value="" />
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel htmlFor="name-native-error">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange('name')}
          name="name"
          input={<Input id="name-native-error" />}
        >
          <option value="" />
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
        <NativeSelect defaultValue={30} input={<Input name="name" id="uncontrolled-native" />}>
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChange('age')}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Placeholder
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          name="age"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Age
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          input={
            <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
          }
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          input={<FilledInput name="age" id="filled-age-native-simple" />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
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
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">Age</InputLabel>
        <BootstrapInput id="age-customized-input" />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-select">Age</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Age</InputLabel>
        <NativeSelect
          value={age}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </form>
  );
}
`;
const jsCode4 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple">Name</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-placeholder" />}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    age: '',
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: Number(event.target.value) });
  };

  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Age</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange('age')}
                input={<Input id="age-native-simple" />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={state.age}
                onChange={handleChange('age')}
                input={<Input id="age-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;
