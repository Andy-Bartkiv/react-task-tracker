import { Link, useLocation } from "react-router-dom"
    
const Footer = () => {
    const link = (useLocation().pathname === '/')
        ? {text: 'About', to: '/about'}
        : {text: 'Return to Tasks', to: '/'}

    return (
        <footer>
            <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>
            <p>Copyright &copy; 2021</p>               
            <Link to={ link.to }>{ link.text }</Link>
        </footer>
    )
}

export default Footer
