import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { useForm } from "react-hook-form";
import {
  Container,
  ContainerFooter,
  ContainerMain,
  ContainerTitle,
} from "./styles";
import api from "../../Services/api";

export default function TechDetail({
  hide = true,
  setCanEdit,
  cardTech,
  loadTechs,
}) {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const editTech = (data) => {
    api
      .put(`/users/techs/${cardTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        loadTechs();
      })
      .catch((err) => console.log(err));
    // .then((_) => {
    //   toast.success("Tecnologia adicionada com sucesso!");
    //   loadTechs();
    // })
    // .catch((_) => toast.error("Houve erro na resuisição"));
  };

  const exitCart = () => {
    setCanEdit(false);
  };

  return (
    <Container hide={hide}>
      <ContainerTitle>
        <span>Tecnologia Detalhes</span>
        <div>
          <Button onClick={exitCart} isDisabled={true}>
            x
          </Button>
        </div>
      </ContainerTitle>
      <ContainerMain>
        <form onSubmit={handleSubmit(editTech)}>
          <Input
            register={register}
            label={"Nome do projeto"}
            placeholder={"Insira o nome do projeto"}
            name="title"
          />
          <Select
            register={register}
            label="Selecionar status"
            options={["Iniciante ", "Intermediário ", "Avançado "]}
            name="status"
          ></Select>
          <ContainerFooter>
            <Button type="submit" isNegative={true}>
              Salvar alterações
            </Button>
            <div>
              <Button isDisabled={true}>Excluir</Button>
            </div>
          </ContainerFooter>
        </form>
      </ContainerMain>
    </Container>
  );
}
