import {
  Container,
  Content,
  ContentHeader,
  ContentMain,
  ContentTitle,
  ContentTable,
} from "./styles";
import logo from "../../Assets/Logo.svg";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";

export default function Home() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <img alt="logo" src={logo} />
          <Button isMedium={true}>Sair</Button>
        </ContentHeader>
        <hr />
        <ContentTitle>
          <h2>Olá, Samuel Leão</h2>
          <span>Primeiro módulo (Introdução ao Frontend)</span>
        </ContentTitle>
        <hr />
        <ContentMain>
          <h2>Tecnologias</h2>
          <Button isMedium={true}>+</Button>
        </ContentMain>
        <ContentTable>
          <Cards title={"React JS"} level={"Intermediário"} />
          <Cards title={"Next JS"} level={"Iniciante"} />
          <Cards title={"Material UI"} level={"Avançado"} />
          <Cards title={"Styled-Components"} level={"Intermediário"} />
        </ContentTable>
      </Content>
    </Container>
  );
}
