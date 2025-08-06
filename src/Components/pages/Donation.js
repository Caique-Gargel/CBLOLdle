import logo from "../../5.png"
import styles from './Donation.module.css';
import MenuModos from "../layout/MenuModos";
import DonationSection from "../layout/DonationSection";
import { useState } from "react";
import ModalDonation from "../layout/ModalDonation";
function Donation() {
  const [modal,setModal] =useState(false);
  return (
    <div className={styles.home}>
        <ModalDonation isOpen={modal} setOpen={setModal}/>
        <img className={styles.logo} src={logo} alt="cbloldle"></img>
        <MenuModos modo="donation"/>
        <DonationSection modal={modal} setModal={setModal} />
    </div>
  );
}
export default Donation;