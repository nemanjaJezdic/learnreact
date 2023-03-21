
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState,useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [addTaskFlag,setAddTaskFlag]=useState(false)
  const [emptyTasks]=useState('There are no tasks')
  const [tasks,setTasks]= useState([])

  useEffect(() => {   
     const getTasks=async () => {
       const newTasks=await fetchTasks()
       setTasks(newTasks)
     }

     getTasks()
  },[]);

  const fetchTasks= async ()=>{
    const res= await fetch("http://localhost:5000/tasks")
    const data=await res.json();

    return data;
  }

  const toggleAddForm=()=>{
     setAddTaskFlag(!addTaskFlag)
  }

  const addTask=(task)=>{   
    task.id=tasks.length+1;
    setTasks([...tasks,task])
  }

  const deleteTask=(id) => {
    setTasks(tasks.filter(element => element.id!==id))
  }

  const toggleReminder=(id) => {
    setTasks(tasks.map((element)=>{
      if(element.id===id){
        element.reminder=!element.reminder
        return element
      }else{
        return element
      }
    }))
  }

  return (
    <div className="container">
        <Header title='Task tracker' onToggleAdd={toggleAddForm} addFlag={addTaskFlag}></Header>
        {
          addTaskFlag ? <AddTask onAdd={addTask}></AddTask>:''
        }
        {
          tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>:emptyTasks
        }       
    </div>
  );
}

export default App;
