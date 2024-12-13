import styles from "./Input.module.css"

function Input({placeholder})
{
    return(
        <input className={styles.ipt} placeholder={placeholder}/>
    )
}
export default Input