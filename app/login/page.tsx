/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState } from "react"
import Snackbar,{SnackbarOrigin} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


export default function page() {


    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [isDone,setIsDone]=useState<boolean>(false)
  
  
    let {atherContent}=useSelector((state:any)=>state.reducerAuther)

    const [open, setOpen] = useState(false);
    let routrer=useRouter()






    function handleCreateData(e:any){
        setIsDone(true)
        e.preventDefault()
        if( email === atherContent.email && password === atherContent.password){
          
            routrer.push("/home")
        }else{
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
    <div className="container mx-auto min-h-[80vh] flex items-center">
      <form action="" onSubmit={handleCreateData}  className="w-[90%] md:w-[80%]  bg-[#eee] mx-auto  py-7 px-2 flex flex-col justify-center items-center gap-y-2 shadow-xl rounded-xl shadow-[rgb(204,204,204)]"  >
        <h1 className="text-3xl text-blue-600 mb-2 font-semibold">Login</h1>
           
            <input placeholder="email" onChange={(e:any)=>setEmail(e.target.value)} type="email" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {email !== atherContent.email && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the email is not found
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
            <input placeholder="password" onChange={(e:any)=>setPassword(e.target.value)} type="password" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {password !== atherContent.password && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the password is not correct
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
                
            <button type="submit" onClick={()=>{handleClick();}} className="w-[90%] text-white py-2 px-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300 txet-white text-lg rounded-lg">Login</button>
        </form>
    </div>
  )
}
