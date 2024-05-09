"use client"
import { createSlice } from "@reduxjs/toolkit";



let initialState={productArray:[],loading:false,editData:{}}

let product=createSlice({
    name:"product",
    initialState,
    reducers:{
        getData:(state:any,action)=>{
            state.productArray.push(action.payload)
            state.loading=true
            console.log(state.productArray)
            console.log(action.payload)
        },
        
        deleteProduct:(state,action)=>{
            state.productArray=state.productArray.filter((item:any)=>item.id !== action.payload)
            state.loading=true
        },

        editProduct:(state,action)=>{
            let item:any=state.productArray.filter((item:any)=>item.id === action.payload)

            state.editData=item
            
            
            state.loading=true
            console.log(action.payload)
        },
        editDataSlice:(state,action)=>{
            state.productArray.map((i:any)=>{
                console.log(action.payload)
                if(i.id=== action.payload.id){
                    console.log("done")
                    i.title=action.payload.title
                    i.price=action.payload.price
                    i.taxes=action.payload.taxes
                    i.ads=action.payload.ads
                    i.discount=action.payload.discount
                    i.total=action.payload.total
                    i.counter=action.payload.counter
                }
            })
            state.loading=true
        }


    }
})
export let ReducerProduct=product.reducer
export let {getData,deleteProduct,editProduct,editDataSlice}=product.actions