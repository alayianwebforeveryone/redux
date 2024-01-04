import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";



const conditionInc = createAction('ammount/decreamentByValue')
 const initialState= {
    id: 1,
    bonus: 11
}
export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
         increament: (state, action)=>{
                   state.bonus += 1;
         },        
    },
    extraReducers: (builder)=>{
        builder.addCase(conditionInc, (state, action)=>{
            if (action.payload > 100) {
                state.bonus += 1
            }
        })
    }
})

export const {increament} = bonusSlice.actions;

export default bonusSlice.reducer