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
`

export const FoodList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const IngredientList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 10px 20px;
  max-width: 900px;
  width: 90%;

  li{
    cursor: pointer;
    width: 220px;
    background-color: #fff;
    padding: 16px 10px;
    border-radius: 4px;
    font-weight: 600;
    
    &:hover{
      transform: scale(1.08);
    }
  }
`