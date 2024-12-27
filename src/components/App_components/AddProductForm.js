import { useState } from "react";
import { useLists } from "../../contexsts/ListsProvider";
import ButtonLink from "../ButtonLink";
import styles from "./AddProductForm.module.scss";

function AddProductForm({ thisList }) {
	const { dispatch } = useLists();
	const [isOpen, setIsOpen] = useState(true); //do akordeonu

	// toggle accordion: visible/unvisible
	const handleToggle = () => setIsOpen((curr) => !curr);

	// Default object and later storing the data received from form
	const [formData, setFormData] = useState({
		id: "",
		productName: "",
		productCategory: "cereal",
		productAmount: "",
		isGrams: false,
		packed: false,
	});
	const { productName, productCategory, productAmount, isGrams } = formData;

	//FORM SEND DATA:
	function handleSubmit(e) {
		e.preventDefault();

		// alert if user no fill all fields
		if (!formData.productName || !formData.productAmount) {
			return alert("Complete all the fields");
		}

		// create object newProduct with values from form
		const newProduct = {
			id: crypto.randomUUID(),
			name: productName,
			typeProduct: productCategory,
			quantity: productAmount,
			isWeightInGrams: isGrams,
			isCollected: false,
		};

		// ustaw ostatni wybór kategorii produktu do zapamiętania:

		// send data to reducer
		dispatch({
			type: "product/add_product",
			payload: {
				shopName: thisList.name,
				product: newProduct,
			},
		});

		// form cleaning from data
		setFormData({
			id: "",
			productName: "",
			productAmount: "",
			isGrams: false,
			packed: false,
			productCategory: formData.productCategory,
		});
	}

	//* * FORM ADD DATA TO STATES:
	// selecting categories by image
	const onSelectCategory = (e) => {
		setFormData((prev) => ({
			...prev,
			productCategory: e.target.value,
			lastCategory: e.target.value,
		}));
	};

	// select name product
	const handleChangeProductName = (e) =>
		setFormData((prev) => ({ ...prev, productName: e.target.value }));

	// how many pieces / grams
	const handleChangeProductAmount = (e) =>
		setFormData((prev) => ({ ...prev, productAmount: e.target.value }));

	// whether the amount is given in grams
	const handleCheckboxClick = (e) =>
		setFormData({ ...formData, isGrams: !formData.isGrams });

	return (
		<div className={styles.form_container}>
			<div className={styles.top_bar}>
				<h2>Add product</h2>
				<div className={styles.box_icon} onClick={handleToggle}>
					{isOpen ? (
						<i className={`fa-regular fa-square-minus ${styles.icons}`}></i>
					) : (
						<i className={`fa-regular fa-square-plus ${styles.icons}`}></i>
					)}
				</div>
			</div>

			<form
				className={`${styles.accordion_height0} ${
					isOpen ? styles.product_form : ""
				}`}
				onSubmit={handleSubmit}
			>
				<div>
					<div className={styles.left}>
						<select
							value={productCategory}
							className={`${styles.products_category} ${isOpen ? '' : "no_opacity"}`}
							onChange={(e) => onSelectCategory(e)}
						>
							<option value="cereal">🍞</option>
							<option value="dairy">🧀</option>
							<option value="vegetables">🥬</option>
							<option value="fruits">🥝</option>
							<option value="meat">🍖</option>
							<option value="frozen">🧊</option>
							<option value="candies">🍭</option>
							<option value="drinks">🍹</option>
						</select>
					</div>
					<div className={styles.right}>
						<input
						className={`${styles.input_name} ${isOpen ? "" : "no_opacity"}`}
							type="text"
							placeholder="Type your product"
							value={productName}
							onChange={handleChangeProductName}
						></input>
						<div className={styles.right_bottom}>
							<input
								className={`${styles.input_number} ${isOpen ? "" : "no_opacity"}`}
								type="number"
								placeholder="How many"
								value={productAmount}
								onChange={handleChangeProductAmount}
							></input>
							<div className={styles.checkbox_box}>
								<input
									className={styles.checkbox}
									type="checkbox"
									checked={isGrams}
									onChange={handleCheckboxClick}
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

export default AddProductForm;