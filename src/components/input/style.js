import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.8rem;

  label {
    font-size: 12px;
    color: ${({ theme: { colors } }) => colors.grayZero};
  }

  div {
    position: relative;

    input,
    select {
      width: 100%;
      height: 48px;
      padding: 0 1rem;

      display: flex;
      align-items: center;
      gap: 10px;

      font-weight: 600;
      color: ${({ theme: { colors } }) => colors.grayZero};

      border: none;
      border-radius: 4px;
      background-color: ${({ theme: { colors } }) => colors.grayTwo};

      :focus {
        outline: 1px solid ${({ theme: { colors } }) => colors.grayZero};

        ::placeholder {
          color: ${({ theme: { colors } }) => colors.grayZero};
        }
      }
    }

    button {
      top: 55%;
      right: 3%;

      transform: translateY(-50%);

      font-size: 1rem;
      color: ${({ theme: { colors } }) => colors.grayOne};

      background-color: transparent;
      position: absolute;
    }
  }

  small {
    text-align: start;
    color: ${({ theme: { colors } }) => colors.error};
  }
`;
