import React, { useContext } from 'react';

//       CONTEXT       //
import { CartContext } from '../../context/CartContextProvider';

//     FUNCTIONS      //
import {shorten} from "../../helper/functions";

//      ICONS       //
import trash from "../../assets/icons/trash.svg";

//      STYLE      //
import styles from "../../styles/Cart.module.css";



const Cart = (props) => {                                         // props ra az ShopCart gereftim
    
    const {image , title , price , quantity} = props.data        // etelaat ra if az props begirim baray yek mahsole v if az state begirim baray hamey mahsolat
    const {dispatch} = useContext(CartContext)
    
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product'/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type : "DECREASE" , payload  : props.data})}>-</button> :
                    <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload  : props.data})}><img src={trash} alt="trashicon"/></button>

                }
                <button onClick={() => dispatch({type : "INCREASE" , payload  : props.data})}>+</button>

            </div>
        </div>
    );
};

export default Cart;