import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f5;
  border-radius: 10px;
  border: 2px solid #666360;
  color: #666360;
  padding: 16px;
  width: 100%;
  display: flex;
  transition: 0.4s;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff4d29;
      border-color: #ff4d29;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff4d29;
    `}


  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: #312e38;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
