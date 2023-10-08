import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0 , 
        name : ""
    },
    reducers:{
        increment: (state)=>{
            state.count +=1;
        },
        decrement: (state)=>{
            state.count -=1;
        },
        incrementByAmount: (state,action)=>{
            state.count += action.payload;
        },
        changeName :(state,action)=>{
            state.name = action.payload;
        }
    }
})

export const {increment , decrement , incrementByAmount , changeName} = counterSlice.actions

export default counterSlice.reducer