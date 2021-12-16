import '../styles/App.css'
import { Routes, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import Error from './pages/Error';


const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element = { <App/> }/>
            <Route path="/about" element = { <About/> }/>
            <Route path="*" element={ <Error/> }/>
        </Routes>
    )
}

export default AppRouter
