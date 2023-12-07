import { createSlice } from "@reduxjs/toolkit";

const cartSilce = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += (action.payload.card.info.price ? action.payload.card.info.price : action.payload.card.info.defaultPrice) / 100;
        },
        removeItem: (state, action) => {
            const index = state.items.indexOf(action.payload);
            state.items.splice(index, 1);
            state.totalPrice -= (action.payload.card.info.price ? action.payload.card.info.price : action.payload.card.info.defaultPrice) / 100;
        },
        clearCart: (state) => {
            
            state.items.length = 0;
            state.totalPrice = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSilce.actions;

export default cartSilce.reducer;