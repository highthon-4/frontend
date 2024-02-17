import styled from "styled-components";
import Flex from "../../common/Flex";
import {Chat} from "../../../models/chat";
import AdvisorHero from "../../common/AdvisorHero";

type Props = {
  chat: Chat;
};

const ChatListItem = ({chat}: Props) => {
  return (
    <Container>
      <AdvisorHero
        type={chat.type}
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
          {chat.response}
        </p>
        <p style={{fontSize: "16px", color: "white"}}>{chat.last_chatted}</p>
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

export default ChatListItem;
