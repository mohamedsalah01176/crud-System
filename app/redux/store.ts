"use client"
import { configureStore } from "@reduxjs/toolkit";
import { ReducerProduct } from "./ProductSlice/productSlice";
import { reducerAuther } from "./ProductSlice/athurSlice";


let store=configureStore({
    reducer:{
        ReducerProduct,
        reducerAuther
    }
})

export default store;