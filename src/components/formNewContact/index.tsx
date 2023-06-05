import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contactsContext";
import { StyledInput } from "../../styles/components/styledInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email válido"),
  phone: z.number(),
});

type registerData = z.infer<typeof schema>;

export const FormNewContact = () => {
  const { createContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(createContact)}>
      <h2>Adicionar contato</h2>
      <label htmlFor="name">Nome</label>
      <StyledInput
        id="name"
        type="text"
        placeholder="Digite o nome do contato"
        {...register("name")}
      />
      <span>{errors.name?.message}</span>
      <label htmlFor="email">Email</label>
      <StyledInput
        id="email"
        type="email"
        placeholder="Digite o email do contato"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>
      <label htmlFor="phone">Número</label>
      <StyledInput
        id="phone"
        type="number"
        placeholder="Digite o numero de telefone do contato"
        {...register("phone", { valueAsNumber: true })}
      />
      <span>{errors.phone?.message}</span>
      <button>Adicionar contato</button>
    </form>
  );
};
