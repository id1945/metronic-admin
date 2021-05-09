/* eslint-disable no-restricted-imports */
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {
  Stepper,
  Typography,
  Step,
  StepLabel,
  Button,
  StepButton,
  StepContent,
  Paper,
  StepConnector,
  MobileStepper
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

// Example 1
const useStyles1 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps1() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent1(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

// Example 2
const useStyles2 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps2() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent2(step) {
  switch (step) {
    case 0:
      return "Step 1: Select campaign settings...";
    case 1:
      return "Step 2: What is an ad group anyways?";
    case 2:
      return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

// Example 3
const useStyles3 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps3() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
}

function getStepContent3(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Uknown stepIndex";
  }
}

// Example 4
const useStyles4 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps4() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent4(step) {
  switch (step) {
    case 0:
      return "Step 1: Select campaign settings...";
    case 1:
      return "Step 2: What is an ad group anyways?";
    case 2:
      return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

// Example 5
const useStyles5 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps5() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent5(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

// Example 6
const useStyles6 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps6() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent6(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

// Example 7
const useStyles7 = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
}));

function getSteps7() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent7(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}
// Example 9
const AutoPlaySwipeableViews9 = autoPlay(SwipeableViews);

const tutorialSteps9 = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const useStyles9 = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  }
}));

// Example 10
const useStyles10 = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

// Example 11
const useStyles11 = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

