import styles from "./AppTopTextBar.module.scss";
import ShopSquare from "./ShopSquare";

function AppTopTextBar({ img, name }) {
	return (
		<div className={styles.text_bar}>
			<div className={styles.top_bar}>
				<ShopSquare
					img={img}
					name={name}
					position={styles.position_shop_square}
				/>
				<p className={styles.text}>
					Add your favorite products and build your shopping list:
				</p>
			</div>
            <div className={styles.add_button}>
                <p className={styles.add_button_text}>Add</p>
                <i class="fa-solid fa-circle-plus"></i>
                
            </div>
		</div>
	);
}

export default AppTopTextBar;
