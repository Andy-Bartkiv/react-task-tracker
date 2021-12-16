import Task from "./Task"
import Loader from "./loader/Loader"

const Tasks = ( { isLoading, tasks, deleteTask, toggleReminder } ) => {
    return (
        (isLoading)
        ? <Loader />
        : <>
            { (tasks.length > 0)
                ? tasks.map((task) => (
                    <Task 
                        key={ task.id } 
                        task={ task } 
                        deleteTask={ deleteTask }
                        toggleReminder = { toggleReminder }
                    />))
                : <p style={{ color: 'orange'}}>No Tasks to Display</p>
            }
        </>
    )
}

export default Tasks