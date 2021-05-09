/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import {loadCSS} from "fg-loadcss";
import {makeStyles} from "@material-ui/core/styles";
import {SvgIcon, Grid, Typography, Icon} from "@material-ui/core";
import {blue, red} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import FourKIcon from "@material-ui/icons/FourK";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));

function HomeIcon1(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));

export default function IconsExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  // Example 2
  const classes2 = useStyles2();

  // Example 3
  const classes3 = useStyles3();

  // Example 4
  const classes4 = useStyles4();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>Guidance and suggestions for using icons with Material-UI.</span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/icons/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode1} beforeCodeTitle="SVG Icons">
            <span>
              The <code>SvgIcon</code> component takes an SVG <code>path</code>{" "}
              element as its child and converts it to a React component that
              displays the path, and allows the icon to be styled and respond to
              mouse events. SVG elements should be scaled for a 24x24px
              viewport.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <HomeIcon1 className={classes1.icon} />
              <HomeIcon1 className={classes1.icon} color="primary" />
              <HomeIcon1 className={classes1.icon} color="secondary" />
              <HomeIcon1 className={classes1.icon} color="action" />
              <HomeIcon1
                className={classes1.iconHover}
                color="error"
                style={{ fontSize: 30 }}
              />
              <HomeIcon1
                color="disabled"
                className={classes1.icon}
                fontSize="large"
              />
              <HomeIcon1
                className={classes1.icon}
                color="primary"
                fontSize="large"
                component={svgProps => {
                  return (
                    <svg {...svgProps}>
                      <defs>
                        <linearGradient id="gradient1">
                          <stop offset="30%" stopColor={blue[400]} />
                          <stop offset="70%" stopColor={red[400]} />
                        </linearGradient>
                      </defs>
                      {React.cloneElement(svgProps.children[0], {
                        fill: "url(#gradient1)"
                      })}
                    </svg>
                  );
                }}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Font Material icons">
            <div className={classes3.root}>
              <Icon className={classes3.icon}>add_circle</Icon>
              <Icon className={classes3.icon} color="primary">
                add_circle
              </Icon>
              <Icon className={classes3.icon} color="secondary">
                add_circle
              </Icon>
              <Icon className={classes3.icon} color="action">
                add_circle
              </Icon>
              <Icon
                className={classes3.iconHover}
                color="error"
                style={{ fontSize: 30 }}
              >
                add_circle
              </Icon>
              <Icon className={classes3.icon} color="disabled" fontSize="large">
                add_circle
              </Icon>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Font Awesome">
            <span>
              Font Awesome can be used with the <code>Icon</code> component as
              follow:
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <Icon className={clsx(classes4.icon, "fa fa-plus-circle")} />
              <Icon
                className={clsx(classes4.icon, "fa fa-plus-circle")}
                color="primary"
              />
              <Icon
                className={clsx(classes4.icon, "fa fa-plus-circle")}
                color="secondary"
              />
              <Icon
                className={clsx(classes4.icon, "fa fa-plus-circle")}
                color="action"
              />
              <Icon
                className={clsx(classes4.iconHover, "fa fa-plus-circle")}
                color="error"
                style={{ fontSize: 30 }}
              />
              <Icon
                className={clsx(classes4.icon, "fa fa-plus-circle")}
                color="disabled"
                fontSize="large"
              />
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Usage">
            <span>
              You can use material.io/tools/icons to find a specific icon. When
              importing an icon, keep in mind that the names of the icons are{" "}
              <code>PascalCase</code>.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Grid container className={classes2.root}>
              <Grid item xs={4}>
                <Typography>Filled</Typography>
              </Grid>
              <Grid item xs={8}>
                <DeleteIcon className={classes2.icon} />
                <DeleteForeverIcon className={classes2.icon} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Outlined</Typography>
              </Grid>
              <Grid item xs={8}>
                <DeleteOutlinedIcon className={classes2.icon} />
                <DeleteForeverOutlinedIcon className={classes2.icon} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Rounded</Typography>
              </Grid>
              <Grid item xs={8}>
                <DeleteRoundedIcon className={classes2.icon} />
                <DeleteForeverRoundedIcon className={classes2.icon} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Two Tone</Typography>
              </Grid>
              <Grid item xs={8}>
                <DeleteTwoToneIcon className={classes2.icon} />
                <DeleteForeverTwoToneIcon className={classes2.icon} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Sharp</Typography>
              </Grid>
              <Grid item xs={8}>
                <DeleteSharpIcon className={classes2.icon} />
                <DeleteForeverSharpIcon className={classes2.icon} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Edge-cases</Typography>
              </Grid>
              <Grid item xs={8}>
                <ThreeDRotationIcon className={classes2.icon} />
                <FourKIcon className={classes2.icon} />
                <ThreeSixtyIcon className={classes2.icon} />
              </Grid>
            </Grid>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeIcon className={classes.icon} />
      <HomeIcon className={classes.icon} color="primary" />
      <HomeIcon className={classes.icon} color="secondary" />
      <HomeIcon className={classes.icon} color="action" />
      <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
      <HomeIcon color="disabled" className={classes.icon} fontSize="large" />
      <HomeIcon
        className={classes.icon}
        color="primary"
        fontSize="large"
        component={svgProps => {
          return (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="30%" stopColor={blue[400]} />
                  <stop offset="70%" stopColor={red[400]} />
                </linearGradient>
              </defs>
              {React.cloneElement(svgProps.children[0], {
                fill: 'url(#gradient1)',
              })}
            </svg>
          );
        }}
      />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));

export default function SvgMaterialIcons() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Typography>Filled</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteIcon className={classes.icon} />
        <DeleteForeverIcon className={classes.icon} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Outlined</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteOutlinedIcon className={classes.icon} />
        <DeleteForeverOutlinedIcon className={classes.icon} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Rounded</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteRoundedIcon className={classes.icon} />
        <DeleteForeverRoundedIcon className={classes.icon} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Two Tone</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteTwoToneIcon className={classes.icon} />
        <DeleteForeverTwoToneIcon className={classes.icon} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Sharp</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteSharpIcon className={classes.icon} />
        <DeleteForeverSharpIcon className={classes.icon} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Edge-cases</Typography>
      </Grid>
      <Grid item xs={8}>
        <ThreeDRotationIcon className={classes.icon} />
        <FourKIcon className={classes.icon} />
        <ThreeSixtyIcon className={classes.icon} />
      </Grid>
    </Grid>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

export default function Icons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon className={classes.icon}>add_circle</Icon>
      <Icon className={classes.icon} color="primary">
        add_circle
      </Icon>
      <Icon className={classes.icon} color="secondary">
        add_circle
      </Icon>
      <Icon className={classes.icon} color="action">
        add_circle
      </Icon>
      <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
        add_circle
      </Icon>
      <Icon className={classes.icon} color="disabled" fontSize="large">
        add_circle
      </Icon>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

export default function FontAwesome() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className={classes.root}>
      <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} />
      <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} color="primary" />
      <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} color="secondary" />
      <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} color="action" />
      <Icon
        className={clsx(classes.iconHover, 'fa fa-plus-circle')}
        color="error"
        style={{ fontSize: 30 }}
      />
      <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} color="disabled" fontSize="large" />
    </div>
  );
}
`;
