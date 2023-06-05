import { createContext, ReactNode, useContext } from "react";
import { Api } from "../services/api";
import { userContext } from "./userContext";
import { toast } from "react-toastify";

export interface IRequestContact {
  name: string;
  email: string;
  phone: number;
}

interface IContactContextProps {
  children: ReactNode;
}

interface IContactContext {
  createContact(data: IRequestContact): Promise<void>;
}

const ContactContext = createContext<IContactContext>({} as IContactContext);

const ContactProvider = ({ children }: IContactContextProps) => {
  const { addNewContact } = useContext(userContext);

  const createContact = async (data: IRequestContact) => {
    await Api.post("/contacts", data)
      .then((res) => {
        addNewContact(res.data);
        toast.success("Contato adicionado com sucesso");
      })
      .catch((err) => toast.error(`${err.responce.data.message}`));
  };

  return (
    <ContactContext.Provider value={{ createContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };
