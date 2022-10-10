import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//       CONTEXT       //
import { CartContext } from '../../context/CartContextProvider';

//      ICONS       //
import cart2 from "../../assets/icons/cart2.svg"

//      STYLE      //
import styles from "../../styles/Navbar.module.css";


const Navbar = () => {
    const {state} = useContext(CartContext)                       // faghat state ra mikhahim v be dispatch nyazi nadarim

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={cart2} alt='shopsvg'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;