import styles from "./SubmitButton.module.css"
import { MdKeyboardArrowRight } from "react-icons/md";

function SubmitButton(){
    return(
        <button className={styles.btn}><MdKeyboardArrowRight/></button>
    )
}
export default SubmitButton