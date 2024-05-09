"use client"

import { useState } from "react"
import Snackbar,{SnackbarOrigin} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/ProductSlice/productSlice";
import ShowProduct from "../compont/ShowProduct";
/* eslint-disable react-hooks/rules-of-hooks */

export default function page() {
    const [title,setTitle]=useState<string>("")
    const [price,setPrice]=useState<number>()
    const [taxes,setTaxes]=useState<number>()
    const [ads,setAds]=useState<number>()
    const [discount,setDescount]=useState<number>()
    const [counter,setCounter]=useState<number>()
    const [category,setCategory]=useState<string>("")
    const [isDone,setIsDone]=useState<boolean>(false)


    const {productArray}=useSelector((state:any)=>state.ReducerProduct)
    let {atherContent}=useSelector((state:any)=>state.reducerAuther)

    const [open, setOpen] = useState(false);

    let dispatch=useDispatch()
    function total(v1:number,v2:number,v3:number,v4:number){
      let total=0
      if(v1){
        total=v1
        if(v2){
          total=v1-v2
          if(v3){
            total=v1-v2-v3
          }
          if(v4){
            total=v1-v2-v3-v4
          }
        }
      }
      return total
    }
    
    let id =1
    function handleCreateData(e:any){
      setIsDone(true)
      e.preventDefault()
      if(title.length >1 && Number(price) >= 10 && Number(taxes) > 0 && Number(ads) > 0 && Number(discount) >= 0 && Number(counter)>=1 && category.length >4){
        const data={
          id:productArray.length +1,
          title:title,
          price:price,
          taxes:taxes,
          ads:ads,
          discount:discount,
          counter:counter,
          category:category,
          total:total(Number(price),Number(taxes),Number(ads),Number(discount))
        }
        dispatch(getData(data))

        
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
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center">
      {atherContent.email ?
      
      <div>
                <h1 className="text-3xl font-semibold text-blue-600 mt-10 mb-5 text-center">Crud System</h1>

        <form action="" onSubmit={handleCreateData}  className="w-[90%] md:w-[80%]  bg-[#eee] mx-auto  py-7 px-2 flex flex-col justify-center items-center gap-y-2 shadow-xl rounded-xl shadow-[rgb(204,204,204)]"  >
            <input  placeholder="Title" type="text"  className="w-[90%] px-2 py-3 rounded-xl border hover:border-blue-600 transition-all duration-300" onChange={(e:any)=>setTitle(e.target.value)}/>
            {title.length <= 1 && isDone?
              <>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the title is less than 5
                    </Alert>
                  </Snackbar>
              </>
              :
            ""}
            <div className="flex justify-between  items-center flex-wrap w-[90%] mx-auto">
                <input placeholder="Price" onChange={(e:any)=>setPrice(e.target.value)} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {Number(price) < 10 && isDone?
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the Price less than 10
                    </Alert>
                  </Snackbar>
                  :
                ""}
                
                <input placeholder="taxes" onChange={(e:any)=>setTaxes(e.target.value)} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {Number(taxes) <= 0 && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the taces less than 1
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
                <input placeholder="ads" onChange={(e:any)=>setAds(e.target.value)} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {Number(ads) <= 0 && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the ads less than 1
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
                <input placeholder="discount" onChange={(e:any)=>setDescount(e.target.value)} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {Number(discount) < 0 && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the discount less than 0
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
                <p className="w-[15%] text-left text-white"><span className="bg-blue-600 py-3 px-2 rounded-xl  border hover:border-blue-600 transition-all duration-300">Total:{ total(Number(price),Number(taxes),Number(ads),Number(discount))}</span></p>
            </div>
            <input placeholder="counter" onChange={(e:any)=>setCounter(e.target.value)} type="number" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {Number(counter) < 1 && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the count less than 1
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
            <input placeholder="category" onChange={(e:any)=>setCategory(e.target.value)} type="text" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-blue-600 transition-all duration-300"  />
                {category.length <= 3 && isDone?
                  <>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      the category less than 5
                    </Alert>
                  </Snackbar>
                  </>
                  :
                ""}
                
            <button type="submit" onClick={()=>{handleClick();}} className="w-[90%] text-white py-2 px-4 bg-blue-600 hover:bg-blue-500 transition-all duration-300 txet-white text-lg rounded-lg">Create</button>
        </form>

      <div>
        <ShowProduct productArray={productArray} id={id} dispatch={dispatch}  />


      </div>
      </div>
      :
      <p className="text-3xl text-blue-600">you should go to register</p>
      }
    </div>
  )
}
