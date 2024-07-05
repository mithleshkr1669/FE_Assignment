import CommandBarComponent from '@/components/CommandBarComponent'
import React from 'react'
import SideBar from '@/components/SideBar'

function Home() {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <div className='flex justify-center items-center mx-auto'>
      <h1 className=''>
       To Do list.
      </h1>
      <h1 className='font-bold'>We will make great appilication</h1>
      </div>
      
      <CommandBarComponent>
      </CommandBarComponent>
      
    </div>
  )
}

export default Home
