import React from "react";
import {Box} from "@material-ui/core";
import {Notice, KTCodeExample} from "../../../../_metronic/_partials/controls";

const jsCode = `
<Box component="span" m={5}>
  <Button />
</Box>
`;
const jsCode2 = `
<Box color="text.primary" clone>
  <Button />
</Box>
`;
const jsCode3 = `
<Box color="text.primary">
  {props => <Button {...props} />}
</Box>
`;

export default function BoxExamplesPage() {
  return (
    <>
      <Notice icon="flaticon-warning text-primary">
        <span>
          The <code>Box</code> component serves as a wrapper component for most
          of the CSS utility needs.
        </span>{" "}
        <span>
          For more info please check the components's official{" "}
          <a
            target="_blank"
            className="font-weight-bold"
            rel="noopener noreferrer"
            href="https://material-ui.com/components/box/"
          >
            demos & documentation
          </a>
        </span>
      </Notice>

      <div className="row">
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode} beforeCodeTitle="Common example">
            <span>
              The Box component wraps your component. It creates a new DOM
              element, a <code>&lt;div&gt;</code> by default that can be changed
              with the <code>component</code> property. Let's say you want to
              use a <code>&lt;span&gt;</code> with <code>margin</code> instead
              of <code>&lt;div&gt;</code>:
            </span>
            <div className="separator separator-dashed my-7 gutter-t gutter-b"></div>
            <Box component="span" m={5}>
              <button type="button" className="btn btn-primary">
                Button with margin 5
              </button>
            </Box>
          </KTCodeExample>

          <KTCodeExample jsCode={jsCode3} beforeCodeTitle="Props example">
            <span className="pb-3">
              2. <code>Use render props</code>
            </span>
            <div>
              The Box children accepts a render props function. You can pull out
              the <code>className</code>.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <Box color="text.primary">
              {props => (
                <button type="button" className="btn" {...props}>
                  PROPS{" "}
                </button>
              )}
            </Box>
          </KTCodeExample>
        </div>
        <div className="col-md-6">
          <KTCodeExample jsCode={jsCode2} beforeCodeTitle="Clone example">
            <span className="pb-3">
              However, sometimes you have to target the underlying DOM element.
              For instance, you want to change the text color of the button. The
              Button component defines its own color. CSS inheritance doesn't
              help. To workaround the problem, you have two options:
            </span>
            <div className="pb-3">
              1. <code>Use React.cloneElement()</code>
            </div>
            <div className="pb-3">
              The Box component has a clone property to enable the usage of the
              clone element method of React.
            </div>
            <div className="separator separator-dashed my-7"></div>
            <Box color="text.primary">
              <button type="button" className="btn">
                Primary text
              </button>
            </Box>
          </KTCodeExample>
        </div>
      </div>
    </>
  );
}
