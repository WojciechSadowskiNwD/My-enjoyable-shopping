import styles from './EmptyList.module.scss';

function EmptyList({children, componentSize=""}) {
    return (
        <div className={`${styles.empty_list_box} ${componentSize}`}>
            {children}
        </div>
    )
}

export default EmptyList;
  