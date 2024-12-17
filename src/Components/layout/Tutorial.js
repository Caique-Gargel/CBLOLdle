import styles from "./Tutorial.module.css"
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
function Tutorial()
{
    const [open,setOpen] =useState(false);
    return(
        
        <div className={styles.tutorial} > 
            <button onClick={()=>setOpen(true)} className={styles.btn}>Como Jogar</button>
            
            <Modal isOpen={open}/>
        </div>
    )
}
export default Tutorial