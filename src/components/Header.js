import { useLocation } from "react-router-dom";
import MyButton from "./MyButton";

const Header = ({ btnLabel, onBtnClick }) => {
    
    const location = useLocation().pathname;
    const btn = {
        text: (btnLabel) ? 'Add New Task' : 'Hide Input Form',
        color: (btnLabel) ? '#033' : 'whitesmoke',
        background: (btnLabel) ? 'whitesmoke' : '#088'
    }

    return (
        <header className="header">
            <h2>Task Tracker</h2>
            { (location === '/') && 
            <MyButton 
                text = { btn.text } 
                color = { btn.color } 
                backgroundColor = { btn.background }
                onClick = { onBtnClick }
            /> }
        </header>
    )
}

export default Header;
