import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  height: 48px;

  a{
    text-decoration: none;
  }
`

export const Title = styled.h2`
  color: var(--secondary);
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  span{
    color: var(--primary);
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  

  a{
    color: var(--primary);
    transition: all .2s;

    &:hover{
      color: var(--secondary);
    }
  }
`