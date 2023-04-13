import React from "react";
import { HomeContainer, Title, SubTitle, Link } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Title>!Bienvenido!</Title>
      <SubTitle>Por favor inicie sesion para continuar</SubTitle>
      <Link to="/login">Iniciar sesion</Link>
    </HomeContainer>
  );
};

export { Home };