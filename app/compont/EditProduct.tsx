"use client"

import { useState } from "react"
import Snackbar,{SnackbarOrigin} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { editProduct, editDataSlice } from "../redux/ProductSlice/productSlice";
import ShowProduct from "../compont/ShowProduct";
import CloseIcon from '@mui/icons-material/Close';
interface props{
    setOpenEditProduct:any,
}
export default function EditProduct({setOpenEditProduct}:props) {
    const {productArray,editData}=useSelector((state:any)=>state.ReducerProduct)

    const [title,setTitle]=useState<string>(editData[0]?editData[0].title:"")
    const [price,setPrice]=useState<number>(editData[0]?editData[0].price:null)
    const [taxes,setTaxes]=useState<number>(editData[0]?editData[0].taxes:null)
    const [ads,setAds]=useState<number>(editData[0]?editData[0].ads:null)
    const [discount,setDescount]=useState<number>(editData[0]?editData[0].discount:null)
    const [counter,setCounter]=useState<number>(editData[0]?editData[0].counter:null)
    const [category,setCategory]=useState<string>(editData[0]?editData[0].category:"")
    const [isDone,setIsDone]=useState<boolean>(false)



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






    function handleCreateData(e:any){
        setIsDone(true)
        e.preventDefault()
        if(title.length >1 && Number(price) >= 10 && Number(taxes) > 0 && Number(ads) > 0 && Number(discount) >= 0 && Number(counter)>=1 && category.length >4){
          const data={
            id:editData[0].id ,
            title:title,
            price:price,
            taxes:taxes,
            ads:ads,
            discount:discount,
            counter:counter,
            category:category,
            total:total(Number(price),Number(taxes),Number(ads),Number(discount))
          }
          dispatch(editDataSlice(data))
          setOpenEditProduct(false)
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
    <div className="bg-black/50 w-full flex justify-center items-center h-[100vh] fixed top-0 left-0  " >
        <div className='min-w-[300px] min-h-[350px] bg-white flex justify-center items-center mx-auto rounded-lg'>
            <form action="" onSubmit={handleCreateData}  className=" relative mx-auto  py-8 px-2 flex flex-col justify-center items-center gap-y-2 "  >
                <button onClick={()=>setOpenEditProduct(false)} className="absolute top-0 right-5 text-green-600 text-3xl font-semibold hover:text-red-600 transition-all duration-300 transform hover:scale-125 "><CloseIcon/></button>
                <input placeholder="Title" type="text" value={title} className="w-[90%] px-2 py-3 rounded-xl border hover:border-green-600 transition-all duration-300" onChange={(e:any)=>setTitle(e.target.value)}/>
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
                    <input placeholder="Price" onChange={(e:any)=>setPrice(e.target.value)} value={price}  type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
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
                    
                    <input placeholder="taxes" onChange={(e:any)=>setTaxes(e.target.value)} value={taxes} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
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
                    <input placeholder="ads" onChange={(e:any)=>setAds(e.target.value)} value={ads} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
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
                    <input placeholder="discount" onChange={(e:any)=>setDescount(e.target.value)} value={discount} type="number" className="w-[15%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
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
                    <p className="w-[15%] text-left text-white"><span className="bg-green-600 py-3 px-2 rounded-xl  border hover:border-green-600 transition-all duration-300">Total:{ total(Number(price),Number(taxes),Number(ads),Number(discount))}</span></p>
                </div>
                <input placeholder="counter" onChange={(e:any)=>setCounter(e.target.value)} value={counter} type="number" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
                    {Number(discount) < 1 && isDone?
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
                <input placeholder="category" onChange={(e:any)=>setCategory(e.target.value)} value={category} type="text" className="w-[90%] px-2 py-3 rounded-xl  border hover:border-green-600 transition-all duration-300"  />
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
                    
                <button type="submit" onClick={()=>{handleClick();}} className="w-[90%] text-white py-2 px-4 bg-green-600 hover:bg-green-500 transition-all duration-300 txet-white text-lg rounded-lg">Update</button>
            </form>
        </div>
    </div>
  )
}
