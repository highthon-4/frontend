import {AdvisorType} from "../../../models/advisor";
import {Chat} from "../../../models/chat";
import {palette} from "../../../styles/palette";
import AdvisorHero from "../../common/AdvisorHero";
import Flex from "../../common/Flex";

type Props = {
  advisorType: AdvisorType;
  chat: Chat;
};

const ChatListItem = ({advisorType, chat}: Props) => {
  return (
    <Flex direction="column" gap={20}>
      <UserChat content={chat.request} direction="right" />
      <UserChat
        content={chat.response}
        direction="left"
        advisorType={advisorType}
      />
    </Flex>
  );
};

type UserChatBase = {
  content: string;
};

type UserChatWithAdvisor = UserChatBase & {
  direction: "left";
  advisorType: AdvisorType;
};

type UserChatWithoutAdvisor = UserChatBase & {
  direction: "right";
  advisorType?: never;
};

const UserChat = ({
  content,
  direction,
  advisorType,
}: UserChatWithAdvisor | UserChatWithoutAdvisor) => {
  return direction === "left" ? (
    <Flex gap={8}>
      <AdvisorHero
        type={advisorType}
        customStyle={{
          width: "36px",
          height: "36px",
          borderRadius: "100%",
          backgroundColor: "white",
        }}
      />
      <p
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          color: "white",
          lineHeight: "25px",
          maxWidth: "600px",
          borderRadius: "12px",
          borderTopLeftRadius: "0",
          backgroundColor: "black",
          marginTop: "18px",
        }}
      >
        {content}
      </p>
    </Flex>
  ) : (
    <Flex
      customStyle={{
        marginLeft: "auto",
      }}
    >
      <p
        style={{
          padding: "12px 20px",
          fontSize: "18px",
          lineHeight: "25px",
          color: "white",
          maxWidth: "600px",
          borderRadius: "12px",
          borderTopRightRadius: "0",
          backgroundColor: palette.primary,
        }}
      >
        {content}
      </p>
    </Flex>
  );
};

export default ChatListItem;
