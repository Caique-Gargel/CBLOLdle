import styles from "./SubmitButton.module.css"
import { MdKeyboardArrowRight } from "react-icons/md";

function SubmitButton({onclick}){
    return(
        <button className={styles.btn} onClick={onclick}><MdKeyboardArrowRight/></button>
    )
}
export default SubmitButton