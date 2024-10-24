import styles from './SectionTitle.module.scss';

export default function SectionTitle({children, fontSize=''}) {
    return (
        <div className={`${styles.section_title} ${fontSize}`}>
					<h2>{children}</h2>
				</div>
    )
}