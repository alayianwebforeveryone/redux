import { createSlice } from "@reduxjs/toolkit";
 const initialState= {
    id: 1,
    amount: 10
}
export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
         increament: (state, action)=>{
                  return state.amount = state.amount + 1;
         },
         decreament: (state, action)=>{
            return state.amount = state.amount -1;
         },
         decreamentByValue: (state, action)=>{
            return state.amount = state.amount + action.payload
         },
    },
})

export const {increament, decreament, decreamentByValue} = amountSlice.actions;

export default amountSlice.reducer