import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  height: ${(props) => (props.btnSize === "sm" ? "32px" : "48px")};
  padding: ${(props) => (props.btnSize === "sm" ? "0 1rem" : "0 1.3rem")};

  font-size: ${(props) => (props.btnSize === "sm" ? "12px" : "16px")};
  font-weight: 600;

  border-radius: 4px;

  ${(props) => {
    switch (props.btnColor) {
      case "gray":
        return css`
          color: ${({ theme: { colors } }) => colors.grayZero};
          background-color: ${({ theme: { colors } }) => colors.grayThree};
          &:hover {
            background-color: ${({ theme: { colors } }) => colors.grayTwo};
          }
        `;
      case "light-gray":
        return css`
          color: ${({ theme: { colors } }) => colors.grayZero};
          background-color: ${({ theme: { colors } }) => colors.grayOne};
          :hover {
            background-color: ${({ theme: { colors } }) => colors.grayTwo};
          }
        `;
      case "negative":
        return css`
          color: #fff;
          background-color: ${({ theme: { colors } }) =>
            colors.primaryNegative};
          &:hover {
            background-color: ${({ theme: { colors } }) =>
              colors.primaryNegativeFocus};
          }
        `;
      default:
        return css`
          color: #fff;
          background-color: ${({ theme: { colors } }) => colors.primary};
          &:hover {
            background-color: ${({ theme: { colors } }) => colors.primaryFocus};
          }
        `;
    }
  }}

  :disabled {
    cursor: not-allowed;
  }
`;
