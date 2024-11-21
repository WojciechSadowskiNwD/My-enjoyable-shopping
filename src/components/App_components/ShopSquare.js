import { Link } from "react-router-dom";
import styles from "./ShopSquare.module.scss";

function ShopSquare({ img, name, position = "", itemSize="" }) {
	return (
		<Link to="/appShopList" state={{ img, name }}>
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
