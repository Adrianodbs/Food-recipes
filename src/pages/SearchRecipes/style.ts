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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    color: var(--secondary);
  }


  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`
