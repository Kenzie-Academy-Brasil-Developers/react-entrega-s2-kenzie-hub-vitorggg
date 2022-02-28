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
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TechCad from "../../Components/TechCad";
import TechDetail from "../../Components/TechDetail";
import api from "../../Services/api";
import { toast } from "react-toastify";

export default function Home({ authenticated, setAuthenticated }) {
  const [canAdd, setCanAdd] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [techs, setTechs] = useState([]);
  const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  useEffect(() => {
    loadTechs();
  }, []);

  const loadTechs = () => {
    api
      .get(`/users/${user.id}`)
      .then(async (res) => {
        const userTechs = await res.data.techs;
        setTechs(userTechs);
      })
      .catch((_) => toast.error("Erro: não foi possível acessar seus dados"));
  };

  const history = useHistory();

  const logOff = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  const addNewTech = () => {
    setCanAdd(true);
  };

  const searchId = (id) => {
    const findedTech = user.techs.find((item) => item.id === id);
    localStorage.setItem("@kenzieHub:cardTech", JSON.stringify(findedTech));
  };

  const editing = (itemID) => {
    setCanEdit(true);
    searchId(itemID);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <img alt="logo" src={logo} />
          <Button onClick={logOff} isMedium={true}>
            Sair
          </Button>
        </ContentHeader>
        <hr />
        <ContentTitle>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </ContentTitle>
        <hr />
        <ContentMain>
          <h2>Tecnologias</h2>
          <Button onClick={addNewTech} isMedium={true}>
            +
          </Button>
        </ContentMain>
        <ContentTable>
          {techs &&
            techs.map((item) => (
              <Cards
                onClick={() => editing(item.id)}
                title={item.title}
                level={item.status}
                key={item.title}
                id={item.id}
              />
            ))}
        </ContentTable>
        <TechCad
          hide={canAdd ? false : true}
          setCanAdd={setCanAdd}
          loadTechs={loadTechs}
        />
        <TechDetail hide={canEdit ? false : true} setCanEdit={setCanEdit} />
      </Content>
    </Container>
  );
}
