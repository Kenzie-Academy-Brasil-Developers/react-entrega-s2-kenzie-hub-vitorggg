import { Container, Content, ContentForm, ContainerFooter } from "./styles";
import logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

export default function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Formato de email inválido!"),
    password: yup.string().required("Campo obirgatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  const newUser = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img alt="logo" src={logo} />
        <ContentForm>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(newUser)}>
            <Input
              register={register}
              label={"E-mail"}
              placeholder={"Insira seu e-mail"}
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              label={"Senha"}
              placeholder={"Insira sua senha"}
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <div>
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </ContentForm>
        <ContainerFooter>
          <span>Ainda não possui uma conta?</span>
          <Button onClick={goToRegister} isDisabled={true}>
            Cadastre-se
          </Button>
        </ContainerFooter>
      </Content>
    </Container>
  );
}
