import { useState } from "react";
import styles from "./InfoBlock.module.scss";

function InfoBlock({children}) {
	const [isVisible, setIsvisible] = useState(true);

    
	return (
		<div
			className={`${styles.infoBlock} ${styles.hidden_left} ${
				isVisible ? styles.visible : ""
			} `}
		>
			<p>
				{children}
			</p>
		</div>
	);
}

export default InfoBlock;
