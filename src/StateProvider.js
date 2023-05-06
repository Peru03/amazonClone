
import React, {createContext , useContext, useReducer} from "react";


//Prepare the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the dataLayer
export const StateProvider =({ reducer, initialState , children})=>(
    <StateContext.Provider value={useReducer( reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull informaton from the datalayer
export const useStateValue=()=> useContext(StateContext);
