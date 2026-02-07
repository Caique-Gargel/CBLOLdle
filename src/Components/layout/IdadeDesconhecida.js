import styles from "./IdadeDesconhecida.module.css"



function IdadeDesconhecida({idade}) {

    return (
        <>
        {idade === 0 &&(
        <div className={styles.containerBloco}>
            <div className={styles.bloco}>
                <h2>O player do dia tem a idade desconhecida</h2>
            </div>
        </div>
        )}
        </>
    );
}
export default IdadeDesconhecida