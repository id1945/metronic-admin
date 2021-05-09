/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItem,
  Checkbox,
  Grid,
  Button,
  ListItemText,
  ListItemIcon,
  Card,
  CardHeader,
  Divider
} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto"
  },
  paper: {
    width: 200,
    height: 230,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(0.5, 0)
  }
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    margin: "auto"
  },
  cardHeader: {
    padding: theme.spacing(1, 2)
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(0.5, 0)
  }
}));

function not2(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection2(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union2(a, b) {
  return [...a, ...not2(b, a)];
}

export default function TransferListExamplesPage() {
  // Example 1
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  // Example 2
  const classes2 = useStyles2();
  const [checked2, setChecked2] = React.useState([]);
  const [left2, setLeft2] = React.useState([0, 1, 2, 3]);
  const [right2, setRight2] = React.useState([4, 5, 6, 7]);

  const leftChecked2 = intersection2(checked2, left2);
  const rightChecked2 = intersection2(checked2, right2);

  const handleToggle2 = value => () => {
    const currentIndex2 = checked2.indexOf(value);
    const newChecked2 = [...checked2];

    if (currentIndex2 === -1) {
      newChecked2.push(value);
    } else {
      newChecked2.splice(currentIndex2, 1);
    }

    setChecked2(newChecked2);
  };

  const numberOfChecked2 = items => intersection2(checked2, items).length;

  const handleToggleAll2 = items => () => {
    if (numberOfChecked2(items) === items.length) {
      setChecked2(not2(checked2, items));
    } else {
      setChecked2(union2(checked2, items));
    }
  };

  const handleCheckedRight2 = () => {
    setRight2(right2.concat(leftChecked2));
    setLeft2(not2(left2, leftChecked2));
    setChecked2(not2(checked2, leftChecked2));
  };

  const handleCheckedLeft2 = () => {
    setLeft2(left2.concat(rightChecked2));
    setRight2(not2(right2, rightChecked2));
    setChecked2(not2(checked2, rightChecked2));
  };

  const customList2 = (title, items) => (
    <Card>
      <CardHeader
        className={classes2.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll2(items)}
            checked={
              numberOfChecked2(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked2(items) !== items.length &&
              numberOfChecked2(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked2(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes2.list} dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle2(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked2.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          A transfer list (or "shuttle") enables the user to move one or more
          list items between lists.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/transfer-list/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Simple Transfer List"
            codeBlockHeight="400px"
          >
            <span>
              For completeness, this example includes buttons for "move all",
              but not every transfer list needs these.
            </span>
            <div className="separator separator-dashed my-7" />
            <Grid
              container
              spacing={2}
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item>{customList(left)}</Grid>
              <Grid item>
                <Grid container direction="column" alignItems="center">
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    onClick={handleAllRight}
                    disabled={left.length === 0}
                    aria-label="move all right"
                  >
                    <i className="flaticon2-fast-next" />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    onClick={handleCheckedRight}
                    disabled={leftChecked.length === 0}
                    aria-label="move selected right"
                  >
                    <i className="flaticon2-next" />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className={`${classes.button}`}
                    onClick={handleCheckedLeft}
                    disabled={rightChecked.length === 0}
                    aria-label="move selected left"
                  >
                    <i className="flaticon2-back" />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    onClick={handleAllLeft}
                    disabled={right.length === 0}
                    aria-label="move all left"
                  >
                    <i className="flaticon2-fast-back" />
                  </Button>
                </Grid>
              </Grid>
              <Grid item>{customList(right)}</Grid>
            </Grid>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Enhanced Transfer List"
            codeBlockHeight="400px"
          >
            <span>
              This example exchanges the "move all" buttons for a "select all /
              select none" checkbox, and adds a counter.
            </span>
            <div className="separator separator-dashed my-7" />
            <Grid
              container
              spacing={2}
              justify="center"
              alignItems="center"
              className={classes2.root}
            >
              <Grid item>{customList2("Choices", left2)}</Grid>
              <Grid item>
                <Grid container direction="column" alignItems="center">
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes2.button}
                    onClick={handleCheckedRight2}
                    disabled={leftChecked2.length === 0}
                    aria-label="move selected right"
                  >
                    <i className="flaticon2-next" />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes2.button}
                    onClick={handleCheckedLeft2}
                    disabled={rightChecked2.length === 0}
                    aria-label="move selected left"
                  >
                    <i className="flaticon2-back" />
                  </Button>
                </Grid>
              </Grid>
              <Grid item>{customList2("Chosen", right2)}</Grid>
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
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

export default function TransferList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = \`transfer-list-item-\${value}-label\`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = items => intersection(checked, items).length;

  const handleToggleAll = items => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={\`\${numberOfChecked(items)}/\${items.length} selected\`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map(value => {
          const labelId = \`transfer-list-all-item-\${value}-label\`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  );
}
`;
