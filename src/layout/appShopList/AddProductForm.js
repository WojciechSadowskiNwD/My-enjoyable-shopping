import { useState } from "react";
import { useLists } from "../../contexsts/ListsProvider";
import { v4 as uuidv4 } from "uuid";
import ButtonLink from "../components/ButtonLink";
import FormTopBar from "./FormTopBar";
import styles from "./AddProductForm.module.scss";

function AddProductForm({ thisList }) {
	const { dispatch } = useLists();
	const [isOpen, setIsOpen] = useState(true); // accordion

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
			id: uuidv4(),
			name: productName,
			typeProduct: productCategory,
			quantity: productAmount,
			isWeightInGrams: isGrams,
			isCollected: false,
		};

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
	const handleCheckboxClick = () =>
		setFormData((prev) => ({ ...prev, isGrams: !prev.isGrams }));

	return (
		<div className={styles.form_container}>
			<FormTopBar isOpen={isOpen} onToggle={handleToggle} />

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
							className={`${styles.products_category} ${
								isOpen ? "" : "no_opacity"
							}`}
							onChange={onSelectCategory}
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
						/>
						<div className={styles.right_bottom}>
							<input
								className={`${styles.input_number} ${
									isOpen ? "" : "no_opacity"
								}`}
								type="number"
								placeholder="How many"
								value={productAmount}
								onChange={handleChangeProductAmount}
							/>
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

			<div
				className={`${styles.bottom_bar} ${!isOpen ? "" : "no_opacity"}`}
			></div>
		</div>
	);
}

export default AddProductForm;