import styles from './MenuModos.module.css';
import { Link } from "react-router-dom"
import ClassicImg from '../../Classic_gray.png'
import QuotesImg from '../../Quotes_gray.png'
import DateImg from '../../Date_gray.png'
import ClassicWhite from '../../ClassicBase_white.png'
import QuotesWhite from '../../Quotes_white.png'
import DateWhite from '../../Date_white.png'

function MenuModos({modo}){
    var img1,img2,img3 = null;
    var customclass1,customclass2,customclass3 = null;
    if(modo === "classic"){
        img1 = ClassicWhite;
        img2 = QuotesImg;
        img3 = DateImg;
        customclass1 ="active"
    }
    if(modo === "quotes"){
        img2 = QuotesWhite;
        img1 = ClassicImg;
        img3 = DateImg;
        customclass2 ="active"
    }
    if(modo === "date"){
        img3 = DateWhite;
        img1 = ClassicImg;
        img2 = QuotesImg;
        customclass3 ="active"
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
                        
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default MenuModos