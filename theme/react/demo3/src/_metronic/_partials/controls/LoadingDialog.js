import React, {useEffect, useState} from "react";
import {Portal} from "react-portal";

const animationStartClass = "dialog-shown";
const animationEndClass = "dialog-hidden";
const initCssClasses = [
  "dialog",
  "dialog-default",
  "dialog-loader",
  "dialog-top-center"
];

export function LoadingDialog({ isLoading, text }) {
  const [cssClasses, setCssClasses] = useState(initCssClasses);

  useEffect(() => {
    // for animation start should toggle 'dialog-hidden' css class
    setCssClasses(initCssClasses);
    const timeoutId = setTimeout(() => {
      const cssClassForAdding = isLoading
        ? animationStartClass
        : animationEndClass;
      setCssClasses([...initCssClasses, cssClassForAdding]);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return (
    <Portal node={document && document.getElementById("layout-portal")}>
      <div className={cssClasses.join(" ")}>{text}</div>
    </Portal>
  );
}
