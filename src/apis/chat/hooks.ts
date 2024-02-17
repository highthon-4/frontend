//쿼리 훅 정리하시면 됩니다.
// export const useChatList = () => useSuspenseQuery("chatList", getChatList);

import { useMutation, useQuery } from "react-query";
import { addChat, getChatDetail, getChatList, getNewChat } from ".";
import { CHAT_QUERY_KEY } from "./keys";
import { AdvisorType } from "../../models/advisor";
import { useNavigate } from "react-router-dom";

export const useChatList = () =>
  useQuery(CHAT_QUERY_KEY.chatList(), getChatList);

export const useChatDetail = (session: string) =>
  useQuery(CHAT_QUERY_KEY.chatDetail(session), () => getChatDetail(session));

export const useNewChat = () => {
  const { refetch: chatListRefetch } = useChatList();
  const navigate = useNavigate();
  return useMutation((type: AdvisorType) => getNewChat(type), {
    onSuccess: (data) => {
      console.log(data);
      navigate(`/main?type=view&session=${data.body.session}`);
      chatListRefetch();
    },
  });
};

export const useAddChat = (session: string) => {
  const { refetch: chatListRefetch } = useChatList();
  const { refetch: chatDetailRefetch } = useChatDetail(session);
  return useMutation(
    ({ message, session }: { message: string; session: string }) =>
      addChat({
        message,
        session,
      }),
    {
      onSuccess: () => {
        chatDetailRefetch();
        chatListRefetch();
      },
    }
  );
};
