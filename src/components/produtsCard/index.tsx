import { ProductType } from "@/types/productType";
import styles from "./style.module.css"

type ProductProps={
    product:ProductType;
}

export const ProductCards = ({product}:ProductProps) =>{
    return (
        <div className={styles.card_container}>
            <img src={product.product_image_url} alt="image url" />
            <div>
                <div className={styles.left_side_card}> 
                    <span>Name Here</span>
                    <div>Nota: 9.0</div>
                </div>
                <div>
                    <span>R$ {product.product_price}</span>
                </div>
            </div>
        </div>
    )
}