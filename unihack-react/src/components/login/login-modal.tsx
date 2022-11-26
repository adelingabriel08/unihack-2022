import React, { useState } from "react";
import LoginForm from "./login-form";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { IUser } from "../../interfaces";
import ModalWindow from "../common/modal-window";
import { login } from "../../utils/api-service";

interface IProps {
  toggleLoginForm: () => void;
  open: boolean;
}

const LoginModal: React.FC<IProps> = ({ toggleLoginForm, open }) => {
  const [message, setMessage] = useState("");
  const cookies = new Cookies();

  const { register, handleSubmit, formState, reset } = useForm<IUser>({
    mode: "all",
  });

  const onSubmit = async (data: IUser) => {
    try {
      const token = await login(data);
      cookies.set("userToken", token, {
        path: "/",
        sameSite: "strict",
      });

      handleModalClose();
      window.location.reload();
    } catch (e: any) {
      setMessage(`${e.response.data}`);
      return;
    }
  };
  const handleModalClose = () => {
    reset();
    toggleLoginForm();
    setMessage("");
  };

  return (
    <ModalWindow
      modalContent={
        <LoginForm
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          formState={formState}
          buttonText={"login"}
          message={message}
        />
      }
      open={open}
      onClose={handleModalClose}
    />
  );
};

export default LoginModal;
