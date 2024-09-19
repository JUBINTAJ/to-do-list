import React, { useState } from 'react'

function Todolist() {

    const [task,setTask]=useState([])
    const [newtask,setNewtask]=useState("")

    function handlingfunction(event){
        setNewtask(event.target.value)


    }

    function addtask(){
        if(newtask.trim()!==''){
            setTask(prev=>[...prev,newtask])
            setNewtask('')
        }
    }

    function deletetask(index){
     const   updatetask=task.filter((_,i)=>i!==index)
        setTask(updatetask)
    }

  
    function movetaskup(index) {
        if (index > 0) {
            const updatedTasks = [...task];
 [updatedTasks[index], updatedTasks[index - 1]] =[updatedTasks[index - 1], updatedTasks[index]];
    
            setTask(updatedTasks);
        }
    }
    function movetaskdown(index){
        if (index < task.length - 1) {
            const updatedTasks = [...task];
 [updatedTasks[index], updatedTasks[index + 1]] =[updatedTasks[index + 1], updatedTasks[index]];
    
            setTask(updatedTasks);
        }
    }
    
  return (
    <div style={{textAlign : 'center' }}   className="container">
        <h1>To do list</h1>

        <div >

        <input type="text" placeholder='enter a task' value={newtask} onChange={handlingfunction} />
        <button onClick={addtask}>Add</button>
        </div>
        <div>
            <ol className="centered-list" >
                {task.map((task , index)=>
                
                <li  key={task}>
                    <span>{task}</span>
                    <div>

               
                    <button
                    onClick={()=>deletetask(index)}
                     >delete</button>
                       <button
                    onClick={()=>movetaskup(index)}
                     >up</button>
                       <button
                    onClick={()=>movetaskdown(index)}
                     >down</button>
                         </div>
                </li>
                
                )}
            </ol>
        </div>

 



   </div>
  )
}
export default Todolist

