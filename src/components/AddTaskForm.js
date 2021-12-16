
const AddTaskForm = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <input type="text" placeholder="Add Task Description"/>
            </div>
            <div className="form-control">
                <input type="text" placeholder="Add Task Day and Time"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"/>
            </div>
            <div className="form-control">
                <input type="submit" value="Add Task" className="btn btn-block"/>
            </div>
          <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>
        </form>
    )
}

export default AddTaskForm