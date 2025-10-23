import { useLists } from "../../contexsts/ListsProvider";
import CategoryCard from "../../layout/appShopList/CategoryCard";
import EmptyList from "../../layout/appShopList/EmptyList";
import styles from "./AllProducts.module.scss";

function AllProducts({ listName }) {
	const { getTypesCollection, state } = useLists();
	const typesCollection = getTypesCollection(listName);
	const listExist = state[listName].listExist;

	return (
		<div className={styles.list_box}>
			{typesCollection.map(
				({ typeName, typeImg, typeBgColor, productBgColor, items }) => (
					<CategoryCard
						key={typeName}
						typeName={typeName}
						typeImg={typeImg}
						bgColor={typeBgColor}
						productBgColor={productBgColor}
						items={items}
						listName={listName}
					/>
				)
			)}
			{!listExist ? (
				<EmptyList>
					<p>
						This list is <span>empty</span>, add your first product.
					</p>
				</EmptyList>
			) : (
				""
			)}
		</div>
	);
}

export default AllProducts;