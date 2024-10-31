import { useState } from "react";
import styles from "./Accordion.module.scss";

export default function Accordion({ data }) {
	const [currentOpen, setCurrentOpen] = useState(null);

	const handleToggle = (index) => {
		setCurrentOpen(currentOpen === index ? null : index);
	};

	return ( 
		<div className={styles.accordion_box}>
			{data.map((item, index) => (
				<AccordionItem
					title={item.title}
					isOpen={currentOpen === index}
					key={item.title}
					text={item.text}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
}

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
