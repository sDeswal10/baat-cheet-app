import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../Hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations}=useGetConversations();
  return (
    <div className='py-1 md:py-2 flex flex-row md:flex-col overflow-auto'>
        {loading ? <span className='loadong loading-spinner mx-auto'></span> : null}
        {conversations?.map((conversation, index)=>(
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={index === conversations.length - 1}
          />
        ))}        
    </div>
  )
}

export default Conversations