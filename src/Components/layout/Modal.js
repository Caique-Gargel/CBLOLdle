import styles from "./Modal.module.css"


function Modal ({isOpen, setOpen})
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
                    <h1>Olá, Bem Vindo ao CBLOLdle </h1>
                    <hr/>
                    <p>Olá! Seja bem-vindo ao CBLOLDLE, o game de adivinhação de jogadores que passaram pelo CBLOL.</p> <p>Meu nome é Caique Gargel de Oliveira e sou um desenvolvedor iniciante. Este site foi criado com o propósito de divulgar meu trabalho como desenvolvedor full stack.</p>
                    <p> Para mais informações sobre meu trabalho, acesse minhas redes sociais: <a href="https:www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220">LinkedIn</a> e <a href="https://github.com/Caique-Gargel">GitHub</a> </p>
                    <p>Obs: O jogo ainda está em fase de desenvolvimento, é possível que você encontre diversos erros, por favor tenha paciência </p>
                
                    
                    <h1>Como Jogar ? </h1>
                    <hr/>
                    <p>Digite o nome de um jogador que já tenha jogado no CBLOL para revelar suas propriedades. A cor dos quadros mudará para indicar o quão próximo você está da resposta correta:</p>
                    <p> <b className={styles.green}>Verde</b>: você acertou exatamente a propriedade.</p>
                    <p> <b className={styles.yellow}>Amarelo:</b> você acertou parcialmente.</p>
                    <p> <b className={styles.red}>Vermelho:</b> não há relação entre seu palpite e a propriedade correta.</p>
                    <p> ↑ ↓ Setas também indicarão se a resposta correta está acima ou abaixo do seu palpite.</p>
                    <p> <b> Use as cores como dica para descobrir o jogador do dia!</b></p>


                    <h1>Propiedades </h1>
                    <hr/>
                    <p><b className={styles.topico}>Time:</b> Atua/Último time do jogador, Caso o jogador tenha jogado naquele time anteriormente será Amarelo, para jogadores aposentados é levado em consideração o último time de atuação</p>
                    <p><b className={styles.subtopico}>Possíveis Valores:</b> LOUD, Pain, Red Canids, etc…</p>
                    <br/>
                    <p><b className={styles.topico}>Títulos:</b> Número de vezes em que aquele jogador foi campeão, as setas ↑↓ indicam se o número de títulos está abaixo ou acima do valor respondido</p>
                    <br/>
                    <p><b className={styles.topico}>Posição:</b> Lane principal daquele jogador, em caso de jogadores que jogaram em mais de uma lane levar em consideração a mais jogada</p>
                    <p><b className={styles.subtopico}>Possíveis valores:</b> TOP, MID, JUNGLE, ADC E SUP</p>
                    <br/>
                    <p><b className={styles.topico}>Idade:</b> Idade atual do jogador, obs: grandes chances de conter erros!!!!</p>
                    <br/>
                    <p><b className={styles.topico}>Situação:</b> Se o jogador está atuando no cblol, jogadores no tier 2, aposentados ou em outras ligas terão o status de NÃO ATUANDO.</p>
                    <p><b className={styles.subtopico}>Possíveis valores:</b> ATUANDO e NÃO ATUANDO</p>
                    <br/>
                    <p><b className={styles.topico}>Origem:</b> Nacionalidade/Naturalidade do jogador</p>
                    <p><b className={styles.subtopico}>Possíveis Valores:</b> Brasil, Coreia, Argentina e etc…</p>

                    <h1>Exemplo </h1>
                    <hr/>
                    <p>Considere que o player do dia é o <b className={styles.topico}>DyNquedo.</b></p>
                    <p>Se a sua resposta for o <b className={styles.subtopico}>Robo</b>, essas propriedades aparecerão:</p>
                    <img src={require("../../Exemplo1.png")} alt={"ex1"}/>
                    <p>Time: <b className={styles.yellow}>Amarelo</b></p>
                    <p>É parcialmente correto, pois o DyNquedo já jogou na LOUD, porém atual está na Pain</p>
                    <br/>

                    <p>Títulos: <b className={styles.red}>Vermelho</b> com uma seta para baixo</p>
                    <p>A seta para baixo indica que o DyNquedo possui menos títulos que o Robô (3 &#60; 7)</p>
                    <br/>

                    <p>Posição: <b className={styles.red}>Vermelho</b></p>
                    <p>Incorreto pois a lane do Robô é TOP e a do DyNquedo é MID</p>
                    <br/>

                    <p>Idade: <b className={styles.red}>Vermelho</b> com uma seta para cima</p>
                    <p>A seta para cima indica que o DyNquedo é mais velho que o Robô (27 &#60; 26)</p>
                    <br/>

                    <p>Situação: <b className={styles.green}>Verde</b></p>
                    <p>Correto pois ambos os jogadores estão atuando no cblol</p>
                    <br/>

                    <p>Origem: <b className={styles.green}>Verde</b></p>
                    <p>Correto pois ambos os jogadores são brasileiros</p>
                    <br/>

                    <p>Ao Responder DyNquedo essas propriedades aparecerão:</p>
                    <img src={require("../../Exemplo2.png")} alt={"ex2"}/>
                </div>
                
            </div>
        )
    }
    else{
        return <></>
    }
    
}
export default Modal