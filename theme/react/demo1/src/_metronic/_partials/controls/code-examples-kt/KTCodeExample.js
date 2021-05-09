/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import {KTCodeBlock} from "./KTCodeBlock";
import {Card, CardBody, CardHeader} from "../Card";
import {CodeBlockToolbar} from "../code-examples/CodeBlockToolbar";

export function KTCodeExample({
  jsCode,
  children,
  beforeCodeTitle,
  languages,
  codeBlockHeight
}) {
  const defaultLanguages = !languages
    ? [
        {
          code: jsCode,
          language: "javascript",
          shortCode: "JS"
        }
      ]
    : languages;
  const [isCodeBlockShown, setIsCodeBlockShown] = useState(false);
  const [tabId, setTabId] = useState(0);
  const [customStyle, setCustomStyle] = useState({});
  useEffect(() => {
    const styles = {};

    if (codeBlockHeight) {
      styles.height = codeBlockHeight;
      styles.overflowX = "auto";
    }

    if (defaultLanguages.length > 1) {
      styles.background = `none transparent !important`;
    }

    setCustomStyle(styles);
  }, [codeBlockHeight, defaultLanguages.length]);

  const toolbar = (
    <div className="card-toolbar">
      <div className="example-tools">
        <CodeBlockToolbar
          showViewCode={true}
          code={defaultLanguages[tabId].code}
          isCodeBlockShown={isCodeBlockShown}
          setIsCodeBlockShown={setIsCodeBlockShown}
        />
      </div>
    </div>
  );

  return (
    <Card className="example example-compact">
      <CardHeader title={beforeCodeTitle} toolbar={toolbar} />
      <CardBody>
        <>{children}</>
        <KTCodeBlock
          languages={defaultLanguages}
          tabs={{ tabId, setTabId }}
          codeShown={{ isCodeBlockShown, setIsCodeBlockShown }}
          customStyle={customStyle}
        />
      </CardBody>
    </Card>
  );
}
