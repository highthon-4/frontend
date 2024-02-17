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
  pattern,
  isInvisible,
}: {
  title?: string;
  errorMessage?: string;
  name: string;
  type?: "password";
  pattern?: RegExp;
  isInvisible?: boolean;
}) => {
  const [inputState, setInputState] = useState<InputStateType>("default");
  const { register, watch } = useFormContext();
  const value = watch(name);

  return (
    <Container
      customStyle={{
        position: "relative",
        visibility: isInvisible ? "hidden" : "initial",
      }}
    >
      {inputState !== "default" && (
        <Title fontSize={12} state={inputState}>
          {title}
        </Title>
      )}
      <StyledInput
        {...register(name, { required: !isInvisible, pattern: pattern })}
        width={360}
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
