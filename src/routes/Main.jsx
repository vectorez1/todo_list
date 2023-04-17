import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import { Index } from '../pages/Index'

export const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Index/>}/>
        </Routes>
    </BrowserRouter>
  )
}
