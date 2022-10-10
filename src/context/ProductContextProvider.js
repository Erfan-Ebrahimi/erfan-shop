import React , {useState , useEffect ,createContext} from "react";

//       API         //
import { getProducts } from "../services/api";


export const productsContext = createContext();                 //context ro misazim

const ProductContextProvider = (props) => {

    const [products , setProducts] = useState([]);              //array midim chon etelaat be sorat obj hayee daron array miad

    useEffect(() =>{                                           //haman api k gereftim ra setSatae mikonim dar products
        const fetchAPI = async () =>{
            setProducts(await getProducts());
        }
        fetchAPI();
    }, [])



    return (                                                  //har component dar App dakhel ProductContextProvider gharar begirad dar asl dakhel productsContext.Provider gharar gerfte ast v mitavanad b maghadir products dastresi dashte bashad 
        <div>
            <productsContext.Provider value={products}>      
                {props.children}
            </productsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
