import { apiClient } from "../../libs/axios";

// export const login = async (data: { id: string; pwd: string }) =>
//   (
//     await apiClient.post("/test", data, {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     })
//   ).data;
export const login = async (data: any) => {
  try {
    const response = await fetch("https://highthon9th.gdre.dev/auth/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Basic " + btoa(localStorage.token + ":"), 토큰 필요한거 이렇게 하면 됩니다.
      },
      body: JSON.stringify(data),
    });

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

// export const signup = async (data: {
//   id: string;
//   pwd: string;
//   repwd: string;
//   username: string;
// }) => (await apiClient.post("/auth/signup", data)).data;
export const signup = async (data: {
  id: string;
  pwd: string;
  repwd: string;
  username: string;
}) => {
  try {
    const response = await fetch("https://highthon9th.gdre.dev/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
