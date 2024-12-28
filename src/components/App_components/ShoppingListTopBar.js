import { useState } from "react";
import styles from "./ShoppingListTopBar.module.scss";

export default function ShoppingListTopBar() {
	const [isOpen, setIsOpen] = useState(true);
	const [activeButton, setActiveButton] = useState(null);

	const handleToggle = () => {
		setIsOpen((curr) => !curr);
	};

	const setHowToSort = (buttonClicked) => {

        // set button color to active
		if (buttonClicked === "toPack") {
			setActiveButton("toPack");
		} else if (buttonClicked === "packed") {
            setActiveButton("packed");
		}else if (buttonClicked === "alphabetically") {
            setActiveButton("alphabetically");
		}
	};

	return (
		<div className={styles.tb_options_container}>
			<div className={styles.top_bar}>
				<h2 className={styles.title_bar}>SHOPPING LIST</h2>
				<div className={styles.icon_box} onClick={handleToggle}>
					<i className={`fa-solid fa-gear ${styles.icon}`}></i>
				</div>
			</div>

			<div
				className={`${styles.options} ${isOpen ? styles.options_open : ""} `}
			>
				<p className={styles.text}>Sort by:</p>
				<div className={styles.btns_box}>
					<button
						className={`${styles.btn_sortBy} ${
							activeButton === "toPack" ? styles.btn_active : ""
						}`}
						onClick={() => setHowToSort("toPack")}
					>
						to pack
					</button>

					<button
						className={`${styles.btn_sortBy} ${
							activeButton === "packed" ? styles.btn_active : ""
						}`}
						onClick={() => setHowToSort("packed")}
					>
						packed
					</button>
					<button
						className={`${styles.btn_sortBy} ${
							activeButton === "alphabetically" ? styles.btn_active : ""
						}`}
						onClick={() => setHowToSort("alphabetically")}
					>
						alphabetically
					</button>
				</div>
			</div>
		</div>
	);
}

// test
