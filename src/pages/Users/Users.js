import React from "react";
import { useUsers } from "../../hooks/useUsers";
import { useAuth } from "../../hooks/useAuth";
import { Container, Header, WelcomUser, Title, UsersContainer, User, UserInfo, UserName, UserEmail, UserImg, Link} from "./styles";
import { Pagination } from "../../components/Pagination/Pagination";
import { LoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";

const Users = () => {
  const { users, userEmail, handlePagination, currentPage, loading } = useUsers();
  const { handleLogOut, } = useAuth();


  return (
    <Container>
      <Header>
        <Link to="/" onClick={handleLogOut}>Cerrar sesion</Link>
        <WelcomUser>Usuario: {userEmail}</WelcomUser>
      </Header>
      <Title>Lista de usuarios</Title>
      <UsersContainer>
        {loading 
          ? <LoadingSkeleton count={6} /> 
          : users.map((user) => {
          return (
            <User key={user.id}>
              <UserImg src={user.avatar} alt="userPhoto" />
              <UserInfo>
                <UserName>
                  {user.first_name} {user.last_name}
                </UserName>
                <UserEmail>{user.email}</UserEmail>
              </UserInfo>
            </User>
          )
        })}
      </UsersContainer>
      <Pagination handlePagination={handlePagination} currentPage={currentPage} />
    </Container>
  );
};

export { Users };