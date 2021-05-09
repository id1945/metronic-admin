/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import copy from "clipboard-copy";
import {Tooltip} from "@material-ui/core";
// https://github.com/conorhastings/react-syntax-highlighter#prism
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
// See https://github.com/PrismJS/prism-themes
import {coy as highlightStyle} from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeExampleSimple({ languages, children, codeBlockHeight }) {
  const [isCopySucceed, setIsCopySucceed] = useState(false);
  const [tabId, setTabId] = useState(0);

  const copyCode = () => {
    if (!languages.length) {
      return;
    }

    copy(languages[tabId].code).then(() => {
      setIsCopySucceed(true);
      setTimeout(() => {
        setIsCopySucceed(false);
      }, 2000);
    });
  };

  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    const styles = {};

    if (codeBlockHeight) {
      styles.height = codeBlockHeight;
    }

    if (languages.length > 1) {
      styles.background = `none transparent !important`;
    }

    setCustomStyle(styles);
  }, [codeBlockHeight, languages]);

  return (
    <>
      <>{children}</>

      {languages.length === 0 && <></>}
      {languages.length === 1 && (
        <div className="example-code" style={{ background: "#F3F6F9" }}>
          <Tooltip title="Copy code">
            <span
              className={`example-copy ${clsx({
                "example-copied": isCopySucceed
              })}`}
              onClick={copyCode}
            />
          </Tooltip>
          <div className={`example-highlight ${languages[0].language}`}>
            <SyntaxHighlighter
              language={languages[0].language}
              style={highlightStyle}
              customStyle={customStyle}
            >
              {languages[0].code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
      {languages.length > 1 && (
        <div className="example-code example-code-on">
          <ul
            className="example-nav nav nav-tabs nav-tabs-line nav-tabs-line-2x nav-tabs-primary"
            id="codeTab"
            role="tablist"
          >
            {languages.map((lang, index) => (
              <li className="nav-item" key={`ki${index}`}>
                <a
                  className={`nav-link ${tabId === index ? "active" : ""}`}
                  data-toggle="tab"
                  role="tab"
                  aria-selected={`${tabId === index ? "true" : "false"}`}
                  onClick={() => setTabId(index)}
                >
                  {lang.shortCode}
                </a>
              </li>
            ))}
          </ul>
          <Tooltip title="Copy code">
            <span
              className={`example-copy ${clsx({
                "example-copied": isCopySucceed
              })}`}
              onClick={copyCode}
            />
          </Tooltip>
          <div className="tab-content">
            {languages.map((lang, index) => (
              <div
                style={{ background: "#F3F6F9" }}
                className={`tab-pane  ${tabId === index ? "active" : ""}`}
                key={`divTabPane${index}`}
              >
                <div
                  className={`example-highlight language-${lang.shortCode} ${lang.shortCode}`}
                >
                  <SyntaxHighlighter
                    language={lang.language}
                    style={highlightStyle}
                    customStyle={customStyle}
                  >
                    {lang.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function CodeExampleSimplePreview({ children }) {
  return <div className="example-preview">{children}</div>;
}

export function CodeExampleSimpleDescription({ children }) {
  return <p className="example-description">{children}</p>;
}

export function CodeExampleSimpleWrapper({ title, children }) {
  return (
    <div className="card card-custom gutter-b example">
      <div className="card-header">
        <div className="card-title">
          <h3 className="card-label">{title}</h3>
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
