import { useState } from "react";
import { InputStateType } from "./types";
import { Container, ErrorMessage, StyledInput, Title } from "./style";
import { useFormContext } from "react-hook-form";
import Flex from "../Flex";

const Input = ({
  title,
  errorMessage,
  name,
  type,
}: {
  title?: string;
  errorMessage?: string;
  name: string;
  type?: "password";
}) => {
  const [inputState, setInputState] = useState<InputStateType>("default");
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <Container customStyle={{ position: "relative" }}>
      {inputState !== "default" && (
        <Title fontSize={12} state={inputState}>
          {title}
        </Title>
      )}
      <StyledInput
        {...register(name)}
        width={320}
        placeholder={title}
        state={inputState}
        onFocus={() => {
          inputState !== "error" && setInputState("active");
        }}
        onBlur={() => {
          inputState !== "error" && value
            ? setInputState("enabled")
            : setInputState("default");
        }}
        type={type}
      />
      {inputState === "error" && (
        <ErrorMessage fontSize={14}>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

export default Input;
