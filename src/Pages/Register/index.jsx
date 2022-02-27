import {
  Container,
  ContainerHeader,
  Content,
  ContentForm,
  ContainerFooter,
} from "./styles";
import Button from "../../Components/Button";
import logo from "../../Assets/Logo.svg";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Formato de email inválido!"),
    password: yup
      .string()
      .required("Campo obirgatório!")
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/,
        "Sua senha deve conter pelo menos: 6 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial."
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas distintas!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const newUser = ({ name, email, password, course_module }) => {
    const bio = "Lorem ipsum dolor emet";
    const contact = "123456789";
    const user = { email, password, name, bio, contact, course_module };
    console.log(user);
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/");
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  return (
    <Container>
      <Content>
        <ContainerHeader>
          <img alt="logo" src={logo} />
          <Button onClick={() => history.push("/")} isMedium={true}>
            Voltar
          </Button>
        </ContainerHeader>
        <ContentForm>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
          <form onSubmit={handleSubmit(newUser)}>
            <Input
              register={register}
              label={"Nome"}
              placeholder={"Digite aqui seu nome"}
              name="name"
              error={errors.name?.message}
            />
            <Input
              register={register}
              label={"E-mail"}
              placeholder={"Digite aqui seu e-mail"}
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              label={"Senha"}
              placeholder={"Digite aqui sua senha"}
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              label={"Confirme sua senha"}
              placeholder={"Confirme aqui sua senha"}
              type="password"
              name="confirmPassword"
              error={errors.confirmPassword?.message}
            />
            <Select
              register={register}
              label={"Selecionar módulo"}
              options={[
                "Primeiro módulo (Introdução ao Frontend)",
                "Segundo módulo (Frontend Avançado)",
                "Terceiro módulo (Introdução ao Backend)",
                "Quarto módulo (Backend Avançado)",
              ]}
              name="course_module"
              error={errors.course_module?.message}
            ></Select>
            <ContainerFooter>
              <Button type="submit" isNegative={true}>
                Cadastrar
              </Button>
            </ContainerFooter>
          </form>
        </ContentForm>
      </Content>
    </Container>
  );
}
