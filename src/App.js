import './App.css';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Tasks from './components/Tasks';
import arrayTasks from './arrayTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(arrayTasks());
  const [showInput, setShowInput] = useState(true);

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
      <Header 
        btnLabel={!showInput }
        onBtnClick={ () => setShowInput(!showInput) } 
      />
      <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>

      { (showInput) && <AddTaskForm /> }

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
