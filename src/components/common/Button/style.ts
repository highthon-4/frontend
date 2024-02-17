import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const StyledButton = styled.button<{
  width?: number;
}>`
  ${({ width }) => width && `width: ${width}px;`}
  background-color: ${palette.blue.blue500};
  color: #fff;
  padding: 13px;
  cursor: pointer;
  &:disabled {
    background-color: ${palette.gray.gray400};
    color: ${palette.gray.gray700};
  }
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
`;
