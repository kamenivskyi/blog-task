import Head from 'next/head'

import Header from 'components/Header'
interface ILayout {
  children: any
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Head>
        <title>Blog task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>

      <footer>footer</footer>
    </div>
  )
}

export default Layout
