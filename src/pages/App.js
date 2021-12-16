import { useState, useEffect } from 'react';
// import arrayTasks from '../data/arrayTasks';
import Header from '../components/Header';
import AddTaskForm from '../components/AddTaskForm';
import Tasks from '../components/Tasks';
import Footer from '../components/Footer';
import Loader from '../components/loader/Loader'
import { useFetch } from '../components/useFetch';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(true);

  const [fetchTasks, isLoading, loadingError] = useFetch( async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  });

  useEffect( () => fetchTasks(), []);

  // useEffect( () => getTasks(), [] );
  // async function getTasks() {
  //   const tasksFromServer = await fetchTasks();
  //   setTasks(tasksFromServer);
  // }
  // async function fetchTasks() {
  //   const res = await fetch('http://localhost:5000/tasks');
  //   return await res.json();
  // };

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
        isLoading = { isLoading }
        tasks = { tasks }
        deleteTask = { deleteTask }
        toggleReminder = { toggleReminder }
      />
      
      <Footer />

    </div>
  );
}

export default App;
