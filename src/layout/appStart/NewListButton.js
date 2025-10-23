import styles from './NewListButton.module.scss';

export default function NewListButton({ onChange }) {
	return (
		<div className={styles.button_box}>
			<p>Add a new store and create a shopping list inside</p>
			<button className={styles.addList_btn} onClick={onChange}>
				+ Add new shopping list
			</button>
		</div> 
	);
}