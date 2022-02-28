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
import { toast } from "react-toastify";

export default function TechDetail({ hide = true, setCanEdit }) {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const tech = JSON.parse(localStorage.getItem("@kenzieHub:cardTech"));

  console.log(tech.id);

  const editTech = ({ status }) => {
    api
      .put(`/users/techs/${tech.id}`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${tech.id}`)
      .then(toast.success("Tecnologia apagada com sucesso!"))
      .catch(toast.err("Não foi possível realizar a ação"));
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
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  deleteTech();
                }}
                isDisabled={true}
              >
                Excluir
              </Button>
            </div>
          </ContainerFooter>
        </form>
      </ContainerMain>
    </Container>
  );
}
