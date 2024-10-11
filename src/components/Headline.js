import styles from './Headline.module.scss';

export default function Headline({children}) {
	return (
		<div className={styles.headline}>
			<h2>{children}</h2>
		</div>
	)
}