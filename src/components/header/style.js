import styled, { css } from "styled-components";

export const Header = styled.header`
  .container {
    min-height: unset;

    display: flex;
    align-items: center;
  }

  div {
    ${({ page }) => {
      if (page === "form")
        return css`
          max-width: 350px;
          margin: 0 auto;
          padding: 0.8rem;

          display: flex;
          align-items: center;
        `;
    }}

    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
  }
`;

export const UserHeader = styled.div`
  padding: 1.2rem 0;

  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: ${({ theme: { colors } }) => colors.grayThree};

  .container {
    min-height: unset;

    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.8rem;

    p {
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors.grayOne};
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px 4px 0 0;
  background-color: ${({ theme: { colors } }) => colors.grayTwo};

  button {
    font-size: 1.3rem;
    color: ${({ theme: { colors } }) => colors.grayOne};

    background-color: transparent;

    :hover {
      color: ${({ theme: { colors } }) => colors.grayFour};
    }

    svg {
      transform: translateY(10%);
    }
  }
`;
