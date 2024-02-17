import {AdvisorType} from "./advisor";

export type ChatRoom = {
  session: string;
  last_chatted: string;
  response: string;
  request: string;
  type: AdvisorType;
};

export type Chat = {
  request: string;
  response: string;
  created_at: string;
};
