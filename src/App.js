import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks,setTasks]= useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
    ]
  )

  const deleteTask=(id) => {
    setTasks(tasks.filter(element => element.id!=id))
  }

  return (
    <div className="container">
        <Header title='Task tracker'></Header>
        {
          tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>:'Ne postoji'
        }
        
    </div>
  );
}

export default App;