export default function SteppersExamplesPage() {
  // Example 1
  const classes1 = useStyles1();
  const [activeStep1, setActiveStep1] = React.useState(0);
  const [skipped1, setSkipped1] = React.useState(new Set());
  const steps1 = getSteps1();

  function isStepOptional1(step) {
    return step === 1;
  }

  function isStepSkipped1(step) {
    return skipped1.has(step);
  }

  function handleNext1() {
    let newSkipped = skipped1;
    if (isStepSkipped1(activeStep1)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep1);
    }

    setActiveStep1(prevActiveStep => prevActiveStep + 1);
    setSkipped1(newSkipped);
  }

  function handleBack1() {
    setActiveStep1(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip1() {
    if (!isStepOptional1(activeStep1)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep1(prevActiveStep => prevActiveStep + 1);
    setSkipped1(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep1);
      return newSkipped;
    });
  }

  function handleReset1() {
    setActiveStep1(0);
  }

  // Example 2
  const classes2 = useStyles2();
  const [activeStep2, setActiveStep2] = React.useState(0);
  const [completed2, setCompleted2] = React.useState({});
  const steps2 = getSteps2();

  function totalSteps2() {
    return steps2.length;
  }

  function completedSteps2() {
    return Object.keys(completed2).length;
  }

  function isLastStep2() {
    return activeStep2 === totalSteps2() - 1;
  }

  function allStepsCompleted2() {
    return completedSteps2() === totalSteps2();
  }

  function handleNext2() {
    const newActiveStep =
      isLastStep2() && !allStepsCompleted2()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps2.findIndex((step, i) => !(i in completed2))
        : activeStep2 + 1;
    setActiveStep2(newActiveStep);
  }

  function handleBack2() {
    setActiveStep2(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep2 = step => () => {
    setActiveStep2(step);
  };

  function handleComplete2() {
    const newCompleted2 = completed2;
    newCompleted2[activeStep2] = true;
    setCompleted2(newCompleted2);
    handleNext2();
  }

  function handleReset2() {
    setActiveStep2(0);
    setCompleted2({});
  }

  // Example 3
  const classes3 = useStyles3();
  const [activeStep3, setActiveStep3] = React.useState(0);
  const steps3 = getSteps3();

  function handleNext3() {
    setActiveStep3(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack3() {
    setActiveStep3(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset3() {
    setActiveStep3(0);
  }

  // Example 4
  const classes4 = useStyles4();
  const [activeStep4, setActiveStep4] = React.useState(0);
  const [completed4, setCompleted4] = React.useState(new Set());
  const [skipped4, setSkipped4] = React.useState(new Set());
  const steps4 = getSteps4();

  function totalSteps4() {
    return getSteps4().length;
  }

  function isStepOptional4(step) {
    return step === 1;
  }

  function handleSkip4() {
    if (!isStepOptional4(activeStep4)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep4(prevActiveStep => prevActiveStep + 1);
    setSkipped4(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep4);
      return newSkipped;
    });
  }

  function skippedSteps4() {
    return skipped4.size;
  }

  function completedSteps4() {
    return completed4.size;
  }

  function allStepsCompleted4() {
    return completedSteps4() === totalSteps4() - skippedSteps4();
  }

  function isLastStep4() {
    return activeStep4 === totalSteps4() - 1;
  }

  function handleNext4() {
    const newActiveStep =
      isLastStep4() && !allStepsCompleted4()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps4.findIndex((step, i) => !completed4.has(i))
        : activeStep4 + 1;

    setActiveStep4(newActiveStep);
  }

  function handleBack4() {
    setActiveStep4(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep4 = step => () => {
    setActiveStep4(step);
  };

  function handleComplete4() {
    const newCompleted = new Set(completed4);
    newCompleted.add(activeStep4);
    setCompleted4(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed4.size !== totalSteps4() - skippedSteps4()) {
      handleNext4();
    }
  }

  function handleReset4() {
    setActiveStep4(0);
    setCompleted4(new Set());
    setSkipped4(new Set());
  }

  function isStepSkipped4(step) {
    return skipped4.has(step);
  }

  function isStepComplete4(step) {
    return completed4.has(step);
  }

  // Example 5
  const classes5 = useStyles5();
  const [activeStep5, setActiveStep5] = React.useState(0);
  const [skipped5, setSkipped5] = React.useState(new Set());
  const steps5 = getSteps5();

  function isStepOptional5(step) {
    return step === 1;
  }

  function isStepFailed5(step) {
    return step === 1;
  }

  function isStepSkipped5(step) {
    return skipped5.has(step);
  }

  function handleNext5() {
    let newSkipped = skipped5;
    if (isStepSkipped5(activeStep5)) {
      newSkipped = new Set(skipped5.values());
      newSkipped.delete(activeStep5);
    }

    setActiveStep5(prevActiveStep => prevActiveStep + 1);
    setSkipped5(newSkipped);
  }

  function handleBack5() {
    setActiveStep5(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip5() {
    if (!isStepOptional5(activeStep5)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setSkipped5(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep5);
      return newSkipped;
    });
    setActiveStep5(prevActiveStep => prevActiveStep + 1);
  }

  function handleReset5() {
    setActiveStep5(0);
  }

  // Example 6
  const classes6 = useStyles6();
  const [activeStep6, setActiveStep6] = React.useState(0);
  const steps6 = getSteps6();

  function handleNext6() {
    setActiveStep6(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack6() {
    setActiveStep6(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset6() {
    setActiveStep6(0);
  }

  // Example 7
  const classes7 = useStyles7();
  const [activeStep7, setActiveStep7] = React.useState(0);
  const steps7 = getSteps7();

  function handleNext7() {
    setActiveStep7(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack7() {
    setActiveStep7(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset7() {
    setActiveStep7(0);
  }

  const connector7 = (
    <StepConnector
      classes={{
        active: classes7.connectorActive,
        completed: classes7.connectorCompleted,
        disabled: classes7.connectorDisabled,
        line: classes7.connectorLine
      }}
    />
  );

  // Example 9
  const classes9 = useStyles9();
  const theme9 = useTheme();
  const [activeStep9, setActiveStep9] = React.useState(0);
  const maxSteps9 = tutorialSteps9.length;

  function handleNext9() {
    setActiveStep9(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack9() {
    setActiveStep9(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange9(step) {
    setActiveStep9(step);
  }

  // Example 10
  const classes10 = useStyles10();
  const theme10 = useTheme();
  const [activeStep10, setActiveStep10] = React.useState(0);

  function handleNext10() {
    setActiveStep10(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack10() {
    setActiveStep10(prevActiveStep => prevActiveStep - 1);
  }

  // Example 11
  const classes11 = useStyles11();
  const theme11 = useTheme();
  const [activeStep11, setActiveStep11] = React.useState(0);

  function handleNext11() {
    setActiveStep11(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack11() {
    setActiveStep11(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <>
      <Notice icon="flaticon-warning font-primary">
        <span>
          Steppers convey progress through numbered steps. It provides a
          wizard-like workflow.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/steppers/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode1}
            beforeCodeTitle="Horizontal Linear"
            codeBlockHeight="400px"
          >
            <span>
              The <code>Stepper</code> can be controlled by passing the current
              step index (zero-based) as the <code>activeStep</code> property.
              <code>Stepper</code> orientation is set using the{" "}
              <code>orientation</code> property.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes1.root}>
              <Stepper activeStep={activeStep1}>
                {steps1.map((label, index) => {
                  const stepProps1 = {};
                  const labelProps1 = {};
                  if (isStepOptional1(index)) {
                    labelProps1.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped1(index)) {
                    stepProps1.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps1}>
                      <StepLabel {...labelProps1}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep1 === steps1.length ? (
                  <div>
                    <Typography className={classes1.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset1} className={classes1.button}>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes1.instructions}>
                      {getStepContent1(activeStep1)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep1 === 0}
                        onClick={handleBack1}
                        className={classes1.button}
                      >
                        Back
                      </Button>
                      {isStepOptional1(activeStep1) && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSkip1}
                          className={classes1.button}
                        >
                          Skip
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext1}
                        className={classes1.button}
                      >
                        {activeStep1 === steps1.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode3}
            beforeCodeTitle="Horizontal Linear - Alternative Label"
            codeBlockHeight="400px"
          >
            <span className="section-sub">
              Labels can be placed below the step icon by setting the{" "}
              <code>alternativeLabel</code> property on the <code>Stepper</code>{" "}
              component.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes3.root}>
              <Stepper activeStep={activeStep3} alternativeLabel>
                {steps3.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep3 === steps3.length ? (
                  <div>
                    <Typography className={classes3.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset3}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes3.instructions}>
                      {getStepContent3(activeStep3)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep3 === 0}
                        onClick={handleBack3}
                        className={classes3.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext3}
                      >
                        {activeStep3 === steps3.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode5}
            beforeCodeTitle="Horizontal Non Linear - Error Step"
            codeBlockHeight="400px"
          >
            <div className={classes5.root}>
              <Stepper activeStep={activeStep5}>
                {steps5.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional5(index)) {
                    labelProps.optional = (
                      <Typography variant="caption" color="error">
                        Alert message
                      </Typography>
                    );
                  }
                  if (isStepFailed5(index)) {
                    labelProps.error = true;
                  }
                  if (isStepSkipped5(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep5 === steps5.length ? (
                  <div>
                    <Typography className={classes5.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset5} className={classes5.button}>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes5.instructions}>
                      {getStepContent5(activeStep5)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep5 === 0}
                        onClick={handleBack5}
                        className={classes5.button}
                      >
                        Back
                      </Button>
                      {isStepOptional5(activeStep5) && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSkip5}
                          className={classes5.button}
                        >
                          Skip
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext5}
                        className={classes5.button}
                      >
                        {activeStep5 === steps5.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode7}
            beforeCodeTitle="Customized Stepper"
            codeBlockHeight="400px"
          >
            <span>Here is an example of customizing the component.</span>
            <div className={classes7.root}>
              <Stepper activeStep={activeStep7} connector={connector7}>
                {steps7.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Stepper
                alternativeLabel
                activeStep={activeStep7}
                connector={connector7}
              >
                {steps7.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep7 === steps7.length ? (
                  <div>
                    <Typography className={classes7.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset7} className={classes7.button}>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes7.instructions}>
                      {getStepContent7(activeStep7)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep7 === 0}
                        onClick={handleBack7}
                        className={classes7.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext7}
                        className={classes7.button}
                      >
                        {activeStep7 === steps7.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode10}
            beforeCodeTitle="Mobile Stepper - Dots"
            codeBlockHeight="400px"
          >
            <span>Use dots when the number of steps isn’t large.</span>
            <div className="separator separator-dashed my-7"></div>
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={activeStep10}
              className={classes10.root}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext10}
                  disabled={activeStep10 === 5}
                >
                  Next
                  {theme10.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack10}
                  disabled={activeStep10 === 0}
                >
                  {theme10.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode11}
            beforeCodeTitle="Mobile Stepper - Progress"
            codeBlockHeight="400px"
          >
            <span>
              Use a progress bar when there are many steps, or if there are
              steps that need to be inserted during the process (based on
              responses to earlier steps).
            </span>
            <div className="separator separator-dashed my-7"></div>
            <MobileStepper
              variant="progress"
              steps={6}
              position="static"
              activeStep={activeStep11}
              className={classes11.root}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext11}
                  disabled={activeStep11 === 5}
                >
                  Next
                  {theme11.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack11}
                  disabled={activeStep11 === 0}
                >
                  {theme11.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample
            jsCode={jsCode2}
            beforeCodeTitle="Horizontal Non-linear"
            codeBlockHeight="400px"
          >
            <span>
              Non-linear steppers allow users to enter a multi-step flow at any
              point.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes2.root}>
              <Stepper nonLinear activeStep={activeStep2}>
                {steps2.map((label, index) => (
                  <Step key={label}>
                    <StepButton
                      onClick={handleStep2(index)}
                      completed={completed2[index]}
                    >
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted2() ? (
                  <div>
                    <Typography className={classes2.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset2}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes2.instructions}>
                      {getStepContent2(activeStep2)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep2 === 0}
                        onClick={handleBack2}
                        className={classes2.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext2}
                        className={classes2.button}
                      >
                        Next
                      </Button>
                      {activeStep2 !== steps2.length &&
                        (completed2[activeStep2] ? (
                          <Typography
                            variant="caption"
                            className={classes2.completed}
                          >
                            Step {activeStep2 + 1} already completed
                          </Typography>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleComplete2}
                          >
                            {completedSteps2() === totalSteps2() - 1
                              ? "Finish"
                              : "Complete Step"}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode4}
            beforeCodeTitle="Horizontal Non Linear - Alternative Label"
            codeBlockHeight="400px"
          >
            <div className={classes4.root}>
              <Stepper alternativeLabel nonLinear activeStep={activeStep4}>
                {steps4.map((label, index) => {
                  const stepProps = {};
                  const buttonProps = {};
                  if (isStepOptional4(index)) {
                    buttonProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped4(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepButton
                        onClick={handleStep4(index)}
                        completed={isStepComplete4(index)}
                        {...buttonProps}
                      >
                        {label}
                      </StepButton>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {allStepsCompleted4() ? (
                  <div>
                    <Typography className={classes4.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset4}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes4.instructions}>
                      {getStepContent4(activeStep4)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep4 === 0}
                        onClick={handleBack4}
                        className={classes4.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext4}
                        className={classes4.button}
                      >
                        Next
                      </Button>
                      {isStepOptional4(activeStep4) &&
                        !completed4.has(activeStep4) && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSkip4}
                            className={classes4.button}
                          >
                            Skip
                          </Button>
                        )}

                      {activeStep4 !== steps4.length &&
                        (completed4.has(activeStep4) ? (
                          <Typography
                            variant="caption"
                            className={classes4.completed}
                          >
                            Step {activeStep4 + 1} already completed
                          </Typography>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleComplete4}
                          >
                            {completedSteps4() === totalSteps4() - 1
                              ? "Finish"
                              : "Complete Step"}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode6}
            beforeCodeTitle="Vertical Stepper"
            codeBlockHeight="400px"
          >
            <div className={classes6.root}>
              <Stepper activeStep={activeStep6} orientation="vertical">
                {steps6.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent6(index)}</Typography>
                      <div className={classes6.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep6 === 0}
                            onClick={handleBack6}
                            className={classes6.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext6}
                            className={classes6.button}
                          >
                            {activeStep6 === steps6.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep6 === steps6.length && (
                <Paper square elevation={0} className={classes6.resetContainer}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset6} className={classes6.button}>
                    Reset
                  </Button>
                </Paper>
              )}
            </div>
          </KTCodeExample>

          <KTCodeExample
            jsCode={jsCode9}
            beforeCodeTitle="Mobile Stepper - Text with Carousel effect"
            codeBlockHeight="400px"
          >
            <span>
              This demo is very similar to the previous, the difference is the
              usage of react-swipeable-views to make the transition of steps.
            </span>
            <div className="separator separator-dashed my-7"></div>
            <div className={classes9.root}>
              <Paper square elevation={0} className={classes9.header}>
                <Typography>{tutorialSteps9[activeStep9].label}</Typography>
              </Paper>
              <AutoPlaySwipeableViews9
                axis={theme9.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep9}
                onChangeIndex={handleStepChange9}
                enableMouseEvents
              >
                {tutorialSteps9.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep9 - index) <= 2 ? (
                      <img
                        className={classes9.img}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews9>
              <MobileStepper
                steps={maxSteps9}
                position="static"
                variant="text"
                activeStep={activeStep9}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext9}
                    disabled={activeStep9 === maxSteps9 - 1}
                  >
                    Next
                    {theme9.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack9}
                    disabled={activeStep9 === 0}
                  >
                    {theme9.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;
const jsCode2 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  function totalSteps() {
    return steps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted({});
  }

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;
const jsCode3 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Uknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;
const jsCode4 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function totalSteps() {
    return getSteps().length;
  }

  function isStepOptional(step) {
    return step === 1;
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * \`if (!this.allStepsComplete())\` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;
const jsCode5 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearStepperWithError() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 1;
  }

  function isStepFailed(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(skipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
          }
          if (isStepFailed(index)) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;
const jsCode6 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
`;
const jsCode7 = `
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  connectorActive: {
    '& $connectorLine': {
      borderColor: theme.palette.secondary.main,
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: theme.palette.grey[100],
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  const connector = (
    <StepConnector
      classes={{
        active: classes.connectorActive,
        completed: classes.connectorCompleted,
        disabled: classes.connectorDisabled,
        line: classes.connectorLine,
      }}
    />
  );

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} connector={connector}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={activeStep} connector={connector}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;

const jsCode9 = `
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
`;
const jsCode10 = `
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function DotsMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
`;
const jsCode11 = `
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
`;
