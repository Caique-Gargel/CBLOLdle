import styles from "./Result.module.css"
import Quadrado from "./Quadrado"

function Result({res,diario})
{
    
    
    var classTime, classTitulo, classPosition,classIdade,classSituacao,classNacionalidade;
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
    return(
        <div className={styles.ContainerRes}>
            <Quadrado text={res.name} categorie="Jogador" />
            <Quadrado text={res.Org[0]} categorie="Time" customClass={classTime}/>
            <Quadrado text={res.Titulos} categorie="Títulos" customClass={classTitulo}/>
            <Quadrado text={res.Position} categorie="Posição" customClass={classPosition}/>
            <Quadrado text={res.idade} categorie="Idade" customClass={classIdade}/>
            <Quadrado text={res.Current} categorie="Situação"  customClass={classSituacao}/>
            <Quadrado text={res.nacionalidade} categorie="Origem"  customClass={classNacionalidade}/>
            

        </div>
    )
}
export default Result