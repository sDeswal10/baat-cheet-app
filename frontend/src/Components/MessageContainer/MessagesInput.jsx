import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../Hooks/useSendMessage'

const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  const handleInputSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-4 my-3 md:end' onSubmit={handleInputSubmit}>
      <div className='w-full relative'>
        <input type='text' placeholder='Send a message...' className='border text-sm rounded-lg bloack w-full p-2.5 bg-gray-700 text-white'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <span className='loading loading-spinner'></span> : <BsSend className='cursor-pointer'/>}
        </button>
      </div>
    </form>
  )
}

export default MessagesInput