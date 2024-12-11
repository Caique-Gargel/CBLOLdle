import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
function Home(){
    return(
        <div>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <Bloco texto="dsadsadsadsads" titulo="titulo"/>
        </div>
        
    )
}
export default Home;