import styled from "styled-components";

export const Logo = styled.h1`
  margin: 18px 0;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primary};
`;
