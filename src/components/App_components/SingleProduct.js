import styles from './SingleProduct.module.scss';

function SingleProduct({item}){
    return (
        <div className={styles.product_box}>{item.name}</div>
    )
}

export default SingleProduct;