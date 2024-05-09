"use client"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function Header() {
  let {atherContent}=useSelector((state:any)=>state.reducerAuther)
  console.log(atherContent.uriImage)
  return (
    <div className=' bg-blue-600 p-5'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl text-white hover:scale-125 transition-all duration-300 hover:text-blue-800 cursor-pointer">MS</div>
        <div>
          {atherContent.email?
          <div className="flex items-center gap-7 text-white text-lg ">
            <div className="flex gap-1 items-center">
              <Image className="rounded-full" src={atherContent.uriImage?atherContent.uriImage:"/OIP (2).jpeg"} width={40} height={40} alt="uerImages"/>
              <Link href={"/profile"} className="cursor-pointer">{atherContent.name}</Link>
            </div>
            <Link href={"/home"} className="transition-all duration-300 hover:text-blue-800 cursor-pointer">Home</Link>
            <Link href={"/about"} className="transition-all duration-300 hover:text-blue-800 cursor-pointer">About</Link>
          </div>
          :
          <div className="flex items-center gap-7 text-white text-lg ">
            <Link href={"/login"} className="transition-all duration-300 hover:text-blue-800 cursor-pointer">Login</Link>
            <Link href={"/"} className="transition-all duration-300 hover:text-blue-800 cursor-pointer">Regiter</Link>
          </div>
          }
        </div>
        

      </div>
        
    </div>
  )
}
