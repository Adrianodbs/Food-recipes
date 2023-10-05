import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background-color: #F3F4F6;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 90%;

  .info{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin: 30px auto;

    p{
      font-size: 18px;
      font-weight: bold;
    }

    span{
      font-weight: 400;
    }
  }

  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 20px auto;

    ul{
      list-style: none;
    }

    h2{
      margin-bottom: 10px;
      color: var(--secondary);
    }
  }

  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .font{
      text-decoration: none;
      color: blue;
    }
  }
`

export const Title = styled.h1`
  color: var(--secondary);
  font-size: 36px;
  margin: 20px auto;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`