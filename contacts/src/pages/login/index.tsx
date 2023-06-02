import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

type LoginData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const login = (data: LoginData) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <label>
          Email
          <input
            {...register("email")}
            type="text"
            placeholder="Digite seu email"
          />
        </label>
        <span>{errors.email?.message}</span>
        <label>
          Senha
          <input
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
    </main>
  );
};

export default LoginPage;
