/* eslint-disable no-restricted-imports */
import React from "react";
import PropTypes from "prop-types";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Typography, Grid, Tooltip, Paper, Input} from "@material-ui/core";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Slider from "@material-ui/core/Slider";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles({
  root: {
    width: 200
  }
});

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks2 = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];

function valuetext2(value) {
  return `${value}°C`;
}

function valueLabelFormat2(value) {
  return marks2.findIndex(mark => mark.value === value) + 1;
}

// Example 3
const useStyles3 = makeStyles({
  root: {
    width: 300
  }
});

function valuetext3(value) {
  return `${value}°C`;
}

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    width: 300 + 24 * 2,
    padding: 24
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function ValueLabelComponent4(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent4.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const iOSBoxShadow4 =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks4 = [
  {
    value: 0
  },
  {
    value: 20
  },
  {
    value: 37
  },
  {
    value: 100
  }
];

const IOSSlider4 = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow4,
    marginTop: -14,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow4
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    backgroundColor: "currentColor"
  }
})(Slider);

const PrettoSlider4 = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const AirbnbSlider4 = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent4(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

// Example 5
const useStyles5 = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});

// Example 6
const useStyles6 = makeStyles({
  root: {
    height: 300
  }
});

function valuetext6(value) {
  return `${value}°C`;
}

const marks6 = [
  {
    value: 0,
    label: "0°C"
  },
  {
    value: 20,
    label: "20°C"
  },
  {
    value: 37,
    label: "37°C"
  },
  {
    value: 100,
    label: "100°C"
  }
];

