import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';


export default function ButtonLink({children, positionClass=''}) {
    
    return (
        <button className={`${styles.btn_basic_design} ${positionClass}`}>
            <Link to="/login">{children}</Link>
        </button> 
    )
}