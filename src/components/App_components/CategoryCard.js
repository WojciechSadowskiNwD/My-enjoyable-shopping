import { useLists } from "../../contexsts/ListsProvider";
import styles from "./CategoryCard.module.scss";
import SingleProduct from "./SingleProduct";

function CategoryCard({
	listName,
	typeName,
	typeImg,
	bgColor,
	productBgColor, 
	items,
}) {
	const {activeButton: sortBy} = useLists();
	let sortedItems = items;

	if (sortBy === "alphabetically")
		sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));

	if (sortBy === "toPack")
		sortedItems = items.slice().sort((a, b) => Number(a.isCollected) - Number(b.isCollected));

	if (sortBy === "packed")
		sortedItems = items.slice().sort((a, b) => Number(b.isCollected) - Number(a.isCollected));


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
					{sortedItems.map((item) => (
						<SingleProduct
							key={item.id}
							item={item}
							listName={listName}
							bgColor={bgColor}
							productBgColor={productBgColor}
						/>
					))}
				</div>
			) : (
				""
			)}
		</>
	);
}

export default CategoryCard;
