import styles from "./Home.module.css"
import logo from "../../5.png"
import Bloco from "../layout/Bloco";
import Tutorial from "../layout/Tutorial";
import Input from "../Forms/Input";
import SubmitButton from "../Forms/SubmitButton";
import AutoCompleteInput from "../Forms/AutoCompleteInput";
import Result from "../layout/Result";
import { useState, useEffect } from "react"
function Home(){
    const [players,setPlayers] = useState([])
    const [resposta,setResposta] = useState([])
    const [ListResposta,setListResposta] =useState([])
    const [playerDoDia,setplayerDoDia] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/players',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
        }).then(resp => resp.json())
        .then((data)=>{
           
            setPlayers(data)
            
            console.log("teste");
            
            
            
        })
        .catch((err)=>console.log(err))
    },[])
    
    useEffect(()=>{
        var hoje =new Date().toLocaleString().substr(0, 10)
        if(players.length>0)
        {
            setplayerDoDia(players[generateidPerDate()]);
            if(localStorage.getItem("date")!=hoje)
                localStorage.clear()
            else    
                setListResposta(JSON.parse(localStorage.getItem("listRes")))
        }
            
    },[players])
    // Criar um gerador de "número aleatório" baseado em totalDays
    function seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    function generateidPerDate() {
        // Calcular o número total de dias desde 01/01/2000 até hoje
        const startDate = new Date(2000, 0, 1); // Janeiro é mês 0 em JavaScript
        const today = new Date();
        console.log(today);
        const totalDays = Math.floor(((today - startDate)-(1000 * 60 * 60 *1) ) / (1000 * 60 * 60 * 24));
        console.log(totalDays);
        
        // Gerar um número entre 1 e 45
        const randomValue = seededRandom(totalDays);
        const id = Math.floor(randomValue * 74) + 1;
    
        return id;
    }
    function EnviaRes(e){
        console.log(resposta);
        
        e.preventDefault()
        var playerAdivinhado= players.find(({ name }) => name === resposta);
        
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === resposta))==null){
                setListResposta(ListResposta => [ playerAdivinhado,...ListResposta]);
                localStorage.setItem("listRes", JSON.stringify([ playerAdivinhado,...ListResposta]));
                localStorage.setItem("date",new Date().toLocaleString().substr(0, 10))
            }
            
        

    } 
    function EnviaRes2(res){

        
        
        var playerAdivinhado= players.find(({ name }) => name === res);
       
        if(playerAdivinhado!=null)
            if((ListResposta.find(({ name }) => name === res))==null)
            {
                setListResposta(ListResposta => [ playerAdivinhado,...ListResposta]);
                localStorage.setItem("listRes", JSON.stringify([ playerAdivinhado,...ListResposta]));
                localStorage.setItem("date",new Date().toLocaleString().substr(0, 10))
            }
                 

    } 
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <Tutorial/>
            <Bloco texto="Digite o nome de um pro-player que tenha jogado no CBLOL em algum momento e use as dicas para descobrir o jogador do dia! " titulo="Adivinhe o jogador do CBLOL de hoje!"/>
            <form className={styles.form}>
                <AutoCompleteInput suggestions={players.map(player => player.name)} inputValue={resposta} setInputValue={setResposta} submit={EnviaRes2}/>
                {/*<Input placeholder="Digite o Nome de um Jogador..." type="text" name="name" handleOnchange={(e)=>setResposta(e.target.value)}/>*/}
                <SubmitButton onclick={EnviaRes}/>  
            </form>
            {
                ListResposta.map((item)=>(
                    <Result res={item} diario={playerDoDia} />
                ))
            }
            
        </div>
    )
}
export default Home;