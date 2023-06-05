import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { StyledMain } from "./style";
import { StyledInput } from "../../styles/components/styledInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

type LoginData = z.infer<typeof schema>;

const LoginPage = () => {
  const { login } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <form onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
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
          Senha
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Digite sua senha"
          />
        </label>
        <span>{errors.password?.message}</span>
        <p>
          Ainda não tem uma conta? <Link to="/register">clique aqui</Link> para
          se registrar
        </p>
        <button type="submit">Entrar</button>
      </form>
    </StyledMain>
  );
};

export default LoginPage;
