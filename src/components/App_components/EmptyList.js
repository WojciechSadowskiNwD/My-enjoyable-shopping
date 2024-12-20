import styles from './EmptyList.module.scss';

// ten komponent pokazywać będzie informację o braku dodanych produktów
// Lista jest pusta, dodaj pierwszy produkt
function EmptyList({children, componentSize=""}) {
    return (
        <div className={`${styles.empty_list_box} ${componentSize}`}>
            {children}
            {/* <p>This list is <span>empty</span>, add your first product.</p> */}
        </div>
    )
}

export default EmptyList;
