import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Authcontext } from "../context/Auth"
export const ProtectedRoute=({children})=>{
    const {isAuth} =useContext(Authcontext)

    if(isAuth){
        return <Navigate to='/login' replace='false'></Navigate>
    }
    return children
}