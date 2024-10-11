import styles from './SubscribeForm.module.scss'

function SubscribeForm() {
    return (
        <div className={styles.subscribe_form_box}>
            <form className={styles.subscribe_form}>
                <label>Find out what the next improvements will be for the app's development. </label>
                <input type="text"/>
                <button>Subscribe</button>
            </form>
        </div>
    )
}


export default SubscribeForm;