import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  background-color: #48e;
`

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: -40px;
  color: #fff;
`

export const SubTitle = styled.h3`
  font-size: 20px;
  color: #c7c7c7;
`

export const Link = styled(LinkRouter)`
  padding: 8px;
  text-decoration: none;
  color: #0a0a0a;
  border-radius: 20px 8px;
  background-color: #f7d951;
`