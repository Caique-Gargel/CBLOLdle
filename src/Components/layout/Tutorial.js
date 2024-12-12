import styles from "./Tutorial.module.css"
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";

function Tutorial()
{
    return(

        <div className={styles.tutorial} > 
            <button className={styles.btn}>Como Jogar</button>
        </div>
    )
}
export default Tutorial