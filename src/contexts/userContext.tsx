import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";

interface IUserContextProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  created_at: string;
}

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: number;
  created_at: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  name: string;
  email: string;
  phone: number;
  password: string;
}

interface IUserContext {
  user: IUser;
  contacts: IContact[];
  createUser(data: IRegister): Promise<void>;
  login(data: ILogin): Promise<void>;
  addNewContact(data: IContact): void;
  quit(): void;
  deleteContact(id: string): Promise<void>;
}

const userContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [contacts, setContacts] = useState<IContact[]>([] as IContact[]);
  const [isLoged, SetIsLoged] = useState(false);

  const navigate = useNavigate();

  const createUser = async (data: IRegister) => {
    await Api.post("/users", data)
      .then((res) => {
        navigate("/");
        toast.success("Usuario criado com sucesso");
      })
      .catch((err) => toast.error(`${err.response.data.message}`));
  };

  const login = async (data: ILogin) => {
    await Api.post("/login", data)
      .then((res) => {
        SetIsLoged(true);
        localStorage.setItem("@MYTOKEN", res.data.token);
        navigate("/homepage");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  };

  useEffect(() => {
    const verifyLog = async () => {
      const token = localStorage.getItem("@MYTOKEN");

      if (token) {
        await Api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setUser(res.data);
            toast.success(`Bem vindo ${res.data.name}`);
            navigate("/homepage");
          })
          .catch((err) => toast.error(`${err.response.data.message}`));

        await Api.get("/contacts")
          .then((res) => {
            setContacts(res.data);
          })
          .catch((err) => toast.error(`${err.response.data.message}`));
      } else {
        navigate("/");
        localStorage.removeItem("@MYTOKEN");
      }
    };

    verifyLog();
  }, [isLoged]);

  const addNewContact = (data: IContact) => {
    setContacts([...contacts, data]);
  };

  const quit = () => {
    localStorage.removeItem("@MYTOKEN");
    SetIsLoged(false);
    navigate("/");
  };

  const deleteContact = async (id: string) => {
    await Api.delete(`/contacts/${id}`)
      .then((res) => {
        setContacts([...contacts.filter((elem) => elem.id !== id)]);
        toast.success("Contato deletado");
      })
      .catch((err) => toast.error(`${err.response.data.message}`));
  };

  return (
    <userContext.Provider
      value={{
        user,
        contacts,
        createUser,
        login,
        addNewContact,
        quit,
        deleteContact,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
