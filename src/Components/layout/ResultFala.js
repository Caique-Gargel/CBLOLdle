import styles from './ResultFala.module.css';

function ResultFala({res,diario})
{
    var m;
    var img
    try {
        m = require(`../../imgPlayers/${res.name}.png`);
    } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
        else{
            m = require(`../../imgPlayers/unknow.png`);
        }
        
        
        
    }
    var customClass;
    if(res.id===diario.id)
        customClass="certo"
    else
        customClass="errado"
    return (
        <div className={`${styles.containerRes} ${styles[customClass]} `}>
            <img src={m}/>
            <h1>{res.name}</h1>
        </div>
    );
}
export default ResultFala;