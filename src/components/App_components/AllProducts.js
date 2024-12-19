import { useLists } from "../../contexsts/ListsProvider";
import CategoryCard from "./CategoryCard";
import styles from "./AllProducts.module.scss";
import EmptyList from "./EmptyList";


function AllProducts({ listName }) {
	const {getTypesCollection, state} = useLists();
	const typesCollection = getTypesCollection(listName);
	const listExist = state[listName].listExist;

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
			{!listExist ? <EmptyList/> : ''}
		</div>
	);
}

export default AllProducts;
