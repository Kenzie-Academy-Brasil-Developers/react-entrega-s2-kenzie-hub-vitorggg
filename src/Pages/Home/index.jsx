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
import { useState } from "react";
import TechCad from "../../Components/TechCad";
import TechDetail from "../../Components/TechDetail";
import api from "../../Services/api";

export default function Home({ authenticated, setAuthenticated }) {
  const [canAdd, setCanAdd] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  const history = useHistory();

  const userName = JSON.parse(localStorage.getItem("@kenzieHub:user")).name;
  const userModule = JSON.parse(
    localStorage.getItem("@kenzieHub:user")
  ).course_module;
  const userTechs = JSON.parse(localStorage.getItem("@kenzieHub:user")).techs;

  const logOff = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  const addNewTech = () => {
    setCanAdd(true);
  };

  const searchId = (id) => {
    const findedTech = userTechs.find((item) => item.id === id);
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
          <h2>Olá, {userName}</h2>
          <span>{userModule}</span>
        </ContentTitle>
        <hr />
        <ContentMain>
          <h2>Tecnologias</h2>
          <Button onClick={addNewTech} isMedium={true}>
            +
          </Button>
        </ContentMain>
        <ContentTable>
          {userTechs.map((item) => (
            <Cards
              onClick={() => editing(item.id)}
              title={item.title}
              level={item.status}
              key={item.title}
              id={item.id}
            />
          ))}
        </ContentTable>
        <TechCad hide={canAdd ? false : true} setCanAdd={setCanAdd} />
        <TechDetail hide={canEdit ? false : true} setCanEdit={setCanEdit} />
      </Content>
    </Container>
  );
}
