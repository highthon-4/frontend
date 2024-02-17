import {AdvisorType} from "./advisor";

export type Chat = {
  session: string;
  last_chatted: string;
  response: string;
  request: string;
  type: AdvisorType;
};
