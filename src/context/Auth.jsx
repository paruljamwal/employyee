import {  createContext} from "react";
import { useState } from "react";
export const Authcontext=createContext()
export const AuthcontextProvider=({children})=>{
    const [isAuth,setAuth]=useState(false)
    const handelchange=(e)=>{
        setAuth(e);
    }
   return(
       <Authcontext.Provider value={{isAuth,handelchange}}>{children}</Authcontext.Provider>
   ) 
}