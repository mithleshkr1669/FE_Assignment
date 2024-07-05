import People from '@/components/People'
import React from 'react'
import SidebarDemo from '../page'
import SideBar from "@/components/SideBar"
import { Command } from '@/components/ui/command'
import CommandBarComponent from '@/components/CommandBarComponent'


function people() {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <People></People>
      <CommandBarComponent></CommandBarComponent>
    </div>
      
  
  )
}

export default people
