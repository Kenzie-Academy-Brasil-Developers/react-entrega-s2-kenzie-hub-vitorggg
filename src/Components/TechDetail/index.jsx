import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import {
  Container,
  ContainerFooter,
  ContainerMain,
  ContainerTitle,
} from "./styles";

export default function TechDetail() {
  return (
    <Container>
      <ContainerTitle>
        <span>Tecnologia Detalhes</span>
        <Link>X</Link>
      </ContainerTitle>
      <ContainerMain>
        <form>
          <Input
            label={"Nome do projeto"}
            placeholder={"Insira o nome do projeto"}
          />
          <Select label="Status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <ContainerFooter>
            <Button isNegative={true}>Salvar alterações</Button>
            <div>
              <Button isDisabled={true}>Excluir</Button>
            </div>
          </ContainerFooter>
        </form>
      </ContainerMain>
    </Container>
  );
}
