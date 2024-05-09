"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from "react"
import Snackbar,{SnackbarOrigin} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { getAther } from '../redux/ProductSlice/athurSlice';


export default function page() {
    const {atherContent}=useSelector((state:any)=>state.reducerAuther)
    const [name,setname]=useState<string>(atherContent?atherContent.name:"")
    const [email,setEmail]=useState<string>(atherContent?atherContent.email:"")
    const [password,setPassword]=useState<string>(atherContent?atherContent.password:"")
    const [uriImage,setUrlImage]=useState<any>(atherContent?atherContent.uriImage:"")
    const [isDone,setIsDone]=useState<boolean>(false)
  
    let router=useRouter()
    const [open, setOpen] = useState(false);
  
    let dispatch=useDispatch()
    
    function handleImage(e:any){
        setUrlImage(URL.createObjectURL(e))
    }
  
    function handleCreateData(e:any){
        e.preventDefault()
        setIsDone(true)
        if(name.length >1 && email.length >3 && password.length >8){
            const data={
                name:name,
                email:email,
                password:password,
                uriImage:uriImage
            }
            dispatch(getAther(data))
            router.push("/profile")
        }

    }
  





    

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="container min-h-[80vh] mx-auto flex items-center justify-center ">
        {
            atherContent.email?
                <form action="" onSubmit={handleCreateData}  className="w-[90%] md:w-[80%]  bg-[#eee] mx-auto  py-7 px-2 flex flex-col justify-center items-center gap-y-2 shadow-xl rounded-xl shadow-[rgb(204,204,204)]"  >
                    <h1 className="text-3xl text-blue-600 mb-2 font-semibold">Edit Profile</h1>
                        <input  placeholder="Name" value={name} type="text"  className="w-[90%] px-2 py-3 rounded-xl border hover:border-blue-600 transition-all duration-300" onChange={(e:any)=>setname(e.target.value)}/>
                        {name.length <= 1 && isDone?
                        <>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                                <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{ width: '100%' }}
                                >
                                the Name is less than 2
                                </Alert>
                            </Snackbar>
                        </>
                        :
                        ""}
                        <input placeholder="email" value={email} onChange={(e:any)=>setEmail(e.target.value)} type="email" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                            {email.length < 3 && isDone?
                            <>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                                <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{ width: '100%' }}
                                >
                                the email is not valid
                                </Alert>
                            </Snackbar>
                            </>
                            :
                            ""}
                        <input placeholder="password" value={password} onChange={(e:any)=>setPassword(e.target.value)} type="password" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                            {password.length <= 8 && isDone?
                            <>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                                <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{ width: '100%' }}
                                >
                                the password less than 10
                                </Alert>
                            </Snackbar>
                            </>
                            :
                            ""}
                        <input placeholder="your Image" onChange={(e:any)=>{handleImage(e.target.files[0])}} type="file" className="w-[90%] bg-white  px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                            {!uriImage&& isDone?
                            <>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                                <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{ width: '100%' }}
                                >
                                this image not fount
                                </Alert>
                            </Snackbar>
                            </>
                            :
                            ""}
                            
                        <button type="submit" onClick={()=>{handleClick();}} className="w-[90%] text-white py-2 px-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300 txet-white text-lg rounded-lg">Edit</button>
                    </form>
            :
            <p className='text-3xl text-blue-600'>you should go to register</p>
        }
    </div>
  )
}
