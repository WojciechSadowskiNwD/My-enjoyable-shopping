import styles from "./NewProductForm.module.scss";

function NewProductForm() {
	return (
		<div className={styles.new_product_form}>
			<form className={styles.product_form}>
				<div className={styles.top_part_form}>
					<div className={styles.left}>
                        <label>Category</label>
						<select
							className={styles.products_category}
						>
							<option value="none">🧾</option>
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
						<input type="text" placeholder="Type your product"></input>
						<input type="number" placeholder="How many"></input>
                        <input type="radio"></input>
					</div>
				</div>

				<button>Add product</button>
			</form>
		</div>
	);
}

export default NewProductForm;
