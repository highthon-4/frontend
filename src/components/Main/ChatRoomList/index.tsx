import styled from "styled-components";
import { ChatRoom } from "../../../models/chat";
import Flex from "../../common/Flex";
import plus from "../../../assets/images/main/plus.svg";
import logout from "../../../assets/images/main/logout.svg";
import { useNavigate } from "react-router-dom";
import ChatRoomListItem from "./Item";
import { useLogout } from "../../../apis/user/hooks";
import { relative } from "path";

type Props = {
  chatRoomList: ChatRoom[];
};

const ChatRoomList = ({ chatRoomList }: Props) => {
  const navigate = useNavigate();
  const { mutate } = useLogout();
  return (
    <Flex
      direction="column"
      gap={16}
      customStyle={{
        minWidth: "424px",
        maxWidth: "424px",
        paddingTop: "8px",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <AddChatButton onClick={() => navigate("/main?type=create")}>
        <img src={plus} alt="add chat" />
        <p style={{ color: "white", fontSize: "18px" }}>대화 추가하기</p>
      </AddChatButton>
      {chatRoomList.map((chatRoom) => (
        <ChatRoomListItem key={chatRoom.session} chatRoom={chatRoom} />
      ))}
      <LogOutButton onClick={() => mutate()}>
        <img src={logout} alt="add chat" />
        <p style={{ color: "white", fontSize: "18px" }}>로그아웃</p>
      </LogOutButton>
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

const LogOutButton = styled.button`
  width: 100%;
  min-height: 98px;
  padding: 0 40px;
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default ChatRoomList;
