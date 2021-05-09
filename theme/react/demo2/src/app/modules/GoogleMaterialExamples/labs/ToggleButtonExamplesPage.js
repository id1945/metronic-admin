/* eslint-disable no-restricted-imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

export default function ToggleButtonExamplesPage() {
  // Example 1
  const [alignment1, setAlignment1] = React.useState("left");
  const [formats1, setFormats1] = React.useState(() => ["bold"]);

  const handleFormat1 = (event, newFormats) => {
    setFormats1(newFormats);
  };

  const handleAlignment1 = (event, newAlignment) => {
    setAlignment1(newAlignment);
  };

  const classes1 = useStyles1();

  // Example 2
  const [alignment2, setAlignment2] = React.useState("left");

  const handleChange2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
  };

  const children2 = [
    <ToggleButton key={1} value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key={3} value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key={4} value="justify" disabled>
      <FormatAlignJustifyIcon />
    </ToggleButton>
  ];

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>Toggle buttons can be used to group related options.</span> For
        more info please check the components's official{" "}
        <a
          target="_blank"
          className="font-weight-bold"
          rel="noopener noreferrer"
          href=""
        >
          demos & documentation
        </a>
      </Notice>

      <Notice className="notice__paragraph"></Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Toggle Buttons">
        <div className="section">
          <span className="section-sub">
            To emphasize groups of related Toggle buttons, a group should share
            a common container.
          </span>
          <p className="section-sub">
            The <code>ToggleButtonGroup</code> will control the selected of its
            child buttons when given its own <code>value</code> prop.
          </p>
          <div className="separator separator-dashed my-7"></div>
          <div className="section-content">
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <div className={classes1.toggleContainer}>
                  <ToggleButtonGroup
                    value={alignment1}
                    exclusive
                    onChange={handleAlignment1}
                  >
                    <ToggleButton value="left">
                      <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center">
                      <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right">
                      <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" disabled>
                      <FormatAlignJustifyIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <Typography gutterBottom>Exclusive Selection</Typography>
                <Typography>
                  Text justification toggle buttons present options for left,
                  right, center, full, and justified text with only one item
                  available for selection at a time. Selecting one option
                  deselects any other.
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <div className={classes1.toggleContainer}>
                  <ToggleButtonGroup value={formats1} onChange={handleFormat1}>
                    <ToggleButton value="bold">
                      <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic">
                      <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined">
                      <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton disabled value="color">
                      <FormatColorFillIcon />
                      <ArrowDropDownIcon />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <Typography gutterBottom>Multiple Selection</Typography>
                <Typography>
                  Logically-grouped options, like Bold, Italic, and Underline,
                  allow multiple options to be selected.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </KTCodeExample>

      <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Sizes">
        <div className="section">
          <span className="section-sub">
            Fancy larger or smaller buttons? Use the <code>size</code> property.
          </span>
          <div className="separator separator-dashed my-7"></div>
          <div className="section-content">
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <ToggleButtonGroup
                  size="small"
                  value={alignment2}
                  exclusive
                  onChange={handleChange2}
                >
                  {children2}
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <ToggleButtonGroup
                  size="medium"
                  value={alignment2}
                  exclusive
                  onChange={handleChange2}
                >
                  {children2}
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <ToggleButtonGroup
                  size="large"
                  value={alignment2}
                  exclusive
                  onChange={handleChange2}
                >
                  {children2}
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </div>
        </div>
      </KTCodeExample>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['bold']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
            <ToggleButton value="left">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Typography gutterBottom>Exclusive Selection</Typography>
        <Typography>
          Text justification toggle buttons present options for left, right, center, full, and
          justified text with only one item available for selection at a time. Selecting one option
          deselects any other.
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup value={formats} onChange={handleFormat}>
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton disabled value="color">
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Typography gutterBottom>Multiple Selection</Typography>
        <Typography>
          Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to be
          selected.
        </Typography>
      </Grid>
    </Grid>
  );
}
`;
const jsCode2 = `
import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton key={1} value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key={2} value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key={3} value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key={4} value="justify" disabled>
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
          {children}
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange}>
          {children}
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleChange}>
          {children}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
`;
