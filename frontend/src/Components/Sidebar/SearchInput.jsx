import React, { useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useGetConversations from '../../Hooks/useGetConversations';
import useConversation from '../../Zustand/useConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState();
  const {conversations} = useGetConversations();
  const {setSelectedConversation} = useConversation();
  const handleSearchInput = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search length must be more than 3 characters")
    }
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("No such user found")
    }
  }
  return (
    <form className='flex items-center justify-center gap-2' onSubmit={handleSearchInput}>
        <input type='text' placeholder='Search...' className='input input-xs sm:input-sm md:input-md input-bordered rounded-full'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-xs sm:btn-sm md:btn-md btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className="h-4 w-4 md:h-6 md:w-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput