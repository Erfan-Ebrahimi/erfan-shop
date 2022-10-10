// shorten faghat 2 kalame aval mojod dar title har product ra neshan midahad - dar Product.js estefade mishavad
const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]}  ${splitedTitle[1]}`;
    return newTitle;
}

// be ma migoyad k aya mahsol(productData) dar state mojod mibashad ya n    
const isInCart = (state , id) => {                                     // state ke migirad haman state dispatch mibashad
    const result = !!state.selectedItems.find(item => item.id === id) // 2!! => javab ra true ya false mikonad => javab dar inja true false nist balke string ya meghdar digari mibashad ama ma ba in kar anra tabdil mikonim
    return result;

}

// tedad har mahsol ra midahad
const quantityCount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id) // javab ya +1 ya -1 => if -1 bod chizi nemikhaym faghat ye false bargardon
    if (index === -1){ 
        return false
    }else{
        return state.selectedItems[index].quantity;
    }
}

export {shorten , isInCart , quantityCount};