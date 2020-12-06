import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  background-color: #222;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  padding: 20px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #222;
  }
`;
