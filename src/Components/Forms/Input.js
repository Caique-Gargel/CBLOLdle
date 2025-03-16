import styles from "./Input.module.css"

function Input({placeholder,handleOnchange,type, name})
{
    return(
        <input autoComplete="off" className={styles.ipt} placeholder={placeholder} onChange={handleOnchange} type={type} 
        name={name} id={name} />
    )
}
export default Input