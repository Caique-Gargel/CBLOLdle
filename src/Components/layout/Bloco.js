import styles from "./Bloco.module.css"

function Bloco({texto,titulo})
{
    return(
        <div className={styles.bloco}>
            <h1>{titulo}</h1>
            <p>{texto}</p>
          
        </div>
        
    );
}
export default Bloco