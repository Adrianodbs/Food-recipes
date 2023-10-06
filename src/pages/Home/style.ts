import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  background-color: var(--primary);
  height: 320px;

  @media (max-width: 770px) {
      justify-content: center;
      padding: 0 20px;
    }

  .homeText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    height: 100%;

    @media (max-width: 550px) {
      margin-left: 0;
    }

    h1{
      color: #fff;
      font-size: 48px;
      letter-spacing: 2px;

    @media (max-width: 550px) {
      font-size: 36px;
      text-align: center;
    }
    }
    span{
      font-weight: 500;
      @media (max-width: 550px) {
      font-size: 14px;
      text-align: center;
    }
    }
  }

  img{
    width: 250px;
    height: 250px;
    object-fit: contain;
    border-radius: 50%;

    @media (max-width: 780px) {
    display: none;
  }
  }

  .delivery{
    background-color: #fff;
    padding: 20px 60px;
    border-radius: 8px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 550px) {
      padding: 20px;
    }

    p{
      font-weight: 600;

      @media (max-width: 550px) {
      text-align: center;
    }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-bottom: 20px;
  gap: 24px;
`