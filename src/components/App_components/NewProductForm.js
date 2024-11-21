import { useState } from "react";
import ButtonLink from "../ButtonLink";
import styles from "./NewProductForm.module.scss";

function NewProductForm() {
	const [productName, setProductName] = useState("");
	const [productAmount, setProductAmount] = useState("");
	const [isChecked, setIsChecked] = useState(false);

	const handleChangeProductName = (e) => {
		setProductName(e.target.value);
	};
	const handleChangeProductAmount = (e) => {
		setProductAmount(e.target.value);
	};
	const handleRadioClick = (e) => {
		setIsChecked((prev) => !prev);
	};

	return (
		<div className={styles.new_product_form}>
			<form className={styles.product_form}>
				<div className={styles.title_bar}>
					<i className={`fa-regular fa-square-minus ${styles.minus_icon}`}></i>
					<h2>Add product</h2>
				</div>
				<div className={styles.middle_part_form}>
					<div className={styles.left}>
						<select className={styles.products_category}>
							<option value="bread">🍞</option>
							<option value="diary">🧀</option>
							<option value="vegetables">🥬</option>
							<option value="fruits">🥝</option>
							<option value="meat">🍖</option>
							<option value="fishs">🐟</option>
							<option value="candies">🍭</option>
							<option value="drinks">🍹</option>
						</select>
					</div>
					<div className={styles.right}>
						<input
							className={`${styles.input_add_product} ${styles.input_name}`}
							type="text"
							placeholder="Type your product"
							value={productName}
							onChange={handleChangeProductName}
						></input>
						<div className={styles.right_bottom}>
							<input
								className={`${styles.input_add_product} ${styles.input_number}`}
								type="number"
								placeholder="How many"
								value={productAmount}
								onChange={handleChangeProductAmount}
							></input>
							<div className={styles.checkbox_box}>
								<input
									className={styles.checkbox}
									type="checkbox"
									checked={isChecked}
									onChange={handleRadioClick}
								/>
								<label className={styles.label_radio}>grams</label>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.btn_box}>
					<ButtonLink positionClass={styles.positionClass}>
						Add to list
					</ButtonLink>
				</div>
			</form>
		</div>
	);
}

export default NewProductForm;
