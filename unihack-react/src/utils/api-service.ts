import axios from "axios";
import Cookies from "universal-cookie";
import { IItem, IUser } from "../interfaces";

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
const sendDataRequest = (
  method: "get" | "post" | "patch" | "delete",
  url: string,
  token: string,
  files?: any
) => {
  const data = new FormData();
  data.append("data", files[0], files[0].name);

  return axios({
    method,
    url: url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const sendAuthRequest = (
  method: "get" | "post" | "patch" | "delete",
  url: string,
  token: string,
  data?: any
) => {
  return axios({
    method,
    url: url,
    ...(data && { data }),
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  });
};

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

export const uploadImageService = async (files: any) => {
  const cookies = new Cookies();
  const token = cookies.get("userToken");
  console.log(files);
  const result = await sendDataRequest(
    "post",
    "https://unihack-api.azurewebsites.net/api/file",
    token,
    files
  );
  return result.data;
};

export const insertStolenItem = async (item: any) => {
  const cookies = new Cookies();
  const token = cookies.get("userToken");
  console.log(item);
  const result = await sendAuthRequest(
    "post",
    "https://unihack-api.azurewebsites.net/api/stolenitems",
    token,
    JSON.stringify(item)
  );
  return result.data;
};
