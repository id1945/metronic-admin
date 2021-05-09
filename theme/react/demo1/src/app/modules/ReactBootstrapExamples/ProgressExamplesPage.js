import React from "react";
import {ProgressBar} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

const now = 60;
const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
const progressInstance1 = <ProgressBar now={now} label={`${now}%`} srOnly />;

export default class ProgressExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Provide up-to-date feedback on the progress of a workflow or action
            with simple yet flexible progress bars.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/progress/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Basic Example">
              <span>Default progress bar.</span>
              <div className="separator separator-dashed my-7"></div>
              <ProgressBar now={60} />
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode3}
              beforeCodeTitle="Screenreader only label"
            >
              <span>
                Add a <code>srOnly</code> prop to hide the label visually.
              </span>
              <div className="separator separator-dashed my-7"></div>
              {progressInstance1}
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode5} beforeCodeTitle="Striped">
              <span>
                Uses a gradient to create a striped effect. Not available in
                IE8.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <ProgressBar
                  striped
                  variant="success"
                  now={40}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="info"
                  now={20}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="warning"
                  now={60}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="danger"
                  now={80}
                  className="gutter-b"
                />
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode7} beforeCodeTitle="Stacked">
              <span>
                Nest <code>&lt;ProgressBar /&gt;</code>s to stack them.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <ProgressBar
                  striped
                  variant="success"
                  now={40}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="info"
                  now={20}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="warning"
                  now={60}
                  className="gutter-b"
                />
                <ProgressBar
                  striped
                  variant="danger"
                  now={80}
                  className="gutter-b"
                />
              </div>
            </KTCodeExample>
          </div>
          <div className="col-md-6">
            <KTCodeExample jsCode={jsCode2} beforeCodeTitle="With label">
              <span>
                Add a <code>label</code> prop to show a visible percentage. For
                low percentages, consider adding a min-width to ensure the
                label's text is fully visible.
              </span>
              <div className="separator separator-dashed my-7"></div>
              {progressInstance}
            </KTCodeExample>

            <KTCodeExample
              jsCode={jsCode4}
              beforeCodeTitle="Contextual alternatives"
            >
              <span>
                Progress bars use some of the same button and alert classes for
                consistent styles.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <div>
                <ProgressBar variant="success" now={40} className="gutter-b" />
                <ProgressBar variant="info" now={20} className="gutter-b" />
                <ProgressBar variant="warning" now={60} className="gutter-b" />
                <ProgressBar variant="danger" now={80} className="gutter-b" />
              </div>
            </KTCodeExample>

            <KTCodeExample jsCode={jsCode6} beforeCodeTitle="Animated">
              <span>
                Add <code>animated</code> prop to animate the stripes right to
                left. Not available in IE9 and below.
              </span>
              <div className="separator separator-dashed my-7"></div>
              <ProgressBar animated now={45} />
            </KTCodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<ProgressBar now={60} />
`;
const jsCode2 = `
const now = 60;

const progressInstance = <ProgressBar now={now} label={\`\${now}%\`} />;

render(progressInstance);
`;
const jsCode3 = `
const now = 60;

const progressInstance = <ProgressBar now={now} label={\`\${now}%\`} srOnly />;

render(progressInstance);
`;
const jsCode4 = `
<div>
  <ProgressBar variant="success" now={40} />
  <ProgressBar variant="info" now={20} />
  <ProgressBar variant="warning" now={60} />
  <ProgressBar variant="danger" now={80} />
</div>
`;
const jsCode5 = `
<div>
  <ProgressBar striped variant="success" now={40} />
  <ProgressBar striped variant="info" now={20} />
  <ProgressBar striped variant="warning" now={60} />
  <ProgressBar striped variant="danger" now={80} />
</div>
`;
const jsCode6 = `
<ProgressBar animated now={45} />
`;
const jsCode7 = `
<ProgressBar>
  <ProgressBar striped variant="success" now={35} key={1} />
  <ProgressBar variant="warning" now={20} key={2} />
  <ProgressBar striped variant="danger" now={10} key={3} />
</ProgressBar>
`;
