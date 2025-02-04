import styles from "./Result.module.css"
import Quadrado from "./Quadrado"

function Result({res,diario})
{
    var classTime, classTitulo, classPosition,classIdade,classSituacao;
    //-----------------------------------------------------------
    if(res.Org===diario.Org)
        classTime="certo"
    else
        classTime="errado"        
    
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
    return(
        <div className={styles.ContainerRes}>
            <Quadrado text={res.name} categorie="Jogador" />
            <Quadrado text={res.Org} categorie="Time" customClass={classTime}/>
            <Quadrado text={res.Titulos} categorie="Títulos" customClass={classTitulo}/>
            <Quadrado text={res.Position} categorie="Posição" customClass={classPosition}/>
            <Quadrado text={res.idade} categorie="Idade" customClass={classIdade}/>
            <Quadrado text={res.Current} categorie="Situação"  customClass={classSituacao}/>
            

        </div>
    )
}
export default Result