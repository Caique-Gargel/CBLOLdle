import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
function Home(){
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <Bloco texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, mi in consectetur viverra, nulla eros finibus est, non facilisis lacus orci sit amet velit. Quisque varius ultricies turpis, venenatis facilisis neque sodales bibendum. Nulla dictum quam sit amet tincidunt volutpat. Curabitur elementum, nisi ultricies auctor molestie, dolor ligula porta odio, in maximus enim ipsum ut lorem. Sed facilisis nulla finibus, interdum risus sed, pharetra ipsum. Duis tincidunt, mi ac convallis vulputate, eros elit suscipit sem, quis euismod justo urna pretium mauris. Vivamus vitae odio quis lorem ullamcorper dictum. Praesent varius erat quis ornare ultricies. In feugiat mollis sem tincidunt cursus. Fusce eget facilisis massa. Nam imperdiet dui arcu. Vestibulum fermentum ligula non euismod fringilla. Etiam dictum eros quis sagittis tristique. Nunc eu sapien interdum, pulvinar nisi eget, malesuada nulla. Integer consectetur metus ac lorem efficitur tincidunt." titulo="titulo"/>
        </div>
        
    )
}
export default Home;