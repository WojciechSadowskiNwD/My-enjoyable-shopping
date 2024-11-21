import styles from './ButtonLink.module.scss';


export default function ButtonLink({children, positionClass='', btnSize=''}) {
    
    return (
        <button className={`${styles.btn_basic_design} ${positionClass} ${btnSize}`}>
            {children}
        </button>
    ) 
}   