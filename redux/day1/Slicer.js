
import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     count : 0,
//     loggedinuser : "true",
//     value : 3  
// }


// how to create slice 
// Immer => ye ek draft create karta hai and reference change karta hai
// Immer duplicate object create karta hai
const reactslicer = createSlice({
    name : "slice1",
    // const initialState = {count:0}
    initialState : {count:0},
    reducers : {
        // Immmer na easy bana diya hai
        // yaha pe ek naya object banta hai jisse reference change ho jaye 
        Increment : (state) => {state.count = state.count + 1},
        Decrement : (state) => {state.count = state.count - 1},
        Reset : (state) => {state.count = 0},
        customIncreaser : (state , action) => {state.count = state.count + action.payload}
        
    }
})

// ye normal functions nahi hai ye ek actions hai 
// aur me aaise kyu export kar raha hu because dispatch store ke pass aata hai 
// and un function ko dekhta hai like Increment but pata nahi konsa slice ka function 
// chalega isliye actions ko export kar raha hai jisse wo kuch properties ko lekar 
// aata hai like =>
    // // actions : {type : "slice/Increment" , payload(ye jo argument pass karte ho bass )}
// jisse mujhe pata chal jata hai particular function ka 
export const {Increment , Decrement , Reset,customIncreaser} = reactslicer.actions 

export {reactslicer}
export default reactslicer.reducer