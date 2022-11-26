import Cookies from "universal-cookie";
import { parseJwt } from "./parsers-helpers";

export const checkIfLoggedIn = (): boolean => {
  const cookies = new Cookies();
  const loggedIn = !!cookies.get(`userToken`);
  return loggedIn;
};

export const getUsername = (): string => {
  const cookies = new Cookies();
  const parsedToken = parseJwt(cookies.get("userToken"));
  console.log(parsedToken);
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
