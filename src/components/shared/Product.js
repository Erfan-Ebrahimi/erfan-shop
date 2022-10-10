import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//     FUNCTIONS      //
import { quantityCount, shorten } from '../../helper/functions';
import { isInCart } from '../../helper/functions';

//     CONTEXT       //
import { CartContext } from '../../context/CartContextProvider';

//      ICONS       //
import trashIcon from "../../assets/icons/trash.svg";

//      STYLE      //
import styles from "../../styles/Product.module.css";


const Product = ({productData}) => {                 //props.productData mibashad k an ra destructuring kardim => dar asl haman productData mojod dar Store mibashad k anra besorate props pass dadim
    
    const {state , dispatch} = useContext(CartContext)
    
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="kala" style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3> 
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}> 
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state , productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type : "DECREASE" , payload : productData})}>-</button>}
                    {quantityCount(state , productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src= {trashIcon} alt="trashsvg"/></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}

                    {
                        isInCart(state , productData.id)?
                        <button onClick={() => dispatch({type : "INCREASE" , payload : productData})} className={styles.smallButton}>+</button> :
                        <button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})}>Add to cart</button>   
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Product;