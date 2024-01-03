import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";



const conditionInc = createAction('bonus/decreamentByAmount')
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

   
 
    extraReducers: ()=>{
        builder.addCase(conditionInc, (state, action)=>{
            state.bonus += action.payloaed
        })
    }
})

export const {increament} = bonusSlice.actions;

export default bonusSlice.reducer