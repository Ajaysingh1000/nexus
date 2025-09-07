
// reducer (they are the functions )
// store ke andhar mujhe slicer and reducer ko match karwana hota hai bass 
// iska access sabhi ke pass hota hai 
import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer"

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,
      slice2: slice1Reducer
    }
})

export default stores;

// slice name : reducer 