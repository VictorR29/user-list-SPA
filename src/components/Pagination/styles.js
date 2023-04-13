import styled from "styled-components";

export const NextBtn = styled.button`
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 20px 8px;
  background-color: #f7d951;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "〉〉";
    margin-left: 8px;
    font-size: 18px;
    font-weight: bold;
  }
`

export const PrevBtn = styled(NextBtn)`
  &::after {
    content: ""
  }

  &::before {
    content: "〈〈";
    margin-right: 8px;
    font-size: 18px;
    font-weight: bold;
  }
`