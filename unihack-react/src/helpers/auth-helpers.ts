import Cookies from "universal-cookie";
import { parseJwt } from "./parsers-helpers";

export const checkIfLoggedIn = (): boolean => {
  const cookies = new Cookies();
  const isLoggedIn = cookies.get(`userToken`) !== "";
  return isLoggedIn;
};

export const getUsername = (): string => {
  const cookies = new Cookies();
  const parsedToken = parseJwt(cookies.get("userToken"));
  return parsedToken.email;
};

export const handleLogout = () => {
  const cookies = new Cookies();
  cookies.set("userToken", "", {
    path: "/",
    sameSite: "strict",
  });

  window.location.reload();
};
