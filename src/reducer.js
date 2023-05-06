
export const initialState = {
    basket: [],

};
// SELECTOR
// export const getBasketTotal = (basket) => 
//   basket?.reduce((amount, item) => item+ amount, 0);




const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "Remove_From_Basket":

        const index = state.basket.findIndex(
            (basketItem)=> basketItem.title=== action.title );

        let newBasket = [...state.basket];

        if(index>=0){
            newBasket.splice(index,1);
        }
        else{
            console.warn('Cant remove this item (item: ${action.item}) is not in the basket')
        }

        return {...state ,
         basket:newBasket}
        


        default:
            return state;
    }
};

export default reducer;
