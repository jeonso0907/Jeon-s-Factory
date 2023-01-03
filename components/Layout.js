import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'
import Head from "next/head";

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </>
    )
}