import logo from "../../5.png"
import MenuModos from "../layout/MenuModos"
import styles from "./DateGame.module.css"
import Tutorial from "../layout/Tutorial"
import { useState, useEffect} from "react"
import Bloco from "../layout/Bloco"
import Select from "../Forms/Select"
import Button from "../Forms/Button"
import ResultDate from "../layout/ResultDate"
import imgcorrect from "../../parabens.gif"

function DateGame(){
    const inpu =document.querySelector("#buttonComfirmarDate");
    const [open,setOpen] =useState(false)
    const [finais,setFinais] =useState([])
    const [finalDoDia,setFinalDoDia] =useState([])
    const [ListResposta,setListResposta] =useState([])
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedOptionSplit, setSelectedOptionSplit] = useState(1);
    const [acertou,setAcertou]=useState(false)
    
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    

    const handleSelectChangeSplit = (e) => {
        setSelectedOptionSplit(e.target.value);
    };

    
    const optionsYear = [
        { id: 1, name: '2013' },
        { id: 2, name: '2014' },
        { id: 3, name: '2015' },
        { id: 4, name: '2016' },
        { id: 5, name: '2017' },
        { id: 6, name: '2018' },
        { id: 7, name: '2019' },
        { id: 8, name: '2020' },
        { id: 9, name: '2021' },
        { id: 10, name: '2022' },
        { id: 11, name: '2023' },
        { id: 12, name: '2024' },
        
    ];
    const OptionsSplit=[
        { id: 1, name: '1º' },
        { id: 2, name: '2º' },
    ]
    
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
        useEffect(()=>{
            
            
            
            var res=ListResposta.find(({ ano,split }) => ano === finalDoDia.ano &&  split === finalDoDia.split);
            if(res!=null)
            {
                setTimeout(() => setAcertou(true), 500);
                inpu.disabled = true;
                
                
            }
            
          
           
        },[ListResposta])
       

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
                const id = Math.floor(randomValue * 23);
            
                return id;
            }
            function carregaImg(img){
                var m;
                try {
                    m = require(`../../imgFinal/${img}.png`);
                } catch (e) {
                    
                   
                    
                    if (e.code !== 'MODULE_NOT_FOUND') {
                        throw e;
                    }
                    m=null;
                }
                return m
            }
            function EnviaRes(e){
                e.preventDefault()
                
               
                
                
                var resFinal= finais.find(({ ano,split }) => ano === optionsYear[selectedOption-1].name &&  split === OptionsSplit[selectedOptionSplit-1].id);
                
                
                if(resFinal!=null)
                    if((ListResposta.find(({ id }) => id === resFinal.id))==null){
                        setListResposta(ListResposta => [...ListResposta,resFinal]);
                        localStorage.setItem("listRes3", JSON.stringify([...ListResposta,resFinal]));
                        localStorage.setItem("date3",new Date().toLocaleString().substr(0, 10))
                    }
                    
                
        
            } 
    return(
        <div className={styles.home}>
            <img className={styles.logo} src={logo} alt="cbloldle"></img>
            <MenuModos modo="date"/>
            <Tutorial setOpen={setOpen} open={open} tipo="date"/>
            { finalDoDia &&(
                
                <Bloco texto="Adivinhe o ano e o split da final através dos jogadores picks e times" titulo="Descubra a Final" customClass="date" img={carregaImg(finalDoDia.foto)} />
            )
            }
            
           

            <form>
            <Select  text="ANO" name="ano" options={optionsYear} handleOnChange={handleSelectChange} value={selectedOption}/>
            <Select text="SPLIT" name="ano" options={OptionsSplit} value={selectedOptionSplit} handleOnChange={handleSelectChangeSplit}/>
            <Button id="buttonComfirmarDate" HandleOnclick={EnviaRes}/>
            </form>
            <div className={styles.downUp}>
                {
                    ListResposta.map((item)=>(
                        <ResultDate res={item}  diario={finalDoDia} primeiro={ListResposta[ListResposta.length-1]}/>
                    ))
                }
            </div>
            {acertou &&(
                <Bloco  customClass={"correct"} img={imgcorrect} titulo={"Parabéns você acertou  a final do dia retorne amanhã para tentar novamente"} perguntaBonus={finalDoDia}/>
            )}
        </div>
    )
}export default DateGame
