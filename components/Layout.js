import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

export default function Layout({ children }) {
    function closeSidebar() {
        if (document.getElementById("mySidebar").offsetWidth == 250) {
          document.getElementById("mySidebar").style.width = "50px";
        }
      }
    return (
        <>
            <Sidebar />
            <main onClick={closeSidebar}>{children}</main>
            <Footer />
        </>
    )
}