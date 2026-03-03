import styles from "./Bloco.module.css"
import { useRef, useEffect, useState } from "react"
import Select from "../Forms/Select"
import Button from "../Forms/Button"
import ImagemPixelada from "./ImagemPixelada.js"
import imgA from '../../Icons/ModoA.png'
import imgB from '../../Icons/ModoB.png'
import imgC from '../../Icons/ModoC.png'
import imgD from '../../Icons/ModoD.png'
import imgE from '../../Icons/ModoE.png'
import imgF from '../../Icons/ModoF.png'

function Bloco({ texto, titulo, customClass, img, perguntaBonus,tentativas }) {
    const myRef = useRef(null)
    const [selectedOptionCampeao, setSelectedOptionCampeao] = useState(1);
    const [selectedOptionResultado, setSelectedOptionResultado] = useState(1);
    const [resBonus, setResBonus] = useState()
    const [flagRes, setflagRes] = useState()
    const handleSelectChangeCampeao = (e) => {
        setSelectedOptionCampeao(e.target.value);
    };

    const handleSelectChangeResultado = (e) => {
        setSelectedOptionResultado(e.target.value);
    };

    const OptionsResultado = [
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
    
   // Executa o scroll apenas quando `primeiro` ou `res` mudarem*/



    function EnviaRes(e) {

        e.preventDefault()
        setResBonus(" " + randOrderedTeams[selectedOptionCampeao - 1].name + " - " + OptionsResultado[selectedOptionResultado - 1].name)
        if (perguntaBonus.campeao === randOrderedTeams[selectedOptionCampeao - 1].name && perguntaBonus.resultado === OptionsResultado[selectedOptionResultado - 1].name) {
            setflagRes("BOA!");
            /*setResBonus("acertou")*/
        }
        else
            setflagRes("Resposta Errada");
        /*setResBonus("errou")*/

    }
    function scrollToBottom() {
       /* window.scrollTo({top: 0,behavior: 'smooth'})*/
        const myDiv = document.getElementById('carrosel');
        const height = myDiv.getBoundingClientRect().height;
        
        window.scrollTo({
            top: document.body.scrollHeight * 0.47 ,
            behavior: "smooth",
        });
    }
    return (
        <div className={styles.containerBloco}>
            <div className={`${styles.bloco} ${styles[customClass]}`}>
                <h2>{titulo}</h2><br />
                {customClass === "silhouette"  && (
                    <ImagemPixelada img={img.src} width={img.width} height={img.height} fatorReducao={tentativas}/>
                   // <img src={img.src} />
                )}
                {customClass === "date"  && (
                    //<ImagemPixelada img={img} />
                    <img src={img} />
                )}
                <p>{texto}</p>


                {customClass === "correct" && (

                    <div className={styles.RedirectContainer} onLoad={scrollToBottom} ref={customClass === "correct" ? myRef : null}>
                        {perguntaBonus ? (
                            <div className={styles.perguntaBonusContainer}>
                                <h2>Pergunta Bonus</h2>
                                <p>Qual foi o Resultado da Final</p>
                                <form>


                                    <Select text="Campeão" name="campeao" options={randOrderedTeams} handleOnChange={handleSelectChangeCampeao} value={selectedOptionCampeao} customClass="perguntaBonus" />
                                    <Select text="Resultado" name="ano" options={OptionsResultado} handleOnChange={handleSelectChangeResultado} value={selectedOptionResultado} customClass="perguntaBonus" />
                                    <Button HandleOnclick={EnviaRes} />
                                </form>
                                {resBonus && (
                                    <div className={styles.containerResBonus}>


                                        {flagRes == "Resposta Errada" ? (
                                            <>
                                                <p className={styles.label}>Seu palpite:</p>
                                                <p className={styles.errado}>{resBonus}</p>
                                                <p className={styles.label}>Resposta</p>
                                                <p className={styles.certo}>{perguntaBonus.campeao + " - " + perguntaBonus.resultado}</p>


                                            </>
                                        ) : (
                                            <>
                                                <br />
                                                <p className={styles.certo}>{resBonus}</p>
                                                <p>{flagRes}</p>
                                            </>
                                        )

                                        }
                                    </div>


                                )}


                            </div>
                        ) : (
                            <img className={styles.imgSucesso} src={img} />
                        )

                        }
                        <p>faça uma doação para manter o projeto vivo🥺 </p>
                        <a href="/donation"><img className={styles.imgRedirect} src={imgF} /></a>
                        <p>Aproveite para jogar os outros modos:</p>
                        <a href="/" to="Classico"><img className={styles.imgRedirect} src={imgA} /></a>
                        <a href="/falas"><img className={styles.imgRedirect} src={imgB} /></a>
                        <a href="/date"><img className={styles.imgRedirect} src={imgC} /></a>
                        <a href="/lineup"><img className={styles.imgRedirect} src={imgD} /></a>
                        <a href="/silhouette"><img className={styles.imgRedirect} src={imgE} /></a>
                    </div>
                )}

            </div>
        </div>

    );
}
export default Bloco