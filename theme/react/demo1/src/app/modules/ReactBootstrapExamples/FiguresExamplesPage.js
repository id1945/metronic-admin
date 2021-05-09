import React from "react";
import {Figure} from "react-bootstrap";
import {Notice, KTCodeExample} from "../../../_metronic/_partials/controls";

export default class FiguresExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning font-primary">
          <span>
            Anytime you need to display a piece of content, like an image with
            an optional caption, consider using a <code>Figure</code>.
          </span>{" "}
          <span>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="font-weight-bold"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/figures/"
            >
              demos & documentation
            </a>
          </span>
        </Notice>

        <KTCodeExample jsCode={jsCode1} beforeCodeTitle="Figure">
          <span>
            Displaying related images and text with the Figure component.
          </span>
          <div className="separator separator-dashed my-7"></div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16bc0e8c8ae%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16bc0e8c8ae%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.9296875%22%20y%3D%2294.5609375%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </KTCodeExample>
      </>
    );
  }
}

const jsCode1 = `
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
`;
