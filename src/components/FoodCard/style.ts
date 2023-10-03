import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
  width: 280px;


  img{
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .text{
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3{
      margin-top: 5px;
      color: var(--gray);
    }
    span{
      display: flex;
      gap: 5px;
      width: 100%;
    }
    p{
      font-weight: bold;
    }
  }
  
`