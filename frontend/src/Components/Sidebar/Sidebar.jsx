import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r p-2 md:p-4 border-slate-500'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default Sidebar