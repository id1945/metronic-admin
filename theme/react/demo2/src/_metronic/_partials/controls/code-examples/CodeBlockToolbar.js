import React, {useState} from "react";
import clsx from "clsx";
import copy from "clipboard-copy";
import {Tooltip} from "@material-ui/core";

export function CodeBlockToolbar({
  showViewCode = false,
  code,
  isCodeBlockShown,
  setIsCodeBlockShown
}) {
  const [isCopySucceed, setIsCopySucceed] = useState(false);
  const copyCode = () => {
    copy(code).then(() => {
      setIsCopySucceed(true);
      setTimeout(() => {
        setIsCopySucceed(false);
      }, 2000);
    });
  };

  const toggleShowCode = () => {
    setIsCodeBlockShown(!isCodeBlockShown);
  };

  return (
    <>
      {showViewCode && (
        <Tooltip title={`${isCodeBlockShown ? "" : "View code"}`}>
          <span
            className={`example-toggle ${clsx({
              "example-toggled": isCodeBlockShown
            })}`}
            onClick={toggleShowCode}
          />
        </Tooltip>
      )}
      <Tooltip title="Copy code">
        <span
          className={`example-copy ${clsx({
            "example-copied": isCopySucceed
          })}`}
          onClick={copyCode}
        />
      </Tooltip>
    </>
  );
}
