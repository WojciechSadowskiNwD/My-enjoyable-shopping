import styles from './Hollow.module.scss';

export default function Hollow({height=''}) {
    const style = {
        height: height,
    }


    return (
        <div className={styles.hollow} style={style}></div>
    )
}