import styles from './MenuModos.module.css';
import { Link } from "react-router-dom"
import ClassicImg from '../../Classic_gray.png'
import QuotesImg from '../../Quotes_gray.png'
import DateImg from '../../Date_gray.png'
import ClassicWhite from '../../ClassicBase_white.png'
import QuotesWhite from '../../Quotes_white.png'
import DateWhite from '../../Date_white.png'
import DonationWhite from '../../Donation_white.png';
import Donation from '../../Donation_gray.png';
import Lineup from '../../Lineup_gray.png';
import LineupWhite from '../../Lineup_white.png';

function MenuModos({modo}){
    var img1,img2,img3,img4,img5 = null;
    var customclass1,customclass2,customclass3,customclass4, customclass5 = null;
    if(modo === "classic"){
        img1 = ClassicWhite;
        img2 = QuotesImg;
        img3 = DateImg;
        img4 = Lineup;
        img5 = Donation;
        customclass1 ="active"
    }
    if(modo === "quotes"){
       
        img1 = ClassicImg;
        img2 = QuotesWhite;
        img3 = DateImg;
        img4 = Lineup;
        img5 = Donation;
        customclass2 ="active"
    }
    if(modo === "date"){
        
        img1 = ClassicImg;
        img2 = QuotesImg;
        img3 = DateWhite;
        img4 = Lineup;
        img5 = Donation;
        customclass3 ="active"
    }
    if(modo === "lineup"){
        img1 = ClassicImg;
        img2 = QuotesImg;
        img3 = DateImg;
        img4 = LineupWhite;
        img5 = Donation;
        customclass4 ="active"
    }
    if(modo === "donation"){
        img1 = ClassicImg;
        img2 = QuotesImg;
        img3 = DateImg;
        img4 = Lineup;
        img5 = DonationWhite;
        customclass5 ="active"
    }
    return(
        
        <div className={styles.containerMenu}>
            
            <div className={styles.menu}>
                
                
                <div className={styles.options}>
                    <div className={styles.ropeBackGround}></div>
                    <ul className={styles.social_list}>
                        <li><Link to="/"><img title="Modo Classico" className={` ${styles[customclass1]} `} src={img1}></img></Link></li>
                        <li><Link to="/falas"><img title="Quem disse isso?"  className={` ${styles[customclass2]} `} src={img2}></img></Link></li>
                        <li><Link to="/date" ><img title="Que final foi essa?" className={` ${styles[customclass3]} `} src={img3}></img></Link></li>
                        <li><Link to="/lineup" ><img title="Qual é a Lineup!" className={` ${styles[customclass4]} `} src={img4}></img></Link></li>
                        <li><Link to="/donation" ><img title="APOIE!" className={` ${styles[customclass5]} `} src={img5}></img></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default MenuModos