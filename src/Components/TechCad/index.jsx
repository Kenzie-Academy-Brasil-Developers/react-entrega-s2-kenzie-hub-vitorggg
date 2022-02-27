import {
  Container,
  ContainerFooter,
  ContainerMain,
  ContainerTitle,
} from "./styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

export default function TechCad() {
  return (
    <Container>
      <ContainerTitle>
        <span>Cadastrar Tecnologia</span>
        <Link>X</Link>
      </ContainerTitle>
      <ContainerMain>
        <form>
          <Input label={"Nome"} placeholder={"Insira o nome da tecnologia"} />
          <Select label="Selecionar status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <ContainerFooter>
            <Button>Cadastrar Tecnologia</Button>
          </ContainerFooter>
        </form>
      </ContainerMain>
    </Container>
  );
}
