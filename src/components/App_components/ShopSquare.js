
import styles from './ShopSquare.module.scss';

function ShopSquare({ img, name }) {
	return (
		<div className={styles.square_box}>
			<div
				className={styles.shop_square} 
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<p>{name}</p>
		</div>
	);
}


export default ShopSquare;