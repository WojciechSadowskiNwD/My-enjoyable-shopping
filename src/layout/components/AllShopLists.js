import { useLists } from "../../contexsts/ListsProvider";
import ShopSquare from "../appShopList/ShopSquare";
import EmptyList from "../appShopList/EmptyList";
import styles from "./AllShopLists.module.scss";

function AllShopLists() {
	const { dispatch, state } = useLists();

	// Convert obiect to array
	const shopsData = Object.values(state);

	// Filter to array exist shops
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
					<div className={styles.box_left_part}>
						<div
							className={styles.btn_delete}
							onClick={() =>
								dispatch({
									type: "product/delete_list",
									payload: shop.name,
								})
							}
						>
							⛌
						</div>
						<p>
							Products: <strong>{shop.shoppingList.length}</strong>
						</p>
					</div>
				</div>
			))}
			{filteredShops.length === 0 ? (
				<EmptyList componentSize={styles.empty_list_size}>
					<p>There is no shopping list yet.</p>
				</EmptyList>
			) : (
				""
			)}
		</div>
	);
}

export default AllShopLists;