import axios from "axios";
import { IUser } from "../interfaces";

const sendRequest = (
  method: "get" | "post" | "patch" | "delete",
  url: string,
  data?: any
) =>
  axios({
    method,
    url: url,
    ...(data && { data }),
    headers: {
      "client-ip":
        typeof window !== "undefined" && localStorage.getItem("clientIP"),
    },
  });
const sendAuthRequest = (
  method: "get" | "post" | "patch" | "delete",
  url: string,
  token: string,
  data?: any
) =>
  axios({
    method,
    url: url,
    ...(data && { data }),
    headers: {
      Authorization: token,
    },
  });

export const login = async (params: IUser) => {
  const result = await sendRequest(
    "post",
    `https://unihack-api.azurewebsites.net/api/auth/login`,
    {
      ...params,
    }
  );

  return result.data;
};
