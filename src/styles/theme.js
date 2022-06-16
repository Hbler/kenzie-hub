import { useEffect } from "react";

import WebFont from "webfontloader";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ff577f",
    primaryFocus: "#ff427f",
    primaryNegative: "#59323f",
    primaryNegativeFocus: "#40242D",
    grayZero: "#f8f9fa",
    grayOne: "#868e96",
    grayTwo: "#343b41",
    grayThree: "#212529",
    grayFour: "#121214",
    success: "#3fe864",
    error: "#e83f5b",
    edit: "#566CE8",
  },
};

export const Theme = ({ children }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:300,400,600,700,900"],
      },
    });
  }, []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
