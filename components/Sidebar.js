import styles from './Sidebar.module.css'

export default function Sidebar() {

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

    function sidebarButton() {
        if (document.getElementById("mySidebar").offsetWidth === 250) {
            document.getElementById("mySidebar").style.width = "50px";
            iconTextDisplay(false)
        } else {
            document.getElementById("mySidebar").style.width = "250px";
            setTimeout(iconTextDisplay(true), 10000)
        }

    }

    function getIconData(iconId) {
        for (const icon in Icons) {
            if (Icons[icon].id === iconId) {
                return Icons[icon]
            }
        }
    }

    function iconTextDisplay(isDisplay) {
        let display = "none"
        if (isDisplay) {
            display = "flex"
        }
        for (const icon in Icons) {
            if (Icons[icon].id !== "menuIcon") {
                const text = document.getElementById(Icons[icon].textId)
                text.style.display = display
            }
        }
    }

    function iconHover(e, iconId) {
        const icon = getIconData(iconId)
        const img = document.getElementById(icon.id)
        const text = document.getElementById(icon.textId)

        if (img.src.substring(img.src.lastIndexOf('/')+1) == icon.png) {
            img.src = icon.hover
            if (iconId != "menuIcon") {
                text.style.color = "white"
            }
        } else {
            img.src = icon.original
            if (iconId != "menuIcon") {
                text.style.color = "#818181"
            }
        }
    }

    return (
        <div id="mySidebar" className={styles.sidebar}>
            <a href="javascript:void(0)" onClick={sidebarButton}>
                <img id="menuIcon" src="/menuIcon.png" onClick={sidebarButton} onMouseOver={e => iconHover(e, "menuIcon")} onMouseOut={e => iconHover(e, "menuIcon")} />
            </a>
            <a href="#" onMouseOver={e => iconHover(e, "homeIcon")} onMouseOut={e => iconHover(e, "homeIcon")}> 
                <img id="homeIcon" src="/homeIcon.png" />
                <div id="homeTitle">Jeon's Factory</div>
            </a>
            <a href="#" onMouseOver={e => iconHover(e, "gameIcon")} onMouseOut={e => iconHover(e, "gameIcon")}> 
                <img id="gameIcon" src="/gameIcon.png" /> 
                <div id="gameTitle">Game Directory</div>
            </a>
            <a href="#" onMouseOver={e => iconHover(e, "musicIcon")} onMouseOut={e => iconHover(e, "musicIcon")}> 
                <img id="musicIcon" src="/musicIcon.png" /> 
                <div id="musicTitle">Music Library</div>
            </a>

        </div>
    )
}
