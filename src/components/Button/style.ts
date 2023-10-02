import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--secondary);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all .2s;

  &:hover{
    background-color: var(--primary);
  }
`