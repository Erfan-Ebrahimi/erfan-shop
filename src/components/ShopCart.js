import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//        CONTEXT         //
import {CartContext} from "../context/CartContextProvider";

//      COMPONENTS       //
import Cart from '../components/shared/Cart';

//        STYLE         //
import styles from "../styles/ShopCart.module.css";

//       IMAGE         //
import pay from "../assets/icons/pey2.jpg";
import buy from "../assets/icons/buy3.jpg";


// yek map az roye selectedItems mizanim va <Cart/> ra misazim => yani har mahsoli ke dar selectedItems bod be sorate yek component <Cart/> nemayesh dade mishavad
const ShopCart = () => {

  const {state , dispatch} = useContext(CartContext)
  return (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
            <div className={styles.com}>
              {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            
            <div>
{/* if mahsoli dar state vojod dasht in etelaat ra neshon bede */}
              { 
                state.itemsCounter > 0 && <div className={styles.payments}>
                                            <p><span>Total Items : </span>{state.itemsCounter}</p>
                                            <p><span>Total Peyments : </span>{state.total} $</p>
                                            <div className={styles.buttonContainer}>
                                              <button className={styles.checkout} onClick={() => dispatch({type : "CHECKOUT"})}>Check out</button>
                                              <button className={styles.clear} onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
                                            </div>
                                          </div>
              }
{/* if checkout = true => in etelaat ro neshon bede */}
              {
                state.checkout && <div className={styles.complete}>
                                    <img src={pay} alt='pay'/>
                                    <Link to="/products"> Buy More</Link>
                                  </div>
              }
{/* if checkout = false v tedad = 0 => in etelaat ro neshon bede*/}
              {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                                    <h3>Don't leave us without buying ^_^</h3>
                                    <img src={buy} alt="buy"/>
                                    <Link to="/products">Go Back To Store</Link>
                                  </div>
              }
            </div>
          </div>            
        </div>
    );
};

export default ShopCart;