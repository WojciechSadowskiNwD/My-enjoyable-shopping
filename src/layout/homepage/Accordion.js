import { useState } from "react";
import AccordionItem from "./AccordionItem";
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