import styles from './NewListButton.module.scss';

function newListButton() {
	return (
		<div className={styles.section_new_list_btn}>
			<div className={styles.button_box}>
				<p>Add a new store and create a shopping list inside</p>
				<button className={styles.addList_btn}>+ Add new shopping list</button>
			</div>
		</div>
	);
}

export default newListButton;