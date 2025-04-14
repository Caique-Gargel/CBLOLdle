import styles from "./Bloco.module.css"
import {useRef,useEffect,useState} from "react"
import Select from "../Forms/Select"
import Button from "../Forms/Button"
import { Link } from "react-router-dom"
import imgA from '../../A.png'
import imgB from '../../B.png'
import imgC from '../../C.png'

function Bloco({texto,titulo,customClass,img,perguntaBonus})
{
    const myRef = useRef(null)
    const [selectedOptionCampeao, setSelectedOptionCampeao] = useState(1);
    const [selectedOptionResultado, setSelectedOptionResultado] = useState(1);
    const [resBonus,setResBonus] =useState()
    const [flagRes,setflagRes] =useState()
    const handleSelectChangeCampeao = (e) => {
        setSelectedOptionCampeao(e.target.value);
    };
    
    const handleSelectChangeResultado = (e) => {
        setSelectedOptionResultado(e.target.value);
    };
  
    const OptionsResultado=[
        { id: 1, name: '3x0' },
        { id: 2, name: '3x1' },
        { id: 3, name: '3x2' },
    ]
    const [randOrderedTeams, setRandOrderedTeams] = useState([]);

    useEffect(() => {
        if (perguntaBonus) {
            const shuffledTeams = Math.floor(Math.random() * 2) > 0
                ? [{ id: 1, name: perguntaBonus.campeao }, { id: 2, name: perguntaBonus.vice }]
                : [{ id: 1, name: perguntaBonus.vice }, { id: 2, name: perguntaBonus.campeao }];
            setRandOrderedTeams(shuffledTeams);
        }
    }, [perguntaBonus]);
     useEffect(() => {
            if (customClass === "correct" && myRef.current) {
                myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, [customClass]); // Executa o scroll apenas quando `primeiro` ou `res` mudarem


        
        function EnviaRes(e){
            
            e.preventDefault()
            setResBonus(" "+randOrderedTeams[selectedOptionCampeao-1].name+" - "+OptionsResultado[selectedOptionResultado-1].name)
            if( perguntaBonus.campeao === randOrderedTeams[selectedOptionCampeao-1].name &&  perguntaBonus.resultado === OptionsResultado[selectedOptionResultado-1].name)
            {
                setflagRes("BOA!");
                /*setResBonus("acertou")*/
            }
            else
                setflagRes("Resposta Errada");
                /*setResBonus("errou")*/
            
        }
    return(
        <div className={styles.containerBloco}>
            <div className={`${styles.bloco} ${styles[customClass]}`}>
                <h2>{titulo}</h2><br/>
                {customClass==="date" &&(
                    <img src={img}/>
                )}
                <p>{texto}</p>
                
                
                {customClass==="correct" &&(
                    
                    <div className={styles.RedirectContainer} ref={customClass === "correct" ? myRef : null}>
                    {perguntaBonus ?(
                        <div className={styles.perguntaBonusContainer}>
                            <h2>Pergunta Bonus</h2> 
                            <p>Qual foi o Resultado da Final</p>
                            <form>
                            
                            
                            <Select text="Campeão" name="campeao" options={randOrderedTeams} handleOnChange={handleSelectChangeCampeao} value={selectedOptionCampeao} customClass="perguntaBonus"/>
                            <Select text="Resultado" name="ano" options={OptionsResultado}  handleOnChange={handleSelectChangeResultado} value={selectedOptionResultado} customClass="perguntaBonus"/>
                            <Button HandleOnclick={EnviaRes}/>
                            </form>
                            {resBonus &&(
                                <div className={styles.containerResBonus}>
                                
                               
                                { flagRes=="Resposta Errada" ?(
                                    <>
                                    <p className={styles.label}>Seu palpite:</p>
                                    <p className={styles.errado}>{resBonus}</p>
                                    <p className={styles.label}>Resposta</p>
                                    <p className={styles.certo}>{perguntaBonus.campeao+" - "+perguntaBonus.resultado}</p>
                                    
                                    
                                    </>
                                ):(
                                    <>
                                    <br/>
                                    <p className={styles.certo}>{resBonus}</p>
                                    <p>{flagRes}</p>
                                    </>
                                )

                                }
                                </div>
                                
                                
                            )}
                        
                        
                        </div>
                    ):(
                        <img  src={img} />
                    )
                        
                    }
                    
                    <p>Aproveite para jogar os outros modos:</p>
                    <a href="/" to="Classico"><img className={styles.imgRedirect} src={imgA}/></a>
                    <a href="/falas"><img className={styles.imgRedirect} src={imgB}/></a>
                    <a href="/date"><img className={styles.imgRedirect} src={imgC}/></a>
                    </div>
                )}
                
            </div>
        </div>
        
    );
}
export default Bloco