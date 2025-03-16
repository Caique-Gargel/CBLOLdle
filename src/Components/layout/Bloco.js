import styles from "./Bloco.module.css"
import {useRef } from "react"
function Bloco({texto,titulo,customClass,img})
{
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView() 
    return(
        <div className={styles.containerBloco}>
            <div className={`${styles.bloco} ${styles[customClass]}`}>
                <h2>{titulo}</h2><br/>
                <p>{texto}</p>
                {img &&(
                    <img ref={myRef} onLoad={executeScroll} src={img} myRef/>
                )}
                
            </div>
        </div>
        
    );
}
export default Bloco