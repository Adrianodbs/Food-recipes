import styled from "styled-components";
interface ListProps {
  open: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  height: 48px;
  overflow: hidden;

  a{
    text-decoration: none;
  }
`

export const Title = styled.h2<ListProps>`
  color: var(--secondary);
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  
  @media (max-width: 780px) {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }

  
  span{
    color: var(--primary);
  }
`

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
    font-size: 24px;
  }
`;

export const List = styled.ul<ListProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;

  
  @media (max-width: 780px) {
    font-weight: 500;
  opacity: ${({ open }) => (open ? '1' : '0')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transform: translateX(${({ open }) => (open ? '0' : '-100%')});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  position: absolute;
  top: 48px;
  right: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  flex-direction: column;
    }

  li {
    @media (max-width: 780px) {
      margin-bottom: 10px;
    }
  }

  a {
    color: var(--primary);
    transition: all 0.2s;

    &:hover {
      color: var(--secondary);
    }
  }

  @media (max-width: 780px) {
    flex-direction: column;
    position: absolute;
    top: 48px;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    transition: right 0.5s ease-in-out;
    /* display: ${({ open }) => (open ? 'flex' : 'none')}; */
  }
`