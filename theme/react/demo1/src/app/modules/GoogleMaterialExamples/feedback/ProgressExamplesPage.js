/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import {makeStyles, withStyles, lighten} from "@material-ui/core/styles";
import {
  CircularProgress,
  Fab,
  Button,
  LinearProgress,
  Fade,
  Typography
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import {green} from "@material-ui/core/colors";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

// Example 5
const useStyles5 = makeStyles({
  root: {
    flexGrow: 1
  }
});

// Example 6
const useStyles6 = makeStyles({
  root: {
    flexGrow: 1
  }
});

// Example 7
const useStyles7 = makeStyles({
  root: {
    flexGrow: 1
  }
});

// Example 8
const useStyles8 = makeStyles({
  root: {
    flexGrow: 1
  }
});

// Example 9
const ColorCircularProgress9 = withStyles({
  root: {
    color: "#00695c"
  }
})(CircularProgress);

const ColorLinearProgress9 = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  barColorPrimary: {
    backgroundColor: "#00695c"
  }
})(LinearProgress);

const BorderLinearProgress9 = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook9 = makeStyles({
  root: {
    position: "relative"
  },
  top: {
    color: "#eef3fd"
  },
  bottom: {
    color: "#6798e5",
    animationDuration: "550ms",
    position: "absolute",
    left: 0
  }
});

function FacebookProgress9(props) {
  const classes = useStylesFacebook9();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={24}
        thickness={4}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles9 = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

// Example 10
const useStyles10 = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(2)
  },
  placeholder: {
    height: 40
  }
}));

