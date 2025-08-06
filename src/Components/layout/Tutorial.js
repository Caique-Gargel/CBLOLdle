import styles from "./Tutorial.module.css"

import Modal from "./Modal";
import ModalQuotes from "./ModalQuotes";
import ModalDate from "./ModalDate";
import ModalLineup from "./ModalLineup";
function Tutorial({open,setOpen,tipo})
{
   
    return(
        
        <div className={styles.tutorial} > 
            <button onClick={()=>setOpen(true)} className={styles.btn}>Como Jogar</button>
            {tipo==="date" &&(
                <ModalDate isOpen={open} setOpen={setOpen}/>
            )}
            {tipo==="classic" &&(
                <Modal isOpen={open} setOpen={setOpen}/>
            )}
            {tipo==="quotes" &&(
                <ModalQuotes isOpen={open} setOpen={setOpen}/>
            )}
            {tipo==="lineup" &&(
                <ModalLineup isOpen={open} setOpen={setOpen}/>
            )}
            
            
        </div>
    )
}
export default Tutorial