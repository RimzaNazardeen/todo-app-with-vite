import React from 'react'
import tick from '../assets/check_circle.png'
import untick from '../assets/unchecked_circle.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : untick} alt="tick" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] 
                ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="delete button" className='w-6 cursor-pointer'/>
      
    </div>
  )
}

export default TodoItems
