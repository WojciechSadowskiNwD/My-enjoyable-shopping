import styles from "./AllProducts.module.scss";
import CategoryCard from "./CategoryCard";

function AllProducts({ allProducts, listName }) {

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
		{
			typeName: "cereal",
			typeImg: "🍞",
			typeBgColor: "#f1b75add",
			productBgColor: "#f1b75a84",
			items: cerealType,
		},
		{
			typeName: "dairy",
			typeImg: "🧀",
			typeBgColor: "rgba(255, 255, 25, 0.74)",
			productBgColor: "rgba(255, 255, 25, 0.51)",
			items: dairyType,
		},
		{
			typeName: "meat",
			typeImg: "🍖",
			typeBgColor: "#d5407cdd",
			productBgColor: "#d5407b8e",
			items: meatType,
		},
		{
			typeName: "fruits",
			typeImg: "🥝",
			typeBgColor: "#d1c026dd",
			productBgColor: "#d1c02684",
			items: fruitsType,
		},
		{
			typeName: "vegetables",
			typeImg: "🥬",
			typeBgColor: "#a3d831dd",
			productBgColor: "#a3d831a2",
			items: vegetablesType,
		},
		{
			typeName: "frozen",
			typeImg: "🐟",
			typeBgColor: "#26cbd1dd",
			productBgColor: "#26cbd18a",
			items: frozenType,
		},
		{
			typeName: "candies",
			typeImg: "🍭",
			typeBgColor: "#d57a39dd",
			productBgColor: "#d57a39dd",
			items: candiesType,
		},
		{
			typeName: "drinks",
			typeImg: "🍹",
			typeBgColor: "#494542dd",
			productBgColor: "#878999d9",
			items: drinksType,
		},
	];

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
