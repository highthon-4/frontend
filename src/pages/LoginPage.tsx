import Input from "../components/common/Input";
import Logo from "../assets/images/logo.svg";
import Flex from "../components/common/Flex";
import styled from "styled-components";
import Button from "../components/common/Button";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { palette } from "../styles/palette";

function LoginPage() {
  const { formState, handleSubmit, watch } = useFormContext();
  const navigate = useNavigate();
  console.log(watch());
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
          console.log(data);
          navigate("/");
        })}
      >
        <MiddleContainer direction="column" gap={54}>
          <InputContainer direction="column" gap={60}>
            <Input title="아이디" name="id" pattern={/^[a-z0-9_]{4,}$/} />
            <Input
              title="비밀번호"
              name="password"
              type="password"
              pattern={/^[a-zA-z0-9!@#$%^&*?_]{8,}$/}
              // isInvisible
            />
          </InputContainer>
          <ButtonContainer direction="column" gap={12}>
            <Button disabled={!formState.isValid}>다음</Button>
            <SignUpLink onClick={() => navigate("/signup/id")}>
              회원가입하기
            </SignUpLink>
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

export default LoginPage;
