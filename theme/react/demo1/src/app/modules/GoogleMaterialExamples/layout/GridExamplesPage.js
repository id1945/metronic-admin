/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {makeStyles} from "@material-ui/core";
import {
  Grid,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";
import {
  Paper,
  ButtonBase,
  Typography,
  Avatar,
  Divider
} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const jsCode1 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="Spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: \`\${theme.spacing(1)}px auto\`,
    padding: theme.spacing(2),
  },
}));

const message = \`Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. \`;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
`;

const useStyles1 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));
const useStyles2 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const useStyles3 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const useStyles4 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const useStyles5 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));
const useStyles6 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const useStyles8 = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));
const useStyles7 = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

export default function GridExamplesPage() {
  const [spacing, setSpacing] = React.useState(2);
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4();
  const classes5 = useStyles5();
  const classes6 = useStyles6();
  const classes7 = useStyles7();
  const classes8 = useStyles8();

  const message = `Truncation should be conditionally applicable on this long line of text
      as this is a much longer line than what the container can support. `;

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes6.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes6.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes6.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          The Material Design responsive layout grid adapts to screen size and
          orientation, ensuring consistency across layouts.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/grid/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Spacing" codeBlockHeight="400px">
        <span>
          The responsive grid focuses on consistent spacing widths, rather than
          column width. Material Design margins and columns follow an 8px square
          baseline grid. The spacing property is an integer between 0 and 10
          inclusive. By default, the spacing between two grid items follows a
          linear function: <code>output(spacing) = spacing * 8px</code>, e.g.{" "}
          <code>spacing={2}</code> creates a 16px wide gap.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <Grid container className={classes1.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes1.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes1.control}>
              <Grid container>
                <Grid item>
                  <FormLabel>spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="Spacing"
                    value={spacing.toString()}
                    onChange={handleChange}
                    row
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </KTCodeExample>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Basic Grid" codeBlockHeight="400px">
            <span>
              The column widths apply at all breakpoints (i.e. <code>xs</code>{" "}
              and up).
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes2.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes2.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes2.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes2.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes2.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes2.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes2.paper}>xs=3</Paper>
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Grid with breakpoints"
            codeBlockHeight="400px"
          >
            <span>
              Some columns have multiple widths defined, causing the layout to
              change at the defined breakpoint.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes3.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes3.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes3.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes3.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes3.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes3.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes3.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes3.paper}>xs=6 sm=3</Paper>
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>
        </div>
      </div>

      <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Auto-layout" codeBlockHeight="400px">
        <span>
          The Auto-layout makes the items equitably share the available space.
          That also means you can set the width of one item and the others will
          automatically resize around it.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div className={classes4.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes4.paper}>xs</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes4.paper}>xs</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes4.paper}>xs</Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes4.paper}>xs</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes4.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes4.paper}>xs</Paper>
            </Grid>
          </Grid>
        </div>
      </KTCodeExample>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Complex Grid" codeBlockHeight="400px">
            <span>
              The following demo doesn't follow the Material Design
              specification, but illustrates how the grid can be used to build
              complex layouts.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes5.root}>
              <Paper className={classes5.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes5.image}>
                      <img
                        className={classes5.img}
                        alt="complex"
                        src="https://material-ui.com/static/images/grid/complex.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Nested Grid" codeBlockHeight="400px">
            <span className="pb-3">
              The <code>container</code> and <code>item</code> properties are
              two independent booleans. They can be combined.
            </span>
            <div>
              A flex container is the box generated by an element with a
              computed display of <code>flex</code> or <code>inline-flex</code>.
              In-flow children of a flex container are called flex items and are
              laid out using the flex layout model.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes6.root}>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                  <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                  <FormRow />
                </Grid>
              </Grid>
            </div>
          </KTCodeExample>
        </div>
      </div>

      <KTCodeExample jsCode={jsCode8} beforeCodeTitle="Negative margin" codeBlockHeight="400px">
        <span>
          There is one limitation with the negative margin we use to implement
          the spacing between items. A horizontal scroll will appear if a
          negative margin goes beyond the <code>&lt;body&gt;</code>. There are 3
          available workarounds:{" "}
          <a
            target="_blank"
            href="https://material-ui.com/components/grid/#limitations"
          >
            see official documentations
          </a>
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div className={classes8.root}>
          <Paper className={classes8.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes8.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography noWrap>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes8.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </KTCodeExample>

      <KTCodeExample jsCode={jsCode7} beforeCodeTitle="CSS Grid Layout" codeBlockHeight="400px">
        <span>
          Material-UI doesn't provide any CSS Grid functionality itself, but as
          seen below you can easily use CSS Grid to layout your pages.
        </span>
        <div className="separator separator-dashed my-7"></div>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Material-UI Grid:
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes7.paper}>xs=8</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes7.paper}>xs=4</Paper>
            </Grid>
          </Grid>
          <Divider className={classes7.divider} />
          <Typography variant="subtitle1" gutterBottom>
            CSS Grid Layout:
          </Typography>
          <div className={classes7.container}>
            <div style={{ gridColumnEnd: "span 3" }}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </div>
            <div style={{ gridColumnEnd: "span 3" }}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </div>
            <div style={{ gridColumnEnd: "span 3" }}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </div>
            <div style={{ gridColumnEnd: "span 3" }}>
              <Paper className={classes7.paper}>xs=3</Paper>
            </div>
            <div style={{ gridColumnEnd: "span 8" }}>
              <Paper className={classes7.paper}>xs=8</Paper>
            </div>
            <div style={{ gridColumnEnd: "span 4" }}>
              <Paper className={classes7.paper}>xs=4</Paper>
            </div>
          </div>
        </div>
      </KTCodeExample>
    </>
  );
}
