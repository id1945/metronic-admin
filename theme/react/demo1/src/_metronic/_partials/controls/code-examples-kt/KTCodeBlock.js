/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
// https://github.com/conorhastings/react-syntax-highlighter#prism
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
// See https://github.com/PrismJS/prism-themes
import {coy as highlightStyle} from "react-syntax-highlighter/dist/esm/styles/prism";

export const KTCodeBlock = ({ languages, tabs, codeShown, customStyle }) => {
  const { isCodeBlockShown } = codeShown;
  const { tabId, setTabId } = tabs;
  return (
    <>
      {languages.length === 0 && <></>}
      {languages.length === 1 && (
        <div
          className={`example-code mt-5 ${clsx({
            "example-code-on": isCodeBlockShown
          })}`}
          style={{ display: isCodeBlockShown ? "block" : "none" }}
        >
          <div className={`example-highlight jsx`}>
            <SyntaxHighlighter
              language="jsx"
              style={highlightStyle}
              customStyle={customStyle}
            >
              {languages[0].code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
      {languages.length > 1 && (
        <>
          <div
            className={`example-code mt-5 ${clsx({
              "example-code-on": isCodeBlockShown
            })}`}
            style={{ display: isCodeBlockShown ? "block" : "none" }}
          >
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
                      language="jsx"
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
        </>
      )}
      
    </>
  );
};
