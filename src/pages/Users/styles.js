import styled, { keyframes } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #f7d951;
`

export const WelcomUser = styled.span`
  font-weight: bold;
  font-size: 17px;
  width: 50%
`

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
`

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transition: opacity .4s ease-in-out;
  }

  to {
    opacity: 1;
  }
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 380px;
  height: 250px;
  margin-bottom: 20px;
  color: #0a0a0a;
  border-radius: 20px;
  background-color: #f7d951;
  box-shadow: 0px 4px 19px -4px rgba(0,0,0,0.5);
  animation: ${fadeIn} 1.5s ease;

 @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    width: 100%;
    padding: 20px;
  }
`

export const UserInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`

export const UserName = styled.p`
  margin: 20px 0 4px 0;
  font-size: 18px;
  font-weight: bold;
`

export const UserEmail = styled.p`
  font-size: 16px;
  font-weight: 700;
` 

const zoomIn = keyframes`
  from {
    transform: scale(0);
    transition: transform .4s;
  }

  to {
    transform: scale(1);
  }
`

export const UserImg = styled.img`
  width: 128px;
  height: 128px;
  margin-top: 20px;
  border-radius: 100%;
  box-shadow: 0px 4px 19px -4px rgba(0,0,0,0.5);
  animation: ${zoomIn} 1s ease;

  @media (min-width: 768px) {
    margin-top:0;
  }
`

export const Link = styled(LinkRouter)`
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  border-radius: 20px 8px;
  background-color: #f44336;
`