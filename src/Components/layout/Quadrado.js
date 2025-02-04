import styles from "./Quadrado.module.css"

function Quadrado({tipo,text,categorie,customClass})
{
    return(
      
        <div className={styles.container}>
            <p>{categorie}</p>
            <hr/>
            <div className={`${styles.quadrado} ${styles[customClass]}`}>
                <p>{text}</p>
            </div>
        </div>
        
    )
}
export default Quadrado