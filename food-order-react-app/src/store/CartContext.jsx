import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
})

function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        const exCart = state.items.findIndex(item => item.id === action.item.id)
        const updatedItems = [...state.items];
        if(exCart > -1) {
            const exItem = state.items[exCart];
            const updatedItem = {
                ...exItem,
                quantity: exItem.quantity + 1,
            }
            updatedItems[exCart] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1})
            console.log("🚀 ~ cartReducer ~ updatedItems:", updatedItems)
        }
        return { ...state, items: updatedItems}
    }
    if(action.type === 'REMOVE_ITEM') {
        const exCart = state.items.findIndex(item => item.id === action.item.id)
        const exCartItem = state.items[exCart];
        const updatedItems = [...state.items];
        if(exCartItem.quantity === 1) {
            updatedItems.splice( exCart, 1) ;
        } else {
            const updatedItem = {
                ...exCartItem,
                quantity: exCartItem.quantity - 1,
            };
            updatedItems[exCart] = updatedItem;
        }
        return { ...state, items: updatedItems}
    }
    return state;
}

export function CartContextProvider({children}) {
   const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

   function addItem(item) {
    dispatchCartAction({type: 'ADD_ITEM', item});
   }
   function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id});
   }
   const cartContext = {
    items: cart.items,
    addItem,
    removeItem
   }
   console.log("🚀 ~ CartContextProvider ~ CartContext:", CartContext)

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;