import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F3F4F6;
  min-height: calc(100vh - 48px);
`

export const Content = styled.div`
  max-width: 800px;
  width: 90%;

  h1{
    color: var(--secondary);
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`

export const Input = styled.input`
  width: 80%;
  border: 1px solid var(--primary);
  height: 32px;
  outline: none;
  padding: 5px 10px;

`