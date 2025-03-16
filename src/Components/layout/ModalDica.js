import styles from "./ModalDica.module.css"


function ModalDica ({isOpen, setOpen,res})
{
    const handleBackgroundClick = (event) => {
        
        if (event.target.id === "background2") {
            setOpen(false);
        }
      };
    if(isOpen)
    {
        
            window.scrollTo({top: 0,behavior: 'smooth'})
           
        return(

            <div className={styles.background} id="background2" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={()=>setOpen(false)} >X</button>
                    <h1>DICA</h1>
                    <hr/>
                    <p>Nome: {res.name[0]} ...</p>
                    <br/>
                    <p>Situação: {res.Current}</p>
                    <br/>
                    <p>Posição: {res.Position}</p>
                </div>
                
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default ModalDica