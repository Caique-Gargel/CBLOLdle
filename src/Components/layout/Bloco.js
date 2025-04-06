import styles from "./Bloco.module.css"
import {useRef } from "react"
import { Link } from "react-router-dom"
function Bloco({texto,titulo,customClass,img,modo})
{
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView() 
    return(
        <div className={styles.containerBloco}>
            <div className={`${styles.bloco} ${styles[customClass]}`}>
                <h2>{titulo}</h2><br/>
                <p>{texto}</p>
                {img &&(
                    <div className={styles.RedirectContainer}>
                    <img ref={myRef} onLoad={executeScroll} src={img} myRef/>
                    <p>Aproveite para jogar Os Outros Modos:</p>
                    <a href="/" to="Classico">Classico</a>
                    <a href="/falas">Quem disse isso ?</a>
                    <a href="/date">Que final foi essa ?</a>
                    </div>
                )}
                
            </div>
        </div>
        
    );
}
export default Bloco