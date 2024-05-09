"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function page() {
    const {atherContent}=useSelector((state:any)=>state.reducerAuther)
  return (

    <div className='min-h-[80vh] container mx-auto flex justify-center items-center flex-col gap-10'>
        {
            atherContent.email?
                <>
                    <h1 className="text-4xl text-blue-600 font-semibold">Profile</h1>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <Image src={atherContent.uriImage?atherContent.uriImage:"/OIP (2).jpeg"} alt='' height={200} width={200} className='rounded-full'/>
                        <div>
                            <h1 className='text-xl'><span className='text-2xl text-blue-500'>Name: </span>{atherContent.name}</h1>
                            <h1 className='text-xl my-2'><span className='text-2xl text-blue-500'>Email: </span>{atherContent.email}</h1>
                            <h1 className='text-xl'><span className='text-2xl text-blue-500'>password: </span>*************</h1>
                        </div>
                    </div>
                    <Link href={"/editeProfile"} className='text-white text-xl py-2 px-4 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all duration-300'>Edit Profile</Link>
                </>
            :
            <p className='text-3xl text-blue-600'>you should go to register</p>
            
        }
    </div>
  )
}
