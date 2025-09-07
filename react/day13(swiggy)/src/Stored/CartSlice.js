
import { createSlice } from "@reduxjs/toolkit";


// [{id : 101 ,name : "pizza" , quantity : 2} , {id : 102 ,name : "pasta" , quantity : 1}, 
// {id : 103 , name : "burger" , quantity : 1}]
const cartSlice = createSlice({
    name:"cartslice",
    initialState:{
        items : [],
        count : 0
    },
    reducers:{
        addItem : (state , action) => {
            state.items.push({...action.payload , quantity : 1})   
            state.count += 1     
        },
        IncrementItems : (state , action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            element.quantity += 1
            state.count += 1
        },
        DecrementItems : (state , action) => {
            const element = state.items.find((item) => item.id === action.payload.id);
            // element.quantity -= 1
            if(element.quantity > 1){
                element.quantity -= 1
            }else{
                state.items = state.items.filter((item) => item.id !== action.payload.id) 
            }
            state.count -= 1
        }

    }
})

export const {addItem , IncrementItems , DecrementItems} = cartSlice.actions;
export default cartSlice.reducer

