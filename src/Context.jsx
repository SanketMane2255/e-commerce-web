import { createContext, useEffect, useState } from "react";

export const Name=createContext();

export const Staorage=({children})=>{
    const [state,setState]=useState([]);
    const [cart,setCart] = useState([]);
    const [search,setSearch] = useState('');
    useEffect(()=>{
        async function getData(){
          try{
            const a= await fetch('https://fakestoreapi.com/products')
            const b= await a.json()
            setState(b)
    
          }catch(error){
            console.log(error)
          }
        }
        getData()
      },[])

    return(
        <Name.Provider value={{state,cart,setCart,search,setSearch}}>
            {children}
        </Name.Provider>
    )
}
