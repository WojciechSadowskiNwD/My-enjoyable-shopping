import styles from './FormTopBar.module.scss';

export default function FormTopBar({isOpen, onToggle}){
	return (
		<div className={styles.top_bar}>
				<h2>Add product</h2>
				<div className={styles.box_icon} onClick={onToggle}>
					{isOpen ? (
						<i className={`fa-regular fa-square-minus ${styles.icons}`}></i>
					) : (
						<i className={`fa-regular fa-square-plus ${styles.icons}`}></i>
					)}
				</div>
			</div>
	)
};  