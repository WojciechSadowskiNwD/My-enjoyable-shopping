import { Link } from "react-router-dom";
import styles from "./ShopSquare.module.scss";

function ShopSquare({ img, name, thisList, position = "", itemSize="" }) {
	return (
		<Link to="/appShopList" state={{ thisList, img, name }}>
			<div className={`${styles.square_box} ${position}`}>
				<div
					className={`${styles.shop_square} ${itemSize}`}
					style={{ backgroundImage: `url(${img})` }}
				></div>
			</div>
		</Link>
	);
}

export default ShopSquare;
