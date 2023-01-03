import Head from 'next/head'
import Header from '@components/Header'


export default function Home() {

  return (
    <div id="main" className="container">
      <Head>
          <title>Next.js Starter!</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>

      <main>
        <Header title="Welcome to Jeon's Factory" />
        <p className="menu">
          Get started by asfasf <code>pages/index.js</code>
        </p>
      </main>

    </div>
  )
}

