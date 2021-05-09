/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography, Portal} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const useStyles = makeStyles(theme => ({
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: "1px solid",
    borderColor: theme.palette.text.primary
  }
}));

export default function PortalExamplesPage() {
  // Example 1
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  const classes = useStyles();

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          The portal component renders its children into a new "subtree" outside
          of current component hierarchy.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/portal/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Simple Portal">
        <span className="pb-3">
          The children of the portal component will be appended to the{" "}
          <code>container</code> specified.
        </span>
        <div>
          The component is used internally by the <code>Modal</code> and{" "}
          <code>Popper</code> components. On the server, the content won't be
          rendered. You have to wait for the client side hydratation to see the
          children.
        </div>
        <div className="separator separator-dashed my-7"></div>
        <div>
          <Button onClick={handleClick}>
            {show ? "Unmount children" : "Mount children"}
          </Button>
          <div className={classes.alert}>
            <Typography>It looks like I will render here.</Typography>
            {show ? (
              <Portal container={container.current}>
                <Typography>But I actually render here!</Typography>
              </Portal>
            ) : null}
          </div>
          <div className={classes.alert} ref={container} />
        </div>
      </KTCodeExample>
    </>
  );
}

const jsCode1 = `
import React from 'react';
import Portal from '@material-ui/core/Portal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
}));

export default function SimplePortal() {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  const classes = useStyles();

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      <Button onClick={handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
      <div className={classes.alert}>
        <Typography>It looks like I will render here.</Typography>
        {show ? (
          <Portal container={container.current}>
            <Typography>But I actually render here!</Typography>
          </Portal>
        ) : null}
      </div>
      <div className={classes.alert} ref={container} />
    </div>
  );
}
`;
