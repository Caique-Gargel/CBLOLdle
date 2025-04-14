import styles from './Button.module.css';
function Button ({HandleOnclick,id}){
    
    return (
        <div className={styles.tutorial} > 
            <button id={id} onClick={HandleOnclick}  className={styles.btn}>Confirmar</button>
          
        
        
        </div>
    )
} export default Button
