import styles from "./SummaryBar.module.scss";

export default function SummaryBar({ total, toCollected }) {
	let toGather = toCollected.length;

	return (
		<>
			{total > 0 && (
				<div className={styles.summary_container}>
					<p>Total products: <span>{total}</span></p>
					{toGather > 0 && (
						<p>To collected: <span>{toGather}</span></p>
					)}
					{toGather <= 0 && <p>Great everything was <span className={styles.orange_word}>collected!</span></p>}
				</div>
			)}
		</>
	);
}
