import Input from "../../components/common/Input";
import Logo from "../../assets/images/logo.svg";
import Flex from "../../components/common/Flex";
import styled from "styled-components";
import Button from "../../components/common/Button";
import { FieldValues, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { palette } from "../../styles/palette";
import { useSignUp } from "../../apis/user/hooks";

function SignUpNamePage() {
  const { formState, handleSubmit, reset, watch } = useFormContext();
  const id = watch("id");
  const pwd = watch("pwd");
  const navigate = useNavigate();
  const { mutate } = useSignUp({ id, pwd });
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
        onSubmit={handleSubmit((data: FieldValues) => {
          delete data.invisible;
          console.log(data);
          mutate(
            data as {
              id: string;
              pwd: string;
              repwd: string;
              username: string;
            }
          );
          reset();
        })}
      >
        <MiddleContainer direction="column" gap={54}>
          <InputContainer direction="column" gap={60}>
            <Input title="닉네임" name="username" />
            <Input title="invisible" name="invisible" isInvisible />
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

export default SignUpNamePage;
