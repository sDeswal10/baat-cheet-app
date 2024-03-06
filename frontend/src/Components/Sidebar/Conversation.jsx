import React from 'react'
import useConversation from '../../Zustand/useConversation'
import { useSocketContext } from '../../Context/SocketContext';

const Conversation = ({conversation, lastIndex, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation?._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation?._id);
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded-lg p-1 md:py-2 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} 
            onClick={()=>setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className='h-6 w-6 md:h-12 md:w-12 rounded-full'>
                    <img src={conversation?.profilePic} alt='user avatar'/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between items-center'>
                    <p className='text-[12px] md:text-base md:font-bold text-gray-200'>{conversation?.fullName}</p>
                    <span className='text-[12px] md:text-xl'>{emoji}</span>
                </div>
            </div>
        </div>
        {!lastIndex && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation