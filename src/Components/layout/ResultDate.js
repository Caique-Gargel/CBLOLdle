import styles from './ResultDate.module.css';
import img from '../../imgPlayers/unknow.png';
import { useRef, useEffect } from 'react';

function ResultDate({ res, diario, primeiro }) {
    const myRef = useRef(null);

    useEffect(() => {
        if (primeiro === res && myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [primeiro, res]); // Executa o scroll apenas quando `primeiro` ou `res` mudarem

    const customClass = res.ano === diario.ano && res.split === diario.split ? 'certo' : 'errado';

    return (
        <div className={`${styles.containerRes} ${styles[customClass]} `} ref={primeiro === res ? myRef : null}>
            
            <h1>CBLOL: {res.ano} - {res.split}º Split</h1>
        </div>
    );
}

export default ResultDate;