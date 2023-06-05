import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { ContactList } from "../../components/contactList";
import { FormNewContact } from "../../components/formNewContact";
import { StyledMain } from "./style";

export const HomePage = () => {
  const { user, quit } = useContext(userContext);
  return (
    <StyledMain>
      <button className="quit" onClick={quit}>
        Sair
      </button>
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Numero: {user.phone}</p>
        <h2>Contatos</h2>
        <ContactList />
      </div>
      <FormNewContact />
    </StyledMain>
  );
};
