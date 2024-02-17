import { palette } from "../../../styles/palette";

export type InputStateType = "default" | "active" | "error" | "enabled";

export const ColorState = {
  default: palette.gray.gray700,
  active: palette.blue.blue500,
  error: palette.red.red100,
  enabled: palette.gray.gray700,
};
