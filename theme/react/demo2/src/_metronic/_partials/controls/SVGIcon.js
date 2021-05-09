import React from "react";
import {SVGInjector} from "@tanem/svg-injector";

export function SVGIcon({ src, className, parentElementId }) {
  const parentElement = document.getElementById(parentElementId);
  if (!parentElement) {
    return <></>;
  }

  parentElement.current.setAttribute("data-src", src);
  SVGInjector(parentElement, {
    wrapper: "span",
    beforeEach(svg) {
      const classList = className.split(" ");
      classList.forEach(cn => {
        svg.classList.add(cn);
      });
    }
  });
  return <></>;
}
