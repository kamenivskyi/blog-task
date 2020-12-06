import Link from 'next/link'

import { NavbarWrapper, NavItem, Nav } from './header.styles'
import { Container } from 'styles/styled-globals'

const Header: React.FC = () => (
  <NavbarWrapper>
    <Container>
      <Nav>
        <Link href="/" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/new" passHref>
          <NavItem>New post</NavItem>
        </Link>
      </Nav>
    </Container>
  </NavbarWrapper>
)

export default Header
