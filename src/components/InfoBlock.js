import styles from "./InfoBlock.module.scss";

export default function InfoBlock({ children, position='', width }) {
    const style = {
        width: width,
    }

	return (
		<div className={`${styles.info_block} ${position}`} style={style}>
			<p>{children}</p>
		</div>
	);
}
