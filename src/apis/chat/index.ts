//apiClient 정리 하시면 됩니다.
// const getChatList = async() => apiClient.get("/chat");

import {apiClient} from "../../libs/axios";
import {Chat} from "../../models/chat";
import {Response} from "../../models/common/response";

export const getChatList = () =>
  apiClient.get<Response<{sessions: Chat[]}>>("/counselor/load-sessions");
