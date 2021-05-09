/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

// Example 2
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

export default function RadioButtonsExamplesPage() {
  // Example 1
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  // Example 2
  const [selectedValue, setSelectedValue] = React.useState("a");
  function handleChange2(event) {
    setSelectedValue(event.target.value);
  }

  // Example 3
  function handleChange3(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Radio buttons allow the user to select one option from a set.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/radio-buttons/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Radio Group"
            codeBlockHeight="400px"
          >
            {" "}
            <span>
              <code>RadioGroup</code> is a helpful wrapper used to group{" "}
              <code>Radio</code> components that provides an easier API, and
              proper keyboard accessibility to the group.
            </span>
            <div className="separator separator-dashed my-7" />
            <div className={classes.root}>
              <div className="width-full">
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-3">
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                        <FormControlLabel
                          value="disabled"
                          disabled
                          control={<Radio />}
                          label="(Disabled option)"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-3">
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="gender2"
                        className={classes.group}
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Female"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Other"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="disabled"
                          disabled
                          control={<Radio />}
                          label="(Disabled option)"
                          labelPlacement="start"
                        />
                      </RadioGroup>
                      {/*<FormHelperText>labelPlacement start</FormHelperText>*/}
                    </FormControl>
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Standalone Radio Buttons"
            codeBlockHeight="400px"
          >
            <span>
              <code>Radio</code> can also be used standalone, without the
              wrapper.
            </span>
            <div className="separator separator-dashed my-7" />
            <div className="d-flex justify-content-center width-full">
              <div>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange2}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A" }}
                />
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange2}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "B" }}
                />
                <GreenRadio
                  checked={selectedValue === "c"}
                  onChange={handleChange2}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "C" }}
                />
                <Radio
                  checked={selectedValue === "d"}
                  onChange={handleChange2}
                  value="d"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "D" }}
                />
                <Radio
                  checked={selectedValue === "e"}
                  onChange={handleChange2}
                  value="e"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "E" }}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                />
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Label placement"
            codeBlockHeight="400px"
          >
            <span>You can change the placement of the label:</span>
            <div className="separator separator-dashed my-7" />
            <div className="d-flex justify-content-center width-full">
              <div>
                <FormControl component="fieldset">
                  {/*<FormLabel component="legend">labelPlacement</FormLabel>*/}
                  <RadioGroup
                    aria-label="position"
                    name="position"
                    value={value}
                    onChange={handleChange3}
                    row
                  >
                    <FormControlLabel
                      value="top"
                      control={<Radio color="primary" />}
                      label="Top"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Radio color="primary" />}
                      label="Start"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="bottom"
                      control={<Radio color="primary" />}
                      label="Bottom"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" />}
                      label="End"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="start"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="start"
          />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
            labelPlacement="start"
          />
        </RadioGroup>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
      <Radio
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      <Radio
        checked={selectedValue === 'e'}
        onChange={handleChange}
        value="e"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
        icon={<RadioButtonUncheckedIcon fontSize="small" />}
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
      />
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Radio color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
`;
