import styles from "./SectionTitle.module.scss";

export default function SectionTitle({children}) {
	
	return (
		<div className={styles.section_title}>
			<h2>{children}</h2>
		</div>
	);
}
