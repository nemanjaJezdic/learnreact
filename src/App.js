import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [addTaskFlag, setAddTaskFlag] = useState(false);
  const [emptyTasks] = useState("There are no tasks");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const newTasks = await fetchTasks();
      setTasks(newTasks);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchOneTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const toggleAddForm = () => {
    setAddTaskFlag(!addTaskFlag);
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    // task.id=tasks.length+1;
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((element) => element.id !== id));
  };

  const toggleReminder = async (id) => {
    const task = await fetchOneTask(id);
    task.reminder = !task.reminder;

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    setTasks(
      tasks.map((element) => {
        if (element.id === id) {
          element.reminder = !element.reminder;
          return element;
        } else {
          return element;
        }
      })
    );
  };

  return (
    <div className="container">
      <Header
        title="Task tracker"
        onToggleAdd={toggleAddForm}
        addFlag={addTaskFlag}
      ></Header>
      {addTaskFlag ? <AddTask onAdd={addTask}></AddTask> : ""}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        emptyTasks
      )}
      <Footer />
    </div>
  );
}

export default App;