export default function SliderExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [value1, setValue1] = React.useState(30);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  // Example 2
  const classes2 = useStyles2();

  // Example 3
  const classes3 = useStyles3();
  const [value3, setValue3] = React.useState([20, 37]);

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  // Example 4
  const classes4 = useStyles4();

  // Example 5
  const classes5 = useStyles5();
  const [value5, setValue5] = React.useState(30);

  const handleSliderChange5 = (event, newValue) => {
    setValue5(newValue);
  };

  const handleInputChange5 = event => {
    setValue5(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur5 = () => {
    if (value5 < 0) {
      setValue5(0);
    } else if (value5 > 100) {
      setValue5(100);
    }
  };

  // Example 6
  const classes6 = useStyles6();

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>Sliders allow users to make selections from a range of values.</span>{" "}
        For more info please check the components's official{" "}
        <a
          target="_blank"
          className="font-weight-bold"
          rel="noopener noreferrer"
          href="https://material-ui.com/components/slider/"
        >
          demos & documentation
        </a>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Continuous sliders">
            <div className="section">
              <span className="section-sub">
                Continuous sliders allow users to select a value along a
                subjective range.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div className="section-content">
                <div className={classes1.root}>
                  <Typography id="continuous-slider" gutterBottom>
                    Volume
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <VolumeDown />
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={value1}
                        onChange={handleChange1}
                        aria-labelledby="continuous-slider"
                      />
                    </Grid>
                    <Grid item>
                      <VolumeUp />
                    </Grid>
                  </Grid>
                  <Slider
                    disabled
                    defaultValue={30}
                    aria-labelledby="continuous-slider"
                  />
                </div>
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Discrete sliders">
            <div className="section">
              <span className="section-sub">
                Discrete sliders can be adjusted to a specific value by
                referencing its value indicator.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div className="section-content">
                <div className={classes2.root}>
                  <Typography id="discrete-slider" gutterBottom>
                    Temperature
                  </Typography>
                  <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext2}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                  />
                  <div className={classes2.margin} />
                  <Typography id="discrete-slider-custom" gutterBottom>
                    Custom marks
                  </Typography>
                  <Slider
                    defaultValue={20}
                    getAriaValueText={valuetext2}
                    aria-labelledby="discrete-slider-custom"
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks2}
                  />
                  <div className={classes2.margin} />
                  <Typography id="discrete-slider-restrict" gutterBottom>
                    Restricted values
                  </Typography>
                  <Slider
                    defaultValue={20}
                    valueLabelFormat={valueLabelFormat2}
                    getAriaValueText={valuetext2}
                    aria-labelledby="discrete-slider-restrict"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks2}
                  />
                  <div className={classes2.margin} />
                  <Typography id="discrete-slider-always" gutterBottom>
                    Always visible
                  </Typography>
                  <Slider
                    defaultValue={80}
                    getAriaValueText={valuetext2}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    marks={marks2}
                    valueLabelDisplay="on"
                  />
                </div>
              </div>
            </div>
          </KTCodeExample>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Range sliders">
            <div className="section">
              <span className="section-sub"></span>
              <div className="section-content">
                <div className={classes3.root}>
                  <Typography id="range-slider" gutterBottom>
                    Temperature range
                  </Typography>
                  <Slider
                    value={value3}
                    onChange={handleChange3}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext3}
                  />
                </div>
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Customized sliders">
            <div className="section">
              <span className="section-sub">
                Here are some examples of customizing the component. You can
                learn more about this in the overrides documentation page.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div className="section-content">
                <Paper className={classes4.root}>
                  <Typography gutterBottom>iOS</Typography>
                  <IOSSlider4
                    aria-label="iOS slider"
                    defaultValue={60}
                    marks={marks4}
                    valueLabelDisplay="on"
                  />
                  <div className={classes4.margin} />
                  <Typography gutterBottom>pretto.fr</Typography>
                  <PrettoSlider4
                    valueLabelDisplay="auto"
                    aria-label="Pretto slider"
                    defaultValue={20}
                  />
                  <div className={classes4.margin} />
                  <Typography gutterBottom>Tooltip value label</Typography>
                  <Slider
                    ValueLabelComponent={ValueLabelComponent4}
                    aria-label="Custom thumb label"
                    defaultValue={20}
                  />
                  <div className={classes4.margin} />
                  <Typography gutterBottom>Airbnb</Typography>
                  <AirbnbSlider4
                    ThumbComponent={AirbnbThumbComponent4}
                    aria-label="Airbnb slider"
                    defaultValue={[20, 40]}
                  />
                </Paper>
              </div>
            </div>
          </KTCodeExample>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode5} beforeCodeTitle="With input field">
            <div className="section">
              <span className="section-sub"></span>
              <div className="section-content">
                <div className={classes5.root}>
                  <Typography id="input-slider" gutterBottom>
                    Volume
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <VolumeUp />
                    </Grid>
                    <Grid item xs>
                      <Slider
                        value={typeof value5 === "number" ? value5 : 0}
                        onChange={handleSliderChange5}
                        aria-labelledby="input-slider"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        className={classes5.input}
                        value={value5}
                        margin="dense"
                        onChange={handleInputChange5}
                        onBlur={handleBlur5}
                        inputProps={{
                          step: 10,
                          min: 0,
                          max: 100,
                          type: "number",
                          "aria-labelledby": "input-slider"
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Vertical sliders">
            <div className="section">
              <span className="section-sub"></span>
              <div className="separator separator-dashed my-7"></div>
              <div className="section-content">
                <React.Fragment>
                  <Typography id="vertical-slider" gutterBottom>
                    Temperature
                  </Typography>
                  <div className={classes6.root}>
                    <Slider
                      orientation="vertical"
                      getAriaValueText={valuetext6}
                      defaultValue={30}
                      aria-labelledby="vertical-slider"
                    />
                    <Slider
                      disabled
                      orientation="vertical"
                      getAriaValueText={valuetext6}
                      defaultValue={30}
                      aria-labelledby="vertical-slider"
                    />
                    <Slider
                      orientation="vertical"
                      defaultValue={[20, 37]}
                      aria-labelledby="vertical-slider"
                      getAriaValueText={valuetext6}
                      marks={marks6}
                    />
                  </div>
                </React.Fragment>
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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Slider disabled defaultValue={30} aria-labelledby="continuous-slider" />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return \`\${value}°C\`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return \`\${value}°C\`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + 24 * 2,
    padding: 24,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    backgroundColor: 'currentColor',
  },
})(Slider);

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography gutterBottom>iOS</Typography>
      <IOSSlider aria-label="iOS slider" defaultValue={60} marks={marks} valueLabelDisplay="on" />
      <div className={classes.margin} />
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider valueLabelDisplay="auto" aria-label="Pretto slider" defaultValue={20} />
      <div className={classes.margin} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="Custom thumb label"
        defaultValue={20}
      />
      <div className={classes.margin} />
      <Typography gutterBottom>Airbnb</Typography>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        aria-label="Airbnb slider"
        defaultValue={[20, 40]}
      />
    </Paper>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return \`\${value}°C\`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export default function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Temperature
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          disabled
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
    </React.Fragment>
  );
}
`;
