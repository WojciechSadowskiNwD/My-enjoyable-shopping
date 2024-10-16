import { Link } from 'react-router-dom';
import styles from './BtnStart.module.scss';

export default function BtnStart() {
    return (
        <button className={styles.btn_start}>
            <Link to="/login">Let's Start App</Link>
        </button>
    )
}