export default function ProgressExamplesPage() {
  // Example 1
  const classes1 = useStyles1();

  // Example 2
  const classes2 = useStyles2();
  const [loading2, setLoading2] = React.useState(false);
  const [success2, setSuccess2] = React.useState(false);
  const timer2 = React.useRef();

  const buttonClassname2 = clsx({
    [classes2.buttonSuccess]: success2
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer2.current);
    };
  }, []);

  function handleButtonClick2() {
    if (!loading2) {
      setSuccess2(false);
      setLoading2(true);
      timer2.current = setTimeout(() => {
        setSuccess2(true);
        setLoading2(false);
      }, 2000);
    }
  }

  // Example 3
  const classes3 = useStyles3();
  const [progress3, setProgress3] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress3(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer3 = setInterval(tick, 20);
    return () => {
      clearInterval(timer3);
    };
  }, []);

  // Example 4
  const classes4 = useStyles4();
  const [completed4, setCompleted4] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted4(prevCompleted =>
        prevCompleted >= 100 ? 0 : prevCompleted + 10
      );
    }

    const timer4 = setInterval(progress, 1000);
    return () => {
      clearInterval(timer4);
    };
  }, []);

  // Example 5
  const classes5 = useStyles5();

  // Example 6
  const classes6 = useStyles6();
  const [completed6, setCompleted6] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted6(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer6 = setInterval(progress, 500);
    return () => {
      clearInterval(timer6);
    };
  }, []);

  // Example 7
  const classes7 = useStyles7();
  const [completed7, setCompleted7] = React.useState(0);
  const [buffer7, setBuffer7] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed7 > 100) {
        setCompleted7(0);
        setBuffer7(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted7(completed7 + diff);
        setBuffer7(completed7 + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer7 = setInterval(tick, 500);

    return () => {
      clearInterval(timer7);
    };
  }, []);

  // Example 8
  const classes8 = useStyles8();

  // Example 9
  const classes9 = useStyles9();

  // Example 10
  const classes10 = useStyles10();
  const [loading10, setLoading10] = React.useState(false);
  const [query10, setQuery10] = React.useState("idle");
  const timerRef10 = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef10.current);
    },
    []
  );

  function handleClickLoading10() {
    setLoading10(prevLoading => !prevLoading);
  }

  function handleClickQuery10() {
    clearTimeout(timerRef10.current);

    if (query10 !== "idle") {
      setQuery10("idle");
      return;
    }

    setQuery10("progress");
    timerRef10.current = setTimeout(() => {
      setQuery10("success");
    }, 2000);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Progress indicators commonly known as spinners, express an unspecified
          wait time or display the length of a process. The animation works with
          CSS, not JavaScript
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/progress/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <Notice className="notice-paragraph">Circular</Notice>
      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Circular Indeterminate"
          >
            <div>
              <CircularProgress className={classes1.progress} />
              <CircularProgress
                className={classes1.progress}
                color="secondary"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Circular Determinate"
          >
            <div>
              <CircularProgress
                className={classes3.progress}
                variant="determinate"
                value={progress3}
              />
              <CircularProgress
                className={classes3.progress}
                variant="determinate"
                value={progress3}
                color="secondary"
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Linear Indeterminate"
          >
            <div className={classes5.root}>
              <LinearProgress />
              <br />
              <LinearProgress color="secondary" />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Linear Buffer">
            <div className={classes7.root}>
              <LinearProgress
                variant="buffer"
                value={completed7}
                valueBuffer={buffer7}
              />
              <br />
              <LinearProgress
                color="secondary"
                variant="buffer"
                value={completed7}
                valueBuffer={buffer7}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode9}
            beforeCodeTitle="Customized progress bars"
          >
            <span>Here are some examples of customizing the component.</span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes9.root}>
              <ColorCircularProgress9 size={30} thickness={5} />
              <ColorLinearProgress9 className={classes9.margin} />
              <BorderLinearProgress9
                className={classes9.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
              <FacebookProgress9 />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode11} beforeCodeTitle="Limitations">
            <span className="pb-3">
              Under heavy load, you might lose the stroke dash animation or see
              random CircularProgress ring widths. You should run processor
              intensive operations in a web worker or by batch in order not to
              block the main rendering thread.
            </span>
            <div>
              When it's not possible, you can leverage the{" "}
              <code>disableShrink</code> property to mitigate the issue.
            </div>
            <div className="separator separator-dashed my-7"></div>

            <CircularProgress disableShrink />
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Interactive Integration"
          >
            <div className={classes2.root}>
              <div className={classes2.wrapper}>
                <Fab
                  aria-label="Save"
                  color="primary"
                  className={buttonClassname2}
                  onClick={handleButtonClick2}
                >
                  {success2 ? <CheckIcon /> : <SaveIcon />}
                </Fab>
                {loading2 && (
                  <CircularProgress
                    size={68}
                    className={classes2.fabProgress}
                  />
                )}
              </div>
              <div className={classes2.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={buttonClassname2}
                  disabled={loading2}
                  onClick={handleButtonClick2}
                >
                  Accept terms
                </Button>
                {loading2 && (
                  <CircularProgress
                    size={24}
                    className={classes2.buttonProgress}
                  />
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode4} beforeCodeTitle="Circular Static">
            <div>
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={5}
              />
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={25}
              />
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={50}
              />
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={75}
              />
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={100}
              />
              <CircularProgress
                className={classes4.progress}
                variant="static"
                value={completed4}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Linear Determinate">
            <div className={classes6.root}>
              <LinearProgress variant="determinate" value={completed6} />
              <br />
              <LinearProgress
                color="secondary"
                variant="determinate"
                value={completed6}
              />
            </div>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode8} beforeCodeTitle="Linear Query">
            <div className={classes8.root}>
              <LinearProgress variant="query" />
              <br />
              <LinearProgress color="secondary" variant="query" />
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode10}
            beforeCodeTitle="Delaying appearance"
          >
            <span>
              There are 3 important limits to know around response time. The
              ripple effect of the <code>ButtonBase</code> component ensures
              that the user feels that the system is reacting instantaneously.
              Normally, no special feedback is necessary during delays of more
              than 0.1 but less than 1.0 second. After 1.0 second, you can
              display a loader to keep user's flow of thought uninterrupted.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes10.root}>
              <div className={classes10.placeholder}>
                <Fade
                  in={loading10}
                  style={{
                    transitionDelay: loading10 ? "800ms" : "0ms"
                  }}
                  unmountOnExit
                >
                  <CircularProgress />
                </Fade>
              </div>
              <Button
                onClick={handleClickLoading10}
                className={classes10.button}
              >
                {loading10 ? "Stop loading" : "Loading"}
              </Button>
              <div className={classes10.placeholder}>
                {query10 === "success" ? (
                  <Typography>Success!</Typography>
                ) : (
                  <Fade
                    in={query10 === "progress"}
                    style={{
                      transitionDelay: query10 === "progress" ? "800ms" : "0ms"
                    }}
                    unmountOnExit
                  >
                    <CircularProgress />
                  </Fade>
                )}
              </div>
              <Button onClick={handleClickQuery10} className={classes10.button}>
                {query10 !== "idle" ? "Reset" : "Simulate a load"}
              </Button>
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
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="Save"
          color="primary"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress className={classes.progress} variant="determinate" value={progress} />
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function CircularStatic() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress className={classes.progress} variant="static" value={5} />
      <CircularProgress className={classes.progress} variant="static" value={25} />
      <CircularProgress className={classes.progress} variant="static" value={50} />
      <CircularProgress className={classes.progress} variant="static" value={75} />
      <CircularProgress className={classes.progress} variant="static" value={100} />
      <CircularProgress className={classes.progress} variant="static" value={completed} />
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearDeterminate() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
      <br />
      <LinearProgress color="secondary" variant="determinate" value={completed} />
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearBuffer() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} />
      <br />
      <LinearProgress color="secondary" variant="buffer" value={completed} valueBuffer={buffer} />
    </div>
  );
}
`;
const jsCode8 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearQuery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
      <br />
      <LinearProgress color="secondary" variant="query" />
    </div>
  );
}
`;
const jsCode9 = `
import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorCircularProgress = withStyles({
  root: {
    color: '#00695c',
  },
})(CircularProgress);

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  top: {
    color: '#eef3fd',
  },
  bottom: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
});

function FacebookProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={24}
        thickness={4}
        {...props}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColorCircularProgress size={30} thickness={5} />
      <ColorLinearProgress className={classes.margin} />
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={50}
      />
      <FacebookProgress />
    </div>
  );
}
`;
const jsCode10 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
}));

export default function DelayingAppearance() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  function handleClickLoading() {
    setLoading(prevLoading => !prevLoading);
  }

  function handleClickQuery() {
    clearTimeout(timerRef.current);

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(() => {
      setQuery('success');
    }, 2000);
  }

  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
      <Button onClick={handleClickLoading} className={classes.button}>
        {loading ? 'Stop loading' : 'Loading'}
      </Button>
      <div className={classes.placeholder}>
        {query === 'success' ? (
          <Typography>Success!</Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </div>
      <Button onClick={handleClickQuery} className={classes.button}>
        {query !== 'idle' ? 'Reset' : 'Simulate a load'}
      </Button>
    </div>
  );
}
`;
const jsCode11 = `
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularUnderLoad() {
  return <CircularProgress disableShrink />;
}
`;
