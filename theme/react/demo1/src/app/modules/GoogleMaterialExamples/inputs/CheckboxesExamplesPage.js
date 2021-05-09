/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import {withStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 2
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxesExamplesPage() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  // Example 3
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    formControl: {
      margin: theme.spacing(3)
    }
  }));

  const classes = useStyles();
  const handleChange3 = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  // Example 4
  const [value, setValue] = React.useState("female");

  function handleChange4(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Checkboxes allow the user to select one or more items from a set.
        </span>{" "}
        <code>Checkboxes</code> can be used to turn an option on or off.{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/checkboxes/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Checkboxes"
            codeBlockHeight="400px"
          >
            <span>
              If you have multiple options appearing in a list, you can preserve
              space by using checkboxes instead of on/off switches. If you have
              a single option, avoid using a checkbox and use an on/off switch
              instead.
            </span>
            <div className="separator separator-dashed my-7" />
            <div>
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange("checkedA")}
                value="checkedA"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange("checkedB")}
                value="checkedB"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox"
                }}
              />
              <Checkbox
                value="checkedC"
                inputProps={{
                  "aria-label": "uncontrolled-checkbox"
                }}
              />
              <Checkbox
                disabled
                value="checkedD"
                inputProps={{
                  "aria-label": "disabled checkbox"
                }}
              />
              <Checkbox
                disabled
                checked
                value="checkedE"
                inputProps={{
                  "aria-label": "disabled checked checkbox"
                }}
              />
              <Checkbox
                checked={state.checkedF}
                onChange={handleChange("checkedF")}
                value="checkedF"
                indeterminate
                inputProps={{
                  "aria-label": "indeterminate checkbox"
                }}
              />
              <Checkbox
                defaultChecked
                color="default"
                value="checkedG"
                inputProps={{
                  "aria-label": "checkbox with default color"
                }}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Checkboxes with FormGroup"
            codeBlockHeight="400px"
          >
            <span>
              <code>FormGroup</code> is a helpful wrapper used to group
              selection controls components that provides an easier API.
            </span>
            <div className="separator separator-dashed my-7" />
            <div className={classes.root}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange3("gilad")}
                        value="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange3("jason")}
                        value="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange3("antoine")}
                        value="antoine"
                      />
                    }
                    label="Antoine Llorca"
                  />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
              <FormControl
                required
                error={error}
                component="fieldset"
                className={classes.formControl}
              >
                <FormLabel component="legend">Pick two</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange3("gilad")}
                        value="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange3("jason")}
                        value="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange3("antoine")}
                        value="antoine"
                      />
                    }
                    label="Antoine Lorca"
                  />
                </FormGroup>
                <FormHelperText>You can display an error</FormHelperText>
              </FormControl>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Form Control Label"
            codeBlockHeight="400px"
          >
            <span>
              <code>Checkbox</code> can also be used with a label description
              thanks to the <code>FormControlLabel</code> component.
            </span>
            <div className="separator separator-dashed my-7" />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange("checkedA")}
                    value="checkedA"
                  />
                }
                label="Secondary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={<Checkbox value="checkedC" />}
                label="Uncontrolled"
              />
              <FormControlLabel
                disabled
                control={<Checkbox value="checkedD" />}
                label="Disabled"
              />
              <FormControlLabel
                disabled
                control={<Checkbox checked value="checkedE" />}
                label="Disabled"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedF}
                    onChange={handleChange("checkedF")}
                    value="checkedF"
                    indeterminate
                  />
                }
                label="Indeterminate"
              />
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedG}
                    onChange={handleChange("checkedG")}
                    value="checkedG"
                  />
                }
                label="Custom color"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value="checkedH"
                  />
                }
                label="Custom icon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    value="checkedI"
                  />
                }
                label="Custom size"
              />
            </FormGroup>
          </KTCodeExample>
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Label placement"
            codeBlockHeight="400px"
          >
            <span>You can change the placement of the label:</span>
            <div className="separator separator-dashed my-7" />
            <FormControl component="fieldset">
              <FormLabel component="legend">labelPlacement</FormLabel>
              <FormGroup
                aria-label="position"
                name="position"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="top"
                  control={<Checkbox color="primary" />}
                  label="Top"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Start"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Checkbox color="primary" />}
                  label="Bottom"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="End"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}

export default FormControlLabelPosition;
`;
const jsCode3 = `
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      <Checkbox
        value="checkedC"
        inputProps={{
          'aria-label': 'uncontrolled-checkbox',
        }}
      />
      <Checkbox
        disabled
        value="checkedD"
        inputProps={{
          'aria-label': 'disabled checkbox',
        }}
      />
      <Checkbox
        disabled
        checked
        value="checkedE"
        inputProps={{
          'aria-label': 'disabled checked checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedF}
        onChange={handleChange('checkedF')}
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="checkedG"
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange('checkedF')}
            value="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value="checkedG"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            value="checkedI"
          />
        }
        label="Custom size"
      />
    </FormGroup>
  );
}
`;
