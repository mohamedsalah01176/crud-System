"use client"
import React, { useState } from 'react'
import { deleteProduct, editProduct } from '../redux/ProductSlice/productSlice'
import EditProduct from "../compont/EditProduct";



interface props{
    productArray:object[],
    dispatch:any,
    id:number
}

export default function ShowProduct({productArray,dispatch,id}:props) {
    const [openEditProduct,setOpenEditProduct]=useState<boolean>(false)

    
  return (
    <div className='w-[90%] mx-auto mt-7 text-center'>
        <div className='flex justify-between items-center p-3'>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[4%]'>id</h1>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[17%]'>title</h1>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[10%]'>price</h1>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[5%]'>count</h1>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[20%]'>category</h1>
            <h1 className='text-lg text-blue-600 font-semibold min-w-[25%]'>opption</h1>
        </div>
        {productArray.map((item:any,index)=>{
            return(
                <div key={index} className='bg-[#eee] mb-2 p-3 flex justify-between rounded-lg'>
                    <h1 className='text-lg  font-semibold min-w-[4%]'>{id++}</h1>
                    <h1 className='text-lg  font-semibold min-w-[17%]'>{item.title}</h1>
                    <h1 className='text-lg  font-semibold min-w-[10%]'>{item.counter*item.total}</h1>
                    <h1 className='text-lg  font-semibold min-w-[5%]'>{item.counter}</h1>
                    <h1 className='text-lg  font-semibold min-w-[20%]'>{item.category}</h1>
                    <div className='min-w-[25%]'>
                    <button className='bg-red-500 px-2 py-1 rounded-lg text-white mr-2 text-lg' onClick={()=>dispatch(deleteProduct(item.id))}>delete</button>
                    <button className='bg-sky-500 px-2 py-1 rounded-lg text-white text-lg' onClick={()=>{dispatch(editProduct(item.id));setOpenEditProduct(true)}}>edit</button>

                    </div>
                </div>
            )
        })}

        {openEditProduct &&<EditProduct setOpenEditProduct={setOpenEditProduct}/>}

    </div>
  )
}
