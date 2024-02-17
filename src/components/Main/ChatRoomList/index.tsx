import styled from "styled-components";
import {ChatRoom} from "../../../models/chat";
import Flex from "../../common/Flex";
import plus from "../../../assets/images/main/plus.svg";
import {useNavigate} from "react-router-dom";
import ChatRoomListItem from "./Item";

type Props = {
  chatRoomList: ChatRoom[];
};

const ChatRoomList = ({chatRoomList}: Props) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      gap={16}
      customStyle={{
        minWidth: "424px",
        maxWidth: "424px",
        paddingTop: "8px",
        overflowY: "scroll",
      }}
    >
      <AddChatButton onClick={() => navigate("/main?type=create")}>
        <img src={plus} alt="add chat" />
        <p style={{color: "white", fontSize: "18px"}}>대화 추가하기</p>
      </AddChatButton>
      {chatRoomList.map((chatRoom) => (
        <ChatRoomListItem key={chatRoom.session} chatRoom={chatRoom} />
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

export default ChatRoomList;
