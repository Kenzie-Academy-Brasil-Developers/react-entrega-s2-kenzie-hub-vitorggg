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

export default function Register() {
  return (
    <Container>
      <Content>
        <ContainerHeader>
          <img alt="logo" src={logo} />
          <Button isMedium={true}>Voltar</Button>
        </ContainerHeader>
        <ContentForm>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
          <form>
            <Input label={"Nome"} placeholder={"Digite aqui seu nome"} />
            <Input label={"E-mail"} placeholder={"Digite aqui seu e-mail"} />
            <Input
              label={"Senha"}
              placeholder={"Digite aqui sua senha"}
              type="password"
            />
            <Input
              label={"Confirme sua senha"}
              placeholder={"Confirme aqui sua senha"}
              type="password"
            />
            <Select label={"Selecionar módulo"} />
            <ContainerFooter>
              <Button isNegative={true}>Cadastrar</Button>
            </ContainerFooter>
          </form>
        </ContentForm>
      </Content>
    </Container>
  );
}
