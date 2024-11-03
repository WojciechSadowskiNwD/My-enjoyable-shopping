import styles from './OrderCard.module.scss';

export default function OrderCard({
	titleCard,
	children,
	firstArgument,
	secondArgument,
	thirdArgument,
}) {
	return (
		<div className={styles.order_card}>
			<div className={`${styles.card_front}`}>
				<div className={styles.card_front_content}>
					<h3>{titleCard}</h3>
					<p>{children}</p>
					<span>
						<i class="fa-solid fa-arrow-rotate-left"></i>
						<p>Check out</p>
					</span>
				</div>
				<div className={styles.photo_shadow}></div>
			</div>

			<div className={`${styles.card_back} ${styles.turnover}`}>
				<h3>{titleCard}</h3>
				<div className={styles.order_icons}>
					<i class="fa-solid fa-cookie-bite"></i>
				</div>
				<div className={styles.text_content}>
					<p className={styles.top_paragraph}>
						In the package you will receive:
					</p>
					<span className={styles.content_row}>
						<i class="fa-solid fa-circle-check"></i>
						<p>{firstArgument}</p>
					</span>
					<span className={styles.content_row}>
						<i class="fa-solid fa-circle-check"></i>
						<p>{secondArgument}</p>
					</span>
					<span className={styles.content_row}>
						<i class="fa-solid fa-circle-check"></i>
						<p>{thirdArgument}</p>
					</span>
				</div>
				<button className={styles.btn_order}>Order</button>
			</div>
		</div>
	);
}
