import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{
    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState({
        token:"",
        user:{}
    })
    const handleAuth = (data)=>{
        setAuth(true);
        setUser(data)
    }
    const handleLogOut = ()=>{
        setAuth(false);
        setUser({})
    }
    return <AuthContext.Provider value={{auth, handleAuth, handleLogOut}}>
        {children}
    </AuthContext.Provider>

}
