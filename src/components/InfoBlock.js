import styles from "./InfoBlock.module.scss";

export default function InfoBlock({ children, width }) {
    const style = {
        width: width,
    }

	return (
		<div className={styles.info_block} style={style}>
			<p>{children}</p>
		</div>
	);
}
