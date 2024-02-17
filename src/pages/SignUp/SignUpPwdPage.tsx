import Input from "../../components/common/Input";
import Logo from "../../assets/images/logo.svg";
import Flex from "../../components/common/Flex";
import styled from "styled-components";
import Button from "../../components/common/Button";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { palette } from "../../styles/palette";
import { useState } from "react";

function SignUpPwdPage() {
  const { formState, handleSubmit, watch } = useFormContext();
  const pwd = watch("pwd");
  const repwd = watch("repwd");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    pwd: "",
    repwd: "",
  });
  return (
    <Container
      direction="column"
      justify="center"
      align="center"
      customStyle={{ height: "100vh" }}
      gap={80}
    >
      <img src={Logo} alt="logo" />
      <form
        onSubmit={handleSubmit((data) => {
          if (pwd !== repwd) {
            setErrorMessage({ pwd: "", repwd: "비밀번호가 일치하지 않아요" });
            return;
          }
          console.log(data);
          navigate("/signup/name");
        })}
      >
        <MiddleContainer direction="column" gap={54}>
          <InputContainer direction="column" gap={60}>
            <Input
              title="비밀번호"
              placeholder="알파벳, 숫자, 특수문자를 포함해 8글자 이상"
              name="pwd"
              type="password"
              pattern={/^[a-zA-z0-9!@#$%^&*?_]{8,}$/}
              isError={!!errorMessage.repwd}
              errorMessage={errorMessage.pwd}
            />
            <Input
              title="비밀번호 재입력"
              type="password"
              name="repwd"
              pattern={/^[a-zA-z0-9!@#$%^&*?_]{8,}$/}
              isError={!!errorMessage.repwd}
              errorMessage={errorMessage.repwd}
            />
          </InputContainer>
          <ButtonContainer direction="column" gap={12}>
            <Button disabled={!formState.isValid}>다음</Button>
            {/* <SignUpLink onClick={() => navigate("/signup/id")}>
              회원가입하기
            </SignUpLink> */}
          </ButtonContainer>
        </MiddleContainer>
      </form>
    </Container>
  );
}

const Container = styled(Flex)``;

const MiddleContainer = styled(Flex)``;

const InputContainer = styled(Flex)``;

const ButtonContainer = styled(Flex)``;

const SignUpLink = styled.span`
  color: ${palette.blue.blue400};
  cursor: pointer;
`;

export default SignUpPwdPage;
