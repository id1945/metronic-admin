import React, { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import {isFragment} from "react-is";

export const CardHeaderIcon = forwardRef(({ className }, ref) => (
  <span ref={ref} className={clsx("card-head-icon", className)} />
));

export const CardHeaderTitle = forwardRef(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3 {...props} ref={ref} className={clsx("card-label", className)} />
));

export const CardHeaderToolbar = forwardRef(
  ({ children, className, ...props }, ref) => (
    <div {...props} ref={ref} className={clsx("card-toolbar", className)}>
      {children}
    </div>
  )
);

export const CardHeader = forwardRef(
  (
    {
      children,
      icon,
      title,
      toolbar,
      className,
      sticky = false,
      labelRef,
      ...props
    },
    ref
  ) => {
    const [top, setTop] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
      handleResize();

      function handleResize() {
        setWindowHeight(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    useEffect(() => {
      // Skip if sticky is disabled or on initial render when we don't know about window height.
      if (!sticky || windowHeight === 0) {
        return;
      }

      const headerElement = document.querySelector(".header");
      const subheaderElement = document.querySelector(".subheader");
      const headerMobileElement = document.querySelector(".header-mobile");

      let nextMarginTop = 0;

      // mobile header
      if (window.getComputedStyle(headerElement).height === "0px") {
        nextMarginTop = headerMobileElement.offsetHeight;
      } else {
        // desktop header
        if (document.body.classList.contains("header-minimize-topbar")) {
          // hardcoded minimized header height
          nextMarginTop = 60;
        } else {
          // normal fixed header
          if (document.body.classList.contains("header-fixed")) {
            nextMarginTop += headerElement.offsetHeight;
          }

          if (document.body.classList.contains("subheader-fixed")) {
            nextMarginTop += subheaderElement.offsetHeight;
          }
        }
      }

      setTop(nextMarginTop);
    }, [sticky, windowHeight]);

    return (
      <div
        ref={ref}
        className="card-header"
        style={
          !sticky
            ? undefined
            : { top, position: "sticky", backgroundColor: "#fff" }
        }
      >
        {title != null && (
          <div ref={labelRef} className={clsx("card-title", className)}>
            {icon}

            {/* Wrap string and fragments in CardHeaderTitle */
            typeof title === "string" || isFragment(title) ? (
              <CardHeaderTitle>{title}</CardHeaderTitle>
            ) : (
              title
            )}
          </div>
        )}

        {toolbar}
        {children}
      </div>
    );
  }
);

export const CardBody = forwardRef(
  ({ fit, fluid, className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={clsx(
        "card-body",
        {
          "card-body-fit": fit,
          "card-body-fluid": fluid
        },
        className
      )}
    />
  )
);

export const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className={clsx("card-footer", className)} />
));

export const Card = forwardRef(({ fluidHeight, className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={clsx(
      "card card-custom gutter-b",
      { "card-height-fluid": fluidHeight },
      className
    )}
  />
));

// Set display names for debugging.
if (process.env.NODE_ENV !== "production") {
  Card.displayName = "Card";

  CardHeader.displayName = "CardHeader";
  CardHeaderIcon.displayName = "CardHeaderIcon";
  CardHeaderTitle.displayName = "CardHeaderTitle";
  CardHeaderToolbar.displayName = "CardHeaderToolbar";

  CardBody.displayName = "CardBody";
  CardFooter.displayName = "CardFooter";
}
