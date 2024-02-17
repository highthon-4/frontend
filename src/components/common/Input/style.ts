import styled from "styled-components";
import { ColorState, InputStateType } from "./types";
import { palette } from "../../../styles/palette";
import Flex from "../Flex";

export const Container = styled(Flex)``;

export const Title = styled.h2<{
  state?: InputStateType;
  fontSize?: number;
  textColor?: string;
}>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ state }) => state && `color: ${ColorState[state]};`}
  position: absolute;
  left: 0;
  top: -16px;
`;

export const StyledInput = styled.input<{
  width?: number;
  placeholder?: string;
  state?: InputStateType;
  fontSize?: number;
}>`
  ${({ width }) => width && `width: ${width}px;`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  border: none;
  ${({ state }) => state && `border-bottom: 2px solid ${ColorState[state]};`}
  color: white;
  padding-left: 0px;
  padding-bottom: 8px;
  background-color: ${palette.gray.gray1100};
  &::placeholder {
    color: ${palette.gray.gray400};
  }
  &:focus {
    ${({ state }) => state && `border-bottom: 2px solid ${ColorState.active};`}
  }
  &:focus-visible {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #fff !important;
    -webkit-box-shadow: 0 0 0px 1000px ${palette.gray.gray1100} inset;
    box-shadow: 0 0 0px 1000px ${palette.gray.gray1100} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ErrorMessage = styled.span<{
  state?: InputStateType;
  fontSize?: number;
  textColor?: string;
}>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ textColor }) => textColor && `color: ${palette.red.red100};`}
`;
