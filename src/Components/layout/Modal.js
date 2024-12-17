import styles from "./Modal.module.css"
import { useState } from "react"

function Modal ({isOpen})
{
    if(isOpen)
    {
        return(

            <div className={styles.background}>
                <div className={styles.modal}>
                    <p>aaaaa</p>
                </div>
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default Modal