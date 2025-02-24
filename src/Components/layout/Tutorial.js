import styles from "./Tutorial.module.css"

import Modal from "./Modal";
import { useState } from "react";
function Tutorial()
{
    const [open,setOpen] =useState(true);
    return(
        
        <div className={styles.tutorial} > 
            <button onClick={()=>setOpen(true)} className={styles.btn}>Como Jogar</button>
            
            
            <Modal isOpen={open} setOpen={setOpen}/>
        </div>
    )
}
export default Tutorial