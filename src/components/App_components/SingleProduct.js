import { useLists } from "../../contexsts/ListsProvider";
import productCheckboxFill from "../../img/icons/product-checkbox-checked.svg";
import styles from "./SingleProduct.module.scss";

function SingleProduct({ item, listName }) {
	const { name, quantity, isWeightInGrams, isCollected } = item;

	const { dispatch } = useLists();

	// console.log("jetem w SingleProduct, podglądam zawartość listName");
	// console.log(listName);

	return (
		<div className={styles.product_box}>
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
					className={styles.emptyCheckbox}
				>
					⚪
				</span>
			)}

			<p>{name}</p>
			<p>x{quantity}</p>

			{isWeightInGrams ? <p>gram</p> : ""}
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
	);
}

export default SingleProduct;
