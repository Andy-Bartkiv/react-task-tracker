import '../App.css';
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <div className="App">
            <h4 style={{ color: 'orange' }}>Oops, there's nothing here!</h4>
            <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Error;