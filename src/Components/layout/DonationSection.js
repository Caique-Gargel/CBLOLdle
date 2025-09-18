import { useState, useEffect } from "react";
import DonationBlock from "./DonationBlock";
import styles from "./DonationSection.module.css"
function DonationSection({ modal, setModal }) {
    const initialDonation = { value: 0, donator_name: " " };
    const [donations, setDonations] = useState([])
    const [total, setTotal] = useState(0);
    const [top1, setTop1] = useState(initialDonation);
    const [top2, setTop2] = useState(initialDonation);
    const [top3, setTop3] = useState(initialDonation);
    useEffect(() => {
        fetch('https://cbloldle-backend.vercel.app/donations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {

                setDonations(data)
                


            })
            .catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        const totalaux = donations.reduce((sum, donation) => sum + Number(donation.value || 0), 0);
        setTotal(totalaux.toFixed(2));
        const sortedDonations = [...donations].sort((a, b) => Number(b.value || 0) - Number(a.value || 0));
        const top1Temp = sortedDonations[0] || initialDonation;
        const top2Temp = sortedDonations[1] || initialDonation;
        const top3Temp = sortedDonations[2] || initialDonation;
        setTop1(top1Temp);
        setTop2(top2Temp);
        setTop3(top3Temp);
    },[donations])
    return (
        <div className={styles.donationSection}>
            <div className={styles.descriptionSection}>
                <h1>Olá! Meu nome é Caique Gargel e eu sou o criador do CBLOLDLE!</h1>
                <p>Antes de tudo, quero agradecer de coração a todos que jogaram o CBLOLDLE.
                    É uma grande honra ver pessoas se divertindo com esse game.</p>
                <p>O CBLOLDLE nasceu como uma homenagem de um fã ao CBLOL e a toda a comunidade brasileira de
                    League of Legends. É um projeto totalmente independente, sem qualquer tipo de financiamento externo.
                    Apesar de eu adorar trabalhar nele, o CBLOLDLE consome bastante tempo e, até agora, não trouxe nenhum
                    retorno financeiro.</p>
                <p>Para quem gosta do projeto e quer apoiar sua continuidade, agora é possível fazer doações via Pix.
                    Cada doação permite que você deixe um comentário nesta página — sinta-se à vontade para compartilhar
                    sugestões, críticas ou elogios!</p>
                <button onClick={() => setModal(true)} className={styles.btn}>DOAR! &#x2764;&#xfe0e;</button>
            </div>
            <hr />
            <h1>DOAÇÕES</h1>
            <hr />
            <div className={styles.DonationInfo}>
                <p>Valor Arrecadado: <b className={styles.arrecadado}>R${total}</b></p>
                
                <p> Top 3 Doações: &ensp;&ensp;<b className={styles.primeiro}>1º {top1.donator_name} R${top1.value.toFixed(2)} </b>&ensp;&ensp;<b className={styles.segundo}>2º {top2.donator_name} R${top2.value.toFixed(2)}</b> &ensp;&ensp;<b className={styles.terceiro}>3º  {top3.donator_name} R${top3.value.toFixed(2)}</b> </p>
            </div>
            <hr />
            <div className={styles.ComentSection}>
                {
                    donations.map((item) => (
                        <DonationBlock nome={item.donator_name} valor={item.value} texto={item.coment} />
                    ))
                }

            </div>
        </div>
    )
}

export default DonationSection;