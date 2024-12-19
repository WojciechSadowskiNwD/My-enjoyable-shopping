import { useLists } from "../../contexsts/ListsProvider";
import styles from "./AllShopLists.module.scss";
import ShopSquare from "./ShopSquare";

function AllShopLists() {
	const { state } = useLists();

	// Przekształcam obiekty w tablicę
	const shopsData = Object.values(state);

	// Filtrowanie na tylko sklepy z istniejącą listą (opcjonalne)
	const filteredShops = shopsData.filter((shop) => shop.listExist);

	return (
		<div className={styles.section_shop_lists}>
			{filteredShops.map((shop, index) => (
				<div className={styles.shop_square_bottom}>
					<ShopSquare
						key={index}
						thisList={shop}
						name={shop.name}
						img={shop.img}
						position={styles.square_position}
						itemSize={styles.square_size}
					/>
					<p>
						Products: <strong>{shop.shoppingList.length}</strong>
					</p>
				</div>
			))}
		</div>
	);
}

export default AllShopLists;
