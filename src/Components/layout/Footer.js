import styles from '../layout/Footer.module.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
function Footer()
{
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://github.com/Caique-Gargel"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/caique-cesar-gargel-de-oliveira-615511220"><FaLinkedin/></a></li>
                
            </ul>
        </footer>
    )
}
export default Footer