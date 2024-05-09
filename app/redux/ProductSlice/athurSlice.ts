import { createSlice } from "@reduxjs/toolkit";

let initialState={atherContent:{},isloading:false}

let auther=createSlice({
    name:"auther",
    initialState,
    reducers:{
        getAther:(state,action)=>{
            state.atherContent=action.payload
            state.isloading=true
        }
    }

})


export let reducerAuther=auther.reducer
export let {getAther}=auther.actions