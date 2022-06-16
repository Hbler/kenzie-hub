import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.3rem;

  & > small {
    color: ${({ theme: { colors } }) => colors.error};
  }
`;
