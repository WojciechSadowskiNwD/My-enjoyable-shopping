import styles from './AllShopLists.module.scss';

function AllShopLists() {
	return (
		<div className={styles.section_shop_lists}>
			<div className={styles.shop_square}>1</div>
			<div className={styles.shop_square}>2</div>
			<div className={styles.shop_square}>3</div>
			<div className={styles.shop_square}>4</div>
		</div>
	);
}

export default AllShopLists;