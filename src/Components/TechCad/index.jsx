import {
  Container,
  ContainerFooter,
  ContainerMain,
  ContainerTitle,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast } from "react-toastify";

export default function TechCad({ hide = true, setCanAdd, loadTechs }) {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const addNewTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia adicionada com sucesso!");
        loadTechs();
      })
      .catch((_) => toast.error("Houve erro na resuisição"));
  };

  const exitCart = () => {
    setCanAdd(false);
  };

  return (
    <Container hide={hide}>
      <ContainerTitle>
        <span>Cadastrar Tecnologia</span>
        <div>
          <Button onClick={exitCart} isDisabled={true}>
            x
          </Button>
        </div>
      </ContainerTitle>
      <ContainerMain>
        <form onSubmit={handleSubmit(addNewTech)}>
          <Input
            register={register}
            label={"Nome"}
            placeholder={"Insira o nome da tecnologia"}
            name="title"
          />
          <Select
            register={register}
            label="Selecionar status"
            options={["Iniciante ", "Intermediário ", "Avançado "]}
            name="status"
          ></Select>
          <ContainerFooter>
            <Button type="submit">Cadastrar Tecnologia</Button>
          </ContainerFooter>
        </form>
      </ContainerMain>
    </Container>
  );
}
