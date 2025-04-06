import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
import Tutorial from "../layout/Tutorial";
import MenuModos from "../layout/MenuModos";
import SubmitButton from "../Forms/SubmitButton";
import AutoCompleteInput from "../Forms/AutoCompleteInput";

import { useState, useEffect} from "react"
import BotaoDica from "../layout/BotaoDica"; // Importar BotaoDica
import ResultFala from "../layout/ResultFala";
function Quote(){
    const [players,setPlayers] = useState([])
    const [falas,setFalas] = useState([])
    const [resposta,setResposta] = useState([])
    const [ListRespostaFala,setListRespostaFala] =useState([])
    const [playerDoDia,setplayerDoDia] = useState([])
    const [falaDoDia,setfalaDoDia] = useState("")
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
        fetch('https://api-storage-tiaw-one.vercel.app/falas',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                },
            }).then(resp => resp.json())
            .then((data)=>{
            
                setFalas(data)
                
                
            })
    .catch((err)=>console.log(err))
    },[])
    
    useEffect(()=>{
        
        var hoje =new Date().toLocaleString().substr(0, 10)
        if(players.length>0)
        {
            if(falas.length>0)
            {
                console.log(falas);
                console.log("--------------------");
                var id =falas[generateidPerDate()].player_id;
                console.log(id);
                
                setfalaDoDia(falas[generateidPerDate()].fala)
                console.log(falaDoDia);
                
                setplayerDoDia(players[id-1])
                console.log(playerDoDia.name);
                if (playerDoDia.id!=undefined && playerDoDia.id!== id) {
                    throw new Error("Error: playerDoDia.id:"+playerDoDia.id +" is not equal to id:"+id);
                }
            }
            
            
            
            
            
            if(localStorage.getItem("date2")!=hoje)
            {
                localStorage.removeItem("listRes2")
                localStorage.removeItem("date2");
                
                
            }
            else    
                setListRespostaFala(JSON.parse(localStorage.getItem("listRes2")))
        }
            
    },[players])

    useEffect(()=>{
        console.log("-------------------");
        console.log(ListRespostaFala);
        
        var res=ListRespostaFala.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 500);
           
            
            inpu.disabled = true;
        }
        
      
       
    },[ListRespostaFala])
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
        const id = Math.floor(randomValue * 40) ;
    
        return id;
    }
    function EnviaRes(e){
        
        
        e.preventDefault()
        var playerAdivinhado= players.find(({ name }) => name === resposta);
        
        if(playerAdivinhado!=null)
            if((ListRespostaFala.find(({ name }) => name === resposta))==null){
                setListRespostaFala(ListRespostaFala => [...ListRespostaFala,playerAdivinhado]);
                localStorage.setItem("listRes2", JSON.stringify([...ListRespostaFala,playerAdivinhado]));
                localStorage.setItem("date2",new Date().toLocaleString().substr(0, 10))
            }
            
        

    } 
    function EnviaRes2(res){

        
        
        var playerAdivinhado= players.find(({ name }) => name === res);
       
        if(playerAdivinhado!=null)
            if((ListRespostaFala.find(({ name }) => name === res))==null)
            {
                setListRespostaFala(ListRespostaFala => [...ListRespostaFala,playerAdivinhado]);
                localStorage.setItem("listRes2", JSON.stringify([...ListRespostaFala,playerAdivinhado]));
                localStorage.setItem("date2",new Date().toLocaleString().substr(0, 10))
            }
                 

    } 
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <MenuModos modo="quotes"/>
            <Tutorial setOpen={setOpen} open={open} tipo="quotes"/>
            
            <Bloco texto={falaDoDia} titulo="Qual jogador disse :" customClass="fala" />
            <form className={styles.form}>
                <AutoCompleteInput id="teste" suggestions={players.map(player => player.name)} inputValue={resposta} setInputValue={setResposta} submit={EnviaRes2}/>
                {/*<Input placeholder="Digite o Nome de um Jogador..." type="text" name="name" handleOnchange={(e)=>setResposta(e.target.value)}/>*/}
                <SubmitButton onclick={EnviaRes}/>  
            </form>
            <BotaoDica ListResposta={ListRespostaFala} resposta={playerDoDia} />
            <div className={styles.downUp}>
            {
                ListRespostaFala.map((item)=>(
                    <ResultFala res={item} diario={playerDoDia}  />
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
export default Quote;