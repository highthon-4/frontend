import { StyledButton } from "./style";
function Button({
  children,
  disabled,
}: {
  children?: string;
  disabled: boolean;
}) {
  return (
    <StyledButton width={360} disabled={disabled} type="submit">
      {children}
    </StyledButton>
  );
}

export default Button;
