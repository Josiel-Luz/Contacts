import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { StyledInput } from "../../styles/components/styledInput";
import { StyledMain } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email válido"),
  phone: z.number(),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "Deve ter ao menos uma letra maiúscula")
    .regex(new RegExp(".*[a-z].*"), "Deve ter ao menos uma letra minuscula")
    .regex(new RegExp(".*\\d.*"), "Deve ter ao menos um numero")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "Deve ter ao menos um caracter especial"
    )
    .min(8, "Deve ter no minimo 8 carecteres"),
});

type registerData = z.infer<typeof schema>;

const RegisterPage = () => {
  const { createUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <form onSubmit={handleSubmit(createUser)}>
        <h1>Registrar</h1>
        <label>
          Nome
          <StyledInput
            {...register("name")}
            type="text"
            placeholder="Digite seu nome"
          />
        </label>
        <span>{errors.name?.message}</span>
        <label>
          Email
          <StyledInput
            {...register("email")}
            type="text"
            placeholder="Digite seu email"
          />
        </label>
        <span>{errors.email?.message}</span>
        <label>
          Telefone
          <StyledInput
            {...register("phone", { valueAsNumber: true })}
            type="number"
            placeholder="Digite seu telefone"
          />
        </label>
        <span>{errors.phone?.message}</span>
        <label>
          Senha
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Digite uma senha"
          />
        </label>
        <span>{errors.password?.message}</span>
        <p>
          Já tem uma conta registrada? <Link to="/">clique aqui</Link> para
          fazer login
        </p>
        <button>Entrar</button>
      </form>
    </StyledMain>
  );
};

export default RegisterPage;
