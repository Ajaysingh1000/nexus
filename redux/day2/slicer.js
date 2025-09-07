
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// {type : "fetchData" , payload : data}

// createAsyncThunk me kya hota hai (isme kai sare actions bante hai)
// createAsyncThunk ko below wala kaam ko handle kar raha hai
// {type: 'fetchData/pending' , payload : undefined}
// {type: 'fetchData/fulfilled' , payload : data}
// {type: 'fetchData/rejected' , payload : error}

// FetchData(20) (isme 20 args hai )
const FetchData = createAsyncThunk(
    // Action : type : payload
    "fetchData",// yaha pe name kuch bhi de sakta ho,
    // thunkApi sara dispatch ka kaam kar raha hai 
    async (args, thunkAPI) => {
        try
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            return data // ye jata hai payload ke andhar 
        }
        catch(error)
        {
            console.log(error)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


const slicer1 = createSlice({
    name : "slicer",
    initialState : {data : [], loading : false, error : null},
    reducers : {},
    // asynchronus actions ki wajah se extraReducers ki jaroorat padi hai 
    extraReducers : (builder)=>{
        builder.addCase(FetchData.pending , (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(FetchData.fulfilled , (state , action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(FetchData.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default slicer1.reducer
export {FetchData}

        