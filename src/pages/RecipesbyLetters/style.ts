import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F3F4F6;
  min-height: calc(100vh - 48px);

  h1{
    color: var(--primary);
    margin: 20px 0 10px;
    text-align: center;
  }
`

export const Content = styled.div`
  max-width: 900px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LetterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 5px;

  li{
    cursor: pointer;
    color: var(--secondary);
    font-size: 18px;

    &:hover{
      color: var(--primary);
      transform: scale(1.15);
    }
  }
`

export const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`