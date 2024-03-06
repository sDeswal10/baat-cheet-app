import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MessagesContainer from '../../Components/MessageContainer/MessagesContainer'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessagesContainer/>
    </div>
  )
}

export default Home