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
		{
			typeName: "cereal",
			typeImg: "🍞",
			typeBgColor: "#f1b75add",
			items: cerealType,
		},
		{
			typeName: "dairy",
			typeImg: "🧀",
			typeBgColor: "rgba(255, 255, 25, 0.74)",
			items: dairyType,
		},
		{
			typeName: "meat",
			typeImg: "🍖",
			typeBgColor: "#d5407cdd",
			items: meatType,
		},
		{
			typeName: "fruits",
			typeImg: "🥝",
			typeBgColor: "#d1c026dd",
			items: fruitsType,
		},
		{
			typeName: "vegetables",
			typeImg: "🥬",
			// typeBgColor: "#a5c75bdd",
			typeBgColor: "#a3d831dd",
			items: vegetablesType,
		},
		{
			typeName: "frozen",
			typeImg: "🐟",
			typeBgColor: "#26cbd1dd",
			items: frozenType,
		},
		{
			typeName: "candies",
			typeImg: "🍭",
			typeBgColor: "#d57a39dd",
			items: candiesType,
		},
		{
			typeName: "drinks",
			typeImg: "🍹",
			typeBgColor: "#494542dd",
			items: drinksType,
		},
	];

	return (
		<div className={styles.list_box}>
			<h2>SHOPPING LIST</h2>
			{typesCollection.map(({ typeName, typeImg, typeBgColor, items }) => (
				<CategoryCard
					key={typeName}
					typeName={typeName}
					typeImg={typeImg}
					bgColor={typeBgColor}
					items={items}
				/>
			))}
		</div>
	);
}

export default AllProducts;
