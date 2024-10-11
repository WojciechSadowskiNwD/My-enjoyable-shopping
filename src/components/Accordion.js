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
                    onToggle={()=> handleToggle(index)}
				/>
			))}
		</div>
	);
}

function AccordionItem({ title, text, isOpen, onToggle }) {
	return (
		<div className={styles.accordion_margin}>
			<div className={`${styles.accordion} ${styles.accordion_top}`} onClick={onToggle}>
				<p className={styles.title}>{title}</p>
				<p className={styles.icon}>+</p>
			</div>
			{isOpen && <div className={`${styles.accordion} ${styles.accordion_bottom}`}>
                <p className={styles.text}>{text}</p>
            </div>}
		</div>
	);
}
