import styles from "./Form.module.css"
import Input from "./Input"
import SubmitButton from "./SubmitButton"

function Form({event})
{
    return(
        <form autoComplete="off" className={styles.form}>
            <Input placeholder="Digite o Nome de um Jogador..."/>
            <SubmitButton/>
            
        </form>
    )
}
export default Form