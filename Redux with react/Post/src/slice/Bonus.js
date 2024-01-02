import { createSlice } from "@reduxjs/toolkit";
 const initialState= {
    id: 1,
    bonus: 10
}
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
         increament: (state, action)=>{
                  return state.amount = state.amount + 1;
         },
        
    },
})

export const {increament} = bonusSlice.actions;

export default bonusSlice.reducer