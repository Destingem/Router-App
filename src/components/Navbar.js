import { NavLink } from "react-router-dom"
import styles from "./layout/MainNavigation.module.css"

export default function NavBar(){
    return(
        <header className={styles.header}>
            
            <p className={styles.logo}>Quotes</p>
            <div className={styles.nav}>
            <ul >
                <li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="/compose">Compose</NavLink></li>
            </ul>
            </div>
        
        </header>
    )
}