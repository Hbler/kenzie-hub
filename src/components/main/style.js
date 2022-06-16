import styled from "styled-components";

export const Main = styled.main`
  .title {
    margin: 1.5rem 0;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    button {
      height: fit-content;
      padding: 0.5rem 0.7rem;

      font-size: 1rem;

      svg {
        transform: translateY(15%);
      }
    }

    div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 20%;
        padding: 0.5rem 0;

        text-align: center;
        font-weight: 600;
        color: ${({ theme: { colors } }) => colors.grayZero};

        border: none;
        border-radius: 4px;
        background-color: ${({ theme: { colors } }) => colors.grayTwo};
      }
    }
  }
`;
