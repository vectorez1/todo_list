import React, { useEffect } from 'react'
import { ToDoList } from '../components/ToDoList'

export const Index = () => {
  return (
    <div className='flex h-[100vh] place-content-center justify-center items-center '>
      <ToDoList/>
    </div>
  )
}
