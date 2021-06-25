import React, {useState} from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import TodoComponent from './TodoComponent.js';

const Todo = () => {
  const [up, setUp] = useState(false)
  const [arrowUp, setArrowUp] = useState(true)

  const transformYValue = up ? 'translate-y-[-85vh]' : "" 
  const value = arrowUp ? "" : "rotate-180"

  const handleClick = () => {
    setUp(!up);
    setArrowUp(!arrowUp);
  }

  return (
    <div className={`w-[100vw] h-[90vh] rounded-md -black duration-500 transform bg-[#efe6e6] ${transformYValue}`}>
       <MdKeyboardArrowUp  className={` transform duration-150 ${value}  mx-auto text-4xl cursor-pointer`} onClick={() => handleClick()}/>
       <TodoComponent />
    </div>
  )
}


export default Todo;
