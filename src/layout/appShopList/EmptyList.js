import styles from './EmptyList.module.scss';

export default function EmptyList({children, componentSize=""}) {
    return (
        <div className={`${styles.empty_list_box} ${componentSize}`}>
            {children}
        </div>
    )
}