import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa;
  border-radius: 10px;
  border: 1px solid #bbbbbb;
  padding: 16px;
  width: 100%;
  align-items: center;
  display: flex;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      font-size: 12px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #22974b;
      border-color: #22974b;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #111111;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    ${(props) =>
      props.isFilled &&
      css`
        color: #22974b;
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
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
