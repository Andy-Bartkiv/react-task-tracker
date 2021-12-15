import { MdDeleteForever } from 'react-icons/md'

const Task = ({ task, deleteTask }) => {
    return (
        <div className='task'>
            <h3>
                { task.text } 
                <MdDeleteForever style={{ color: 'orange'}} onClick={ () => deleteTask(task.id) }/>
            </h3>
            <p>{ task.day }</p>
        </div>
    )
}

export default Task