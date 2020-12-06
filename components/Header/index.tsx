import Link from 'next/link';

import { NavbarWrapper, Container, NavItem, Nav } from './Header.styled';

const Header = () => {
  return (
    <NavbarWrapper>
      <Container>
        <Nav>
          <Link prefetch href='/' passHref>
            <NavItem>
              Home
            </NavItem>
          </Link>
          <Link prefetch href='/new' passHref>
            <NavItem>
              New post
            </NavItem>
          </Link>
        </Nav>
      </Container>
    </NavbarWrapper>
  )
}

export default Header;