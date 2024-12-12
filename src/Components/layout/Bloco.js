import styles from "./Bloco.module.css"

function Bloco({texto,titulo})
{
    return(
        <div className={styles.bloco}>
            <h2>{titulo}</h2><br/>
            <p>{texto}</p>
          
        </div>
        
    );
}
export default Bloco