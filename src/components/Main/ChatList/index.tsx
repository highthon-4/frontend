import styled from "styled-components";
import {Chat} from "../../../models/chat";
import Flex from "../../common/Flex";
import ChatListItem from "./Item";
import {AdvisorType} from "../../../models/advisor";
import send from "../../../assets/images/main/send.svg";

type Props = {
  advisorType: AdvisorType;
  chatList: Chat[];
};

const ChatList = ({advisorType, chatList}: Props) => {
  return (
    <Container>
      <Flex
        direction="column"
        customStyle={{height: "100%", overflowY: "scroll"}}
        gap={20}
      >
        {chatList.map((chat, index) => (
          <ChatListItem chat={chat} key={index} advisorType={advisorType} />
        ))}
      </Flex>
      <ChatInputContainer>
        <ChatInput placeholder="메세지 입력..." />
        <SendButton>
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

const ChatInputContainer = styled.div`
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
