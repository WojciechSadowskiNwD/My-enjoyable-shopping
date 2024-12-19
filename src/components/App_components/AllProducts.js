import { useLists } from "../../contexsts/ListsProvider";
import CategoryCard from "./CategoryCard";
import styles from "./AllProducts.module.scss";


function AllProducts({ listName }) {
	const {getTypesCollection} = useLists();
	const typesCollection = getTypesCollection(listName);

	return (
		<div className={styles.list_box}>
			<h2>SHOPPING LIST</h2>
			{typesCollection.map(({ typeName, typeImg, typeBgColor, productBgColor, items }) => (
				<CategoryCard
					key={typeName}
					typeName={typeName}
					typeImg={typeImg}
					bgColor={typeBgColor}
					productBgColor={productBgColor}
					items={items}
					listName={listName}
				/>
			))}
		</div>
	);
}

export default AllProducts;
