import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useInputValue } from '../../hooks/useInputValue';
import { Navigate } from 'react-router-dom';
import { Container, FormContainer, Input, SubmitBtn } from './styled';
import { Loading } from '../../components/Loading/Loading';
import { Toaster } from 'react-hot-toast';

const Login = () => {
  const { handleLogin, userToken, loading, } = useAuth();
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin("https://reqres.in/api/login",{
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Container>
      {
        userToken
          ? loading ? <Loading message="Iniciando sesion..." /> : <Navigate to="/users" />
          : <FormContainer onSubmit={handleSubmit}>
              <Input type="text" placeholder="Email" {...email}/>
              <Input type="password" placeholder="Password" {...password}/>
              <SubmitBtn type="submit" value="Iniciar sesión" />
            </FormContainer>
      }
      <Toaster />
    </Container>
  );
};

export { Login };