import styles from './AllProducts.module.scss';

function AllProducts({allProducts}) {
    console.log("allProducts");
    console.log(allProducts);

    // filter by type products:
    const cerealType = allProducts.filter((item) => item.typeProduct === "cereal");
    const fruitsType = allProducts.filter((item) => item.typeProduct === "fruits");
    const vegetablesType = allProducts.filter((product) => product.typeProduct === "vegetables");
    const meatType = allProducts.filter((item) => item.typeProduct === "meat");
    const dairyType = allProducts.filter((item) => item.typeProduct === "dairy");
    const frozenType = allProducts.filter((item) => item.typeProduct === "frozen");
    const candiesType = allProducts.filter((item) => item.typeProduct === "candies");
    const drinksType = allProducts.filter((item) => item.typeProduct === "drinks");


    return (
        <div className={styles.list_box}>
				<h2>SHOPPING LIST</h2>

					<div className={styles.products_card}>
						<h3 className={styles.card_title}>All</h3>
						{allProducts.map((product)=> <p>{product.name}</p>)}
					</div>
		</div>
    )
}

export default AllProducts;

// function Product