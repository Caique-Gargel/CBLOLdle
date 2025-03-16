import styles from "./Result.module.css"
import Quadrado from "./Quadrado"


function Result({res,diario,primeiro})
{
    
    
    var classTime, classTitulo, classPosition,classIdade,classSituacao,classNacionalidade;
    var flagPrimeiro=false;
    //-----------------------------------------------------------
    if(res.Org[0]===diario.Org[0])
        classTime="certo"
    else
    {
        classTime="errado" 
        for (var i = 0; i < diario.Org.length; i++) {
           if(res.Org[0]===diario.Org[i])
                classTime="parcial"
        }
    }
               
    
    //-----------------------------------------------------------

    if(res.Current===diario.Current)
        classSituacao="certo"
    else
        classSituacao="errado"
    //-----------------------------------------------------------

    if(res.Position===diario.Position)
        classPosition="certo"
    else
        classPosition="errado"
     //-----------------------------------------------------------

    if(res.idade===diario.idade)
        classIdade="certo"
    else{
        if(res.idade>diario.idade)
            classIdade="lower"
        else
            classIdade="upper"
    }
        
     //-----------------------------------------------------------
    
     if(res.Titulos===diario.Titulos)
        classTitulo="certo"
    else{
        if(res.Titulos>diario.Titulos)
            classTitulo="lower"
        else
            classTitulo="upper"
    }
     //-----------------------------------------------------------
     if(res.nacionalidade===diario.nacionalidade)
        classNacionalidade="certo"
    else
        classNacionalidade="errado"
     //-----------------------------------------------------------
    if(primeiro==res)
        flagPrimeiro=true;
   
        

    return(
        <div className={styles.ContainerRes}>
            <Quadrado text={res.name} categorie="Jogador" img={res.name} flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.Org[0]} categorie="Time" customClass={classTime} img="" flagPrimeiro={flagPrimeiro} />
            <Quadrado text={res.Titulos} categorie="Títulos" customClass={classTitulo} img="" flagPrimeiro={flagPrimeiro}/>
            <Quadrado text={res.Position} categorie="Posição" customClass={classPosition} img="" flagPrimeiro={flagPrimeiro}/>
            <Quadrado text={res.idade} categorie="Idade" customClass={classIdade} img="" flagPrimeiro={flagPrimeiro}/>
            <Quadrado text={res.Current} categorie="Situação"  customClass={classSituacao} img="" flagPrimeiro={flagPrimeiro}/>
            <Quadrado text={res.nacionalidade} categorie="Origem"  customClass={classNacionalidade} img="" flagPrimeiro={flagPrimeiro}/>
            

        </div>
    )
}
export default Result