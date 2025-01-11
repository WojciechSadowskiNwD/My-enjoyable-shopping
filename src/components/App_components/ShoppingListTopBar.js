import styles from "./ShoppingListTopBar.module.scss";
import { useEffect, useState } from "react";
import { useLists } from "../../contexsts/ListsProvider";

export default function ShoppingListTopBar() {

	// if width < 992px isOpen = false
	const [isOpen, setIsOpen] = useState(window.innerWidth >= 992);
    const {activeButton, setHowToSort} = useLists();
	// check how width is now
	
	useEffect(() => { 
			const handleResize = () => {
				const nowIsLarge = window.innerWidth >=992;

				// update isOpen when switching to large screen
				if(nowIsLarge) {
					setIsOpen(true);
				}
			};

			window.addEventListener("resize", handleResize);
	
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);
		

	const handleToggle = () => {
		setIsOpen((curr) => !curr);  
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
			
			<div className={`${styles.bottom_bar} ${!isOpen ? "" : "no_opacity"}`}></div>
		</div>
	);
}
