const MyButton = ({ backgroundColor, color, text, width, onClick }) => {
    return (
        <button 
            style = {{ backgroundColor: backgroundColor, color: color, width: width }}
            className='btn'
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

MyButton.defaultProps = {
    backgroundColor: 'whitesmoke',
    color: 'black',
    text: '???',
    width: 'auto'
}

export default MyButton
