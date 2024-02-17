//쿼리키 정리하시면 됩니다.

export const CHAT_QUERY_KEY = {
  default: () => ["chat"],
  chatList: () => [...CHAT_QUERY_KEY.default(), "list"],
};
