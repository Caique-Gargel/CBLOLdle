import logo from "../../5.png"
import MenuModos from "../layout/MenuModos"
import styles from "./Date.module.css"
function Date(){
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <MenuModos modo="date"/>
            <br/>
            <h1>Em Breve</h1>
        
        </div>
    )
}export default Date
