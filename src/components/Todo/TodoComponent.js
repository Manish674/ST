import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';


const TodoComponent = () => {
  const [task, setTask] = useState({
    task: "",
  });
  const [taskList, setTaskList] = useState([])
  
  const handleClick = () => {
    setTaskList([...taskList, task])
    setTask({'task': ''})
  }

  const [completed, setCompleted] = useState(false);

  return (
    <div>
    <div className="flex justify-around max-w-[300px] mx-auto items-center mb-4">
      <input className="p-3 outline-none rounded-md" placeholder="Enter task" value={task.task} onChange={(e) => setTask({'task': e.target.value})} />
      <AiOutlinePlus  onClick={handleClick} className="text-3xl"/>
    </div>
    <div className="flex flex-col max-w-[400px] mx-auto space-y-2">
    {taskList.map((el, i) => {
      return (
      <div key={i} className={`${completed ? 'line-through' : ""}  shadow-2xl cursor-pointer p-2 bg-[#f7e8e8] rounded-md `} onClick={() => setCompleted(!completed)}> 
        {el.task}
      </div>
      )
    })}
    </div>
    </div>
      
  )
}




export default TodoComponent;
