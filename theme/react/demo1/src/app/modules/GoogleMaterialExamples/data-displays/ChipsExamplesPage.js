/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Chip, Avatar, Paper} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

// Example 5
const useStyles5 = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export default function ChipsExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  function handleDelete1() {
    alert("You clicked the delete icon.");
  }

  function handleClick1() {
    alert("You clicked the Chip.");
  }

  // Example 2
  const classes2 = useStyles2();

  function handleDelete2() {
    alert("You clicked the delete icon.");
  }

  function handleClick2() {
    alert("You clicked the Chip.");
  }

  // Example 3
  const classes3 = useStyles3();
  const [chipData3, setChipData3] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" }
  ]);

  const handleDelete3 = chipToDelete => () => {
    if (chipToDelete.label === "React") {
      alert("Why would you want to delete React?! :)");
      return;
    }

    setChipData3(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  // Example 4
  const classes4 = useStyles4();

  function handleDelete4() {
    alert("You clicked the delete icon.");
  }

  function handleClick4() {
    alert("You clicked the Chip.");
  }

  // Example 5
  const classes5 = useStyles5();

  function handleDelete5() {
    alert("You clicked the delete icon.");
  }

  function handleClick5() {
    alert("You clicked the Chip.");
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Chips are compact elements that represent an input, attribute, or
          action.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/chips/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Chip"
            codeBlockHeight="400px"
          >
            <span>
              Examples of Chips, using an image Avatar, SVG Icon Avatar,
              "Letter" and (string) Avatar.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <Chip label="Basic Chip" className={classes1.chip} />
              <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick1}
                className={classes1.chip}
              />
              <Chip
                avatar={
                  <Avatar
                    alt="Natacha"
                    src="https://material-ui.com//static/images/avatar/1.jpg"
                  />
                }
                label="Deletable Chip"
                onDelete={handleDelete1}
                className={classes1.chip}
              />
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick1}
                onDelete={handleDelete1}
                className={classes1.chip}
              />
              <Chip
                icon={<FaceIcon />}
                label="Clickable Deletable Chip"
                onClick={handleClick1}
                onDelete={handleDelete1}
                className={classes1.chip}
              />
              <Chip
                label="Custom delete icon Chip"
                onClick={handleClick1}
                onDelete={handleDelete1}
                className={classes1.chip}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                label="Clickable Link Chip"
                className={classes1.chip}
                component="a"
                href="#chip"
                clickable
              />
              <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Primary Clickable Chip"
                clickable
                className={classes1.chip}
                color="primary"
                onDelete={handleDelete1}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                icon={<FaceIcon />}
                label="Primary Clickable Chip"
                clickable
                className={classes1.chip}
                color="primary"
                onDelete={handleDelete1}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                label="Deletable Primary Chip"
                onDelete={handleDelete1}
                className={classes1.chip}
                color="primary"
              />
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Deletable Secondary Chip"
                onDelete={handleDelete1}
                className={classes1.chip}
                color="secondary"
              />
              <Chip
                icon={<FaceIcon />}
                label="Deletable Secondary Chip"
                onDelete={handleDelete1}
                className={classes1.chip}
                color="secondary"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Chip array"
            codeBlockHeight="400px"
          >
            <span>
              An example of rendering multiple Chips from an array of values.
              Deleting a chip removes it from the array. Note that since no{" "}
              <code>onClick</code> property is defined, the Chip can be focused,
              but does not gain depth while clicked or touched.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <Paper className={classes3.root}>
              {chipData3.map(data => {
                let icon;

                if (data.label === "React") {
                  icon = <TagFacesIcon />;
                }

                return (
                  <Chip
                    key={data.key}
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete3(data)}
                    className={classes3.chip}
                  />
                );
              })}
            </Paper>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Outlined variant"
            codeBlockHeight="400px"
          >
            <div className={classes5.root}>
              <Chip
                variant="outlined"
                size="small"
                label="Basic Chip"
                className={classes5.chip}
              />
              <Chip
                variant="outlined"
                size="small"
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick5}
                className={classes5.chip}
              />
              <Chip
                size="small"
                avatar={
                  <Avatar
                    alt="Natacha"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                }
                label="Deletable Chip"
                onDelete={handleDelete5}
                className={classes5.chip}
              />
              <Chip
                variant="outlined"
                size="small"
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick5}
                onDelete={handleDelete5}
                className={classes5.chip}
              />
              <Chip
                variant="outlined"
                size="small"
                icon={<FaceIcon />}
                label="Clickable Deletable Chip"
                onClick={handleClick5}
                onDelete={handleDelete5}
                className={classes5.chip}
              />
              <Chip
                variant="outlined"
                size="small"
                label="Custom delete icon Chip"
                onClick={handleClick5}
                onDelete={handleDelete5}
                className={classes5.chip}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                variant="outlined"
                size="small"
                label="Clickable Link Chip"
                className={classes5.chip}
                component="a"
                href="#chip"
                clickable
              />
              <Chip
                variant="outlined"
                size="small"
                avatar={<Avatar>MB</Avatar>}
                label="Primary Clickable Chip"
                clickable
                className={classes5.chip}
                color="primary"
                onDelete={handleDelete5}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                variant="outlined"
                size="small"
                icon={<FaceIcon />}
                label="Primary Clickable Chip"
                clickable
                className={classes5.chip}
                color="primary"
                onDelete={handleDelete5}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                variant="outlined"
                size="small"
                label="Deletable Primary Chip"
                onDelete={handleDelete5}
                className={classes5.chip}
                color="primary"
              />
              <Chip
                variant="outlined"
                size="small"
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Deletable Secondary Chip"
                onDelete={handleDelete5}
                className={classes5.chip}
                color="secondary"
              />
              <Chip
                variant="outlined"
                size="small"
                icon={<FaceIcon />}
                label="Deletable Secondary Chip"
                onDelete={handleDelete5}
                className={classes5.chip}
                color="secondary"
              />
            </div>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Outlined Chips"
            codeBlockHeight="400px"
          >
            <span>Outlined chips offer an alternative style.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <Chip
                label="Basic Chip"
                className={classes2.chip}
                variant="outlined"
              />
              <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick2}
                className={classes2.chip}
                variant="outlined"
              />
              <Chip
                avatar={
                  <Avatar
                    alt="Natacha"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                }
                label="Deletable Chip"
                onDelete={handleDelete2}
                className={classes2.chip}
                variant="outlined"
              />
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick2}
                onDelete={handleDelete2}
                className={classes2.chip}
                variant="outlined"
              />
              <Chip
                icon={<FaceIcon />}
                label="Clickable Deletable Chip"
                onClick={handleClick2}
                onDelete={handleDelete2}
                className={classes2.chip}
                variant="outlined"
              />
              <Chip
                label="Custom delete icon Chip"
                onClick={handleClick2}
                onDelete={handleDelete2}
                className={classes2.chip}
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Chip
                label="Clickable Link Chip"
                className={classes2.chip}
                component="a"
                href="#chip"
                clickable
                variant="outlined"
              />
              <Chip
                avatar={<Avatar>MB</Avatar>}
                label="Primary Clickable Chip"
                clickable
                className={classes2.chip}
                color="primary"
                onDelete={handleDelete2}
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Chip
                icon={<FaceIcon />}
                label="Primary Clickable Chip"
                clickable
                className={classes2.chip}
                color="primary"
                onDelete={handleDelete2}
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Chip
                label="Deletable Primary Chip"
                onDelete={handleDelete2}
                className={classes2.chip}
                color="primary"
                variant="outlined"
              />
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Deletable Secondary Chip"
                onDelete={handleDelete2}
                className={classes2.chip}
                color="secondary"
                variant="outlined"
              />
              <Chip
                icon={<FaceIcon />}
                label="Deletable Secondary Chip"
                onDelete={handleDelete2}
                className={classes2.chip}
                color="secondary"
                variant="outlined"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Default variant"
            codeBlockHeight="400px"
          >
            <span>
              You can use the <code>size</code> prop to define a small Chip.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes4.root}>
              <Chip size="small" label="Basic Chip" className={classes4.chip} />
              <Chip
                size="small"
                avatar={<Avatar>MB</Avatar>}
                label="Clickable Chip"
                onClick={handleClick4}
                className={classes4.chip}
              />
              <Chip
                size="small"
                avatar={
                  <Avatar
                    alt="Natacha"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                }
                label="Deletable Chip"
                onDelete={handleDelete4}
                className={classes4.chip}
              />
              <Chip
                size="small"
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Clickable Deletable Chip"
                onClick={handleClick4}
                onDelete={handleDelete4}
                className={classes4.chip}
              />
              <Chip
                size="small"
                icon={<FaceIcon />}
                label="Clickable Deletable Chip"
                onClick={handleClick4}
                onDelete={handleDelete4}
                className={classes4.chip}
              />
              <Chip
                size="small"
                label="Custom delete icon Chip"
                onClick={handleClick4}
                onDelete={handleDelete4}
                className={classes4.chip}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                size="small"
                label="Clickable Link Chip"
                className={classes4.chip}
                component="a"
                href="#chip"
                clickable
              />
              <Chip
                size="small"
                avatar={<Avatar>MB</Avatar>}
                label="Primary Clickable Chip"
                clickable
                className={classes4.chip}
                color="primary"
                onDelete={handleDelete4}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                size="small"
                icon={<FaceIcon />}
                label="Primary Clickable Chip"
                clickable
                className={classes4.chip}
                color="primary"
                onDelete={handleDelete4}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                size="small"
                label="Deletable Primary Chip"
                onDelete={handleDelete4}
                className={classes4.chip}
                color="primary"
              />
              <Chip
                size="small"
                avatar={
                  <Avatar>
                    <FaceIcon />
                  </Avatar>
                }
                label="Deletable Secondary Chip"
                onDelete={handleDelete4}
                className={classes4.chip}
                color="secondary"
              />
              <Chip
                size="small"
                icon={<FaceIcon />}
                label="Deletable Secondary Chip"
                onDelete={handleDelete4}
                className={classes4.chip}
                color="secondary"
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
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      <Chip label="Basic Chip" className={classes.chip} />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable Chip"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        label="Custom delete icon Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Clickable Link Chip"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Deletable Primary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      <Chip label="Basic Chip" className={classes.chip} variant="outlined" />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable Chip"
        onDelete={handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        variant="outlined"
      />
      <Chip
        label="Custom delete icon Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Clickable Link Chip"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Deletable Primary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="primary"
        variant="outlined"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
        variant="outlined"
      />
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = chipToDelete => () => {
    if (chipToDelete.label === 'React') {
      alert('Why would you want to delete React?! :)');
      return;
    }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      <Chip size="small" label="Basic Chip" className={classes.chip} />
      <Chip
        size="small"
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable Chip"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        size="small"
        label="Custom delete icon Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size="small"
        label="Clickable Link Chip"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        size="small"
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        size="small"
        label="Deletable Primary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="primary"
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      <Chip variant="outlined" size="small" label="Basic Chip" className={classes.chip} />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable Chip"
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        variant="outlined"
        size="small"
        icon={<FaceIcon />}
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
      />
      <Chip
        variant="outlined"
        size="small"
        label="Custom delete icon Chip"
        onClick={handleClick}
        onDelete={handleDelete}
        className={classes.chip}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        label="Clickable Link Chip"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        label="Deletable Primary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="primary"
      />
      <Chip
        variant="outlined"
        size="small"
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
    </div>
  );
}
`;
