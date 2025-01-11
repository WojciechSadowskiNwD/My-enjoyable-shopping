import { useLists } from "../../contexsts/ListsProvider";
import productCheckboxFill from "../../img/icons/product-checkbox-checked.svg";
import styles from "./SingleProduct.module.scss";

function SingleProduct({ item, listName, bgColor, productBgColor = "" }) {
	const { name, quantity, isWeightInGrams, isCollected } = item;
	const { dispatch } = useLists();

	return (
		<div
			style={!isCollected ? { backgroundColor: productBgColor } : undefined}
			className={`${styles.product_section} ${
				isCollected ? styles.is_collected : ""
			}`}
		> 
			<div className={styles.left_box}>
				{isCollected ? (
					<img
						onClick={() =>
							dispatch({
								type: "product/change_isCollected",
								payload: { id: item.id, listName: listName },
							})
						}
						src={productCheckboxFill}
						alt="My Icon"
						width="30"
						height="30"
					/>
				) : (
					<span
						onClick={() =>
							dispatch({
								type: "product/change_isCollected",
								payload: { id: item.id, listName: listName },
							})
						}
					>
						<i className={`fa-solid fa-circle ${styles.white_circle}`}></i>
					</span>
				)}
			</div>

			<div className={styles.middle_box}>
				<p>{name}</p>(<p>{quantity}</p>)
				{isWeightInGrams ? <p className={styles.grams}>grams</p> : ""}
			</div>

			<div className={styles.right_box}>
				<span
					className="deleteIcon"
					onClick={() =>
						dispatch({
							type: "product/delete_product",
							payload: { id: item.id, listName: listName },
						})
					}
				>
					⛌
				</span>
			</div>
		</div>
	);
}

export default SingleProduct;
