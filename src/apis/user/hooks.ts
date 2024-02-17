import { useMutation, useQuery } from "react-query";
import { getLogout, getUserInfo, login, signup } from ".";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation((data: { id: string; pwd: string }) => login(data), {
    onSuccess: (data: {
      header: { result: string; message: string };
      body: { token: string };
    }) => {
      if (data.header.result === "success") {
        localStorage.setItem("token", data.body.token);
        navigate("/main");
      } else alert(data.header.message);
    },
  });
};

export const useSignUp = ({ id, pwd }: { id: string; pwd: string }) => {
  const { mutate } = useLogin();
  return useMutation(
    (data: { id: string; pwd: string; repwd: string; username: string }) =>
      signup(data),
    {
      onSuccess: (data: {
        header: { result: string; message: string };
        body: [];
      }) => {
        if (data.header.result === "success") {
          alert("계정 생성이 완료되었습니다.");
          mutate({ id, pwd });
        } else alert(data.header.message);
      },
    }
  );
};

export const useGetUserInfo = () => {
  return useQuery("userInfo", getUserInfo);
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation(getLogout, {
    onSuccess: () => {
      navigate("/");
    },
  });
};
