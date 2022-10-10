import React , {useContext} from 'react';
import { Link , useParams } from 'react-router-dom';

//       CONTEXT       //
import { productsContext } from '../context/ProductContextProvider';

//       STYLE       //
import styles from "../styles/ProductDetails.module.css";

const ProductDetails = (props) => {
    
    // const idKala = props.match.params.id;                          //v5 react-router-dom
    const params = useParams();                                       //v6 react-router-dom 
    const idKala = params.id;                                         //id ra migirim -- idKala haman id dar api
    const data = useContext(productsContext);                         //ebteda az context maghadir ra dakhel data mirizim sepas anra dakhel product rikhte v destructing mikonim
    const product = data[idKala - 1];                                 //chon dar api id yeki kamtar az andis pas yeki kam mikonim
    const {image , title ,description , price , category} = product ; //destructuring
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="kala"/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $ </span>
                    <br/>
                    <Link to="/products"> Go to SHOP</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;