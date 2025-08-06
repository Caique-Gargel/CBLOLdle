import styles from './DonationBlock.module.css';
import ProfileIcon from '../../Icons/ProfileIcon1.png'
function DonationBlock({nome,valor,texto}) {
  return (
    <div className={styles.donationBlock}>
      
      <div className={styles.donationHeader}>
        <img src={ProfileIcon}></img>
        <b className={styles.name}>{nome}</b>
        <b className={styles.value}>
        Doação: R${Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </b>
      </div>
      <p>{texto}</p>
    </div>
  );
}
export default DonationBlock;