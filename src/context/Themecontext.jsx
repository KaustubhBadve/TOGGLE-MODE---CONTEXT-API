import { createContext, useState } from "react";

export const Thmcontext=createContext()

export const Themprovider=({children})=>{
const [thm, setThm] = useState("light")

const toggle = ()=>{
     if(thm=="light")
     {
         setThm("dark")
     } 
     else{
         setThm("light")
     }
}

    return <Thmcontext.Provider value={{toggle,thm,isLight:thm==="light"}}>{children}</Thmcontext.Provider>
}