import { useState } from "react";
import styles from "./ShoppingListTopBar.module.scss";

export default function ShoppingListTopBar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen((curr) => !curr);
    }


	return (
		<div className={styles.tb_options_container}>
			<div className={styles.top_bar}>
				<h2 className={styles.title_bar}>SHOPPING LIST</h2>
				<div className={styles.icon_box} onClick={handleToggle}>
					<i className={`fa-solid fa-gear ${styles.icon}`}></i>
				</div>
			</div>

            <div className={`${styles.options} ${isOpen ? styles.options_open : ''} `}></div>


		</div>
	);
}

//        http://localhost:3000/appShopList