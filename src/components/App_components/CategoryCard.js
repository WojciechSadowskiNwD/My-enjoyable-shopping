import styles from "./CategoryCard.module.scss";
import SingleProduct from "./SingleProduct";

function CategoryCard({listName, typeName, typeImg, bgColor, items }) {

	return (
		<>
			{items.length > 0 ? (
				<div
					className={styles.products_card}
					style={{
						background: `linear-gradient(151deg, #77777795 0%, ${bgColor} 50%,${bgColor} 80%, #77777795 100%)`,
					}}
				>
					<div className={styles.card_title_box}>
						<span>{typeImg}</span>
						<h3 className={styles.card_title}>{typeName}</h3>
					</div>
					{items.map((item) => (
						<SingleProduct key={item.id} item={item} listName={listName} />
					))}
				</div>
			) : (
				""
			)}
		</>
	);
}

export default CategoryCard;
