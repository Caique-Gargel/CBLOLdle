import styles from './ResultFala.module.css';
import {useRef, useEffect} from 'react';
function ResultFala({res,diario,primeiro})
{
    const myRef = useRef(null);
    
        useEffect(() => {
            if (primeiro === res && myRef.current) {
                myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' } );
            }
        }, [primeiro, res]); // Executa o scroll apenas quando `primeiro` ou `res` mudarem
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
        <div className={`${styles.containerRes} ${styles[customClass]} `} ref={primeiro === res ? myRef : null}>
            <img src={m}/>
            <h1>{res.name}</h1>
        </div>
    );
}
export default ResultFala;