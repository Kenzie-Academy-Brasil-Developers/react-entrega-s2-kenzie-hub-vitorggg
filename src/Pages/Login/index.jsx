import { Container, Content, ContentForm, ContainerFooter } from "./styles";
import logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import TechDetail from "../../Components/TechDetail";

export default function Login() {
  return (
    <Container>
      <Content>
        <img alt="logo" src={logo} />
        <ContentForm>
          <h2>Login</h2>
          <form>
            <Input label={"E-mail"} placeholder={"Insira seu e-mail"} />
            <Input
              label={"Senha"}
              placeholder={"Insira sua senha"}
              type="password"
            />
            <div>
              <Button>Entrar</Button>
            </div>
          </form>
        </ContentForm>
        <ContainerFooter>
          <span>Ainda não possui uma conta?</span>
          <Button isDisabled={true}>Cadastre-se</Button>
        </ContainerFooter>
      </Content>
    </Container>
  );
}
