import styles from "./ModalSilhouette.module.css"


function ModalSilhouette ({isOpen, setOpen})
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
                    <p>  Você receberá uma imagem de um jogador do CBLOL pixelada </p>
                    <img src={require("../../ExemploSilhueta1.png")} alt={"ex1"}/>
                    <p> A cada tentativa a imagem fica mais visivel </p>
                    <img src={require("../../ExemploSilhueta2.png")} alt={"ex1"}/>
                    <p>Tente acertar o nome do jogador</p>
                    <img src={require("../../ExemploSilhueta3.png")} alt={"ex1"}/>
                    
                    <p> <b className={styles.green}>Verde</b>: Você acertou </p>
                    <p> <b className={styles.red}>Vermelho:</b> Você errou</p>
                    
                    
                </div>
                
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default ModalSilhouette