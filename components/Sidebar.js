import styles from './Sidebar.module.css'

export default function Sidebar() {

    let mini = true

    function toggleSidebar() {
        if (mini) {
            document.getElementById("mySidebar").style.width = "280px"
            mini = false
        } else {
            document.getElementById("mySidebar").style.width = "85px"
            mini = true
        }
    }

    return (
        <div id="mySidebar" className={styles.sidebar} onMouseOver={toggleSidebar} onMouseOut={toggleSidebar}>
            <a href="/">
                <span>
                    <i className="material-icons">home</i>
                    <span id="iconText" className="icon-text">Jeon's Factory</span>
                </span>
            </a>
            <a href="/game">
                <span>
                    <i className="material-icons">sports_esports</i>
                    <span id="iconText" className="icon-text">Game Directory</span>
                </span>
            </a>
            <a href="/music">
                <span>
                    <i className="material-icons">headphones</i>
                    <span id="iconText" className="icon-text">Music Library</span>
                </span>
            </a>
        </div>
    )
}
