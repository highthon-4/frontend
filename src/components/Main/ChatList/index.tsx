import styled from "styled-components";
import { Chat } from "../../../models/chat";
import Flex from "../../common/Flex";
import ChatListItem from "./Item";
import { AdvisorType } from "../../../models/advisor";
import send from "../../../assets/images/main/send.svg";
import { useAddChat } from "../../../apis/chat/hooks";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { palette } from "../../../styles/palette";

type Props = {
  advisorType: AdvisorType;
  chatList: Chat[];
};

const ChatList = ({ advisorType, chatList }: Props) => {
  const { register, watch, setValue, handleSubmit } = useFormContext();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const session = searchParams.get("session")!;
  const { mutate } = useAddChat(session);
  const message = watch("message");
  return (
    <Container>
      <Flex
        direction="column"
        customStyle={{ height: "100%", overflowY: "scroll" }}
        gap={20}
      >
        {chatList.map((chat, index) => (
          <ChatListItem chat={chat} key={index} advisorType={advisorType} />
        ))}
      </Flex>
      <ChatInputContainer onSubmit={handleSubmit((data) => data)}>
        <ChatInput placeholder="메세지 입력..." {...register("message")} />
        <SendButton
          type="submit"
          onClick={() => {
            mutate({ message, session });
            setValue("message", "");
          }}
        >
          <img src={send} alt="send" />
        </SendButton>
      </ChatInputContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;
  padding-bottom: 90px;
  box-sizing: border-box;
`;

const ChatInputContainer = styled.form`
  width: 100%;
  height: 60px;
  background-color: black;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  width: 100%;
  height: 100%;
  color: white;
  border: none;
  font-size: 18px;
  outline: none;
  background: none;

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

const SendButton = styled.button`
  width: 36px;
  height: 36px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export default ChatList;
