//쿼리키 정리하시면 됩니다.

export const CHAT_QUERY_KEY = {
  default: () => ["chat"],
  chatList: (id: string) => [...CHAT_QUERY_KEY.default(), "list", id],
  chatDetail: (session: string) => [...CHAT_QUERY_KEY.default(), session],
};
