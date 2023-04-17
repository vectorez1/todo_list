import React from 'react'

export const DefaultInfo = () => {
    const frases = [
        'Ready to Start doing Something?',
        'Is Never Too Late to Start',
        `Let's Get Busy!`,
        `Don't Wait, Start Now`,
        'Take Action Today',
        'Start Small, Dream Big',
        'The Time is Now',
        'Make a Move',
        'Begin Your Journey',
        'Embrace the Challenge',
    ]
  return (
    <div className='flex flex-col justify-center items-center h-[100%]'>
        <h1 className=' text-[26px] font-extrabold text-rose-300 p-3 border-rose-300 border-[1px] rounded-[10px]'>{frases[Math.floor(Math.random() * frases.length)]}</h1>
        <p className=' font-thin'>Project made by <a href="https://www.linkedin.com/in/victordrg/" target='__blank' className=' underline transition-all hover:text-blue-900 '>Victor del Rosario</a> </p>
    </div>
  )
}
