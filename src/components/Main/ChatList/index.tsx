import styled from "styled-components";
import {Chat} from "../../../models/chat";
import Flex from "../../common/Flex";
import ChatListItem from "./Item";
import plus from "../../../assets/images/main/plus.svg";

type Props = {
  chatList: Chat[];
};

const ChatList = ({chatList}: Props) => {
  return (
    <Flex
      direction="column"
      gap={16}
      customStyle={{width: "424px", paddingTop: "8px"}}
    >
      <AddChatButton>
        <img src={plus} alt="add chat" />
        <p style={{color: "white", fontSize: "18px"}}>대화 추가하기</p>
      </AddChatButton>
      {chatList.map((chat) => (
        <ChatListItem key={chat.session} chat={chat} />
      ))}
    </Flex>
  );
};

const AddChatButton = styled.button`
  width: 100%;
  min-height: 98px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default ChatList;
