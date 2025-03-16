import { useRef,useEffect,useState} from "react";
import "./Quadrado.css";
import styles from "./Quadrado.module.css"

function Quadrado({text,categorie,customClass,img,flagPrimeiro})
{
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        var delay;
        if(categorie=="Jogador")
            delay=0
        if(categorie=="Time")
            delay=1;
        if(categorie=="Títulos")
            delay=2;
        if (categorie=="Posição")
            delay=3;
        if (categorie=="Idade")
            delay=4;
        if (categorie=="Situação")
            delay=5;
        if (categorie=="Origem")
            delay=6;

      const timer = setTimeout(() => setFlipped(true), 500*delay);
      return () => clearTimeout(timer);
    }, []);
    var m;
    try {
        m = require(`../../imgPlayers/${img}.png`);
    } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
        img=null;
    }
    if(categorie=="Idade" && text==0)
        text="Não informado"
    if(!flagPrimeiro) return(
      
        <div className={styles.container}>
            <p>{categorie}</p>
            <hr/>
            <div  className={`${styles.quadrado} ${styles[customClass]} `}>
            {img 
                ?<img src={m} alt={img} title={img}></img>
                :<p>{text}</p>
            }
                
                
            </div>
        </div>
        
    )
    else return(
        <div className={styles.container}>
            <p>{categorie}</p>
            <hr/>

                <div className={`${styles.flipCardInner} ${flipped ? "flipped" : ""}`}>
                    <div className={styles.flipCardFront}>
                        
                    </div>
                    <div  className={`${styles.flipCardBack} ${styles[customClass]} `}>
                        {img 
                            ?<img src={m} alt={img} title={img}></img>
                            :<p>{text}</p>
                        }
                    </div>
                </div>

        </div>
    )
}
export default Quadrado