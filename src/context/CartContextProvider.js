import React , {useReducer , createContext} from 'react';

const initialState ={
    selectedItems : [],                      // har mahsol yek obj ke ma !tedade! mahsolati k karbar entekhab kardaro dar in state mirizim agar chand model mahsol entekhab kone mishe array shamel chand obj
    itemsCounter : 0,                        // majmoe tedade mahsolati k karbar entekhab karde
    total : 0,                               // majmoe gheymat 
    checkout : false
}

const sumItems = items =>{                                                                                // ...sumItems ra dar har case return mikonim ta maghadir ke haman (itemsCounter , kol) ra begirim  
    const itemsCounter = items.reduce((kol, product) => kol + product.quantity , 0)                       // majmoe tedade mahsolati k karbar entekhab karde
    const kol = items.reduce((kol ,product) => kol + product.price * product.quantity , 0).toFixed(2);    // majmoe gheymat 
    return{itemsCounter : itemsCounter , total : kol}                                                     // baray tashkhis behtar  neveshtam kol vagarna total behtare
}
const cartReducer = (state , action) => {                                                                 // action be sorate yek obj mifrestim ke yek type(chekari bokon) dare v yek payload(roye kodom mahsol bokon => obj har mahsol)
    console.log(state)
    switch(action.type){
        case "ADD_ITEM" : 
            if(!state.selectedItems.find(item => item.id === action.payload.id)){                         // az find estefade mikonim chon mikhahim avalin chizi ro k peyda kard behemon bede v nemikhaym filter kone baray hamashon => yani migarde age an mahsoli k rosh click shode vojod nadash etelaatesh ro besorate obj push mikonim
                state.selectedItems.push({                                                                // (!) => if ra true mikonad
                    ...action.payload,                                                                    // yani etelaat mahsol ke haman productData mibashad
                    quantity : 1
                })
            }
            return{
                ...state,
                selectedItems : [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout : false                                                                           // agar karbar khast mahsoli ezafe konad dar hengam khrid nanevisad shoma checkout kardid

            }
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);    //yani bia mahsolati ro bargardon k id anha ba id mahsolati k karbar click karde barabar nabashe => hamey mahsolat ro barmigardone be joz onayike roshon click shode
            return{ 
                ...state,
                selectedItems : [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }  
        case "INCREASE" :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE" :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT" :
            return{
                selectedItems : [],
                itemsCounter : 0,
                total : 0,
                checkout : true
            }
        case "CLEAR" :
            return{
                selectedItems : [],
                itemsCounter : 0,
                total : 0,
                checkout : false
            }        
        default :
            return state;        
    }
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

                                                                                     
    return (                                                                                             // dar Es6 agar namha(value : key) barabr bashad lazem nist benevisim v faghat kafie {{state , dispatch}} ra benevisim ama man baray fahm bishtar neveshtam             
        <CartContext.Provider value={{state :state , dispatch : dispatch}}>     
            {children}
        </CartContext.Provider>
        
    );
};

export default CartContextProvider;