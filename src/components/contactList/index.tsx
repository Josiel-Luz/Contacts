import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { StyledUl } from "./style";

export const ContactList = () => {
  const { contacts, deleteContact } = useContext(userContext);

  return (
    <StyledUl>
      {contacts.length > 0 ? (
        contacts.map((elem) => {
          return (
            <li key={elem.id}>
              <div>
                <h2>{elem.name}</h2>
                <p>{elem.email}</p>
                <p>{elem.phone}</p>
              </div>
              <button
                className="delete_btn"
                onClick={() => deleteContact(elem.id)}
              >
                Deletar
              </button>
            </li>
          );
        })
      ) : (
        <p>Você ainda não cadastrou nem um contato</p>
      )}
    </StyledUl>
  );
};
