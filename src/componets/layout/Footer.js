import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social}><FaFacebook /></li>
                <li className={styles.social}><FaInstagram /></li>
                <li className={styles.social}><AiOutlineLinkedin /></li>

            </ul>

            <p className={styles.copy_right}>
                <span>Costs</span>
                &copy;2022
            </p>
        </footer>
    )
}
export default Footer
