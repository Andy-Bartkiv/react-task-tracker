import { useState } from "react"
import MyButton from './MyButton'
import { TransitionGroup as AnimationContainer } from "react-transition-group";
import { CSSTransition as AnimatedElement} from "react-transition-group";
import './AddTaskForm.css'

const AddTaskForm = ({ show, addTask }) => {

    const [text, setText] = useState('');    
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text || !day) {
            alert('Please fill both inputs before submitting');
            return;
        }
        addTask({text, day, reminder})
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
		<AnimationContainer>
            {
                (show) &&
            <AnimatedElement
                timeout = { 500 }
                classNames = "form"
            >
                <form className="add-form" onSubmit={ onSubmit }>
                    <div className="form-control">
                        <input type="text" placeholder="*Add Task Description" value={ text } onChange={ (e) => setText(e.target.value) } />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="*Add Task Day and Time" value={ day } onChange={ (e) => setDay(e.target.value) } />
                    </div>
                    <div className="form-control form-control-check">
                        <label>Set Reminder</label>
                        <input 
                            type="checkbox" 
                            checked={ reminder } 
                            onChange={ (e) => setReminder(e.currentTarget.checked) }/>
                    </div>
                    <div className="form-control">
                        {/* <input type="submit" value="Add Task" className="btn btn-block"/> */}
                        <MyButton 
                            text = 'Submit Task' 
                            color = 'whitesmoke' 
                            backgroundColor = '#088'
                            width = '100%'
                        />
                    </div>
                <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>
                </form>
            </AnimatedElement>
            }
    	</AnimationContainer>
    )
}

export default AddTaskForm