import Head from 'next/head'

import Header from 'components/header'
interface ILayout {
  children: any
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head>
        <title>Blog task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
