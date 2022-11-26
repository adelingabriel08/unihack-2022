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
      Authorization: `Bearer ${token}`,
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

export const getStolenItems = async (
  searchValue?: string,
  locationFilterValue?: string,
  categoryFilterValue?: string
) => {
  const result = await sendRequest(
    "get",
    `https://unihack-api.azurewebsites.net/api/stolenitems`,
    {
      // ...params,
    }
  );
  return result.data;
};

export const getStolenTypes = async () => {
  const result = await sendRequest(
    "get",
    "https://unihack-api.azurewebsites.net/api/stolenitems/types"
  );
  return result.data;
};

export const getStolenItemById = async (id: number) => {
  const result = await sendRequest(
    "get",
    `https://unihack-api.azurewebsites.net/api/stolenitems/${id}`
  );
  return result.data;
};

export const getStolenItemCategories = async () => {
  const result = await sendRequest(
    "get",
    "https://unihack-api.azurewebsites.net/api/stolenitems/types"
  );

  return result.data;
};
