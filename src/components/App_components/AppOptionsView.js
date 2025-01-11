import styles from './AppOptionsView.module.scss';

export default function AppOptionsView({children}) {
    return (
        <div className={styles.options_view}>
            {children}
        </div>
    )
};
