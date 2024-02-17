import { useEffect, useState } from "react";
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
  placeholder,
  isError,
}: {
  title?: string;
  placeholder?: string;
  errorMessage?: string;
  name: string;
  type?: "password";
  pattern?: RegExp;
  isInvisible?: boolean;
  isError?: boolean;
}) => {
  const [inputState, setInputState] = useState<InputStateType>("default");
  const { register, watch } = useFormContext();
  const value = watch(name);

  useEffect(() => {
    isError && setInputState("error");
  }, [isError]);

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
        placeholder={placeholder ?? title}
        state={inputState}
        onFocus={() => {
          if (inputState === "error") return;
          setInputState("active");
        }}
        onBlur={() => {
          if (inputState === "error") return;
          value ? setInputState("enabled") : setInputState("default");
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
