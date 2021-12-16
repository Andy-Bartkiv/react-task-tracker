import { useState } from 'react';
import arrayTasks from '../data/arrayTasks';
import Header from '../components/Header';
import AddTaskForm from '../components/AddTaskForm';
import Tasks from '../components/Tasks';
import Footer from '../components/Footer';

function App() {
  
  const [tasks, setTasks] = useState(arrayTasks());
  const [showInput, setShowInput] = useState(true);

  const addTask = (task) => {
    task.id = Date.now();
    setTasks([...tasks, task])
  }

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

      <AddTaskForm show = { showInput } addTask = { addTask } />

      <Tasks
        tasks = { tasks }
        deleteTask = { deleteTask }
        toggleReminder = { toggleReminder }
      />
      
      <Footer />

    </div>
  );
}

export default App;
