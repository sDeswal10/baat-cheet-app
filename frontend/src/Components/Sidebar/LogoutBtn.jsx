import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../Hooks/useLogout'

const LogoutBtn = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='md:mt-auto mt-2'>
        {!loading ? (
          <BiLogOut className="w-4 h-4 md:w-6 md:h-6 cursor-pointer text-white" onClick={logout}/>
        ) : (
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogoutBtn