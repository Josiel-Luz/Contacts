import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email válido"),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      "Deve ser um número válido"
    )
    .min(11, "Deve ser um número válido"),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({
    resolver: zodResolver(schema),
  });

  const registerForm = (data: registerData) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(registerForm)}>
        <h1>Registrar</h1>
        <label>
          Nome
          <input
            {...register("name")}
            type="text"
            placeholder="Digite seu nome"
          />
        </label>
        <span>{errors.name?.message}</span>
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
          Telefone
          <input
            {...register("phone")}
            type="text"
            placeholder="Digite seu telefone"
          />
        </label>
        <span>{errors.phone?.message}</span>
        <label>
          Senha
          <input
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
    </main>
  );
};

export default RegisterPage;
