// !STORE Takes REDUCERS

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


    const middleware=[thunk]        //! 1.added line 
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
 const rootReducer=combineReducers({   //! 2.added line 
    

 })
 //For set ORDER DETAILS IN LOCAL STORAGE----->


//For Local Storage-----
//  const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem("cartItems")) :[];
// const initialState={
//   cartReducer:{
//     cartItems
//   }
// }




export const store = createStore(rootReducer,enhancer);   //!3.added export before const