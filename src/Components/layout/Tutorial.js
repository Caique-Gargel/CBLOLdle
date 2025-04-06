import styles from "./Tutorial.module.css"

import Modal from "./Modal";
import ModalQuotes from "./ModalQuotes";
function Tutorial({open,setOpen,tipo})
{
   
    return(
        
        <div className={styles.tutorial} > 
            <button onClick={()=>setOpen(true)} className={styles.btn}>Como Jogar</button>
            
            {tipo==="classic" &&(
                <Modal isOpen={open} setOpen={setOpen}/>
            )}
            {tipo==="quotes" &&(
                <ModalQuotes isOpen={open} setOpen={setOpen}/>
            )}
            
            
        </div>
    )
}
export default Tutorial