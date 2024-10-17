import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';

export default function ButtonLink({children, parameters=''}) {
    return (
        <button className={`${styles.btn_start} ${parameters}`}>
            <Link to="/login">{children}</Link>
        </button>
    )
}