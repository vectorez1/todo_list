import React, { useEffect, useState } from 'react'
import './ToDoList.css'
import { ToDoInput } from './ToDoInput'
import { ToDo } from './ToDo'
import { GetItem } from '../helpers/Functions'
import { EraseButton } from './EraseButton'
import { DefaultInfo } from './DefaultInfo'
export const ToDoList = () => {
    const LIST_NAME = 'todoList';
    let [toDoList,setTodoList] = useState(GetItem(LIST_NAME) ? GetItem(LIST_NAME) : [] );
    //Creates the list on Local Storage
    useEffect(()=>{
      localStorage.setItem(LIST_NAME,JSON.stringify(toDoList));
    },[toDoList])
    
  return (
    <div className='w-[526px] h-[615px] flex flex-col  text-center items-center  rounded-t-[3rem] rounded-b-[1.5rem] border-[5px] border-black overflow-hidden'>
        <header className=' w-[100%] h-[75px bg-remolacha-iceCream border-b-[5px] border-inherit flex justify-center items-center'>
            <h1 className='title-text text-white text-[38px] py-2'>WRITE YOUR GOALS!</h1>
        </header>
        <div className='w-[100%] flex justify-center bg-red-100 pb-3 border-black border-b-[5px]'>
            <ToDoInput setTodoList={setTodoList}/>
        </div>
        <div className={`list-container bg-rose-200 w-[100%] h-[100%] flex flex-col gap-2 items-center pt-2 py-2 ${toDoList && toDoList.length > 4 && 'overflow-y-scroll'}`}>
            {   
                toDoList.length > 0?
                toDoList.map(e=>{
                    return(
                        <ToDo key = {e.id} id = {e.id} task = {e.title} date = {e.date} toDoList={toDoList} setTodoList={setTodoList}/>
                    )
                }):
                <DefaultInfo/>
            }
        </div>
        <EraseButton toDoList={toDoList} setTodoList={setTodoList}/>
    </div>
  )
}
