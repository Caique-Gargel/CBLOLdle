import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
import Tutorial from "../layout/Tutorial";
function Home(){
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <Tutorial/>
            <Bloco texto="Digite o nome de um pro-player que tenha jogado no CBLOL em algum momento e use as dicas para descobrir o jogador do dia! " titulo="Adivinhe o jogador do CBLOL de hoje!"/>
        </div>
        
    )
}
export default Home;