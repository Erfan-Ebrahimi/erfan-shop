import React , {useContext} from 'react';

//     COMPONENTS       //
import Product from '../components/shared/Product';

//       CONTEXT       //
import { productsContext } from '../context/ProductContextProvider';

//      STYLE         //
import styles from "../styles/Store.module.css";;


// dar inja tamam data ra be Product.js mifrestim va anja har product ra misazim inja faghat map zadim yani har mahsol dar Product.js sakhte mishavad v hamegi dar inja  nemayesh dade mishavad
// ba productData be sorat props mifrestim - key ham ke baray map zadan niaz darim
const Store = () => {

    const products = useContext(productsContext);

    return (                                           // be horof bozorg v kochak deghat shavad - mitavenstim az item niz estefade konim baray khanayee codha  product ba p bozorg haman component Product
        <div className={styles.container}>            
            {
                products.map(product => <Product 
                                                key={product.id} 
                                                productData={product}
                                                />)                
            }
        </div>
    );
};

export default Store;