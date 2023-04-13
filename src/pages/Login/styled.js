import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height:100%;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 100%;
  max-width: 320px;
  padding: 16px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 16px;

  &:focus {
    outline: 4px solid #f7d951;
  }
`

export const SubmitBtn = styled.input`
  width: 50%;
  max-width: 180px;
  padding: 8px;
  border: none;
  outline: none;
  color: #0a0a0a;
  border-radius: 20px 8px;
  background-color: #f7d951;

  &:hover {
    cursor: pointer;
  }
`