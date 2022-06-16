import styled from "styled-components";

export const ModalBG = styled.section`
  inset: 0;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0003;
  backdrop-filter: blur(3px);

  position: absolute;
  z-index: 2;

  & > div {
    width: 100%;
    max-width: 350px;

    & > div:nth-child(2) {
      border-radius: 0 0 4px 4px;

      small {
        text-align: start;
        color: ${({ theme: { colors } }) => colors.error};
      }
    }
  }
`;
