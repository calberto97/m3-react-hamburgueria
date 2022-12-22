import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../../Services/api";


interface iExport {
  onSubmitLogin: (data: iData) => Promise<void>;
  loading: boolean;
  onSubmitRegister: (data: iDataRegister) => Promise<void>;
}

export interface iData {
  email: string;
  password: string;
}

export interface iDataRegister {
  name: string;
  email: string;
  password: string;
  passwordOK: string;
}

interface iUser {
  email: string;
  id: number;
  name: string;
}

export const UserContext = createContext({} as iExport);

export const UserProvider = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser>();
  const navigate = useNavigate();
  const { reset } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERID");
    if (token || userID) {
      navigate("/home");
    }
  }, [navigate]);

  const notify = (text: string) =>
    toast(text, {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    });

  const onSubmitLogin = async (data: iData) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      window.localStorage.clear();
      window.localStorage.setItem(
        "@TOKEN",
        response.data.accessToken
      );
      window.localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/home");
    } catch (error: any) {
      notify("Oops! Algo deu errado ❌");
      reset({
        email: "teste ",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmitRegister = async (data: iDataRegister) => {
    try {
      await api.post("/users", data);
      notify("Cadastro efetuado ✅ ");
      setTimeout(() => {
        navigate("/login");
      }, 200);
    } catch (error: any) {
      console.error(error.message);
      console.error(error.response.data);
      notify("E-mail já cadastrado ❌");
    }
  };

  return (
    <UserContext.Provider
      value={{ onSubmitLogin, loading, onSubmitRegister }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};
