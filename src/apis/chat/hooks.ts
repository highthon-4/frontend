//쿼리 훅 정리하시면 됩니다.
// export const useChatList = () => useSuspenseQuery("chatList", getChatList);

import {useQuery} from "react-query";
import {getChatList} from ".";
import {CHAT_QUERY_KEY} from "./keys";

export const useChatList = () =>
  useQuery(CHAT_QUERY_KEY.chatList(), getChatList);
