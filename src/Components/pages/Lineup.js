import logo from "../../5.png"
import styles from './Lineup.module.css';
import MenuModos from "../layout/MenuModos";
import Tutorial from "../layout/Tutorial";
import { useState, useEffect } from "react";
import BlocoLineup from "../layout/BlocoLineup";
import Bloco from "../layout/Bloco";
import imgcorrect from "../../parabens.gif";

function Lineup() {
  const [open,setOpen] =useState(false);
  const [players,setPlayers] = useState([])
 
  const [lineups,setLineups] = useState([])
  const [lineupDoDia,setLineupDoDia] = useState([])
  const [acertou,setAcertou]=useState(false);
  const [time,setTime] = useState("");
  const [ano,setAno] = useState("");
  const [split,setSplit] = useState();

  function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }
  function generateidPerDate() {
    // Calcular o número total de dias desde 01/01/2000 até hoje
    const startDate = new Date(2000, 0, 1); // Janeiro é mês 0 em JavaScript
    const today = new Date();
    
    const totalDays = Math.floor(((today - startDate)-(1000 * 60 * 60 *1) ) / (1000 * 60 * 60 * 24));
    
    
    // Gerar um número entre 1 e 37
    const randomValue = seededRandom(totalDays);
    const id = Math.floor(randomValue * 57)   ;
    
    return id;
  }


/*carrega players-------------------------------------------------------------------*/
  useEffect(()=>{
    fetch('https://api-storage-tiaw-one.vercel.app/players',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
    }).then(resp => resp.json())
    .then((data)=>{
        
      setPlayers(data)
      window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
      });

    })
    .catch((err)=>console.log(err))
  },[])

  /*carrega lineups-------------------------------------------------------------------*/
  useEffect(()=>{
    fetch('https://api-storage-tiaw-one.vercel.app/lineups',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
    }).then(resp => resp.json())
    .then((data)=>{
        
      setLineups(data)
      

    })
    .catch((err)=>console.log(err))
  },[])

  /*carrega player do dia-------------------------------------------------------------------*/
  useEffect(() => {
    if (players.length > 0 && lineups.length > 0) {
      
      
      /*var id = falas[generateidPerDate()].player_id;*/
      console.log(lineups[generateidPerDate()]);
      
      setLineupDoDia(lineups[generateidPerDate()]);
      setTime(lineups[generateidPerDate()].time);
      setAno(lineups[generateidPerDate()].ano);
      setSplit(lineups[generateidPerDate()].Split);
      /*setplayerDoDia(players[id - 1]);*/

      
    }
  }, [players, lineups]);
   
  return (
    <div className={styles.home}>
      <img className={styles.logo} src={logo} alt="cbloldle"></img>
      <MenuModos modo="lineup"/>
      <Tutorial setOpen={setOpen} open={open} tipo="lineup"/>
      <BlocoLineup
        players={players}
        titulo={`Adivinhe a Lineup completa da: ${time} ${ano} ${split}º SPLIT`}
        lineupDoDia={lineupDoDia}
        setAcertou={setAcertou}
      />
      <div className={styles.acertou}>
        {acertou && (
          <Bloco
            customClass={"correct"}
            img={imgcorrect}
            titulo={"Parabéns você acertou a Lineup do dia retorne amanhã para tentar novamente"}
          />
        )}
      </div>
    </div>
  );
}
export default Lineup;