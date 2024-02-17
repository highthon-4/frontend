import styled from "styled-components";
import Flex from "../../common/Flex";
import { ChatRoom } from "../../../models/chat";
import AdvisorHero from "../../common/AdvisorHero";
import { useNavigate } from "react-router-dom";

type Props = {
  chatRoom: ChatRoom;
};

const ChatRoomListItem = ({ chatRoom }: Props) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/main?type=view&session=${chatRoom.session}`)}
    >
      <AdvisorHero
        type={chatRoom.type}
        customStyle={{
          minWidth: "48px",
          maxWidth: "48px",
          minHeight: "48px",
          maxHeight: "48px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      />
      <Flex direction="column" justify="between" gap={8}>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            maxHeight: "25px",
            lineHeight: "25px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 1,
          }}
        >
          {chatRoom.response ?? "대화를 시작해보세요!"}
        </p>
        <p style={{ fontSize: "16px", color: "white" }}>
          {chatRoom.last_chatted}
        </p>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 24px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

export default ChatRoomListItem;
