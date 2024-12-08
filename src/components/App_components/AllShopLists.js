import { useLists } from "../../contexsts/ListsProvider";
import styles from "./AllShopLists.module.scss";
import ShopSquare from "./ShopSquare";

function AllShopLists() {
	const { state } = useLists();
	console.log(state);

	// Przekształcam obiekty w tablicę
	const shopsData = Object.values(state);

	// Filtrowanie na tylko sklepy z istniejącą listą (opcjonalne)
	const filteredShops = shopsData.filter((shop) => shop.listExist);

	return (
		<div className={styles.section_shop_lists}>
			{filteredShops.map((shop, index) => (
						<div className={styles.shop_square_bottom}>
							<ShopSquare key={index} name={shop.name} img={shop.img} />
							<p>Products: {shop.shoppingList.length}</p>
						</div>
					))}
		</div>
	);
}

export default AllShopLists;
