import { useNavigate } from "react-router-dom";
import ShopSquare from "./ShopSquare";
import styles from "./TopTextBar.module.scss";

function TopTextBar({ img, name }) {
	const navigate = useNavigate();

	function goStepBack() {
		navigate("../appStart", { replace: true });
	}

	return (
		<div className={styles.text_bar}>
			<div className={styles.arrow_back_box} onClick={goStepBack}>
				<i className={`fa-solid fa-left-long ${styles.arrow_details}`}></i>
			</div>
			<h2>{name}</h2>

			<div className={styles.white_line}></div>
			<div className={styles.top_bar}>
				<ShopSquare
					img={img}
					name={name}
					position={styles.position_shop_square}
					itemSize={styles.item_size}
				/>
				<p className={styles.text}>
					Add your favorite products and build your shopping list:
				</p>
			</div>
		</div>
	);
}

export default TopTextBar;