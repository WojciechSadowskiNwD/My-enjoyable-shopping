import styles from './CategoryCard.module.scss';
import SingleProduct from './SingleProduct';

function CategoryCard({ typeName, items }) {

	return (
		<>
			{items.length > 0 ? (
				<div className={styles.products_card}>
					<h3 className={styles.card_title}>{typeName}</h3>
					{items.map((item)=><SingleProduct key={item.id} item={item}/>)}
				</div>
			) : (
				""
			)}
		</>
	);
}

export default CategoryCard;

