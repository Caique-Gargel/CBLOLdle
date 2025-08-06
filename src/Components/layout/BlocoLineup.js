import styles from "./BlocoLineup.module.css"
import {useRef,useEffect,useState} from "react"
import Select from "../Forms/Select"
import Button from "../Forms/Button"
import MidIcon from "../../Icons/Middle_icon.png"
import topIcon from "../../Icons/Top_icon.png"
import supIcon from "../../Icons/Support_icon.png"
import jungleIcon from "../../Icons/Jungle_icon.png"
import adcIcon from "../../Icons/ADC_icon.png"
import silhouette1 from "../../Icons/silhouette1.png"
import AutoCompleteRoles from "../Forms/AutoCompleteRoles"

function BlocoLineup({players,titulo,lineupDoDia,setAcertou})
{
    
    const [imgTop,setImgTop] = useState(silhouette1);
    const [imgJungle,setImgJungle] = useState(silhouette1);
    const [imgMid,setImgMid] = useState(silhouette1);
    const [imgADC,setImgADC] = useState(silhouette1);
    const [imgSup,setImgSup] = useState(silhouette1); 

    const [inputTop,setInputTop] = useState([]);
    const [inputJungle,setInputJungle] = useState([]);
    const [inputMid,setInputMid] = useState([]);
    const [inputADC,setInputADC] = useState([]);
    const [inputSup,setInputSup] = useState([]);

    const [respostaTop,setRespostaTop] = useState([]);
    const [respostaJungle,setRespostaJungle] = useState([]);
    const [respostaMid,setRespostaMid] = useState([]);
    const [respostaADC,setRespostaADC] = useState([]);
    const [respostaSup,setRespostaSup] = useState([]);

    const [customClassSUP,setCustomClassSUP] = useState("");
    const [customClassADC,setCustomClassADC] = useState("");
    const [customClassMid,setCustomClassMid] = useState("");
    const [customClassJG,setCustomClassJG] = useState("");
    const [customClassTop,setCustomClassTop] = useState("");

    const inpuTop =document.querySelector("#top");
    const inpuJG =document.querySelector("#jg");
    const inpuMid =document.querySelector("#mid");
    const inpuADC =document.querySelector("#adc");
    const inpuSup =document.querySelector("#sup");
      function loadImg(img){
        try {
            
            return require(`../../imgPlayers/${img}.png`);
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
            return require("../../Icons/silhouette1.png");
        }
    }
    useEffect(() => {
        if (players.length > 0 && lineupDoDia!=null) {
        var hoje = new Date().toLocaleString().substr(0, 10);
        /*var id = falas[generateidPerDate()].player_id;*/
        
            if (localStorage.getItem("date4") !== hoje) {
                localStorage.removeItem("RespostaTop");
                localStorage.removeItem("RespostaJungle");
                localStorage.removeItem("RespostaMid");
                localStorage.removeItem("RespostaADC");
                localStorage.removeItem("RespostaSup"); 
                localStorage.removeItem("date4");
                /*localStorage.removeItem("listRes2");*/
            
            } else {
                setRespostaADC(JSON.parse(localStorage.getItem("RespostaADC")));
                setRespostaJungle(JSON.parse(localStorage.getItem("RespostaJungle")));
                setRespostaMid(JSON.parse(localStorage.getItem("RespostaMid")));
                setRespostaSup(JSON.parse(localStorage.getItem("RespostaSup")));
                setRespostaTop(JSON.parse(localStorage.getItem("RespostaTop")));
                
                
                
               
                
                
                
            }
        }
    }, [players, lineupDoDia]);


    //TOP----------------------------------------------------------------------------------   
    useEffect(()=>{
        
        if(respostaTop!=null && respostaTop!="" && lineupDoDia!=null && lineupDoDia.TOP!=null)
        {
            setInputTop(JSON.parse(localStorage.getItem("RespostaTop")).name);
            setImgTop(loadImg(respostaTop.name));
            if(lineupDoDia.TOP==respostaTop.id){
                setCustomClassTop("certo");
                inpuTop.disabled = true;
                if(customClassADC=="certo" && customClassMid=="certo" && customClassJG=="certo" && customClassSUP=="certo")
                    setAcertou(true);

            }else{
                setCustomClassTop("errado");
            }
        }
            
            
        /*var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }*/

    },[respostaTop])

    //JUNGLE----------------------------------------------------------------------------------  
    useEffect(()=>{
    
        if(respostaJungle!=null && respostaJungle!="" && lineupDoDia!=null && lineupDoDia.JUNGLE!=null)
        {
            setInputJungle(JSON.parse(localStorage.getItem("RespostaJungle")).name);
            
            setImgJungle(loadImg(respostaJungle.name));
            if(lineupDoDia.JUNGLE==respostaJungle.id){
                setCustomClassJG("certo");
                inpuJG.disabled = true;
                if(customClassADC=="certo" && customClassMid=="certo" && customClassTop=="certo" && customClassSUP=="certo")
                    setAcertou(true);

            }else{
                setCustomClassJG("errado");
            }
        }
            
            
        /*var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }*/

    },[respostaJungle])

    //MID----------------------------------------------------------------------------------
    useEffect(()=>{
        
        if(respostaMid!=null && respostaMid!="" && lineupDoDia!=null && lineupDoDia.MID!=null)
        {
            setInputMid(JSON.parse(localStorage.getItem("RespostaMid")).name); 
            setImgMid(loadImg(respostaMid.name));
            if(lineupDoDia.MID==respostaMid.id){
                setCustomClassMid("certo");
                inpuMid.disabled = true;
                if(customClassADC=="certo" && customClassTop=="certo" && customClassJG=="certo" && customClassSUP=="certo")
                    setAcertou(true);

            }else{
                setCustomClassMid("errado");
            }
            
        }
            
            
        /*var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }*/

    },[respostaMid])

    //ADC----------------------------------------------------------------------------------
    useEffect(()=>{
        
        if(respostaADC!=null && respostaADC!="" && lineupDoDia!=null && lineupDoDia.ADC!=null)
        {
            setInputADC(JSON.parse(localStorage.getItem("RespostaADC")).name);
            setImgADC(loadImg(respostaADC.name));
            if(lineupDoDia.ADC==respostaADC.id){
                setCustomClassADC("certo");
                inpuADC.disabled = true;
                if(customClassTop=="certo" && customClassMid=="certo" && customClassJG=="certo" && customClassSUP=="certo")
                    setAcertou(true);

            }else{
                setCustomClassADC("errado");
            }
        }
            
            
        /*var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }*/

    },[respostaADC])

    //SUP----------------------------------------------------------------------------------
    useEffect(()=>{
        
        if(respostaSup!=null && respostaSup!="" && lineupDoDia!=null && lineupDoDia.SUP!=null)
        {
            setInputSup(JSON.parse(localStorage.getItem("RespostaSup")).name);
            setImgSup(loadImg(respostaSup.name));
            if(lineupDoDia.SUP==respostaSup.id){
                setCustomClassSUP("certo");
                inpuSup.disabled = true;
                
                if(customClassTop=="certo" && customClassMid=="certo" && customClassJG=="certo" && customClassADC=="certo")
                    setAcertou(true);
            }else{
                setCustomClassSUP("errado");
            }
            
        }
            
            
        /*var res=ListResposta.find(({ id }) => id === playerDoDia.id)
        if(res!=null)
        {
            setTimeout(() => setAcertou(true), 3500);
            inpu.disabled = true;
        }*/

    },[respostaSup])
    function EnviaRes(res,tipo)
    {
        
        var playerAdivinhado = players.find(({ name }) => name.toLowerCase() === res.toLowerCase());
        
        if(playerAdivinhado!=null)
        {
            if(tipo==="top")
            {
                localStorage.setItem("RespostaTop", JSON.stringify(playerAdivinhado));
                setRespostaTop(playerAdivinhado);
            }
            else if(tipo==="jg")
            {
                localStorage.setItem("RespostaJungle", JSON.stringify(playerAdivinhado));
                setRespostaJungle(playerAdivinhado);
            }
            else if(tipo==="mid")
            {
                localStorage.setItem("RespostaMid", JSON.stringify(playerAdivinhado));
                setRespostaMid(playerAdivinhado);
            }
            else if(tipo==="adc")
            {
                localStorage.setItem("RespostaADC", JSON.stringify(playerAdivinhado));
                setRespostaADC(playerAdivinhado);
            }
            else if(tipo==="sup")
            {
                localStorage.setItem("RespostaSup", JSON.stringify(playerAdivinhado));
                setRespostaSup(playerAdivinhado);
            }
                
        
           
            localStorage.setItem("date4",new Date().toLocaleString().substr(0, 10))
        }
              

    } 
    return(
       
            <div className={styles.bloco}>
                
                <h2>{titulo}</h2><br/>
                <div className={styles.containerRole}>
                    <div className={styles.role}>
                        <img className={styles.roleIcon} src={topIcon} alt="Top Icon"/>
                        <img className={`${styles.profileIcon} ${styles[customClassTop]}`} src={imgTop} alt="Profile"/>
                        <AutoCompleteRoles id="top" suggestions={players.filter(player => player.Position === "TOP").map(player => player.name)} inputValue={inputTop} submit={EnviaRes} setInputValue={setInputTop}/>
                        {customClassTop!="" &&(
                            <div className={`${styles.containerRes} ${styles[customClassTop]}`} >
                                {customClassTop==="errado" ? (
                                    <h2>ERROU</h2>
                                ) : (
                                    <h2>ACERTOU</h2>
                                )}
                            </div>
                        )}
                       
                    </div>
                    <div className={styles.role}>
                        <img className={styles.roleIcon} src={jungleIcon} alt="JG Icon"/>
                        <img className={`${styles.profileIcon} ${styles[customClassJG]}`} src={imgJungle} alt="Profile"/>
                        <AutoCompleteRoles id="jg" suggestions={players.filter(player => player.Position === "JUNGLE").map(player => player.name)} inputValue={inputJungle} submit={EnviaRes} setInputValue={setInputJungle}/>
                        {customClassJG!="" &&(
                            <div className={`${styles.containerRes} ${styles[customClassJG]}`} >
                                {customClassJG==="errado" ? (
                                    <h2>ERROU</h2>
                                ) : (
                                    <h2>ACERTOU</h2>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.role}>
                        <img className={styles.roleIcon} src={MidIcon} alt="Mid Icon"/>
                        <img className={`${styles.profileIcon} ${styles[customClassMid]}`} src={imgMid} alt="Profile"/>
                        <AutoCompleteRoles id="mid" suggestions={players.filter(player => player.Position === "MID").map(player => player.name)} inputValue={inputMid} submit={EnviaRes} setInputValue={setInputMid}/>
                        {customClassMid!="" &&(
                            <div className={`${styles.containerRes} ${styles[customClassMid]}`} >
                                {customClassMid==="errado" ? (
                                    <h2>ERROU</h2>
                                ) : (
                                    <h2>ACERTOU</h2>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.role}>
                        <img className={styles.roleIcon} src={adcIcon} alt="ADC Icon"/>
                        <img className={`${styles.profileIcon} ${styles[customClassADC]}`} src={imgADC} alt="Profile"/>
                        <AutoCompleteRoles id="adc" suggestions={players.filter(player => player.Position === "ADC").map(player => player.name)} inputValue={inputADC} submit={EnviaRes} setInputValue={setInputADC}/>
                        {customClassADC!="" &&(
                            <div className={`${styles.containerRes} ${styles[customClassADC]}`} >
                                {customClassADC==="errado" ? (
                                    <h2>ERROU</h2>
                                ) : (
                                    <h2>ACERTOU</h2>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.role}>
                        <img className={styles.roleIcon} src={supIcon} alt="SUP Icon"/>
                        <img className={`${styles.profileIcon} ${styles[customClassSUP]}`} src={imgSup} alt="Profile"/>
                        <AutoCompleteRoles id="sup" suggestions={players.filter(player => player.Position === "SUP").map(player => player.name)} inputValue={inputSup} submit={EnviaRes} setInputValue={setInputSup}/>
                        {customClassSUP!="" &&(
                            <div className={`${styles.containerRes} ${styles[customClassSUP]}`} >
                                {customClassSUP==="errado" ? (
                                    <h2>ERROU</h2>
                                ) : (
                                    <h2>ACERTOU</h2>
                                )}
                            </div>
                        )}
                    </div>
                    
                </div>
                

            </div>
        
        
    );
}
export default BlocoLineup