import styled from "styled-components";
import { mq } from "../../styles/global";

export const CardContainer = styled.div`
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.grayFour};
  position: relative;

  :hover {
    height: 78px;
    align-items: stretch;
    flex-direction: column;

    background-color: ${({ theme: { colors } }) => colors.grayTwo};

    ${mq[0]} {
      height: 48px;

      align-items: center;
      flex-direction: unset;
    }

    div {
      background-color: ${({ theme: { colors } }) => colors.grayTwo};
      position: relative;

      ${mq[0]} {
        inset: 0 15%;
        position: absolute;
      }

      ${mq[1]} {
        inset: 0 10%;
      }

      ${mq[3]} {
        inset: 0 7%;
      }

      p {
        color: ${({ theme: { colors } }) => colors.grayZero};
      }
    }

    button {
      width: 100%;
      height: fit-content;
      padding: 0.2rem 0;

      ${mq[0]} {
        width: 15%;
        height: 100%;
      }

      ${mq[1]} {
        width: 10%;
      }

      ${mq[3]} {
        width: 7%;
      }
    }
  }

  div {
    inset: 0;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme: { colors } }) => colors.grayFour};
    position: absolute;

    h3 {
      color: ${({ theme: { colors } }) => colors.grayZero};
    }

    p {
      color: ${({ theme: { colors } }) => colors.grayOne};
    }
  }

  button {
    width: 7%;
    height: 100%;
    padding: 0 12px;

    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.grayThree};

    :hover {
      color: ${({ theme: { colors } }) => colors.grayZero};
    }
  }

  .edit {
    border-radius: 5px 0 0 5px;
    background-color: ${({ theme: { colors } }) => colors.edit};
  }

  .remove {
    border-radius: 0 5px 5px 0;
    background-color: ${({ theme: { colors } }) => colors.error};
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const UserCardContainer = styled.div`
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;

  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.grayFour};
  position: relative;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.grayTwo};

    div {
      inset: 0 15% 0 0;
      background-color: ${({ theme: { colors } }) => colors.grayTwo};
    }
  }

  div {
    inset: 0;
    padding: 0.5rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${({ theme: { colors } }) => colors.grayFour};
    position: absolute;
    z-index: 3;

    h3 {
      color: ${({ theme: { colors } }) => colors.grayZero};
    }

    p {
      color: ${({ theme: { colors } }) => colors.grayOne};
    }
  }

  button {
    right: 0;
    height: 100%;
    padding: 0 12px;

    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.grayThree};

    background-color: ${({ theme: { colors } }) => colors.success};
    position: absolute;
    z-index: 2;

    svg {
      transform: translateY(30%);
    }

    :hover {
      color: ${({ theme: { colors } }) => colors.grayZero};
    }
  }
`;

export const Techs = styled.section`
  width: 85%;
  padding: 0.5rem;

  border-radius: 0 0 4px 4px;
  background-color: ${({ theme: { colors } }) => colors.grayTwo};

  position: absolute;
  z-index: 4;

  p {
    width: 100%;
    margin: 0.2rem;

    display: flex;
    justify-content: space-between;

    font-weight: 600;

    span {
      font-weight: 300;
    }
  }
`;
