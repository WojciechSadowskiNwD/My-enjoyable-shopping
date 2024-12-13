import styles from "./AllProducts.module.scss";
import CategoryCard from "./CategoryCard";

function AllProducts({ allProducts }) {

	// filter by type products:
	const cerealType = allProducts.filter(
		(item) => item.typeProduct === "cereal"
	);
	const fruitsType = allProducts.filter(
		(item) => item.typeProduct === "fruits"
	);
	const vegetablesType = allProducts.filter(
		(product) => product.typeProduct === "vegetables"
	);
	const meatType = allProducts.filter((item) => item.typeProduct === "meat");
	const dairyType = allProducts.filter((item) => item.typeProduct === "dairy");
	const frozenType = allProducts.filter(
		(item) => item.typeProduct === "frozen"
	);
	const candiesType = allProducts.filter(
		(item) => item.typeProduct === "candies"
	);
	const drinksType = allProducts.filter(
		(item) => item.typeProduct === "drinks"
	);

  // Kolekcja kategorii produktów
	const typesCollection = [
		{ typeName: "cereal", items: cerealType },
		{ typeName: "fruits", items: fruitsType },
		{ typeName: "vegetables", items: vegetablesType },
		{ typeName: "meat", items: meatType },
		{ typeName: "dairy", items: dairyType },
		{ typeName: "frozen", items: frozenType },
		{ typeName: "candies", items: candiesType },
		{ typeName: "drinks", items: drinksType },
	];

	return (
		<div className={styles.list_box}>
			<h2>SHOPPING LIST</h2>
			{typesCollection.map(({ typeName, items }) => (
				<CategoryCard key={typeName} typeName={typeName} items={items} />
			))}
		</div>
	);
}

export default AllProducts;
