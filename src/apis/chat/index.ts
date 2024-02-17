//apiClient 정리 하시면 됩니다.
// const getChatList = async() => apiClient.get("/chat");

import { useNavigate } from "react-router-dom";
import { AdvisorType } from "../../models/advisor";

// import { apiClient } from "../../libs/axios";
// import { ChatRoom } from "../../models/chat";
// import { Response } from "../../models/common/response";

// // export const getChatList = () =>
// //   apiClient.get<Response<{ sessions: ChatRoom[] }>>("/counselor/load-sessions");

export const getChatList = async () => {
  try {
    const response = await fetch(
      "https://highthon9th.gdre.dev/counselor/load-sessions/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(localStorage.token + ":"),
        },
        // body: JSON.stringify(),
      }
    );

    if (!response.ok) {
      // 에러 응답 처리
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    // 예외 처리
    console.error("Error during login:", error.message);
    throw error;
  }
};

export const getChatDetail = async (session: string) => {
  try {
    const response = await fetch(
      "https://highthon9th.gdre.dev/counselor/load-history/?session=" + session,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(localStorage.token + ":"),
        },
        // body: JSON.stringify(),
      }
    );

    if (!response.ok) {
      // 에러 응답 처리
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    // 예외 처리
    console.error("Error during login:", error.message);
    throw error;
  }
};

export const getNewChat = async (type: AdvisorType) => {
  try {
    const response = await fetch(
      "https://highthon9th.gdre.dev/counselor/newchat/?type=" + type,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(localStorage.token + ":"),
        },
        // body: JSON.stringify(),
      }
    );

    if (!response.ok) {
      // 에러 응답 처리
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    // 예외 처리
    console.error("Error during login:", error.message);
    throw error;
  }
};

export const addChat = async (data: { message: string; session: string }) => {
  try {
    const response = await fetch(
      "https://highthon9th.gdre.dev/counselor/chat/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(localStorage.token + ":"),
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      // 에러 응답 처리
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    // 예외 처리
    console.error("Error during login:", error.message);
    throw error;
  }
};
