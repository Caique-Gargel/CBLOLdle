import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
import Tutorial from "../layout/Tutorial";

import SubmitButton from "../Forms/SubmitButton";
import AutoCompleteInput from "../Forms/AutoCompleteInput";
import Result from "../layout/Result";
import { useState, useEffect} from "react"
import BotaoDica from "../layout/BotaoDica"; // Importar BotaoDica
function Home(){
    const [players,setPlayers] = useState([])
    const [resposta,setResposta] = useState([])
    const [ListResposta,setListResposta] =useState([])
    const [playerDoDia,setplayerDoDia] = useState([])
    const [acertou,setAcertou]=useState(false)
    const inpu =document.querySelector("#teste");
    var flaglist=false;
    var imgcorrect=require("../../parabens.gif")
    const [open,setOpen] =useState(false);
   
    

    
   /*useEffect(()=>{
    if(acertou && myref!=null)
        executeScroll()
   },[acertou])*/
    
    useEffect(()=>{
        fetch('https://api-storage-tiaw-one.vercel.app/players',{
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
            if(localStorage.getItem("date")!=hoje)
            {
                localStorage.clear()
                setOpen(true);
            }
            else    
                setListResposta(JSON.parse(localStorage.getItem("listRes")))
        }
            
    },[players])

    useEffect(()=>{
        console.log("-------------------");
        console.log(ListResposta);
        
        var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
           
            
            inpu.disabled = true;
        }
        
      
       
    },[ListResposta])
    // Criar um gerador de "número aleatório" baseado em totalDays
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
        const randomValue = seededRandom(totalDays);
        const id = Math.floor(randomValue * 175) + 1;
    
        return id;
    }
    function EnviaRes(e){
        
        
        e.preventDefault()
        var playerAdivinhado= players.find(({ name }) => name === resposta);
        
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === resposta))==null){
                setListResposta(ListResposta => [...ListResposta,playerAdivinhado]);
                localStorage.setItem("listRes", JSON.stringify([...ListResposta,playerAdivinhado]));
                localStorage.setItem("date",new Date().toLocaleString().substr(0, 10))
            }
            
        

    } 
    function EnviaRes2(res){

        
        
        var playerAdivinhado= players.find(({ name }) => name === res);
       
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === res))==null)
            {
                setListResposta(ListResposta => [...ListResposta,playerAdivinhado]);
                localStorage.setItem("listRes", JSON.stringify([...ListResposta,playerAdivinhado]));
                localStorage.setItem("date",new Date().toLocaleString().substr(0, 10))
            }
                 

    } 
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <Tutorial setOpen={setOpen} open={open}/>
            <Bloco texto="Digite o nome de um pro-player que tenha jogado no CBLOL em algum momento e use as dicas para descobrir o jogador do dia! " titulo="Adivinhe o jogador do CBLOL de hoje!"/>
            <form className={styles.form}>
                <AutoCompleteInput id="teste" suggestions={players.map(player => player.name)} inputValue={resposta} setInputValue={setResposta} submit={EnviaRes2}/>
                {/*<Input placeholder="Digite o Nome de um Jogador..." type="text" name="name" handleOnchange={(e)=>setResposta(e.target.value)}/>*/}
                <SubmitButton onclick={EnviaRes}/>  
            </form>
            <BotaoDica ListResposta={ListResposta} resposta={playerDoDia} /> {/* Adicionar BotaoDica */}
            <div className={styles.downUp}>
            {
                ListResposta.map((item)=>(
                    <Result res={item} diario={playerDoDia} primeiro={ListResposta[ListResposta.length-1]} />
                ))
            }
            </div>
            <div   className={styles.acertou}>
            {acertou &&(
                <Bloco  customClass={"correct"} img={imgcorrect} titulo={"Parabens você acertou o o jogador do dia retorne amanhã para tentar novamente"} />
            )}
            
            </div>
        </div>
        
    )
}
export default Home;