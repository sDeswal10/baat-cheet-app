import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext(); 
  const logout = async ()=>{
    try {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Context-Type": "application/json"}
        });
        const data = res.json();
        if(data.error){
            throw new Error(data.error)
        }      
        localStorage.removeItem("chatAuthUser");
        setAuthUser(null);
        toast.success("User logged out successfully")
    } catch (error) {
        toast.error(error.message);        
    }finally{
        setLoading(false);
    }
  }
  return {loading, logout};
}

export default useLogout