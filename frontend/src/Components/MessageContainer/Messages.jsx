import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages';
import MessageSkeleton from '../Skeleton/MessageSkeleton';
import useListenMessages from '../../Hooks/useListenMessages';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
    }, 50);
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length >0 && messages?.map((message)=>(
          <div key={message?._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
        ))}
        {loading && [...Array(3)].map((_,index)=> <MessageSkeleton key={index}/>)}
        {!loading && messages.length === 0 && <p className=' text-white text-center'>Send a message to start the conversation</p> }
    </div>
  )
}

export default Messages