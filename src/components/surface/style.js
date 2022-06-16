import styled, { css } from "styled-components";

export const FlexSurface = styled.div`
  ${({ page }) => {
    if (page === "form")
      return css`
        max-width: 350px;
      `;
  }}
  margin: auto;
  padding: 2rem 1.5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "1%"};

  border-radius: 3px;
  background-color: ${({ theme: { colors } }) => colors.grayThree};

  h2 {
    text-align: center;
  }

  & > small {
    font-size: 12px;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.grayOne};
  }
`;
