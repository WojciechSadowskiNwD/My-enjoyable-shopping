import styles from "./InfoBlock.module.scss";

export default function InfoBlock({ children, width }) {

	return (
		<div className={`${styles.info_block} ${width}`}>
			<p>{children}</p>
		</div>
	);
}
  