import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import arrayTasks from './arrayTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(arrayTasks());
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => 
      task.id !== id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map(task =>
      (task.id === id)
        ? {...task, reminder: !task.reminder}
        : task
    ))
  }
  return (
    <div className="App">
      <Header />
      { tasks.length > 0
        ? <Tasks 
            tasks={ tasks } 
            deleteTask = { deleteTask }
            toggleReminder = { toggleReminder } 
          />
        : 'No Tasks to Display'
      }
      
    </div>
  );
}

export default App;
