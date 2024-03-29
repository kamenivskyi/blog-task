import Head from 'next/head'

import Header from 'components/header'
import { Container } from 'styles/styled-globals'
interface ILayout {
  children: any
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <>
    <Head>
      <title>Blog task</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
  </>
)

export default Layout
