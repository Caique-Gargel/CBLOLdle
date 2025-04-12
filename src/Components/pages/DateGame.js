import logo from "../../5.png"
import MenuModos from "../layout/MenuModos"
import styles from "./Date.module.css"
import Tutorial from "../layout/Tutorial"
import { useState, useEffect} from "react"
import Bloco from "../layout/Bloco"

function DateGame(){
    const [open,setOpen] =useState(false)
    const [finais,setFinais] =useState([])
    const [finalDoDia,setFinalDoDia] =useState([])
    const [ListResposta,setListResposta] =useState([])
        useEffect(()=>{
            fetch('https://api-storage-tiaw-one.vercel.app/finais',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                    },
            }).then(resp => resp.json())
            .then((data)=>{
               
                setFinais(data)
                
            })
            .catch((err)=>console.log(err))
        },[])
        
        useEffect(()=>{
        
            var hoje =new Date().toLocaleString().substr(0, 10)
            if(finais.length>0)
            {
                
                
                setFinalDoDia(finais[generateidPerDate()]);
                if(localStorage.getItem("date3")!=hoje)
                {
                    
                    
                    localStorage.removeItem("listRes3")
                    localStorage.removeItem("date3");
                    
                    
                }
                else    
                    setListResposta(JSON.parse(localStorage.getItem("listRes3")))
            }
                
        },[finais])
       

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
                const id = Math.floor(randomValue * 10);
            
                return id;
            }
            
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <MenuModos modo="date"/>
            { finalDoDia.length>0 &&(
                <Bloco texto=" " titulo="Descubra a Final" customClass="date" img={require(finalDoDia.foto)} />
            )
            }
            
            <Tutorial setOpen={setOpen} open={open} tipo="classic"/>
            <br/>
            <h1>Em Breve</h1>
        
        </div>
    )
}export default DateGame
