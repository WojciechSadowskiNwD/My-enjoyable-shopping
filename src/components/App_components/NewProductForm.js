import { useState } from "react";
import ButtonLink from "../ButtonLink";
import styles from "./NewProductForm.module.scss";

// initial shop list for tests
const initialShoppingList = [
	{ id: 1, category: "bread", name: "bread", amount: 2, grams: false, packed: false },
	{ id: 2, category: "fruits", name: "orange", amount: 5, grams: false, packed: true },
	{ id: 3, category: "wegetables", name: "potaoes", amount: 2.5, grams: true, packed: false },
	{ id: 4, category: "diary", name: "cheese", amount: 0.400, grams: true, packed: false },
	{ id: 5, category: "diary", name: "milk bottle", amount: 6.0, grams: true, packed: false },
];

function NewProductForm() {
	// all shops lists:
	const [biedronkaShop, setBiedronkaShop] = useState(initialShoppingList);
	const [lidlShop, setLidlShop] = useState("");
	const [auchanShop, setAuchanShop] = useState("");
	const [dinoShop, setDinoShop] = useState("");
	const [carrefourShop, setCarrefourShop] = useState("");
	const [nettoShop, setNettoShop] = useState("");

	const [productName, setProductName] = useState("");
	const [productAmount, setProductAmount] = useState("");
	const [productCategory, setProductCategory] = useState("");
	const [isGrams, setIsGrams] = useState(false);


	//send filled form
	function onAddProduct(e) {
		e.preventDefault();

		// alert if user no fill all fields
		if(!productName || !productAmount) {
			return alert("Complete all the fields");
		}
		
		// create object newProduct with values from form
		const newProduct = {
			category: productCategory,
			name: productName,
			amount: productAmount,
			grams: isGrams,
			packed: false,
			id: crypto.randomUUID(),
		}

		// send newProduct to function addProductToList
		addProductToList(newProduct);
		
		// clean states values (no category because user can added next products in the same category, for convenience I left this)
		setProductName('');
		setProductAmount('');
		setIsGrams(false);
	}

	// linking of arrays to one bigger product list
	function addProductToList(newProduct) {
		setBiedronkaShop((products)=> [...products, newProduct]);
	}

	// selecting categories by image
	const onSelectCategory = (e) => {
		setProductCategory(e.target.value);
	}

	// select name product
	const handleChangeProductName = (e) => {
		setProductName(e.target.value);
	};

	// how many pieces / grams
	const handleChangeProductAmount = (e) => {
		setProductAmount(e.target.value);
		console.log(productAmount);
	};
	// whether the amount is given in grams
	const handleCheckboxClick = (e) => {
		setIsGrams((prev) => !prev);
		console.log(isGrams);
	};

	return (
		<div className={styles.new_product_form}>

			<form className={styles.product_form} onSubmit={onAddProduct}>
				<div className={styles.title_bar}>
					<i className={`fa-regular fa-square-minus ${styles.minus_icon}`}></i>
					<h2>Add product</h2>
				</div>
				<div className={styles.middle_part_form}>
					<div className={styles.left}>
						<select className={styles.products_category} onChange={(e) => onSelectCategory(e)}>
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

export default NewProductForm;
