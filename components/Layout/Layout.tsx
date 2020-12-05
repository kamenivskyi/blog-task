import Head from 'next/head'

interface Props {
  children: any
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>

      <footer>footer</footer>
    </div>
  )
}

export default Layout
