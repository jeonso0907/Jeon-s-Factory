import Head from 'next/head'
import Header from '@components/Header'


export default function Home() {

  return (
    <div id="main" className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
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

