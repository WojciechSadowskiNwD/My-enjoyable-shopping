import styles from './DownArrow.module.scss';

export default function downArrow() {
    return (
        <div className={styles.downArrow}>
            <i class="fa-solid fa-angles-down"></i>
        </div>
    )
}