import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    // direction: "rtl",
    typography: {
      fontFamily: ["Poppins"].join(",")
    },

    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#17c191",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        main: "#3783e7",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      error: {
        // light: will be calculated from palette.primary.main,
        main: "#f018a6",
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      }
    },

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: false // No more ripple, on the whole application 💣!
      },

      // Set default elevation to 1 for popovers.
      MuiPopover: {
        elevation: 1
      }
    }
  }
);

export function MaterialThemeProvider(props) {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
