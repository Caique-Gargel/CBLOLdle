import styles from "./Silhouette.module.css";
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
import Tutorial from "../layout/Tutorial";
import MenuModos from "../layout/MenuModos";
import SubmitButton from "../Forms/SubmitButton";
import AutoCompleteInput from "../Forms/AutoCompleteInput";
import imgcorrect from "../../parabens.gif"
import environment from "../../config";
import { useState, useEffect} from "react"

import ResultFala from "../layout/ResultFala";
function Silhouette() {
    const [open,setOpen] =useState(false);
    const [resposta,setResposta] = useState([])
    const [players,setPlayers] = useState([])
    const [playerDoDia,setplayerDoDia] = useState([])
    const [acertou,setAcertou]=useState(false)
    const [imagemData, setImagemData] = useState(null);
    const [ListResposta,setListResposta] =useState([])
    const [tentativas,setTentativas] =useState(13.5)
    const [fatorInicial,setFatorInicial] =useState(10)
    const inpu =document.querySelector("#teste");
    
     useEffect(()=>{
        fetch(`${environment.DATA_API_URL}/players`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
        }).then(resp => resp.json())
        .then((data)=>{
           
            setPlayers(data)

        })
        .catch((err)=>console.log(err))
    },[])
    
    useEffect(()=>{
        
        var hoje =new Date().toLocaleString().substr(0, 10)
        if(players.length>0)
        {
            setplayerDoDia(players[generateidPerDate()]);
            if(localStorage.getItem("dateSilhouette")!=hoje)
            {
                localStorage.removeItem("listResSilhouette")
                localStorage.removeItem("dateSilhouette");  
            }
            else 
                setListResposta(JSON.parse(localStorage.getItem("listResSilhouette")))
        }
            
    },[players])

    useEffect(() => {
        async function carregarImagemJogador() {
            if (playerDoDia && playerDoDia.name) {
                try {
                    const imagem = await carregaImg(playerDoDia.name);
                    if (imagem) {
                        if(acertou)
                            setTentativas(1);
                        else
                        {
                             if(ListResposta.length === 0)
                                setTentativas(calcularFatorInicial(imagem.width, imagem.height));
                            setFatorInicial(calcularFatorInicial(imagem.width, imagem.height));
                            setImagemData(imagem); // Armazena o objeto completo { src, width, height }
                        }
                      
                    } else {
                        setImagemData(null);
                    }
                } catch (error) {
                    console.error("Erro ao carregar imagem:", error);
                    setImagemData(null);
                }
            }
        }

        carregarImagemJogador();
    }, [playerDoDia]);

    useEffect(() => {
        var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 500);
            inpu.disabled = true;
            setTentativas(1);
        }
        else{
            const decremento = calcularDecremento(fatorInicial);
            setTentativas(fatorInicial - (ListResposta.length * decremento));
        }
       
        
       
        
    }, [ListResposta]) 
    function calcularDecremento(fatorInicial) {
        // Queremos que em 9 cliques chegue a 1
        // Se fatorInicial = 10, decremento = (10 - 1) / 9 = 1
        // Se fatorInicial = 20, decremento = (20 - 1) / 9 ≈ 2.11
        return (fatorInicial - 1) / 7;
    }
    function calcularFatorInicial(larguraImagem, alturaImagem, tamanhoReferencia = 100) {
        // Usa a média das dimensões ou a maior dimensão como referência
        const tamanhoMedio = (larguraImagem + alturaImagem) / 2;
        
        // Quanto maior a imagem, maior o fator inicial
        // O fator mínimo é 10 (para imagem de tamanhoReferencia)
        // O fator aumenta proporcionalmente ao tamanho da imagem
        const fatorInicial = Math.max(10, Math.ceil(tamanhoMedio / tamanhoReferencia * 10));
        
        return fatorInicial;
    }

     function seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    function generateidPerDate() {
        // Calcular o número total de dias desde 01/01/2000 até hoje
        const startDate = new Date(2000, 0, 1); // Janeiro é mês 0 em JavaScript
        const today = new Date();
        
        const totalDays = Math.floor(((today - startDate)-(1000 * 60 * 60 *1) ) / (1000 * 60 * 60 * 24));
        
        
        // Gerar um número entre 1 e 45
        const randomValue = seededRandom(totalDays+11);
        const id = Math.floor(randomValue * 255);
    
        return id;
    }
      function EnviaRes(e){
        e.preventDefault()
        var playerAdivinhado= players.find(({ name }) => name === resposta);
        
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === resposta))==null){
                setListResposta(ListResposta => [...ListResposta,playerAdivinhado]);
                localStorage.setItem("listResSilhouette", JSON.stringify([...ListResposta,playerAdivinhado]));
                localStorage.setItem("dateSilhouette",new Date().toLocaleString().substr(0, 10))
            }

    } 
    function EnviaRes2(res){
        
        var playerAdivinhado= players.find(({ name }) => name === res);
       
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === res))==null)
            {
                setListResposta(ListResposta => [...ListResposta,playerAdivinhado]);
                localStorage.setItem("listResSilhouette", JSON.stringify([...ListResposta,playerAdivinhado]));
                localStorage.setItem("dateSilhouette",new Date().toLocaleString().substr(0, 10))
            }
    } 
   function carregaImg(img) {
        try {
            const src = require(`../../imgPlayers/${img}.png`);
            return new Promise((resolve, reject) => {
            const image = new window.Image();
            image.src = src;
            image.onload = () => resolve({ src, width: image.naturalWidth, height: image.naturalHeight });
            image.onerror = (err) => reject(err);
            });
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') throw e;
            return Promise.resolve(null);
        }
    }
    return ( 
            <div className={styles.home}>
                <img className={styles.logo} src={logo} alt="cbloldle"></img>
                <MenuModos modo="silhouette"/>
                <Tutorial setOpen={setOpen} open={open} tipo="silhouette"/>

                {imagemData &&(
                
                    <Bloco  titulo="Adivinhe o player" texto="A cada tentativa a imagem melhora" customClass="silhouette" img={imagemData} tentativas={tentativas}/>
                    )
                }
                <form className={styles.form}>
                    <AutoCompleteInput id="teste"   suggestions={players.filter(player => player.id >= 0).map(player => player.name)} inputValue={resposta} setInputValue={setResposta} submit={EnviaRes2}/>
                    {/*<Input placeholder="Digite o Nome de um Jogador..." type="text" name="name" handleOnchange={(e)=>setResposta(e.target.value)}/>*/}
                    <SubmitButton onclick={EnviaRes}/>  
                </form>
                
                <div className={styles.downUp}>
                {
                    ListResposta.map((item)=>(
                        <ResultFala res={item} diario={playerDoDia} primeiro={ListResposta[ListResposta.length-1]} />
                    ))
                }
                </div>
            
                <div   className={styles.acertou}>
                {acertou &&(
                    <Bloco  customClass={"correct"} img={imgcorrect} titulo={"Parabéns você acertou o jogador pela silhueta do dia retorne amanhã para tentar novamente"} />
                )}
                
                </div>
            </div>
        )
}
export default Silhouette;