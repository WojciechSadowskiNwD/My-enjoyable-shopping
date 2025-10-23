import styles from "./Accordion.module.scss";

function AccordionItem({ title, text, isOpen, onToggle }) {
	return (
		<div className={styles.target}> 
			<div
				className={`${styles.accordion} ${styles.accordion_top}`}
				onClick={onToggle}
			>
				<p className={styles.title}>{title}</p>
				<p className={styles.icon}>+</p>
			</div>
			<div
				className={`  
				${styles.accordion_height0}
			 	${isOpen
					? `${styles.accordion} ${styles.accordion_bottom} 
					${text.length > 160 ? styles.accordion_height_L : ""}
					${text.length > 190 ? styles.accordion_height_XL : ""}
					` : "" } `}>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	);
}

export default AccordionItem;