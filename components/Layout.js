import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

export default function Layout({ children }) {

    const Icons = {
        menu: {
            id: "menuIcon",
            png: "menuIcon.png",
            hover: "/menuIcon_hover.png",
            original: "/menuIcon.png"
        },
        home: {
            id: "homeIcon",
            png: "homeIcon.png",
            hover: "/homeIcon_hover.png",
            original: "/homeIcon.png",
            textId: "homeTitle"
        },
        game: {
            id: "gameIcon",
            png: "gameIcon.png",
            hover: "/gameIcon_hover.png",
            original: "/gameIcon.png",
            textId: "gameTitle"
        },
        music: {
            id: "musicIcon",
            png: "musicIcon.png",
            hover: "/musicIcon_hover.png",
            original: "/musicIcon.png",
            textId: "musicTitle"
        }
    }

    function closeSidebar() {
        if (document.getElementById("mySidebar").offsetWidth == 250) {
            document.getElementById("mySidebar").style.width = "50px";
            for (const icon in Icons) {
                if (Icons[icon].id !== "menuIcon") {
                    const text = document.getElementById(Icons[icon].textId)
                    text.style.display = "none"
                }
            }
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