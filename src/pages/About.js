import Header from "../components/Header"
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="App">
            <Header/>
            <hr style = { {margin: '.5em 0', background: 'teal', border: 'none', height: '.05em'} }/>

            <h4>Version 16.12</h4>

            <Footer />
        </div>
    )
}

export default About
