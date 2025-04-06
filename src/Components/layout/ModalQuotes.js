import styles from "./ModalQuotes.module.css"


function ModalQuotes ({isOpen, setOpen})
{
    const handleBackgroundClick = (event) => {
        
        if (event.target.id === "background") {
            setOpen(false);
        }
      };
    if(isOpen)
    {
        window.scrollTo({top: 0,behavior: 'smooth'})
        
        return(

            <div className={styles.background} id="background" onClick={handleBackgroundClick}>
                <div className={styles.modal}>
                    <button className={styles.btn} onClick={()=>setOpen(false)} >X</button>
                    <h1>Olá, Bem Vindo ao CBLOLdle  </h1>
                    <hr/>
                    <p>Olá! Seja bem-vindo ao CBLOLDLE, o game de adivinhação de jogadores que passaram pelo CBLOL.</p> <p>Meu nome é Caique Gargel de Oliveira e sou um desenvolvedor iniciante. Este site foi criado com o propósito de divulgar meu trabalho como desenvolvedor full stack.</p>
                    <p> Para mais informações sobre meu trabalho, acesse minhas redes sociais: <a href="https:www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220">LinkedIn</a> e <a href="https://github.com/Caique-Gargel">GitHub</a> e para ver meu portifolio <a href="https://vercel.com/caique-gargels-projects/meu-portifolio">Portifólio</a></p>
                    <p>Obs: O jogo ainda está em fase de desenvolvimento, é possível que você encontre diversos erros, por favor tenha paciência </p>
                
                    
                    <h1>Como Jogar ? </h1>
                    <hr/>
                    <p>Digite o nome do jogador dono da frase. A cor indicará se você acertou ou errou: </p>
                    <br/>
                    <p> <b className={styles.green}>Verde</b>: Você acertou </p>
                    <p> <b className={styles.red}>Vermelho:</b> Você errou</p>
                    


                    
                    <h1>Exemplo: </h1>
                    <hr/>
                    <p>  Considere que a frase do dia é: </p>
                    <img src={require("../../Exemplo3.png")} alt={"ex1"}/>
                    <p> O dono dessa Frase é o <b className={styles.topico}>Yoda</b> </p>
                    <p>Se a sua resposta for o <b className={styles.red}>Robo</b>, você verá isso :</p>
                    <img src={require("../../Exemplo4.png")} alt={"ex1"}/>
                    <p>Se a sua resposta for o <b className={styles.green}>Yoda</b>, você verá isso :</p>
                    <img src={require("../../Exemplo5.png")} alt={"ex1"}/>
                    
                </div>
                
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default ModalQuotes